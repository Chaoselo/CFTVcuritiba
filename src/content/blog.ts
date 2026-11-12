import { siteConfig } from "../config/siteConfig";

export interface BlogSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  path: string;
  navLabel: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  datePublished: string;
  intro: string;
  excerpt: string;
  sections: BlogSection[];
  related: { label: string; path: string }[];
  cta?: {
    title: string;
    text: string;
    whatsappMessage: string;
  };
}

export interface BlogIndexContent {
  path: string;
  navLabel: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string;
}

function joinList(list: string[]): string {
  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")} e ${list[list.length - 1]}`;
}

const price = siteConfig.offers.rentalFromPrice;
const unit = siteConfig.offers.rentalUnit;
const includes = joinList(siteConfig.offers.rentalIncludes);
const visits = siteConfig.offers.maintenanceContract.visits;
const resp = siteConfig.offers.maintenanceContract.responseTime;

export const blogIndex: BlogIndexContent = {
  path: "/blog/",
  navLabel: "Blog",
  meta: {
    title: "Blog de CFTV e Câmeras de Segurança | CFTV Curitiba",
    description:
      "Confira artigos e orientações sobre instalação de câmeras de segurança, gravadores DVR e NVR, manutenção e custos em Curitiba e Região.",
  },
  h1: "Blog sobre CFTV e Câmeras de Segurança",
  intro:
    "Orientações técnicas e práticas sobre projetos de CFTV, escolha de câmeras, gravadores e soluções de segurança eletrônica em Curitiba e Região.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dvr-ou-nvr-diferenca",
    path: "/blog/dvr-ou-nvr-diferenca/",
    navLabel: "DVR ou NVR: qual a diferença?",
    meta: {
      title: "DVR ou NVR: Qual a Diferença? | CFTV Curitiba",
      description:
        "Entenda as principais diferenças entre gravadores DVR e NVR para CFTV, como cada um opera com câmeras analógicas ou IP e como escolher.",
    },
    h1: "DVR ou NVR: Qual a Diferença Entre os Gravadores?",
    datePublished: "2026-11-09",
    intro:
      "Ao planejar um sistema de segurança eletrônica, a escolha entre DVR e NVR determina o tipo de cabeamento, as câmeras compatíveis e a qualidade das imagens gravadas.",
    excerpt:
      "Entenda o funcionamento de cada gravador, as conexões utilizadas e como decidir entre DVR analógico e NVR digital no seu projeto de CFTV.",
    sections: [
      {
        title: "O que é um gravador DVR",
        paragraphs: [
          "O DVR é o aparelho tradicionalmente utilizado com câmeras analógicas e HD analógicas. O sinal de vídeo é capturado pela câmera e transmitido via cabo coaxial ou par trançado até o gravador, onde é digitalizado e armazenado no disco rígido.",
        ],
        bullets: [
          "Conexão direta por cabos coaxiais ponto a ponto até cada câmera",
          "Processamento e digitalização das imagens concentrados no próprio aparelho",
          "Custo de aquisição dos equipamentos costuma ser mais acessível",
          "Opção comum para modernizar sistemas legados sem trocar toda a fiação",
        ],
      },
      {
        title: "O que é um gravador NVR",
        paragraphs: [
          "O NVR opera exclusivamente em ambiente de rede de dados junto a câmeras IP. A câmera processa e digitaliza o vídeo antes do envio. Pelo cabo de rede, os dados chegam ao gravador já em formato digital, sem perda de sinal na transmissão.",
        ],
        bullets: [
          "Conexão por cabo de rede padrão com suporte a tecnologia de alimentação PoE",
          "Resoluções elevadas e capacidade de processamento distribuído",
          "Facilidade para expandir o número de pontos através de switches de rede",
          "Maior flexibilidade no posicionamento dos equipamentos e gravadores",
        ],
      },
      {
        title: "Principais diferenças técnicas",
        paragraphs: [
          "A distinção central está no ponto em que o vídeo é digitalizado. Enquanto o DVR converte o sinal recebido pelo cabo, o NVR recebe pacotes de dados já codificados pelas câmeras IP. Isso permite que sistemas NVR alcancem resoluções superiores e integrem recursos analíticos.",
        ],
      },
      {
        title: "Como escolher o gravador adequado",
        paragraphs: [
          "A escolha depende do local, da infraestrutura existente e dos objetivos do sistema. Se o imóvel já possui cabeamento coaxial em bom estado, o DVR possibilita atualização gradual. Para novas instalações ou quando se busca maior nitidez de detalhes, o NVR com câmeras IP é a indicação mais comum.",
        ],
      },
    ],
    related: [
      { label: "Câmera IP", path: "/cameras/camera-ip/" },
      { label: "Câmera HD analógica", path: "/cameras/camera-hd-analogica/" },
      { label: "Instalação de CFTV", path: "/servicos/instalacao-de-cftv/" },
    ],
  },
  {
    slug: "quanto-custa-instalar-cameras-de-seguranca",
    path: "/blog/quanto-custa-instalar-cameras-de-seguranca/",
    navLabel: "Quanto custa instalar câmeras de segurança?",
    meta: {
      title: "Quanto Custa Instalar Câmeras? | CFTV Curitiba",
      description:
        "Veja os fatores que compõem o valor de instalação de CFTV, opções de compra e aluguel a partir de R$ 249 por mês por ponto em Curitiba.",
    },
    h1: "Quanto Custa Instalar Câmeras de Segurança?",
    datePublished: "2026-11-09",
    intro:
      "O custo de um sistema de CFTV varia conforme a quantidade de câmeras, o tipo de tecnologia escolhida, a extensão do cabeamento e o modelo de contratação.",
    excerpt:
      "Descubra o que influencia o investimento em CFTV, compare os modelos de compra e locação e conheça os fatores que determinam o orçamento.",
    sections: [
      {
        title: "Fatores que influenciam o valor do projeto",
        paragraphs: [
          "O cálculo para instalar um sistema de monitoramento não depende apenas do número de câmeras. Aspectos estruturais e técnicos compõem o orçamento final de forma decisiva.",
        ],
        bullets: [
          "Quantidade de pontos de monitoramento necessários no imóvel",
          "Tecnologia adotada: câmeras analógicas HD, câmeras IP ou modelos Wi-Fi",
          "Distância e complexidade das rotas de cabeamento e tubulações",
          "Capacidade de armazenamento do gravador para os dias de gravação desejados",
          "Equipamentos auxiliares como nobreaks, conectores e caixas de proteção",
        ],
      },
      {
        title: "Modelo de compra versus modelo de aluguel",
        paragraphs: [
          "Na compra tradicional, o cliente assume o investimento integral dos equipamentos e da mão de obra de instalação, além dos custos de manutenções futuras quando necessárias.",
          `No modelo de locação oferecido pela CFTV Curitiba, o valor parte de ${price} ${unit}. Esse modelo não exige investimento inicial e reúne equipamentos, instalação e manutenção inclusos na mensalidade, facilitando o planejamento financeiro.`,
        ],
        bullets: [
          `Aluguel a partir de ${price} ${unit}`,
          "Sem necessidade de investimento inicial",
          "Manutenções preventivas e corretivas inclusas durante todo o contrato",
          "Substituição de peças com defeito coberta pela assinatura do serviço",
        ],
      },
      {
        title: "Como obter uma estimativa precisa",
        paragraphs: [
          "Para receber um orçamento personalizado e sem custo, o procedimento recomendado é solicitar uma avaliação técnica pelo WhatsApp. Com a planta ou as características do local, a equipe técnica define o dimensionamento exato do sistema.",
        ],
      },
    ],
    related: [
      {
        label: "Aluguel de câmeras de segurança",
        path: "/servicos/aluguel-de-cameras-de-seguranca/",
      },
      {
        label: "Instalação de CFTV",
        path: "/servicos/instalacao-de-cftv/",
      },
      {
        label: "Contrato de manutenção",
        path: "/servicos/contrato-de-manutencao-de-cftv/",
      },
    ],
  },
  {
    slug: "tempo-de-gravacao-cftv",
    path: "/blog/tempo-de-gravacao-cftv/",
    navLabel: "Tempo de gravação de CFTV: como calcular",
    meta: {
      title: "Tempo de Gravação de CFTV | CFTV Curitiba",
      description:
        "Saiba quanto tempo as imagens de CFTV ficam gravadas, como calcular o espaço do disco rígido e quais fatores afetam o armazenamento.",
    },
    h1: "Tempo de Gravação de CFTV: Como Funciona e Fatores",
    datePublished: "2026-11-09",
    intro:
      "O período em que as imagens das câmeras permanecem gravadas depende diretamente da capacidade do disco rígido instalado e das configurações do sistema.",
    excerpt:
      "Entenda como funciona o armazenamento em CFTV, o que altera a duração das gravações no HD e como dimensionar o sistema para suas necessidades.",
    sections: [
      {
        title: "O que determina a duração do armazenamento",
        paragraphs: [
          "Os gravadores de CFTV gravam de forma contínua ou por detecção de movimento. Quando o disco rígido atinge a capacidade máxima, o sistema realiza a sobregravação automática, apagando o registro mais antigo para gravar o novo.",
        ],
        bullets: [
          "Capacidade do disco rígido instalado no DVR ou NVR",
          "Resolução das imagens gravadas no sistema",
          "Taxa de quadros por segundo configurada em cada canal",
          "Codec de compressão de vídeo utilizado pelo gravador",
          "Modo de gravação contínua ou ativada por movimento",
        ],
      },
      {
        title: "Importância do formato de compressão",
        paragraphs: [
          "Formatos de compressão de vídeo mais modernos reduzem a quantidade de dados gerada por cada câmera sem degradar a nitidez visual. Isso permite estender o período de retenção de imagens utilizando o mesmo tamanho de disco rígido.",
        ],
      },
      {
        title: "Diferença entre gravação contínua e por detecção",
        paragraphs: [
          "A gravação contínua salva vídeo em tempo integral, consumindo espaço constante no disco rígido. Já a gravação por detecção de movimento ativa o registro apenas quando há deslocamento na cena, economizando armazenamento em locais com baixo fluxo em determinados horários.",
        ],
      },
      {
        title: "Discos rígidos desenvolvidos para vigilância",
        paragraphs: [
          "Sistemas de monitoramento demandam discos rígidos desenvolvidos para gravação ininterrupta. Unidades convencionais de computador comum não são preparadas para o fluxo contínuo de múltiplos canais de vídeo.",
        ],
      },
    ],
    related: [
      {
        label: "Manutenção de câmeras",
        path: "/servicos/manutencao-de-cftv/",
      },
      {
        label: "Câmera IP",
        path: "/cameras/camera-ip/",
      },
      {
        label: "Instalação de CFTV",
        path: "/servicos/instalacao-de-cftv/",
      },
    ],
  },
  {
    slug: "manutencao-preventiva-cftv-checklist",
    path: "/blog/manutencao-preventiva-cftv-checklist/",
    navLabel: "Manutenção preventiva do CFTV",
    meta: {
      title: "Manutenção Preventiva do CFTV: Checklist | CFTV Curitiba",
      description:
        "Checklist de manutenção preventiva do CFTV: lentes, gravação, disco rígido, cabos, fontes e acesso remoto. Veja o que conferir para evitar falhas.",
    },
    h1: "Manutenção preventiva do CFTV: checklist do que conferir",
    datePublished: "2026-11-09",
    excerpt:
      "Um checklist simples para encontrar falhas no sistema de câmeras antes que as imagens sejam necessárias.",
    intro:
      "Muitas falhas de CFTV só aparecem quando alguém precisa das imagens e elas não existem. A manutenção preventiva serve para encontrar esses problemas antes. Este checklist reúne itens que costumam ser verificados em um sistema de câmeras.",
    sections: [
      {
        title: "Câmeras",
        bullets: [
          "Todas as câmeras estão com imagem e no enquadramento correto?",
          "As lentes e as caixas de proteção estão limpas, sem teias, poeira ou umidade?",
          "A imagem noturna continua nítida?",
          "Há câmeras soltas, desalinhadas ou com a fixação frouxa?",
        ],
      },
      {
        title: "Gravador e armazenamento",
        bullets: [
          "O gravador está ligado, com data e hora corretas?",
          "Todas as câmeras estão sendo gravadas?",
          "É possível reproduzir gravações de dias anteriores?",
          "O disco rígido está sem alertas de erro e com o tempo de gravação esperado?",
        ],
      },
      {
        title: "Cabos, conexões e alimentação",
        bullets: [
          "Cabos e conectores sem danos, oxidação ou emendas expostas",
          "Fontes de alimentação funcionando normalmente",
          "Equipamentos em local ventilado, protegidos de calor e umidade",
        ],
      },
      {
        title: "Acesso remoto e segurança",
        bullets: [
          "O acesso pelo celular está funcionando?",
          "As senhas do gravador e das câmeras foram trocadas das originais e estão restritas a pessoas autorizadas?",
          "O equipamento está com o software atualizado, conforme as orientações do fabricante?",
        ],
      },
      {
        title: "Com que frequência verificar",
        paragraphs: [
          `A frequência depende do tamanho do sistema e do risco do local. Quem prefere acompanhamento regular pode contratar a manutenção: o contrato de manutenção da CFTV Curitiba prevê visitas ${visits} e atendimento ${resp}.`,
        ],
      },
    ],
    related: [
      {
        label: "Manutenção de CFTV",
        path: "/servicos/manutencao-de-cftv/",
      },
      {
        label: "Contrato de manutenção",
        path: "/servicos/contrato-de-manutencao-de-cftv/",
      },
      {
        label: "CFTV para condomínios",
        path: "/segmentos/condominios/",
      },
    ],
    cta: {
      title: "Quer uma revisão no seu CFTV?",
      text: "Descreva seu sistema pelo WhatsApp. O orçamento é sem custo.",
      whatsappMessage:
        "Olá! Vim pelo site CFTV Curitiba e gostaria de uma revisão no meu sistema de CFTV.",
    },
  },
  {
    slug: "aluguel-ou-compra-de-cameras-de-seguranca",
    path: "/blog/aluguel-ou-compra-de-cameras-de-seguranca/",
    navLabel: "Aluguel ou compra de câmeras",
    meta: {
      title: "Aluguel ou Compra de Câmeras de Segurança? | CFTV Curitiba",
      description:
        "Compare alugar ou comprar câmeras de segurança: investimento inicial, manutenção, prazo de uso e tipo de local. Veja o que considerar antes de decidir.",
    },
    h1: "Aluguel ou compra de câmeras de segurança: o que considerar",
    datePublished: "2026-11-09",
    excerpt: "Compare as duas opções e veja quais perguntas ajudam a decidir.",
    intro:
      "Quem precisa de câmeras de segurança pode comprar o sistema ou alugar. Não há resposta única: a escolha depende do tipo de local, do orçamento e do tempo de uso. Veja os pontos que costumam pesar na decisão.",
    sections: [
      {
        title: "Como funciona a compra",
        bullets: [
          "O equipamento é seu",
          "Há investimento inicial para câmeras, gravador, cabeamento e instalação",
          "A manutenção pode ser contratada à parte, quando necessária",
        ],
      },
      {
        title: "Como funciona o aluguel",
        paragraphs: [
          `No aluguel de câmeras da CFTV Curitiba, não há investimento inicial. O valor parte de ${price} ${unit} e inclui ${includes}. O valor final depende da quantidade de pontos e do local, e as condições do contrato são apresentadas no orçamento.`,
        ],
      },
      {
        title: "Quando o aluguel costuma fazer sentido",
        bullets: [
          "Empresas que preferem não investir capital em equipamentos",
          "Condomínios e escritórios que querem um custo mensal previsível",
          "Obras e locais onde a necessidade de monitoramento é temporária",
          "Quem quer instalação e manutenção no mesmo serviço",
        ],
      },
      {
        title: "Quando a compra costuma fazer sentido",
        bullets: [
          "Quem prefere ser dono do equipamento",
          "Quem pretende usar o sistema por muito tempo e tem orçamento para o investimento inicial",
          "Quem já tem parte da estrutura e quer ampliar o sistema",
        ],
      },
      {
        title: "Perguntas para decidir",
        bullets: [
          "Por quanto tempo vou precisar das câmeras?",
          "Tenho orçamento para o investimento inicial?",
          "Quem fará a manutenção, e como será o atendimento em caso de falha?",
          "O local pode mudar, como em uma obra ou em um imóvel alugado?",
        ],
      },
    ],
    related: [
      {
        label: "Aluguel de câmeras",
        path: "/servicos/aluguel-de-cameras-de-seguranca/",
      },
      {
        label: "Instalação de CFTV",
        path: "/servicos/instalacao-de-cftv/",
      },
      {
        label: "CFTV para obras",
        path: "/segmentos/obras/",
      },
    ],
    cta: {
      title: "Quer comparar as duas opções?",
      text: "Informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
      whatsappMessage:
        "Olá! Vim pelo site CFTV Curitiba e gostaria de comparar aluguel e compra de câmeras de segurança.",
    },
  },
  {
    slug: "onde-instalar-cameras-de-seguranca-em-casa",
    path: "/blog/onde-instalar-cameras-de-seguranca-em-casa/",
    navLabel: "Câmeras de segurança em casa",
    meta: {
      title: "Onde Instalar Câmeras de Segurança em Casa | CFTV Curitiba",
      description:
        "Saiba onde instalar câmeras de segurança em casa: entradas, garagem, quintal e perímetro, além de cuidados com iluminação, privacidade e acesso remoto.",
    },
    h1: "Onde instalar câmeras de segurança em casa",
    datePublished: "2026-11-09",
    excerpt:
      "Veja os pontos de uma residência que costumam ser cobertos e os cuidados para a imagem ser útil.",
    intro:
      "Em uma residência, o mais importante é posicionar as câmeras onde elas registram os acessos e as áreas de maior risco, com boa imagem e sem invadir a privacidade de ninguém. Veja os pontos que costumam ser considerados em um projeto.",
    sections: [
      {
        title: "Pontos que costumam ser cobertos",
        bullets: [
          "Portão e entrada principal",
          "Garagem e acesso de veículos",
          "Quintal, fundos e laterais do terreno",
          "Portas e janelas de fácil acesso no térreo",
          "Muros e pontos de fácil acesso",
        ],
      },
      {
        title: "Cuidados com a imagem",
        bullets: [
          "Iluminação adequada nos pontos vigiados, para imagem útil também à noite",
          "Altura e ângulo que mostrem rostos e detalhes, e não apenas o topo da cabeça",
          "Evitar contraluz, como câmeras apontadas diretamente para o sol ou para um poste de luz",
          "Proteção contra chuva, poeira e sol, principalmente em áreas externas",
        ],
      },
      {
        title: "Cuidados com a privacidade",
        bullets: [
          "Priorizar o enquadramento do seu imóvel, evitando captar áreas de vizinhos além do necessário",
          "Não instalar câmeras em ambientes íntimos, como banheiros",
          "Informar moradores, funcionários e visitantes quando houver monitoramento",
          "Restringir o acesso às imagens a pessoas autorizadas",
        ],
      },
      {
        title: "Tipo de câmera para cada ponto",
        bullets: [
          "Câmeras IP ou HD analógicas para áreas externas e perímetro",
          "Câmeras Wi-Fi para ambientes pequenos e pontos de difícil cabeamento",
          "Câmeras PTZ em terrenos e áreas externas amplas",
        ],
      },
      {
        title: "Acesso remoto e gravação",
        paragraphs: [
          "Com o acesso remoto, é possível acompanhar as câmeras pelo celular. O tempo de gravação e a capacidade de armazenamento são definidos no projeto, conforme a quantidade de câmeras e a resolução.",
        ],
      },
    ],
    related: [
      {
        label: "CFTV para residências",
        path: "/segmentos/residencias/",
      },
      {
        label: "Câmera IP",
        path: "/cameras/camera-ip/",
      },
      {
        label: "Instalação de CFTV",
        path: "/servicos/instalacao-de-cftv/",
      },
    ],
    cta: {
      title: "Quer um projeto para a sua casa?",
      text: "Informe o tamanho do imóvel e os pontos que quer vigiar. O orçamento é sem custo.",
      whatsappMessage:
        "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras de segurança para minha casa.",
    },
  },
];

