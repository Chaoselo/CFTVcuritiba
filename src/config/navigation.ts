export interface NavItem {
  label: string;
  path: string;
}

export interface NavigationGroups {
  services: NavItem[];
  cameraTypes: NavItem[];
  segments: NavItem[];
  institutional: NavItem[];
}

export const navigation: NavigationGroups = {
  services: [
    { label: "Instalação de CFTV", path: "/servicos/instalacao-de-cftv/" },
    { label: "Manutenção de câmeras", path: "/servicos/manutencao-de-cftv/" },
    { label: "Aluguel de câmeras", path: "/servicos/aluguel-de-cameras-de-seguranca/" },
    { label: "Contrato de manutenção", path: "/servicos/contrato-de-manutencao-de-cftv/" },
  ],
  cameraTypes: [
    { label: "Câmera IP", path: "/cameras/camera-ip/" },
    { label: "Câmera HD analógica", path: "/cameras/camera-hd-analogica/" },
    { label: "Câmera Wi-Fi", path: "/cameras/camera-wifi/" },
    { label: "Câmera PTZ", path: "/cameras/camera-ptz/" },
    { label: "Leitura de placas (LPR)", path: "/cameras/leitura-de-placas-lpr/" },
    { label: "Câmera com inteligência artificial", path: "/cameras/camera-com-inteligencia-artificial/" },
    { label: "Câmera solar 4G", path: "/cameras/camera-solar-4g/" },
  ],
  segments: [
    { label: "Residências", path: "/segmentos/residencias/" },
    { label: "Condomínios", path: "/segmentos/condominios/" },
    { label: "Escolas e faculdades", path: "/segmentos/escolas-e-faculdades/" },
    { label: "Escritórios", path: "/segmentos/escritorios/" },
    { label: "Obras", path: "/segmentos/obras/" },
    { label: "Edifícios", path: "/segmentos/edificios/" },
    { label: "Comércios", path: "/segmentos/comercios/" },
    { label: "Indústrias", path: "/segmentos/industrias/" },
    { label: "Clínicas e consultórios", path: "/segmentos/clinicas/" },
    { label: "Estacionamentos", path: "/segmentos/estacionamentos/" },
  ],
  institutional: [
    { label: "Cidades", path: "/cidades/" },
    { label: "Blog", path: "/blog/" },
    { label: "Perguntas frequentes", path: "/perguntas-frequentes/" },
    { label: "Sobre", path: "/sobre/" },
    { label: "Contato", path: "/contato/" },
    { label: "Política de privacidade", path: "/politica-de-privacidade/" },
  ],
};
