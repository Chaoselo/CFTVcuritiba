export interface CityConfig {
  name: string;
  slug: string;
}

export interface SiteOffers {
  rentalFromPrice: string;
  rentalUnit: string;
  rentalNoUpfrontCost: boolean;
  rentalIncludes: string[];
  maintenanceContract: {
    visits: string;
    responseTime: string;
  };
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  url: string;
  parentSite: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsappNumber: string;
  email: string;
  cnpj: string;
  address: string;
  yearsInBusiness: string;
  openingHours: string;
  gaId: string;
  gtmId: string;
  googleSiteVerification: string;
  offers: SiteOffers;
  differentials: string[];
  cities: CityConfig[];
}

export const siteConfig: SiteConfig = {
  name: "CFTV Curitiba",
  legalName: "Intelsecsul Segurança Eletrônica",
  tagline: "Instalação, manutenção e aluguel de câmeras de segurança em Curitiba e Região",
  url: "https://cftvcuritiba.com.br",
  parentSite: "https://intelsecsul.com.br",
  phoneDisplay: "(41) 99844-8409",
  phoneE164: "+5541998448409",
  whatsappNumber: "5541998448409",
  email: "[[PREENCHER]]",
  cnpj: "52.535.434/0001-90",
  address: "[[PREENCHER]]",
  yearsInBusiness: "[[PREENCHER]]",
  openingHours: "Segunda a Sexta: 08:00 às 18:00",
  gaId: "[[PREENCHER]]",
  gtmId: "GTM-P75L4NHT",
  googleSiteVerification: "[[PREENCHER]]",
  offers: {
    rentalFromPrice: "R$ 249",
    rentalUnit: "por mês por ponto",
    rentalNoUpfrontCost: true,
    rentalIncludes: ["equipamentos", "instalação", "manutenção"],
    maintenanceContract: {
      visits: "trimestrais",
      responseTime: "até 48h úteis",
    },
  },
  differentials: [
    "Equipe técnica própria",
    "Orçamento sem custo",
    "Atendimento em toda a Região Metropolitana",
    "Suporte após a instalação",
  ],
  cities: [
    { name: "Curitiba", slug: "curitiba" },
    { name: "Pinhais", slug: "pinhais" },
    { name: "São José dos Pinhais", slug: "sao-jose-dos-pinhais" },
    { name: "Araucária", slug: "araucaria" },
    { name: "Almirante Tamandaré", slug: "almirante-tamandare" },
    { name: "Colombo", slug: "colombo" },
    { name: "Campo Largo", slug: "campo-largo" },
    { name: "Fazenda Rio Grande", slug: "fazenda-rio-grande" },
    { name: "Campo Magro", slug: "campo-magro" },
    { name: "Quatro Barras", slug: "quatro-barras" },
    { name: "Campina Grande do Sul", slug: "campina-grande-do-sul" },
  ],
};

export function hasValue(v?: string | null): boolean {
  if (v === undefined || v === null) return false;
  const trimmed = v.trim();
  return trimmed !== "" && trimmed !== "[[PREENCHER]]";
}
