import { siteConfig } from "../config/siteConfig";
import { homeSteps } from "./home";

export interface ServiceSection {
  title: string;
  intro?: string;
  bullets?: string[];
}

export interface ServiceContent {
  path: string;
  navLabel: string;
  meta: { title: string; description: string };
  schemaService: { name: string; description: string };
  h1: string;
  intro: string;
  sections: ServiceSection[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  callout?: { title: string; text: string; linkLabel: string; linkPath: string };
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  whatsappMessage: string;
  breadcrumbTrail?: { label: string; path?: string }[];
  showCities?: boolean;
}

const price = siteConfig.offers.rentalFromPrice;
const unit = siteConfig.offers.rentalUnit;
const visits = siteConfig.offers.maintenanceContract.visits;
const resp = siteConfig.offers.maintenanceContract.responseTime;

function joinList(list: string[]): string {
  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")} e ${list[list.length - 1]}`;
}

const rentalIncludes = siteConfig.offers.rentalIncludes;
const rentalBullets = siteConfig.offers.rentalIncludes.map(
  (item) => item.charAt(0).toUpperCase() + item.slice(1)
);
if (siteConfig.offers.rentalNoUpfrontCost) {
  rentalBullets.push("Sem investimento inicial");
}

export const servicesContent: Record<string, ServiceContent> = {
  "/servicos/instalacao-de-cftv/": {
    path: "/servicos/instalacao-de-cftv/",
    navLabel: "Instalação de CFTV",
    meta: {
      title: "Instalação de CFTV em Curitiba | CFTV Curitiba",
      description:
        "Instalação de câmeras de segurança em Curitiba e Região: projeto, cabeamento, gravador e acesso remoto. Equipe técnica própria e orçamento sem custo.",
    },
    schemaService: {
      name: "Instalação de CFTV",
      description:
        "Instalação de câmeras de segurança, gravador, cabeamento e acesso remoto em Curitiba e Região Metropolitana.",
    },
    h1: "Instalação de CFTV em Curitiba e Região",
    intro:
      "A instalação de CFTV reúne câmeras, gravador, cabeamento e configuração para que você acompanhe e registre o que acontece no seu imóvel. Aqui, a instalação é feita por equipe técnica própria e o orçamento é sem custo.",
    sections: [
      {
        title: "O que compõe um sistema de CFTV",
        intro:
          "Um sistema completo costuma reunir os itens abaixo. O que entra em cada projeto é definido no orçamento.",
        bullets: [
          "Câmeras do tipo adequado a cada ponto (IP, HD analógica, Wi-Fi, PTZ e outras)",
          "Gravador (DVR ou NVR), que armazena as imagens",
          "Disco rígido dimensionado para o tempo de gravação desejado",
          "Cabeamento e fontes de alimentação",
          "Configuração da gravação e do acesso remoto pelo celular",
        ],
      },
      {
        title: "O que é definido no projeto",
        intro: "Antes de instalar, o projeto responde a perguntas como estas:",
        bullets: [
          "Quais áreas precisam ser monitoradas: entradas, garagem, perímetro ou áreas internas",
          "Quantas câmeras são necessárias e qual o ângulo de cada uma",
          "Como é a iluminação do local, para que a imagem seja útil também à noite",
          "Qual tipo de câmera e qual resolução atendem cada ponto",
          "Por quantos dias as imagens devem ficar armazenadas",
        ],
      },
    ],
    stepsTitle: "Como funciona a instalação",
    steps: homeSteps,
    callout: {
      title: "Prefere não investir na compra?",
      text: `O aluguel de câmeras parte de ${price} ${unit}, sem investimento inicial, com equipamentos, instalação e manutenção incluídos.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: "Quantas câmeras preciso para minha casa ou empresa?",
        a: "Depende das áreas que você quer cobrir e do tamanho do local. Em geral, começa-se pelas entradas, pela garagem e pelo perímetro. Informe o tipo de local pelo WhatsApp e indicamos a quantidade no orçamento sem custo.",
      },
      {
        q: "Posso ver as câmeras pelo celular depois da instalação?",
        a: "Sim, os sistemas atuais permitem o acesso remoto pelo celular. A compatibilidade é definida no projeto, e você pode confirmar os detalhes no orçamento.",
      },
      {
        q: "Qual o tempo de gravação do sistema?",
        a: "O tempo depende da capacidade de armazenamento, da resolução e da quantidade de câmeras. Ele é dimensionado no projeto, conforme a sua necessidade.",
      },
      {
        q: "Vocês instalam CFTV em condomínios e obras?",
        a: "Sim. Atendemos residências, condomínios, escolas, escritórios, obras e edifícios. Cada tipo de local tem necessidades próprias, veja as soluções por tipo de local nesta página.",
      },
    ],
    ctaTitle: "Solicite o orçamento da instalação",
    ctaText:
      "Informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento para instalação de CFTV.",
  },

  "/servicos/manutencao-de-cftv/": {
    path: "/servicos/manutencao-de-cftv/",
    navLabel: "Manutenção de câmeras",
    meta: {
      title: "Manutenção de CFTV em Curitiba | CFTV Curitiba",
      description:
        "Manutenção de CFTV em Curitiba e Região: câmera sem imagem, gravador que não grava e falha de cabeamento. Peça orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Manutenção de CFTV",
      description:
        "Manutenção de câmeras de segurança, gravadores e cabeamento de sistemas de CFTV em Curitiba e Região Metropolitana.",
    },
    h1: "Manutenção de CFTV em Curitiba e Região",
    intro:
      "Câmera sem imagem, gravador que não grava ou acesso remoto que não conecta? A manutenção de CFTV corrige falhas em câmeras, gravador e cabeamento para que o sistema volte a registrar o que importa.",
    sections: [
      {
        title: "Problemas comuns que a manutenção resolve",
        bullets: [
          "Câmera sem imagem, ou com imagem escura, borrada ou com listras",
          "Gravador (DVR ou NVR) que não grava ou que reinicia sozinho",
          "Disco rígido com falha ou sem espaço, fazendo a gravação apagar antes do esperado",
          "Acesso remoto pelo celular que não conecta",
          "Cabos, conectores ou fontes danificados",
          "Câmeras desalinhadas, que deixaram de enquadrar a área correta",
        ],
      },
      {
        title: "Por que fazer a manutenção antes de precisar das imagens",
        intro:
          "Muitas falhas só são percebidas quando as imagens são necessárias e não existem. Um sistema que não está gravando não protege o local. Revisões periódicas ajudam a encontrar problemas antes que isso aconteça.",
      },
      {
        title: "Sistemas já instalados",
        intro:
          "Informe pelo WhatsApp o equipamento que você tem e o problema que está acontecendo. A viabilidade do atendimento é confirmada no orçamento.",
      },
    ],
    stepsTitle: "Como funciona a manutenção",
    steps: [
      {
        title: "Descreva o problema",
        text: "Chame pelo WhatsApp e conte o que está acontecendo com o sistema.",
      },
      {
        title: "Receba o orçamento",
        text: "O orçamento é sem custo.",
      },
      {
        title: "Atendimento técnico",
        text: "Nossa equipe técnica própria realiza o serviço.",
      },
      {
        title: "Suporte",
        text: "Você conta com suporte após o serviço.",
      },
    ],
    callout: {
      title: "Quer evitar surpresas?",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "Minha câmera está sem imagem. O que pode ser?",
        a: "As causas mais comuns são falha de alimentação, cabo ou conector danificado e problema na câmera ou no gravador. Só a verificação no sistema confirma a causa. Descreva o problema pelo WhatsApp.",
      },
      {
        q: "O gravador não está gravando. O que fazer?",
        a: "Pode ser disco rígido com falha ou cheio, configuração de gravação alterada ou defeito no gravador. Solicite atendimento técnico o quanto antes, pois enquanto o sistema não grava o local fica sem registro.",
      },
      {
        q: "Vocês fazem manutenção em sistema instalado por outra empresa?",
        a: "Informe pelo WhatsApp o equipamento e o problema. A viabilidade do atendimento é confirmada no orçamento.",
      },
      {
        q: "Quanto custa a manutenção de CFTV?",
        a: "O valor depende do problema, da quantidade de câmeras e do local. O orçamento é sem custo. Para quem quer manutenção recorrente, existe o contrato de manutenção.",
      },
    ],
    ctaTitle: "Descreva o problema do seu CFTV",
    ctaText: "Conte o que está acontecendo com o sistema. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e preciso de manutenção no meu sistema de CFTV.",
  },

  "/servicos/aluguel-de-cameras-de-seguranca/": {
    path: "/servicos/aluguel-de-cameras-de-seguranca/",
    navLabel: "Aluguel de câmeras",
    meta: {
      title: "Aluguel de Câmeras de Segurança | CFTV Curitiba",
      description: `Aluguel de câmeras de segurança em Curitiba a partir de ${price} ${unit}, sem investimento inicial. Equipamentos, instalação e manutenção incluídos.`,
    },
    schemaService: {
      name: "Aluguel de câmeras de segurança",
      description:
        "Aluguel de câmeras de segurança com equipamentos, instalação e manutenção incluídos em Curitiba e Região Metropolitana.",
    },
    h1: "Aluguel de câmeras de segurança em Curitiba e Região",
    intro: `Alugar câmeras de segurança permite ter CFTV sem comprar os equipamentos. O aluguel parte de ${price} ${unit}, sem investimento inicial, e inclui ${joinList(rentalIncludes)}.`,
    sections: [
      {
        title: "O que está incluído no aluguel",
        intro:
          "No aluguel, você não compra o sistema. O valor final depende da quantidade de pontos e do local.",
        bullets: rentalBullets,
      },
      {
        title: "Aluguel ou compra: como decidir",
        intro:
          "A escolha depende do seu caso. Estes pontos costumam pesar na decisão:",
        bullets: [
          "Aluguel: não exige investimento inicial e reúne equipamentos, instalação e manutenção no mesmo serviço",
          "Compra: o equipamento é seu, com investimento inicial, e a manutenção pode ser contratada à parte",
          "Nos dois casos, o orçamento é sem custo",
        ],
      },
      {
        title: "Quando o aluguel faz sentido",
        intro: "As condições do contrato são apresentadas no orçamento.",
        bullets: [
          "Empresas que preferem não investir capital em equipamentos",
          "Condomínios e escritórios que querem custo mensal previsível",
          "Obras e locais onde a necessidade de monitoramento é temporária",
          "Quem quer instalação e manutenção no mesmo serviço",
        ],
      },
    ],
    stepsTitle: "Como contratar o aluguel",
    steps: [
      {
        title: "Fale com a gente",
        text: "Chame pelo WhatsApp e informe o tipo de local e a quantidade de pontos.",
      },
      {
        title: "Receba o orçamento",
        text: "O orçamento é sem custo e informa o valor conforme a quantidade de pontos e o local.",
      },
      {
        title: "Instalação",
        text: "Nossa equipe técnica própria instala os equipamentos.",
      },
      {
        title: "Manutenção e suporte",
        text: "A manutenção está incluída no aluguel, e você conta com suporte após a instalação.",
      },
    ],
    callout: {
      title: "Quer manter um sistema que já é seu?",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "Quanto custa alugar câmeras de segurança?",
        a: `O aluguel parte de ${price} ${unit}, sem investimento inicial. O valor final depende da quantidade de pontos e do local. Solicite um orçamento sem custo pelo WhatsApp.`,
      },
      {
        q: 'O que significa "por ponto"?',
        a: "O valor é calculado por ponto de monitoramento. Confirme no orçamento o que está contabilizado em cada ponto no seu projeto.",
      },
      {
        q: "A manutenção está incluída no aluguel?",
        a: `Sim. O aluguel inclui ${joinList(rentalIncludes)}.`,
      },
      {
        q: "Existe prazo mínimo de contrato?",
        a: "As condições do contrato são apresentadas no orçamento. Solicite o seu pelo WhatsApp.",
      },
    ],
    ctaTitle: "Peça o orçamento do aluguel",
    ctaText:
      "Informe o tipo de local e a quantidade de pontos. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento para aluguel de câmeras de segurança.",
  },

  "/servicos/contrato-de-manutencao-de-cftv/": {
    path: "/servicos/contrato-de-manutencao-de-cftv/",
    navLabel: "Contrato de manutenção",
    meta: {
      title: "Contrato de Manutenção de CFTV | CFTV Curitiba",
      description: `Contrato de manutenção de CFTV em Curitiba e Região, com visitas ${visits} e atendimento ${resp} para manter suas câmeras funcionando.`,
    },
    schemaService: {
      name: "Contrato de manutenção de CFTV",
      description:
        "Contrato de manutenção de sistemas de CFTV com visitas periódicas e atendimento em Curitiba e Região Metropolitana.",
    },
    h1: "Contrato de manutenção de CFTV em Curitiba e Região",
    intro: `O contrato de manutenção de CFTV prevê visitas ${visits} e atendimento ${resp}, para manter câmeras, gravador e cabeamento funcionando. É uma forma de evitar descobrir uma falha só quando as imagens são necessárias.`,
    sections: [
      {
        title: "O que prevê o contrato",
        intro: "O detalhamento do escopo é apresentado no orçamento.",
        bullets: [
          `Visitas ${visits}`,
          `Atendimento ${resp}`,
          "Câmeras, gravador e cabeamento",
        ],
      },
      {
        title: "O que costuma ser verificado em uma visita preventiva",
        intro:
          "Em visitas preventivas de CFTV, costuma-se verificar itens como os abaixo. O escopo exato de cada contrato é definido no orçamento.",
        bullets: [
          "Funcionamento e enquadramento de cada câmera",
          "Estado das lentes e das caixas de proteção",
          "Gravação e reprodução das imagens no gravador",
          "Estado do disco rígido e espaço disponível",
          "Conexões, cabos e fontes de alimentação",
          "Acesso remoto pelo celular",
        ],
      },
      {
        title: "Para quem o contrato é indicado",
        bullets: [
          "Condomínios e edifícios, onde o sistema não pode ficar parado",
          "Empresas e escritórios que dependem das imagens para a segurança",
          "Escolas e faculdades, com muitas câmeras em áreas de circulação",
          "Residências com sistema próprio que querem acompanhamento regular",
        ],
      },
    ],
    stepsTitle: "Como contratar",
    steps: [
      {
        title: "Fale com a gente",
        text: "Chame pelo WhatsApp e informe o tipo de local e a quantidade de câmeras do sistema.",
      },
      {
        title: "Receba a proposta",
        text: "O orçamento é sem custo e apresenta o escopo do contrato.",
      },
      {
        title: "Visitas programadas",
        text: `A equipe técnica própria realiza visitas ${visits}.`,
      },
      {
        title: "Atendimento quando precisar",
        text: `Em caso de falha, o prazo de atendimento é de ${resp}.`,
      },
    ],
    callout: {
      title: "Ainda não tem CFTV?",
      text: `Além da instalação, o aluguel de câmeras inclui manutenção e parte de ${price} ${unit}.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: "Como funciona o contrato de manutenção de CFTV?",
        a: `O contrato prevê visitas ${visits} e atendimento ${resp}, para manter câmeras, gravador e cabeamento funcionando.`,
      },
      {
        q: "Qual a diferença entre manutenção avulsa e contrato?",
        a: "A manutenção avulsa resolve um problema específico, quando ele acontece. O contrato prevê visitas regulares e atendimento em prazo definido, para encontrar falhas antes que causem perda de imagens.",
      },
      {
        q: "O contrato vale para sistema instalado por outra empresa?",
        a: "Informe pelo WhatsApp o equipamento que você possui. A viabilidade é confirmada no orçamento.",
      },
      {
        q: "Quanto custa o contrato de manutenção?",
        a: "O valor depende da quantidade de câmeras e do tipo de local. O orçamento é sem custo e apresenta o escopo do contrato.",
      },
    ],
    ctaTitle: "Peça o orçamento do contrato",
    ctaText: "Informe o tipo de local e a quantidade de câmeras. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento para contrato de manutenção de CFTV.",
  },
};
