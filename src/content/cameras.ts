import { siteConfig } from "../config/siteConfig";
import { homeSteps } from "./home";
import type { ServiceContent } from "./services";

const price = siteConfig.offers.rentalFromPrice;
const unit = siteConfig.offers.rentalUnit;
const visits = siteConfig.offers.maintenanceContract.visits;
const resp = siteConfig.offers.maintenanceContract.responseTime;

export const camerasContent: Record<string, ServiceContent> = {
  "/cameras/camera-ip/": {
    path: "/cameras/camera-ip/",
    navLabel: "Câmera IP",
    meta: {
      title: "Câmera IP em Curitiba: Instalação | CFTV Curitiba",
      description:
        "Câmera IP para CFTV em Curitiba e Região: imagem digital em alta definição, gravação em NVR e acesso remoto. Instalação por equipe técnica própria.",
    },
    schemaService: {
      name: "Instalação de câmeras IP",
      description:
        "Instalação de câmeras IP para sistemas de CFTV em Curitiba e Região Metropolitana.",
    },
    h1: "Câmera IP em Curitiba e Região",
    intro:
      "A câmera IP envia a imagem em formato digital pela rede e grava em um gravador de vídeo em rede (NVR). É a opção indicada quando se busca mais definição de imagem, mais recursos e facilidade para ampliar o sistema.",
    sections: [
      {
        title: "Como funciona uma câmera IP",
        intro:
          "Cada câmera se conecta à rede por cabo e transmite o vídeo ao gravador. Um sistema com câmeras IP costuma reunir:",
        bullets: [
          "Gravador em rede (NVR), que armazena e organiza as imagens",
          "Cabo de rede e switch para conectar as câmeras",
          "Alimentação pelo próprio cabo de rede (PoE) em equipamentos compatíveis",
          "Acesso remoto às imagens pelo celular, conforme a configuração do projeto",
          "Resoluções variadas, como Full HD e 4K, conforme o modelo",
        ],
      },
      {
        title: "Pontos de atenção no projeto",
        bullets: [
          "O cabo de rede tem limite de distância por lance, o que pesa em locais amplos",
          "A rede precisa ter capacidade para transmitir o vídeo de todas as câmeras",
          "Maior resolução exige mais espaço de armazenamento",
          "A configuração de rede e de segurança deve ser feita com cuidado, pois o sistema fica conectado",
        ],
      },
      {
        title: "Quando a câmera IP é indicada",
        bullets: [
          "Instalações novas, com cabeamento ainda por fazer",
          "Ambientes que precisam de imagem com mais detalhes",
          "Sistemas que devem crescer com o tempo",
          "Projetos que usam recursos extras, como análise de imagem",
        ],
      },
    ],
    stepsTitle: "Como solicitar câmeras IP",
    steps: homeSteps,
    callout: {
      title: "Quer o sistema completo?",
      text: "A instalação de CFTV reúne câmeras, gravador, cabeamento e configuração.",
      linkLabel: "Conheça a instalação de CFTV",
      linkPath: "/servicos/instalacao-de-cftv/",
    },
    faq: [
      {
        q: "Qual a diferença entre câmera IP e câmera HD analógica?",
        a: "A câmera IP transmite vídeo digital pela rede e é indicada para projetos novos e com mais recursos. A câmera HD analógica usa cabo coaxial e costuma ser considerada quando já existe cabeamento a aproveitar. A definição acontece no projeto.",
      },
      {
        q: "Câmera IP precisa de internet?",
        a: "Para gravar e ver as imagens no local, basta a rede interna entre as câmeras e o gravador. A internet é necessária para o acesso remoto pelo celular.",
      },
      {
        q: "O que é PoE?",
        a: "PoE (Power over Ethernet) é a alimentação da câmera pelo próprio cabo de rede, o que dispensa uma fonte e um cabo de energia em cada ponto. Funciona em câmeras e equipamentos compatíveis.",
      },
      {
        q: "Posso alugar câmeras IP?",
        a: `O aluguel de câmeras parte de ${price} ${unit}, com equipamentos, instalação e manutenção incluídos. O tipo de câmera é definido no orçamento.`,
      },
    ],
    ctaTitle: "Peça o orçamento de câmeras IP",
    ctaText:
      "Informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras IP.",
  },

  "/cameras/camera-hd-analogica/": {
    path: "/cameras/camera-hd-analogica/",
    navLabel: "Câmera HD analógica",
    meta: {
      title: "Câmera HD Analógica em Curitiba | CFTV Curitiba",
      description:
        "Câmera HD analógica para CFTV em Curitiba e Região: alta definição pelo cabo coaxial e gravação em DVR. Peça orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de câmeras HD analógicas",
      description:
        "Instalação e modernização de sistemas de CFTV com câmeras HD analógicas em Curitiba e Região Metropolitana.",
    },
    h1: "Câmera HD analógica em Curitiba e Região",
    intro:
      "A câmera HD analógica transmite imagem em alta definição por cabo coaxial até um gravador do tipo DVR. É uma solução tradicional de CFTV, muito usada para ampliar ou modernizar sistemas que já possuem cabeamento.",
    sections: [
      {
        title: "Como funciona uma câmera HD analógica",
        intro: "O sistema costuma reunir:",
        bullets: [
          "Câmeras HD analógicas ligadas ao gravador por cabo coaxial",
          "Gravador DVR, que grava e organiza as imagens",
          "Fontes de alimentação para as câmeras",
          "Disco rígido para armazenamento",
          "Acesso remoto pelo celular, conforme o gravador e a configuração",
        ],
      },
      {
        title: "Modernizar um sistema antigo",
        intro:
          "Em muitos casos é possível aproveitar o cabeamento coaxial existente ao trocar câmeras antigas por câmeras de alta definição. A compatibilidade depende dos equipamentos e do estado dos cabos e é verificada no orçamento.",
        bullets: [
          "Câmeras e gravador precisam ser do mesmo padrão de vídeo",
          "A qualidade do cabo e dos conectores influencia diretamente a imagem",
          "Em geral, oferece menos recursos de análise de imagem do que a câmera IP",
        ],
      },
      {
        title: "Quando a câmera HD analógica é indicada",
        bullets: [
          "Locais que já têm cabeamento coaxial instalado",
          "Ampliação de sistemas analógicos existentes",
          "Projetos em que o orçamento é um fator importante",
        ],
      },
    ],
    stepsTitle: "Como solicitar câmeras HD analógicas",
    steps: homeSteps,
    callout: {
      title: "Seu sistema está com falha?",
      text: "A manutenção de CFTV corrige falhas em câmeras, gravador e cabeamento.",
      linkLabel: "Conheça a manutenção de CFTV",
      linkPath: "/servicos/manutencao-de-cftv/",
    },
    faq: [
      {
        q: "Posso aproveitar o cabo coaxial que já tenho?",
        a: "Em muitos casos sim, mas depende dos equipamentos e do estado dos cabos e conectores. A verificação é feita no orçamento.",
      },
      {
        q: "A câmera HD analógica grava em DVR ou em NVR?",
        a: "Em DVR. O NVR é o gravador usado com câmeras IP.",
      },
      {
        q: "A câmera HD analógica permite ver as imagens pelo celular?",
        a: "Sim, o DVR pode ser configurado para o acesso remoto pelo celular, conforme o modelo do equipamento e o projeto.",
      },
      {
        q: "Vale a pena trocar para câmera IP?",
        a: "Depende do objetivo, do estado do cabeamento e do orçamento. Descreva seu sistema pelo WhatsApp e indicamos a opção adequada no orçamento.",
      },
    ],
    ctaTitle: "Peça o orçamento de câmeras HD analógicas",
    ctaText:
      "Informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras HD analógicas.",
  },

  "/cameras/camera-wifi/": {
    path: "/cameras/camera-wifi/",
    navLabel: "Câmera Wi-Fi",
    meta: {
      title: "Câmera Wi-Fi em Curitiba | CFTV Curitiba",
      description:
        "Câmera Wi-Fi em Curitiba e Região: instalação simples para ambientes pequenos e acesso pelo celular. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de câmeras Wi-Fi",
      description:
        "Instalação de câmeras Wi-Fi para monitoramento de ambientes em Curitiba e Região Metropolitana.",
    },
    h1: "Câmera Wi-Fi em Curitiba e Região",
    intro:
      "A câmera Wi-Fi transmite a imagem sem cabo de rede, o que simplifica a instalação em ambientes pequenos. Ela ainda precisa de alimentação elétrica e de um sinal de Wi-Fi estável no ponto onde será instalada.",
    sections: [
      {
        title: "Como funciona uma câmera Wi-Fi",
        bullets: [
          "Conexão com a rede Wi-Fi do local, sem cabo de rede até a câmera",
          "Alimentação elétrica no ponto de instalação",
          "Armazenamento das imagens conforme o modelo: cartão de memória, nuvem ou gravador",
          "Visualização pelo celular, conforme a configuração",
        ],
      },
      {
        title: "Pontos de atenção",
        intro:
          "A qualidade do Wi-Fi no ponto de instalação define o desempenho da câmera. Por isso, vale considerar:",
        bullets: [
          "Distância e obstáculos entre a câmera e o roteador",
          "Interferência de outras redes e equipamentos",
          "Capacidade da rede para transmitir vídeo de várias câmeras",
          "Em áreas grandes ou com muitas câmeras, sistemas com cabo costumam ser mais estáveis",
        ],
      },
      {
        title: "Quando a câmera Wi-Fi é indicada",
        bullets: [
          "Residências e escritórios pequenos",
          "Monitoramento básico de ambientes internos",
          "Pontos onde passar cabo é difícil",
        ],
      },
    ],
    stepsTitle: "Como solicitar câmeras Wi-Fi",
    steps: homeSteps,
    callout: {
      title: "Projeto maior ou mais estável?",
      text: "A instalação de CFTV reúne câmeras, gravador, cabeamento e configuração.",
      linkLabel: "Conheça a instalação de CFTV",
      linkPath: "/servicos/instalacao-de-cftv/",
    },
    faq: [
      {
        q: "A câmera Wi-Fi funciona sem energia elétrica?",
        a: "Em geral, não. Mesmo sem cabo de rede, a câmera precisa de alimentação elétrica. Existem modelos com bateria ou painel solar, e a viabilidade depende do modelo e do local.",
      },
      {
        q: "A câmera Wi-Fi grava quando a internet cai?",
        a: "Depende do modelo. Câmeras com cartão de memória ou gravador local podem continuar gravando, enquanto as que dependem de nuvem precisam de conexão.",
      },
      {
        q: "A câmera Wi-Fi é segura?",
        a: "A segurança depende da configuração: senhas fortes, equipamento atualizado e rede protegida. A configuração faz parte do serviço de instalação.",
      },
      {
        q: "Qual a diferença entre câmera Wi-Fi e câmera IP?",
        a: "A câmera Wi-Fi transmite a imagem pela rede sem fio. A câmera IP com cabo usa cabo de rede, o que costuma dar mais estabilidade em projetos maiores.",
      },
    ],
    ctaTitle: "Peça o orçamento de câmeras Wi-Fi",
    ctaText:
      "Informe o tipo de local e a quantidade aproximada de câmeras. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras Wi-Fi.",
  },

  "/cameras/camera-ptz/": {
    path: "/cameras/camera-ptz/",
    navLabel: "Câmera PTZ",
    meta: {
      title: "Câmera PTZ em Curitiba | CFTV Curitiba",
      description:
        "Câmera PTZ em Curitiba e Região: movimento, inclinação e zoom para cobrir áreas amplas. Instalação por equipe técnica própria e orçamento sem custo.",
    },
    schemaService: {
      name: "Instalação de câmeras PTZ",
      description:
        "Instalação de câmeras PTZ (pan, tilt e zoom) para CFTV em Curitiba e Região Metropolitana.",
    },
    h1: "Câmera PTZ em Curitiba e Região",
    intro:
      "PTZ vem de pan, tilt e zoom: a câmera gira na horizontal, inclina na vertical e aproxima a imagem. Com isso, uma única câmera pode acompanhar uma área ampla, como pátios, estacionamentos e perímetros.",
    sections: [
      {
        title: "Como funciona uma câmera PTZ",
        bullets: [
          "Movimento horizontal (pan) e vertical (tilt)",
          "Zoom para aproximar detalhes à distância",
          "Controle manual pelo celular ou pelo gravador, conforme o equipamento",
          "Em alguns modelos, rondas programadas entre posições predefinidas",
          "Gravação no mesmo gravador do restante do sistema, conforme a compatibilidade",
        ],
      },
      {
        title: "Pontos de atenção",
        intro: "A câmera PTZ enxerga uma região de cada vez. Por isso:",
        bullets: [
          "Fora da posição atual, a câmera não registra o que acontece em outras áreas",
          "Ela costuma ser combinada com câmeras fixas, que vigiam os pontos principais o tempo todo",
          "Peças móveis exigem revisões periódicas",
          "O projeto define a altura e o local de instalação para cobrir a área desejada",
        ],
      },
      {
        title: "Quando a câmera PTZ é indicada",
        bullets: [
          "Pátios, estacionamentos e áreas externas amplas",
          "Perímetro de condomínios, escolas e indústrias",
          "Obras e áreas abertas",
          "Locais onde alguém acompanha as imagens em tempo real",
        ],
      },
    ],
    stepsTitle: "Como solicitar câmeras PTZ",
    steps: homeSteps,
    callout: {
      title: "Mais atenção com as peças móveis?",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "O que significa PTZ?",
        a: "PTZ é a sigla de pan, tilt e zoom: movimento horizontal, movimento vertical e aproximação da imagem.",
      },
      {
        q: "A câmera PTZ substitui as câmeras fixas?",
        a: "Em geral, não. A PTZ cobre uma área por vez, enquanto as câmeras fixas registram continuamente os pontos principais. O projeto define a combinação adequada.",
      },
      {
        q: "A câmera PTZ pode ser controlada pelo celular?",
        a: "Em geral sim, conforme o modelo e a configuração do acesso remoto.",
      },
      {
        q: "Câmera PTZ serve para residência?",
        a: "Pode servir em terrenos e áreas externas amplas. Para muitas residências, câmeras fixas atendem bem, e o orçamento indica a opção adequada.",
      },
    ],
    ctaTitle: "Peça o orçamento de câmeras PTZ",
    ctaText:
      "Informe o tipo de local e a área que precisa ser coberta. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras PTZ.",
  },

  "/cameras/leitura-de-placas-lpr/": {
    path: "/cameras/leitura-de-placas-lpr/",
    navLabel: "Leitura de placas (LPR)",
    meta: {
      title: "Leitura de Placas (LPR) em Curitiba | CFTV Curitiba",
      description:
        "Leitura de placas (LPR) em Curitiba e Região: câmeras que registram as placas dos veículos em entradas e garagens. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de sistemas de leitura de placas (LPR)",
      description:
        "Instalação de câmeras e sistemas de leitura de placas veiculares (LPR) em Curitiba e Região Metropolitana.",
    },
    h1: "Leitura de placas (LPR) em Curitiba e Região",
    intro:
      "LPR (License Plate Recognition) é a tecnologia que lê as placas dos veículos a partir da imagem da câmera e registra o horário da passagem. É usada em entradas, saídas e garagens para ter um registro organizado dos veículos que circulam.",
    sections: [
      {
        title: "Como funciona a leitura de placas",
        bullets: [
          "A câmera captura a placa do veículo, em movimento ou parado",
          "O software converte a imagem da placa em texto",
          "Cada passagem fica registrada com data e horário",
          "Os registros podem ser consultados e, conforme o sistema, associados à imagem do veículo",
          "Em alguns projetos, a leitura se integra a cancelas, conforme a compatibilidade",
        ],
      },
      {
        title: "O que influencia a leitura",
        intro:
          "A leitura depende de condições do local, que são avaliadas no projeto:",
        bullets: [
          "Posição e ângulo da câmera em relação à placa",
          "Iluminação, inclusive à noite e em contraluz",
          "Velocidade dos veículos na passagem",
          "Estado e padrão das placas",
        ],
      },
      {
        title: "Quando o LPR é indicado",
        bullets: [
          "Condomínios e edifícios com garagem",
          "Empresas e indústrias com portaria de veículos",
          "Estacionamentos",
          "Escolas e faculdades com entrada de veículos",
        ],
      },
      {
        title: "Cuidados com dados pessoais",
        intro:
          "Imagens e placas de veículos podem ser dados pessoais. O uso do sistema deve observar a Lei Geral de Proteção de Dados (LGPD), com finalidade definida e acesso restrito aos registros.",
      },
    ],
    stepsTitle: "Como solicitar a leitura de placas",
    steps: homeSteps,
    callout: {
      title: "Quer um projeto completo?",
      text: "A instalação de CFTV reúne câmeras, gravador, cabeamento e configuração.",
      linkLabel: "Conheça a instalação de CFTV",
      linkPath: "/servicos/instalacao-de-cftv/",
    },
    faq: [
      {
        q: "O que é LPR?",
        a: "LPR é a sigla em inglês para leitura de placas de veículos. A câmera e o software leem a placa e registram a passagem.",
      },
      {
        q: "A leitura de placas funciona à noite?",
        a: "Pode funcionar, desde que o projeto considere iluminação e tipo de câmera adequados ao ponto. As condições do local são avaliadas no orçamento.",
      },
      {
        q: "O LPR substitui as câmeras comuns?",
        a: "Não. A câmera de LPR é voltada à leitura de placas em um ponto específico. As câmeras comuns continuam registrando o ambiente.",
      },
      {
        q: "A leitura de placas precisa seguir a LGPD?",
        a: "O uso deve ter finalidade definida, acesso restrito aos registros e tempo de guarda adequado. Esses pontos cabem a quem opera o sistema, e é recomendável consultar um profissional jurídico.",
      },
    ],
    ctaTitle: "Peça o orçamento de leitura de placas",
    ctaText:
      "Informe o tipo de local e o fluxo de veículos. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de leitura de placas (LPR).",
  },

  "/cameras/camera-com-inteligencia-artificial/": {
    path: "/cameras/camera-com-inteligencia-artificial/",
    navLabel: "Câmera com inteligência artificial",
    meta: {
      title: "Câmera com Inteligência Artificial | CFTV Curitiba",
      description:
        "Câmeras com inteligência artificial em Curitiba e Região: detecção de pessoas e veículos para alertas mais úteis. Peça orçamento sem custo no WhatsApp.",
    },
    schemaService: {
      name: "Instalação de câmeras com inteligência artificial",
      description:
        "Instalação de câmeras de segurança com análise de imagem por inteligência artificial em Curitiba e Região Metropolitana.",
    },
    h1: "Câmera com inteligência artificial em Curitiba e Região",
    intro:
      "A câmera com inteligência artificial analisa a imagem para reconhecer situações, como a presença de pessoas e veículos. Em vez de depender apenas de movimento genérico, o sistema pode gerar alertas mais úteis e facilitar a busca por eventos nas gravações.",
    sections: [
      {
        title: "O que a análise de imagem pode fazer",
        intro:
          "Os recursos variam conforme o equipamento e são definidos no projeto. Exemplos comuns:",
        bullets: [
          "Detecção de pessoas e veículos",
          "Alerta quando alguém cruza uma linha virtual ou entra em uma área definida",
          "Redução de alertas causados por sombras, insetos ou vegetação",
          "Busca de eventos nas gravações por tipo de objeto",
          "Contagem de pessoas ou veículos, em modelos compatíveis",
        ],
      },
      {
        title: "Pontos de atenção",
        bullets: [
          "Os recursos dependem do modelo da câmera ou do gravador",
          "A qualidade da análise depende de posição, iluminação e enquadramento",
          "Recursos que identificam pessoas exigem atenção à LGPD",
          "Os alertas precisam ser configurados e acompanhados para ter utilidade",
        ],
      },
      {
        title: "Quando a câmera com IA é indicada",
        bullets: [
          "Perímetros e áreas externas, onde há muitos alertas falsos",
          "Condomínios, indústrias e obras",
          "Locais em que alguém acompanha os alertas",
          "Projetos que precisam localizar eventos rapidamente nas gravações",
        ],
      },
    ],
    stepsTitle: "Como solicitar câmeras com inteligência artificial",
    steps: homeSteps,
    callout: {
      title: "A base é a câmera IP",
      text: "Os recursos de análise de imagem costumam estar em câmeras e gravadores em rede.",
      linkLabel: "Conheça as câmeras IP",
      linkPath: "/cameras/camera-ip/",
    },
    faq: [
      {
        q: "A câmera com IA reconhece rostos?",
        a: "Os recursos variam por equipamento. Funções que identificam pessoas envolvem dados pessoais e exigem atenção à LGPD. O que será usado em cada projeto é definido no orçamento.",
      },
      {
        q: "A câmera com IA evita alarmes falsos?",
        a: "Ela pode reduzir alertas causados por sombras, insetos e vegetação, mas não elimina todos. O resultado depende do modelo, da instalação e da configuração.",
      },
      {
        q: "Preciso trocar todo o sistema para ter IA?",
        a: "Depende. Alguns recursos estão na câmera e outros no gravador. Descreva seu sistema pelo WhatsApp para que a compatibilidade seja verificada no orçamento.",
      },
      {
        q: "A câmera com IA precisa de internet?",
        a: "A análise costuma ocorrer na própria câmera ou no gravador. A internet é necessária para o acesso remoto e para alertas no celular.",
      },
    ],
    ctaTitle: "Peça o orçamento de câmeras com IA",
    ctaText:
      "Informe o tipo de local e o que você quer detectar. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras com inteligência artificial.",
  },

  "/cameras/camera-solar-4g/": {
    path: "/cameras/camera-solar-4g/",
    navLabel: "Câmera solar 4G",
    meta: {
      title: "Câmera Solar 4G em Curitiba | CFTV Curitiba",
      description:
        "Câmera solar 4G em Curitiba e Região: monitoramento sem rede elétrica e sem cabo de internet, indicada para obras e áreas remotas. Orçamento sem custo.",
    },
    schemaService: {
      name: "Instalação de câmeras solares 4G",
      description:
        "Instalação de câmeras de segurança com painel solar e conexão 4G em Curitiba e Região Metropolitana.",
    },
    h1: "Câmera solar 4G em Curitiba e Região",
    intro:
      "A câmera solar 4G funciona com painel solar e bateria e transmite a imagem pela rede de celular. Por isso, dispensa ponto de energia e cabo de internet, o que a torna uma solução para obras, terrenos e áreas remotas.",
    sections: [
      {
        title: "Como funciona uma câmera solar 4G",
        bullets: [
          "Painel solar que carrega a bateria durante o dia",
          "Bateria que mantém a câmera ligada, inclusive à noite",
          "Chip com plano de dados para transmitir as imagens pela rede 4G",
          "Gravação em cartão de memória, em nuvem ou nos dois, conforme o modelo",
          "Visualização pelo celular, conforme a configuração",
        ],
      },
      {
        title: "O que é verificado antes de instalar",
        intro:
          "Estas condições definem se a câmera solar 4G funciona bem no local:",
        bullets: [
          "Incidência de sol no painel durante o dia",
          "Cobertura de sinal de celular da operadora no ponto",
          "Posição da câmera, para cobrir a área a ser vigiada",
          "Consumo de dados, que depende da resolução e do uso",
        ],
      },
      {
        title: "Quando a câmera solar 4G é indicada",
        bullets: [
          "Obras, canteiros e depósitos de materiais",
          "Terrenos, sítios e áreas rurais",
          "Locais sem energia ou sem internet cabeada",
          "Monitoramento temporário",
        ],
      },
    ],
    stepsTitle: "Como solicitar câmeras solares 4G",
    steps: homeSteps,
    callout: {
      title: "Monitoramento temporário?",
      text: `O aluguel de câmeras parte de ${price} ${unit}, sem investimento inicial. As condições para cada tipo de câmera são apresentadas no orçamento.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: "A câmera solar 4G funciona à noite?",
        a: "Sim, com a energia armazenada na bateria. A autonomia depende do modelo e da carga recebida durante o dia.",
      },
      {
        q: "A câmera solar 4G funciona em dias nublados?",
        a: "Funciona, mas a recarga é menor. O projeto considera a incidência de sol no local, e a autonomia varia conforme o modelo.",
      },
      {
        q: "Preciso de internet ou Wi-Fi no local?",
        a: "Não. A transmissão usa a rede de celular, e por isso é necessário haver sinal da operadora no ponto de instalação.",
      },
      {
        q: "A câmera solar 4G é indicada para obras?",
        a: "Sim, é uma das aplicações mais comuns, por dispensar ponto de energia e cabeamento.",
      },
    ],
    ctaTitle: "Peça o orçamento de câmeras solares 4G",
    ctaText:
      "Informe o local e o tempo de monitoramento. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras solares 4G.",
  },
};
