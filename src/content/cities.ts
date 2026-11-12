import { siteConfig } from "../config/siteConfig";
import { homeSteps } from "./home";
import type { ServiceContent, ServiceSection } from "./services";

const price = siteConfig.offers.rentalFromPrice;
const unit = siteConfig.offers.rentalUnit;
const visits = siteConfig.offers.maintenanceContract.visits;
const resp = siteConfig.offers.maintenanceContract.responseTime;

function formatCityNames(): string {
  const names = siteConfig.cities.map((c) => c.name);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")} e ${names[names.length - 1]}`;
}

function buildCity(i: {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localSections: ServiceSection[];
  uniqueFaq: { q: string; a: string };
}): ServiceContent {
  const { slug, name, title, description, intro, localSections, uniqueFaq } = i;

  return {
    path: `/cidades/${slug}/`,
    navLabel: name,
    meta: { title, description },
    schemaService: {
      name: `CFTV em ${name}`,
      description: `Instalação, manutenção, aluguel e contrato de manutenção de câmeras de segurança em ${name} e região.`,
    },
    h1: `CFTV em ${name}: instalação, manutenção e aluguel de câmeras`,
    intro,
    sections: [
      {
        title: `Serviços de CFTV em ${name}`,
        intro: `Atendemos ${name} com equipe técnica própria e orçamento sem custo.`,
        bullets: [
          "Instalação de CFTV",
          "Manutenção de câmeras, gravadores e cabeamento",
          `Aluguel de câmeras de segurança, a partir de ${price} ${unit}`,
          `Contrato de manutenção de CFTV, com visitas ${visits} e atendimento ${resp}`,
        ],
      },
      ...localSections,
    ],
    stepsTitle: `Como solicitar CFTV em ${name}`,
    steps: homeSteps,
    callout: {
      title: "Sem investimento inicial?",
      text: `O aluguel de câmeras parte de ${price} ${unit}, com equipamentos, instalação e manutenção incluídos.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: `Vocês atendem ${name}?`,
        a: `Sim. Atendemos Curitiba e a Região Metropolitana, e ${name} está entre as cidades atendidas.`,
      },
      uniqueFaq,
      {
        q: `Quanto custa alugar câmeras em ${name}?`,
        a: `O aluguel parte de ${price} ${unit}, sem investimento inicial, com equipamentos, instalação e manutenção incluídos. O valor final depende da quantidade de pontos e do local.`,
      },
      {
        q: `Como solicitar orçamento de CFTV em ${name}?`,
        a: "Chame pelo WhatsApp e informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
      },
    ],
    ctaTitle: `Peça o orçamento de CFTV em ${name}`,
    ctaText:
      "Informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
    whatsappMessage: `Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV em ${name}.`,
    breadcrumbTrail: [
      { label: "Cidades atendidas", path: "/cidades/" },
      { label: name },
    ],
    showCities: true,
  };
}

export const citiesContent: Record<string, ServiceContent> = {
  "/cidades/": {
    path: "/cidades/",
    navLabel: "Cidades atendidas",
    meta: {
      title: "CFTV em Curitiba e Região Metropolitana | CFTV Curitiba",
      description: `CFTV em Curitiba e Região Metropolitana: atendemos ${siteConfig.cities.length} cidades com instalação, manutenção, aluguel e contrato de manutenção de câmeras. Peça orçamento.`,
    },
    schemaService: {
      name: "CFTV em Curitiba e Região Metropolitana",
      description:
        "Instalação, manutenção, aluguel e contrato de manutenção de câmeras de segurança em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV em Curitiba e Região Metropolitana",
    intro: `Atendemos ${siteConfig.cities.length} cidades de Curitiba e da Região Metropolitana com instalação, manutenção, aluguel e contrato de manutenção de câmeras de segurança. Veja abaixo o que fazemos e acesse a página da sua cidade.`,
    sections: [
      {
        title: "O que fazemos em toda a região",
        bullets: [
          "Instalação de CFTV para residências, empresas, condomínios e obras",
          "Manutenção de câmeras, gravadores e cabeamento",
          `Aluguel de câmeras de segurança, a partir de ${price} ${unit}`,
          `Contrato de manutenção de CFTV, com visitas ${visits} e atendimento ${resp}`,
        ],
      },
      {
        title: "Para qualquer tipo de local",
        intro:
          "Atendemos residências, condomínios, escolas e faculdades, escritórios, obras, edifícios, comércios, indústrias, clínicas e estacionamentos. Cada página de tipo de local detalha as necessidades de cada ambiente.",
      },
    ],
    stepsTitle: "Como solicitar um orçamento",
    steps: homeSteps,
    faq: [
      {
        q: "Quais cidades vocês atendem?",
        a: `Atendemos Curitiba e a Região Metropolitana, incluindo ${formatCityNames()}.`,
      },
      {
        q: "Minha cidade ou bairro não está na lista. Vocês atendem?",
        a: "Consulte a disponibilidade pelo WhatsApp, informando o endereço. A viabilidade do atendimento é confirmada no orçamento.",
      },
      {
        q: "O orçamento tem custo?",
        a: "Não. O orçamento é sem custo e pode ser solicitado pelo WhatsApp.",
      },
      {
        q: "Os serviços são os mesmos em todas as cidades?",
        a: `Os serviços são instalação, manutenção, aluguel e contrato de manutenção de CFTV. O aluguel parte de ${price} ${unit}, e o valor final depende da quantidade de pontos e do local.`,
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV na sua cidade",
    ctaText:
      "Informe a cidade, o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV.",
    breadcrumbTrail: [{ label: "Cidades atendidas" }],
    showCities: true,
  },

  "/cidades/curitiba/": buildCity({
    slug: "curitiba",
    name: "Curitiba",
    title: "Câmeras de Segurança em Curitiba | CFTV Curitiba",
    description:
      "CFTV em Curitiba: instalação, manutenção, aluguel e contrato de manutenção de câmeras para casas, condomínios, empresas e escolas. Orçamento sem custo.",
    intro:
      "Curitiba reúne casas, condomínios, edifícios, comércios, escolas e empresas em diversos bairros, e cada tipo de local pede um projeto de CFTV diferente. Atendemos toda a cidade com instalação, manutenção, aluguel e contrato de manutenção de câmeras.",
    localSections: [
      {
        title: "Bairros atendidos em Curitiba",
        intro:
          "Atendemos toda a cidade, incluindo bairros como Batel, Água Verde, Centro, Santa Felicidade, Portão, CIC, Boa Vista e Bigorrilho.",
      },
      {
        title: "Onde o CFTV é usado em Curitiba",
        bullets: [
          "Condomínios e edifícios residenciais e comerciais",
          "Residências, com câmeras na entrada, na garagem e no perímetro",
          "Escritórios, comércios e clínicas",
          "Escolas, faculdades e estacionamentos",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vocês atendem todos os bairros de Curitiba?",
      a: "Atendemos toda a cidade. Informe o bairro pelo WhatsApp para confirmar o atendimento no orçamento.",
    },
  }),

  "/cidades/sao-jose-dos-pinhais/": buildCity({
    slug: "sao-jose-dos-pinhais",
    name: "São José dos Pinhais",
    title: "Câmeras de Segurança em São José dos Pinhais | CFTV Curitiba",
    description:
      "CFTV em São José dos Pinhais: câmeras para indústrias, galpões, condomínios e residências, com instalação, manutenção e aluguel. Orçamento sem custo.",
    intro:
      "São José dos Pinhais abriga o aeroporto internacional de Curitiba e tem forte presença industrial e logística, além de bairros residenciais e condomínios. Atendemos o município com projetos de CFTV para casas, empresas, galpões e condomínios.",
    localSections: [
      {
        title: "Onde o CFTV é usado em São José dos Pinhais",
        bullets: [
          "Indústrias, galpões e centros logísticos, com perímetro, docas e portarias",
          "Condomínios e edifícios residenciais",
          "Empresas e comércios, com recepção, caixa e estoque",
          "Residências, com câmeras na entrada, na garagem e no perímetro",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vocês atendem indústrias e galpões em São José dos Pinhais?",
      a: "Sim. Atendemos indústrias e galpões em toda a região. A página de CFTV para indústrias detalha as necessidades desse tipo de local.",
    },
  }),

  "/cidades/pinhais/": buildCity({
    slug: "pinhais",
    name: "Pinhais",
    title: "Câmeras de Segurança em Pinhais | CFTV Curitiba",
    description:
      "CFTV em Pinhais: instalação, manutenção e aluguel de câmeras de segurança para residências, condomínios, comércios e empresas. Orçamento sem custo no WhatsApp.",
    intro:
      "Pinhais faz divisa com Curitiba e reúne áreas residenciais, comércios e empresas. Atendemos o município com instalação, manutenção e aluguel de câmeras para casas, condomínios e negócios.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Pinhais",
        bullets: [
          "Residências e condomínios",
          "Comércios e escritórios",
          "Empresas e galpões",
          "Escolas e estacionamentos",
        ],
      },
    ],
    uniqueFaq: {
      q: "Como funciona o atendimento em Pinhais?",
      a: "A equipe técnica própria atende Curitiba e a Região Metropolitana. Informe o endereço pelo WhatsApp para solicitar o orçamento.",
    },
  }),

  "/cidades/araucaria/": buildCity({
    slug: "araucaria",
    name: "Araucária",
    title: "Câmeras de Segurança em Araucária | CFTV Curitiba",
    description:
      "CFTV em Araucária: câmeras de segurança para indústrias, galpões, empresas e residências, com instalação, manutenção e aluguel. Orçamento sem custo.",
    intro:
      "Araucária, na Região Metropolitana de Curitiba, tem forte presença industrial e também áreas residenciais e comerciais. Atendemos o município com CFTV para indústrias, galpões, empresas, condomínios e residências.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Araucária",
        bullets: [
          "Indústrias e galpões, com perímetro, portarias e docas",
          "Empresas e comércios",
          "Condomínios e residências",
          "Estacionamentos e áreas de veículos",
        ],
      },
    ],
    uniqueFaq: {
      q: "Dá para monitorar o perímetro de uma indústria em Araucária?",
      a: "Sim. Projetos para indústrias costumam combinar câmeras fixas, câmeras PTZ e, quando indicado, leitura de placas nas portarias. O projeto é definido no orçamento.",
    },
  }),

  "/cidades/almirante-tamandare/": buildCity({
    slug: "almirante-tamandare",
    name: "Almirante Tamandaré",
    title: "Câmeras de Segurança em Almirante Tamandaré | CFTV Curitiba",
    description:
      "CFTV em Almirante Tamandaré: instalação, manutenção e aluguel de câmeras de segurança para residências, comércios e empresas. Orçamento sem custo.",
    intro:
      "Almirante Tamandaré fica ao norte de Curitiba, na Região Metropolitana, e reúne áreas residenciais, comércios e empresas. Atendemos o município com instalação, manutenção e aluguel de câmeras de segurança.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Almirante Tamandaré",
        bullets: [
          "Residências, com câmeras na entrada, na garagem e no perímetro",
          "Comércios, com caixa, estoque e entrada de clientes",
          "Empresas e galpões",
          "Condomínios e escolas",
        ],
      },
    ],
    uniqueFaq: {
      q: "Quais serviços de CFTV vocês oferecem em Almirante Tamandaré?",
      a: "Instalação, manutenção, aluguel de câmeras e contrato de manutenção de CFTV, para residências, comércios, empresas, condomínios e escolas.",
    },
  }),

  "/cidades/colombo/": buildCity({
    slug: "colombo",
    name: "Colombo",
    title: "Câmeras de Segurança em Colombo | CFTV Curitiba",
    description:
      "CFTV em Colombo: instalação, manutenção e aluguel de câmeras de segurança para comércios, residências, condomínios e empresas. Orçamento sem custo.",
    intro:
      "Colombo fica ao norte de Curitiba e reúne comércios, empresas, áreas residenciais e condomínios. Atendemos o município com projetos de CFTV para casas, lojas, empresas e galpões.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Colombo",
        bullets: [
          "Comércios, com caixa, estoque e fachada",
          "Residências e condomínios",
          "Empresas, escritórios e galpões",
          "Escolas e estacionamentos",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vocês fazem manutenção de câmeras já instaladas em Colombo?",
      a: "Informe pelo WhatsApp o equipamento e o problema. A viabilidade do atendimento é confirmada no orçamento.",
    },
  }),

  "/cidades/campo-largo/": buildCity({
    slug: "campo-largo",
    name: "Campo Largo",
    title: "Câmeras de Segurança em Campo Largo | CFTV Curitiba",
    description:
      "CFTV em Campo Largo: câmeras de segurança para fábricas, galpões, comércios e residências, com instalação, manutenção e aluguel. Orçamento sem custo.",
    intro:
      "Campo Largo fica a oeste de Curitiba e é conhecida pela produção de louças e cerâmica, além de reunir comércios, indústrias e áreas residenciais. Atendemos o município com CFTV para empresas, galpões, comércios e residências.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Campo Largo",
        bullets: [
          "Indústrias, fábricas e galpões, com perímetro e docas",
          "Comércios e lojas",
          "Residências e condomínios",
          "Estacionamentos e áreas externas amplas",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vocês atendem fábricas e galpões em Campo Largo?",
      a: "Sim. Atendemos indústrias e galpões em toda a região. A página de CFTV para indústrias detalha as necessidades desse tipo de local.",
    },
  }),

  "/cidades/fazenda-rio-grande/": buildCity({
    slug: "fazenda-rio-grande",
    name: "Fazenda Rio Grande",
    title: "Câmeras de Segurança em Fazenda Rio Grande | CFTV Curitiba",
    description:
      "CFTV em Fazenda Rio Grande: instalação, manutenção e aluguel de câmeras de segurança para residências, comércios e empresas. Orçamento sem custo no WhatsApp.",
    intro:
      "Fazenda Rio Grande fica ao sul de Curitiba, na Região Metropolitana, e reúne áreas residenciais, comércios e empresas. Atendemos o município com instalação, manutenção e aluguel de câmeras de segurança.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Fazenda Rio Grande",
        bullets: [
          "Residências e condomínios",
          "Comércios, com caixa, estoque e entrada de clientes",
          "Empresas e galpões",
          "Escolas e estacionamentos",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vale contratar manutenção de CFTV em Fazenda Rio Grande?",
      a: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}. Informe a quantidade de câmeras pelo WhatsApp para receber a proposta.`,
    },
  }),

  "/cidades/campo-magro/": buildCity({
    slug: "campo-magro",
    name: "Campo Magro",
    title: "Câmeras de Segurança em Campo Magro | CFTV Curitiba",
    description:
      "CFTV em Campo Magro: câmeras de segurança para residências, condomínios e áreas rurais, com instalação, manutenção e aluguel. Orçamento sem custo.",
    intro:
      "Campo Magro fica a noroeste de Curitiba, na Região Metropolitana, e reúne áreas residenciais, condomínios e áreas rurais. Atendemos o município com projetos de CFTV para casas, condomínios e propriedades.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Campo Magro",
        bullets: [
          "Residências, com câmeras na entrada, na garagem e no perímetro",
          "Condomínios",
          "Propriedades rurais e terrenos amplos",
          "Comércios e empresas",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vocês atendem condomínios em Campo Magro?",
      a: "Sim. Atendemos condomínios na Região Metropolitana. A página de CFTV para condomínios detalha as necessidades desse tipo de local.",
    },
  }),

  "/cidades/quatro-barras/": buildCity({
    slug: "quatro-barras",
    name: "Quatro Barras",
    title: "Câmeras de Segurança em Quatro Barras | CFTV Curitiba",
    description:
      "CFTV em Quatro Barras: instalação, manutenção e aluguel de câmeras de segurança para residências, comércios e empresas. Orçamento sem custo no WhatsApp.",
    intro:
      "Quatro Barras fica a nordeste de Curitiba, na Região Metropolitana, e reúne áreas residenciais, comércios e empresas. Atendemos o município com CFTV para casas, lojas, escritórios e galpões.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Quatro Barras",
        bullets: [
          "Residências e condomínios",
          "Comércios e lojas",
          "Empresas, escritórios e galpões",
          "Estacionamentos e áreas externas",
        ],
      },
    ],
    uniqueFaq: {
      q: "Vocês atendem empresas em Quatro Barras?",
      a: "Sim. Atendemos empresas, escritórios e galpões na região. Informe o tipo de local pelo WhatsApp para receber o orçamento.",
    },
  }),

  "/cidades/campina-grande-do-sul/": buildCity({
    slug: "campina-grande-do-sul",
    name: "Campina Grande do Sul",
    title: "CFTV em Campina Grande do Sul | CFTV Curitiba",
    description:
      "CFTV em Campina Grande do Sul: câmeras para residências, chácaras e turismo, inclusive solares 4G. Instalação, manutenção e aluguel. Orçamento sem custo.",
    intro:
      "Campina Grande do Sul fica a nordeste de Curitiba, na Região Metropolitana, e é conhecida pelas áreas de serra e pelo turismo de natureza. Atendemos o município com CFTV para residências, chácaras, comércios e estabelecimentos de turismo.",
    localSections: [
      {
        title: "Onde o CFTV é usado em Campina Grande do Sul",
        bullets: [
          "Residências, chácaras e sítios",
          "Pousadas e estabelecimentos de turismo",
          "Comércios e empresas",
          "Áreas sem energia ou sem internet cabeada, com câmeras solares 4G",
        ],
      },
    ],
    uniqueFaq: {
      q: "Dá para ter câmeras em chácaras e áreas afastadas?",
      a: "Em muitos casos sim. Câmeras solares 4G dispensam energia e internet cabeada, desde que haja sinal de celular no local. A viabilidade é verificada no orçamento.",
    },
  }),
};
