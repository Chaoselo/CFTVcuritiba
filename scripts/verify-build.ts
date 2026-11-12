import fs from "node:fs";
import path from "node:path";

function decodeHtml(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function getAllHtmlFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith(".html")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function verifyBuild() {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, "dist");
  const publicDir = path.resolve(rootDir, "public");

  if (!fs.existsSync(distDir)) {
    console.error("Diretório dist/ não encontrado.");
    process.exit(1);
  }

  const htmlFiles = getAllHtmlFiles(distDir);
  let verifiedCount = 0;
  let hasErrors = false;

  console.log("Iniciando verificação de qualidade dos arquivos HTML gerados...");

  for (const filePath of htmlFiles) {
    const relativePath = path.relative(distDir, filePath);

    // Skip 404.html from standard indexing checks
    if (relativePath === "404.html") {
      continue;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const fileErrors: string[] = [];

    // 1. Check title
    const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (!titleMatch) {
      fileErrors.push("Tag <title> ausente.");
    } else {
      const title = decodeHtml(titleMatch[1].trim());
      if (title.length === 0) {
        fileErrors.push("Tag <title> está vazia.");
      } else if (title.length > 60) {
        fileErrors.push(`Tag <title> possui ${title.length} caracteres (máximo permitido: 60). Conteúdo: "${title}"`);
      }
    }

    // 2. Check meta description
    const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);

    if (!descMatch) {
      fileErrors.push('Tag <meta name="description"> ausente.');
    } else {
      const description = decodeHtml(descMatch[1].trim());
      if (description.length < 120 || description.length > 160) {
        fileErrors.push(
          `Meta description possui ${description.length} caracteres (esperado entre 120 e 160). Conteúdo: "${description}"`
        );
      }
    }

    // 3. Check canonical link
    const canonicalMatch =
      content.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i) ||
      content.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);

    if (!canonicalMatch || !canonicalMatch[1].trim()) {
      fileErrors.push('Tag <link rel="canonical"> ausente ou sem href.');
    }

    // 4. Check exactly one <h1>
    const h1Matches = content.match(/<h1\b[^>]*>/gi);
    const h1Count = h1Matches ? h1Matches.length : 0;
    if (h1Count !== 1) {
      fileErrors.push(`Esperava-se exatamente 1 <h1>, mas foram encontrados ${h1Count}.`);
    }

    // 5. Check [[PREENCHER]] visible text
    if (content.includes("[[PREENCHER]]")) {
      fileErrors.push('Texto "[[PREENCHER]]" encontrado visível no HTML gerado.');
    }

    // 6. Check og:image existence in public/ (warning only)
    const ogImageMatch =
      content.match(/<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
      content.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*>/i);

    if (ogImageMatch) {
      try {
        const ogUrl = new URL(ogImageMatch[1]);
        const imgFileName = path.basename(ogUrl.pathname);
        const localImgPath = path.join(publicDir, imgFileName);
        if (!fs.existsSync(localImgPath)) {
          console.warn(`[AVISO] og:image "${imgFileName}" referenciada em ${relativePath} não existe em public/.`);
        }
      } catch {
        const localImgPath = path.join(publicDir, path.basename(ogImageMatch[1]));
        if (!fs.existsSync(localImgPath)) {
          console.warn(`[AVISO] og:image "${ogImageMatch[1]}" referenciada em ${relativePath} não existe em public/.`);
        }
      }
    }

    if (fileErrors.length > 0) {
      hasErrors = true;
      console.error(`\n[FALHA] Erros em ${relativePath}:`);
      fileErrors.forEach((err) => console.error(`  - ${err}`));
    } else {
      verifiedCount++;
    }
  }

  if (hasErrors) {
    console.error("\nVerificação de build falhou devido a erros acima.");
    process.exit(1);
  }

  console.log(`\n${verifiedCount} páginas verificadas com sucesso!`);
}

verifyBuild();
