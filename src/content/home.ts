import { siteConfig } from "../config/siteConfig";
import { navigation } from "../config/navigation";

// Formata lista de cidades com vírgula e "e" antes da última
const cityNamesArray = siteConfig.cities.map((c) => c.name);
const cityNames =
  cityNamesArray.length > 1
    ? `${cityNamesArray.slice(0, -1).join(", ")} e ${cityNamesArray[cityNamesArray.length - 1]}`
    : cityNamesArray[0] || "";

export const homeFaq = [
  {
    q: "Quanto custa alugar câmeras de segurança?",
    a: `O aluguel de câmeras parte de ${siteConfig.offers.rentalFromPrice} ${siteConfig.offers.rentalUnit}, sem investimento inicial, com equipamentos, instalação e manutenção incluídos. O valor final depende da quantidade de pontos e do local. Solicite um orçamento sem custo pelo WhatsApp.`,
  },
  {
    q: "O que é CFTV?",
    a: "CFTV (Circuito Fechado de Televisão) é um sistema de câmeras de segurança conectadas a um gravador, que registra e permite acompanhar as imagens de um local. Pode ser instalado em residências, condomínios, empresas, escolas e obras.",
  },
  {
    q: "Qual a diferença entre câmera IP e câmera HD analógica?",
    a: "A câmera IP envia imagem digital pela rede e costuma oferecer maior resolução e mais recursos. A câmera HD analógica usa cabo coaxial e, em muitos casos, permite aproveitar a estrutura de sistemas antigos. A opção ideal depende do local e do orçamento.",
  },
  {
    q: "Como funciona o contrato de manutenção de CFTV?",
    a: `O contrato de manutenção prevê visitas ${siteConfig.offers.maintenanceContract.visits} e atendimento ${siteConfig.offers.maintenanceContract.responseTime}, para manter câmeras, gravador e cabeamento funcionando.`,
  },
  {
    q: "Quais cidades vocês atendem?",
    a: `Atendemos Curitiba e a Região Metropolitana, incluindo ${cityNames}.`,
  },
  {
    q: "Posso acompanhar as câmeras pelo celular?",
    a: "Sim. Os sistemas modernos permitem o acesso remoto pelo celular. A compatibilidade é definida no projeto, e você pode confirmar os detalhes no orçamento.",
  },
  {
    q: "Como solicitar um orçamento?",
    a: "Chame pelo WhatsApp, informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
  },
];

export const homeServices = [
  {
    title: "Instalação de CFTV",
    path: "/servicos/instalacao-de-cftv/",
    text: "Projeto e instalação de câmeras de segurança para residências, empresas, condomínios e obras, com gravação e acesso remoto.",
  },
  {
    title: "Manutenção de câmeras",
    path: "/servicos/manutencao-de-cftv/",
    text: "Reparo e revisão de câmeras, gravadores e cabeamento, para quem já tem um sistema e precisa que volte a funcionar.",
  },
  {
    title: "Aluguel de câmeras",
    path: "/servicos/aluguel-de-cameras-de-seguranca/",
    text: `A partir de ${siteConfig.offers.rentalFromPrice} ${siteConfig.offers.rentalUnit}, sem investimento inicial. Inclui equipamentos, instalação e manutenção.`,
  },
  {
    title: "Contrato de manutenção",
    path: "/servicos/contrato-de-manutencao-de-cftv/",
    text: `Visitas ${siteConfig.offers.maintenanceContract.visits} e atendimento ${siteConfig.offers.maintenanceContract.responseTime} para manter seu CFTV sempre em funcionamento.`,
  },
];

const cameraDescriptions: Record<string, string> = {
  "/cameras/camera-ip/":
    "Imagem digital em alta definição, transmitida pela rede, com gravação e acesso remoto.",
  "/cameras/camera-hd-analogica/":
    "Em muitos casos aproveita o cabeamento coaxial existente, boa opção para ampliar ou modernizar sistemas antigos.",
  "/cameras/camera-wifi/":
    "Instalação simples, indicada para ambientes pequenos e monitoramento básico.",
  "/cameras/camera-ptz/":
    "Movimenta e aproxima a imagem (pan, tilt e zoom) para cobrir áreas amplas.",
  "/cameras/leitura-de-placas-lpr/":
    "Registra as placas dos veículos em entradas, saídas e garagens.",
  "/cameras/camera-com-inteligencia-artificial/":
    "Recursos de análise de imagem, como detecção de pessoas e veículos.",
  "/cameras/camera-solar-4g/":
    "Funciona sem rede elétrica e sem internet cabeada, indicada para obras e áreas remotas.",
};

export const homeCameraTypes = navigation.cameraTypes.map((item) => ({
  title: item.label,
  path: item.path,
  text: cameraDescriptions[item.path] || "",
}));

const segmentDescriptions: Record<string, string> = {
  "/segmentos/residencias/": "Monitoramento de entradas, garagem e perímetro.",
  "/segmentos/condominios/":
    "Portarias, garagens e áreas comuns, com gravação centralizada.",
  "/segmentos/escolas-e-faculdades/": "Acessos, pátios e corredores.",
  "/segmentos/escritorios/": "Recepção, acessos e áreas internas.",
  "/segmentos/obras/":
    "Vigilância de materiais e equipamentos durante a execução.",
  "/segmentos/edificios/": "Halls, garagens e fachadas.",
  "/segmentos/comercios/": "Caixa, estoque e entrada de clientes.",
  "/segmentos/industrias/": "Perímetro, docas e áreas de produção.",
  "/segmentos/clinicas/":
    "Recepção e acessos, com atenção à privacidade.",
  "/segmentos/estacionamentos/": "Entradas, saídas e vagas.",
};

export const homeSegments = navigation.segments.map((item) => ({
  title: item.label,
  path: item.path,
  text: segmentDescriptions[item.path] || "",
}));

export const homeSteps = [
  {
    title: "Fale com a gente",
    text: "Chame pelo WhatsApp e conte o tipo de local e a quantidade aproximada de câmeras.",
  },
  {
    title: "Receba o orçamento",
    text: "O orçamento é sem custo, com a solução indicada para o seu caso.",
  },
  {
    title: "Instalação",
    text: "Nossa equipe técnica própria instala e configura o sistema.",
  },
  {
    title: "Suporte",
    text: "Você conta com suporte após a instalação.",
  },
];
