import { siteConfig, hasValue } from "../config/siteConfig";
import { homeFaq } from "./home";
import { servicesContent } from "./services";

export interface InfoSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { label: string; href: string; external?: boolean }[];
}

export interface InfoContent {
  path: string;
  navLabel: string;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  sections: InfoSection[];
  faqGroups?: { title: string; items: { q: string; a: string }[] }[];
  cta?: { title: string; text: string; whatsappMessage: string };
}

const price = siteConfig.offers.rentalFromPrice;
const unit = siteConfig.offers.rentalUnit;

function joinList(list: string[]): string {
  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")} e ${list[list.length - 1]}`;
}

const includes = joinList(siteConfig.offers.rentalIncludes);
const cityNames = joinList(siteConfig.cities.map((c) => c.name));

function fromHome(q: string) {
  const item = homeFaq.find((x) => x.q === q);
  if (!item) {
    throw new Error(`Pergunta não encontrada em homeFaq: "${q}"`);
  }
  return item;
}

function fromMaint(q: string) {
  const item = servicesContent["/servicos/manutencao-de-cftv/"]?.faq.find(
    (x) => x.q === q
  );
  if (!item) {
    throw new Error(`Pergunta não encontrada em manutencao faq: "${q}"`);
  }
  return item;
}

export const infoContent: Record<string, InfoContent> = {
  "/sobre/": {
    path: "/sobre/",
    navLabel: "Sobre",
    meta: {
      title: "Sobre a CFTV Curitiba | Unidade Intelsecsul",
      description:
        "Conheça a CFTV Curitiba, unidade especializada em câmeras de segurança da Intelsecsul, com equipe técnica própria e atendimento em Curitiba e Região.",
    },
    h1: "Sobre a CFTV Curitiba",
    intro:
      "A CFTV Curitiba é a unidade especializada em câmeras de segurança da Intelsecsul Segurança Eletrônica. Atendemos Curitiba e a Região Metropolitana com instalação, manutenção, aluguel e contrato de manutenção de CFTV.",
    sections: [
      {
        title: "O que fazemos",
        bullets: [
          "Instalação de CFTV",
          "Manutenção de câmeras, gravadores e cabeamento",
          `Aluguel de câmeras de segurança, a partir de ${price} ${unit}`,
          `Contrato de manutenção de CFTV, com visitas ${siteConfig.offers.maintenanceContract.visits} e atendimento ${siteConfig.offers.maintenanceContract.responseTime}`,
        ],
      },
      {
        title: "Nossos diferenciais",
        bullets: siteConfig.differentials,
      },
      {
        title: "Para quem atendemos",
        paragraphs: [
          "Atendemos residências, condomínios, escolas e faculdades, escritórios, obras, edifícios, comércios, indústrias, clínicas e estacionamentos.",
        ],
      },
      {
        title: "Onde atendemos",
        paragraphs: [
          `Atendemos Curitiba e a Região Metropolitana, incluindo ${cityNames}.`,
        ],
        links: [{ label: "Ver cidades atendidas", href: "/cidades/" }],
      },
      {
        title: "Parte da Intelsecsul",
        paragraphs: [
          "A CFTV Curitiba faz parte da Intelsecsul Segurança Eletrônica. Se você precisa também de alarme, cerca elétrica ou controle de acesso, conheça a Intelsecsul.",
        ],
        links: [
          {
            label: "Conheça a Intelsecsul",
            href: siteConfig.parentSite,
            external: true,
          },
        ],
      },
    ],
    cta: {
      title: "Fale com a CFTV Curitiba",
      text: "Atendimento pelo WhatsApp, orçamento sem custo.",
      whatsappMessage:
        "Olá! Vim pelo site CFTV Curitiba e gostaria de falar com a equipe.",
    },
  },

  "/contato/": {
    path: "/contato/",
    navLabel: "Contato",
    meta: {
      title: "Contato e Orçamento de CFTV | CFTV Curitiba",
      description: `Fale com a CFTV Curitiba pelo WhatsApp ${siteConfig.phoneDisplay} e peça orçamento sem custo de câmeras de segurança em Curitiba e Região Metropolitana.`,
    },
    h1: "Contato",
    intro:
      "Fale com a CFTV Curitiba pelo WhatsApp ou por telefone e peça seu orçamento sem custo de câmeras de segurança.",
    sections: [
      {
        title: "Canais de atendimento",
        bullets: [
          `WhatsApp e telefone: ${siteConfig.phoneDisplay}`,
          `Horário de atendimento: ${siteConfig.openingHours}`,
          ...(hasValue(siteConfig.email)
            ? [`E-mail: ${siteConfig.email}`]
            : []),
          ...(hasValue(siteConfig.address)
            ? [`Endereço: ${siteConfig.address}`]
            : []),
        ],
      },
      {
        title: "O que informar para agilizar o orçamento",
        bullets: [
          "Tipo de local: residência, condomínio, escola, escritório, obra, comércio, indústria ou outro",
          "Cidade e bairro",
          "Quantidade aproximada de câmeras e de áreas a vigiar",
          "Se já existe um sistema de CFTV instalado e qual o problema, no caso de manutenção",
        ],
      },
      {
        title: "Cidades atendidas",
        paragraphs: [
          `Atendemos Curitiba e a Região Metropolitana, incluindo ${cityNames}.`,
        ],
      },
    ],
    cta: {
      title: "Peça seu orçamento pelo WhatsApp",
      text: "Atendimento pelo WhatsApp, orçamento sem custo.",
      whatsappMessage:
        "Olá! Vim pelo site CFTV Curitiba e gostaria de solicitar um orçamento.",
    },
  },

  "/perguntas-frequentes/": {
    path: "/perguntas-frequentes/",
    navLabel: "Perguntas frequentes",
    meta: {
      title: "Perguntas Frequentes sobre CFTV | CFTV Curitiba",
      description:
        "Respostas sobre instalação, manutenção, aluguel e contrato de manutenção de CFTV, tipos de câmera, gravação, acesso remoto e orçamento em Curitiba.",
    },
    h1: "Perguntas frequentes sobre CFTV",
    intro:
      "Reunimos as dúvidas mais comuns sobre câmeras de segurança, aluguel, manutenção e orçamento. Se a sua pergunta não estiver aqui, chame a equipe pelo WhatsApp.",
    sections: [],
    faqGroups: [
      {
        title: "Orçamento e atendimento",
        items: [
          fromHome("Como solicitar um orçamento?"),
          {
            q: "O orçamento tem custo?",
            a: "Não. O orçamento é sem custo e pode ser solicitado pelo WhatsApp.",
          },
          fromHome("Quais cidades vocês atendem?"),
          {
            q: "Qual o horário de atendimento?",
            a: `Nosso horário de atendimento é: ${siteConfig.openingHours}. O WhatsApp é ${siteConfig.phoneDisplay}.`,
          },
        ],
      },
      {
        title: "Aluguel e contrato de manutenção",
        items: [
          fromHome("Quanto custa alugar câmeras de segurança?"),
          {
            q: "O que está incluído no aluguel?",
            a: `O aluguel inclui ${includes}, sem investimento inicial. As condições do contrato são apresentadas no orçamento.`,
          },
          fromHome("Como funciona o contrato de manutenção de CFTV?"),
        ],
      },
      {
        title: "Instalação e tipos de câmera",
        items: [
          fromHome("O que é CFTV?"),
          fromHome("Qual a diferença entre câmera IP e câmera HD analógica?"),
          {
            q: "Qual a diferença entre DVR e NVR?",
            a: "O DVR é o gravador usado com câmeras HD analógicas, ligadas por cabo coaxial. O NVR é o gravador usado com câmeras IP, ligadas pela rede. O tipo de gravador acompanha o tipo de câmera do sistema.",
          },
          fromHome("Posso acompanhar as câmeras pelo celular?"),
        ],
      },
      {
        title: "Manutenção",
        items: [
          fromMaint("Minha câmera está sem imagem. O que pode ser?"),
          fromMaint("O gravador não está gravando. O que fazer?"),
        ],
      },
      {
        title: "Privacidade",
        items: [
          {
            q: "O uso de câmeras precisa seguir a LGPD?",
            a: "Imagens de pessoas podem ser dados pessoais, e o uso do sistema deve observar a Lei Geral de Proteção de Dados (LGPD), com finalidade definida e acesso restrito às imagens. Em caso de dúvida, é recomendável consultar um profissional jurídico.",
          },
        ],
      },
    ],
    cta: {
      title: "Não encontrou sua resposta?",
      text: "Chame a equipe pelo WhatsApp. O orçamento é sem custo.",
      whatsappMessage:
        "Olá! Vim pelo site CFTV Curitiba e tenho uma dúvida sobre CFTV.",
    },
  },

  "/politica-de-privacidade/": {
    path: "/politica-de-privacidade/",
    navLabel: "Política de privacidade",
    meta: {
      title: "Política de Privacidade | CFTV Curitiba",
      description:
        "Saiba como o site da CFTV Curitiba trata dados pessoais, o que acontece ao usar o botão de WhatsApp e como exercer seus direitos pela LGPD.",
    },
    h1: "Política de privacidade",
    intro:
      "Esta política explica como o site da CFTV Curitiba trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).",
    sections: [
      {
        title: "Quem é o responsável",
        paragraphs: [
          `Este site é operado pela CFTV Curitiba, unidade da ${siteConfig.legalName}.`,
          `Para assuntos de privacidade, fale conosco pelo WhatsApp ${siteConfig.phoneDisplay}.`,
          ...(hasValue(siteConfig.cnpj)
            ? [`CNPJ: ${siteConfig.cnpj}`]
            : []),
          ...(hasValue(siteConfig.email)
            ? [`E-mail: ${siteConfig.email}`]
            : []),
        ],
      },
      {
        title: "Quais dados tratamos",
        bullets: [
          "Dados que você informa voluntariamente ao nos chamar pelo WhatsApp, como nome, telefone, endereço aproximado e informações sobre o local, usados para elaborar o orçamento",
          "Dados técnicos de acesso ao site, como endereço IP, tipo de navegador e páginas acessadas, que podem ser registrados pelo provedor de hospedagem para o funcionamento e a segurança do site",
          "Dados de navegação coletados por ferramentas de análise de audiência, como páginas visitadas e tempo de permanência, somente depois do seu consentimento",
        ],
        paragraphs: [
          "Este site não possui formulários de cadastro nem área de login.",
        ],
      },
      {
        title: "Para que usamos os dados",
        bullets: [
          "Responder solicitações de orçamento e dúvidas",
          "Prestar os serviços contratados",
          "Manter a segurança e o funcionamento do site",
        ],
      },
      {
        title: "Bases legais",
        paragraphs: [
          "O tratamento ocorre com base na execução de procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, inciso V, da LGPD), no legítimo interesse para a segurança do site (art. 7º, inciso IX, da LGPD) e, no caso dos cookies de análise de audiência, no seu consentimento (art. 7º, inciso I, da LGPD).",
        ],
      },
      {
        title: "Botão de WhatsApp e serviços de terceiros",
        paragraphs: [
          "Ao clicar nos botões de WhatsApp, você é direcionado ao WhatsApp, serviço de terceiros que trata dados conforme as suas próprias políticas. As informações que você enviar pela conversa são usadas por nossa equipe para o atendimento e o orçamento.",
        ],
      },
      {
        title: "Cookies e análise de audiência",
        paragraphs: [
          "Este site utiliza o Google Tag Manager para gerenciar ferramentas de medição de audiência e de desempenho, como o Google Analytics. Essas ferramentas só são carregadas depois que você aceita os cookies no aviso exibido no site.",
          "Se você recusar, o Google Tag Manager não é carregado e nenhum cookie de análise é definido por ele. As ferramentas ativadas após o aceite podem registrar identificadores do navegador e dados de navegação, tratados pelo Google conforme a política de privacidade da própria empresa.",
          "A sua escolha fica salva no seu navegador e pode ser alterada a qualquer momento em Preferências de cookies, no rodapé do site.",
        ],
      },
      {
        title: "Seus direitos",
        paragraphs: ["Nos termos da LGPD, você pode solicitar:"],
        bullets: [
          "Confirmação de que tratamos seus dados",
          "Acesso aos dados",
          "Correção de dados incompletos, inexatos ou desatualizados",
          "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade",
          "Portabilidade dos dados",
          "Informação sobre com quem os dados são compartilhados",
          "Revogação do consentimento, quando o tratamento se basear nele",
        ],
      },
      {
        title: "Como exercer seus direitos",
        paragraphs: [
          `Para exercer seus direitos, fale conosco pelo WhatsApp ${siteConfig.phoneDisplay}.`,
        ],
      },
      {
        title: "Por quanto tempo guardamos os dados",
        paragraphs: [
          "Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta política ou obrigações legais.",
        ],
      },
      {
        title: "Atualizações desta política",
        paragraphs: [
          "Esta política pode ser atualizada a qualquer momento. A versão vigente é a publicada nesta página.",
        ],
      },
    ],
  },
};
