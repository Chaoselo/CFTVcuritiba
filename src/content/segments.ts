import { siteConfig } from "../config/siteConfig";
import { homeSteps } from "./home";
import type { ServiceContent } from "./services";

const price = siteConfig.offers.rentalFromPrice;
const unit = siteConfig.offers.rentalUnit;
const visits = siteConfig.offers.maintenanceContract.visits;
const resp = siteConfig.offers.maintenanceContract.responseTime;

function formatCityNames(cities: { name: string }[]): string {
  const names = cities.map((c) => c.name);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return names.slice(0, -1).join(", ") + " e " + names[names.length - 1];
}

const cityNames = formatCityNames(siteConfig.cities);

export const segmentsContent: Record<string, ServiceContent> = {
  "/segmentos/residencias/": {
    path: "/segmentos/residencias/",
    navLabel: "Residências",
    meta: {
      title: "CFTV para Residências em Curitiba | CFTV Curitiba",
      description:
        "CFTV para residências em Curitiba e Região: câmeras na entrada, garagem e quintal, com acesso pelo celular. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para residências",
      description:
        "Instalação de câmeras de segurança para casas e residências em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para residências em Curitiba e Região",
    intro:
      "Câmeras de segurança em casa ajudam a acompanhar entradas, garagem e quintal e a ter imagens registradas em caso de ocorrência. O projeto é montado conforme o tamanho do imóvel e os pontos que você quer vigiar.",
    sections: [
      {
        title: "Onde instalar câmeras em uma residência",
        bullets: [
          "Portão e entrada principal",
          "Garagem e acesso de veículos",
          "Quintal, fundos e laterais",
          "Áreas de circulação externas",
          "Muros e laterais do terreno",
        ],
      },
      {
        title: "Quais câmeras costumam ser usadas",
        bullets: [
          "Câmeras IP ou HD analógicas para áreas externas e perímetro",
          "Câmeras Wi-Fi para ambientes pequenos e pontos de difícil cabeamento",
          "Câmeras PTZ em terrenos e áreas externas amplas",
        ],
      },
      {
        title: "Cuidados no projeto",
        bullets: [
          "Iluminação dos pontos vigiados, para imagem útil também à noite",
          "Enquadramento que priorize o seu imóvel, evitando captar áreas de vizinhos além do necessário",
          "Senhas fortes e rede protegida para o acesso remoto",
          "Tempo de gravação adequado à sua rotina",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para residência",
    steps: homeSteps,
    callout: {
      title: "Sem investimento inicial?",
      text: `O aluguel de câmeras parte de ${price} ${unit}, com equipamentos, instalação e manutenção incluídos.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: "Quantas câmeras uma casa precisa?",
        a: "Depende do tamanho do terreno e dos pontos que você quer vigiar. Em geral, começa-se pela entrada, pela garagem e pelos fundos. A quantidade é indicada no orçamento sem custo.",
      },
      {
        q: "Posso ver as câmeras da minha casa pelo celular?",
        a: "Sim, os sistemas atuais permitem o acesso remoto pelo celular, conforme o projeto.",
      },
      {
        q: "Câmera Wi-Fi ou com cabo para residência?",
        a: "A câmera Wi-Fi simplifica a instalação em ambientes pequenos. Para áreas externas e mais pontos, o sistema com cabo costuma ser mais estável. O projeto define a combinação adequada.",
      },
      {
        q: "Por quanto tempo as imagens ficam gravadas?",
        a: "Depende da capacidade de armazenamento, da resolução e da quantidade de câmeras. O tempo é dimensionado no projeto.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para residência",
    ctaText:
      "Informe o tamanho do imóvel e os pontos que quer vigiar. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de câmeras de segurança para minha residência.",
  },

  "/segmentos/condominios/": {
    path: "/segmentos/condominios/",
    navLabel: "Condomínios",
    meta: {
      title: "CFTV para Condomínios em Curitiba | CFTV Curitiba",
      description:
        "CFTV para condomínios em Curitiba e Região: portarias, garagens e áreas comuns com gravação centralizada. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para condomínios",
      description:
        "Instalação e manutenção de CFTV para condomínios residenciais em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para condomínios em Curitiba e Região",
    intro:
      "Em um condomínio, o CFTV registra o que acontece em portarias, garagens, elevadores e áreas comuns, e apoia a administração e a portaria na apuração de ocorrências. Como o sistema não pode ficar parado, a manutenção é parte importante do projeto.",
    sections: [
      {
        title: "Onde as câmeras costumam ser instaladas",
        bullets: [
          "Portaria e acessos de pedestres",
          "Entrada e saída de veículos e garagens",
          "Elevadores e halls",
          "Áreas comuns, como salão de festas, playground e academia",
          "Perímetro e muros",
        ],
      },
      {
        title: "Pontos de atenção em condomínios",
        bullets: [
          "Gravação centralizada, com as imagens em local de acesso controlado",
          "Tempo de armazenamento compatível com a rotina de apuração de ocorrências",
          "Regras de acesso às imagens, definidas pelo condomínio",
          "Atenção à LGPD no uso das imagens de moradores e visitantes",
          "Manutenção regular, para que o sistema esteja gravando quando for necessário",
        ],
      },
      {
        title: "Soluções que costumam compor o projeto",
        bullets: [
          "Câmeras IP ou HD analógicas nas áreas comuns",
          "Câmeras PTZ em áreas externas amplas",
          "Leitura de placas (LPR) em entradas e saídas de veículos",
          "Câmeras com inteligência artificial para alertas no perímetro",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para condomínio",
    steps: homeSteps,
    callout: {
      title: "Sistema sempre funcionando",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "Qual o tempo de gravação ideal para um condomínio?",
        a: "Não há um número único. O tempo depende da capacidade de armazenamento, da resolução e da quantidade de câmeras, e é dimensionado no projeto conforme a necessidade do condomínio.",
      },
      {
        q: "Quem pode ter acesso às imagens do condomínio?",
        a: "As regras de acesso são definidas pelo condomínio, com atenção à LGPD. Recomenda-se registrar quem pode consultar e exportar as imagens.",
      },
      {
        q: "Vale ter contrato de manutenção no condomínio?",
        a: `Ele ajuda a manter o sistema funcionando. O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      },
      {
        q: "É possível ampliar o CFTV que o condomínio já tem?",
        a: "Em muitos casos sim, conforme os equipamentos já instalados. Descreva o sistema atual pelo WhatsApp para que a compatibilidade seja verificada no orçamento.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para condomínio",
    ctaText:
      "Informe a quantidade de acessos e áreas comuns. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para condomínio.",
  },

  "/segmentos/edificios/": {
    path: "/segmentos/edificios/",
    navLabel: "Edifícios",
    meta: {
      title: "CFTV para Edifícios em Curitiba | CFTV Curitiba",
      description:
        "CFTV para edifícios em Curitiba e Região: halls, garagens, elevadores e fachadas com gravação e acesso remoto. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para edifícios",
      description:
        "Instalação de câmeras de segurança para edifícios residenciais e comerciais em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para edifícios em Curitiba e Região",
    intro:
      "Edifícios residenciais e comerciais têm muitos pontos de circulação, e o CFTV ajuda a registrar halls, elevadores, garagens e fachadas. O projeto considera a quantidade de andares, os acessos e a forma como a portaria acompanha as imagens.",
    sections: [
      {
        title: "Pontos monitorados em edifícios",
        bullets: [
          "Hall de entrada e recepção",
          "Elevadores e corredores de circulação",
          "Garagens e subsolos",
          "Escadarias e áreas técnicas, conforme o projeto",
        ],
      },
      {
        title: "Particularidades do projeto",
        bullets: [
          "Cabeamento em prumadas e subsolos, que exige planejamento",
          "Câmeras adequadas à iluminação de halls e garagens",
          "Gravação centralizada, com acompanhamento pela portaria ou por uma central",
          "Ampliação por etapas, conforme as necessidades do edifício",
        ],
      },
      {
        title: "Edifícios residenciais e comerciais",
        intro:
          "Em edifícios residenciais, o foco costuma ser a segurança de moradores e visitantes nas áreas comuns. Em edifícios comerciais, ganham peso o controle de circulação e a apuração de ocorrências nas áreas de uso compartilhado. O projeto é ajustado a cada caso.",
      },
    ],
    stepsTitle: "Como solicitar CFTV para edifício",
    steps: homeSteps,
    callout: {
      title: "Sistema sempre funcionando",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "Dá para monitorar vários andares em um único sistema?",
        a: "Sim. O sistema pode reunir câmeras de diferentes andares em um mesmo gravador ou em gravadores conectados em rede, conforme o projeto.",
      },
      {
        q: "É possível instalar câmeras em elevadores?",
        a: "Em geral sim, com câmeras e cabeamento apropriados. A viabilidade é verificada no orçamento.",
      },
      {
        q: "Posso acompanhar as imagens do prédio pelo celular?",
        a: "Sim, o acesso remoto pode ser configurado, conforme o projeto. As regras de acesso devem ser definidas pela administração do edifício.",
      },
      {
        q: "Vocês fazem manutenção em sistema de edifício já instalado?",
        a: "Informe pelo WhatsApp o equipamento e o problema. A viabilidade do atendimento é confirmada no orçamento.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para edifício",
    ctaText:
      "Informe a quantidade de andares, acessos e garagens. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para edifício.",
  },

  "/segmentos/escolas-e-faculdades/": {
    path: "/segmentos/escolas-e-faculdades/",
    navLabel: "Escolas e faculdades",
    meta: {
      title: "CFTV para Escolas e Faculdades | CFTV Curitiba",
      description:
        "CFTV para escolas e faculdades em Curitiba e Região: acessos, pátios e corredores com gravação e acesso remoto. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para escolas e faculdades",
      description:
        "Instalação e manutenção de CFTV para escolas, colégios e faculdades em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para escolas e faculdades em Curitiba e Região",
    intro:
      "Em escolas e faculdades, o CFTV registra acessos, pátios, corredores e estacionamentos, apoiando a gestão da segurança de alunos, professores e funcionários. O projeto precisa equilibrar cobertura e privacidade.",
    sections: [
      {
        title: "Onde instalar câmeras em escolas e faculdades",
        bullets: [
          "Portões, entradas e saídas",
          "Pátios, quadras e áreas de recreação",
          "Corredores e escadarias",
          "Estacionamentos e áreas de veículos",
          "Biblioteca, secretaria e entradas de laboratórios",
        ],
      },
      {
        title: "Cuidados com privacidade",
        intro:
          "Em ambientes frequentados por crianças e adolescentes, o cuidado com as imagens é redobrado.",
        bullets: [
          "Áreas íntimas, como banheiros e vestiários, não devem ser monitoradas",
          "O acesso às imagens deve ser restrito e controlado pela instituição",
          "A LGPD deve ser observada, com atenção especial às imagens de menores",
          "A instituição deve comunicar a existência do monitoramento",
        ],
      },
      {
        title: "Soluções que costumam compor o projeto",
        bullets: [
          "Câmeras IP ou HD analógicas em corredores e acessos",
          "Câmeras PTZ em pátios e áreas externas amplas",
          "Leitura de placas (LPR) em estacionamentos e entradas de veículos",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para escola ou faculdade",
    steps: homeSteps,
    callout: {
      title: "Muitas câmeras para manter?",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "Pode haver câmeras dentro das salas de aula?",
        a: "Isso depende da política da instituição e deve considerar a privacidade de alunos e professores e a LGPD. Os locais são definidos no projeto, junto com a instituição.",
      },
      {
        q: "Quantas câmeras uma escola precisa?",
        a: "Depende do tamanho do prédio, dos acessos e das áreas externas. A quantidade é indicada no orçamento sem custo.",
      },
      {
        q: "É possível monitorar vários prédios ou campi?",
        a: "Sim, o sistema pode reunir câmeras de diferentes locais em rede, conforme a infraestrutura disponível. O projeto verifica a viabilidade.",
      },
      {
        q: "Por quanto tempo guardar as imagens?",
        a: "O tempo de guarda deve ser definido pela instituição, considerando suas políticas e a LGPD. A capacidade de armazenamento é dimensionada no projeto de acordo com essa definição.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para escola ou faculdade",
    ctaText:
      "Informe o tamanho da instituição e as áreas que precisam de cobertura. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para escola ou faculdade.",
  },

  "/segmentos/escritorios/": {
    path: "/segmentos/escritorios/",
    navLabel: "Escritórios",
    meta: {
      title: "CFTV para Escritórios em Curitiba | CFTV Curitiba",
      description:
        "CFTV para escritórios em Curitiba e Região: recepção, acessos e áreas internas com gravação e acesso remoto. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para escritórios",
      description:
        "Instalação de câmeras de segurança para escritórios e empresas em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para escritórios em Curitiba e Região",
    intro:
      "Em escritórios, o CFTV registra a recepção, os acessos e as áreas de circulação, ajudando a proteger equipamentos, documentos e pessoas. O projeto equilibra a segurança com a rotina e a privacidade da equipe.",
    sections: [
      {
        title: "Onde instalar câmeras em escritórios",
        bullets: [
          "Recepção e entrada",
          "Corredores e áreas de circulação",
          "Entradas de salas com equipamentos ou documentos importantes",
          "Garagem e estacionamento, quando houver",
          "Acessos de serviço e saídas",
        ],
      },
      {
        title: "Pontos de atenção",
        bullets: [
          "Informar quem circula no local sobre o monitoramento é uma boa prática",
          "Evitar áreas de privacidade, como banheiros e vestiários",
          "Restringir o acesso às imagens a pessoas autorizadas",
          "Observar a LGPD no tratamento das imagens",
        ],
      },
      {
        title: "Escritório próprio ou sala em prédio comercial",
        intro:
          "Em escritórios dentro de edifícios comerciais, a instalação deve respeitar as regras do prédio, como as de uso de áreas comuns e de cabeamento. Vale verificá-las com a administração antes de instalar.",
      },
    ],
    stepsTitle: "Como solicitar CFTV para escritório",
    steps: homeSteps,
    callout: {
      title: "Sem investimento inicial?",
      text: `O aluguel de câmeras parte de ${price} ${unit}, com equipamentos, instalação e manutenção incluídos.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: "Quantas câmeras um escritório pequeno precisa?",
        a: "Depende do layout e dos acessos. Muitos escritórios pequenos começam pela entrada e pela recepção. A quantidade é indicada no orçamento sem custo.",
      },
      {
        q: "Posso ver as câmeras do escritório pelo celular?",
        a: "Sim, o acesso remoto pode ser configurado, conforme o projeto.",
      },
      {
        q: "Alugar câmeras é indicado para empresas?",
        a: `O aluguel parte de ${price} ${unit}, sem investimento inicial, e inclui equipamentos, instalação e manutenção. Esse modelo atende empresas que preferem não investir capital em equipamentos.`,
      },
      {
        q: "Vocês atendem escritórios fora de Curitiba?",
        a: `Atendemos Curitiba e a Região Metropolitana, incluindo ${cityNames}.`,
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para escritório",
    ctaText:
      "Informe o tamanho do escritório e os acessos. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para escritório.",
  },

  "/segmentos/obras/": {
    path: "/segmentos/obras/",
    navLabel: "Obras",
    meta: {
      title: "CFTV para Obras em Curitiba | CFTV Curitiba",
      description:
        "CFTV para obras em Curitiba e Região: vigilância de canteiros e materiais, inclusive com câmera solar 4G. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para obras",
      description:
        "Instalação de câmeras de segurança para obras e canteiros em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para obras em Curitiba e Região",
    intro:
      "Obras reúnem materiais, ferramentas e equipamentos de valor, muitas vezes sem energia definitiva ou internet no local. O CFTV ajuda a vigiar o canteiro e a registrar entradas, saídas e ocorrências durante a execução.",
    sections: [
      {
        title: "Onde instalar câmeras em uma obra",
        bullets: [
          "Portão de entrada e saída de materiais e veículos",
          "Depósitos de materiais e almoxarifado",
          "Áreas de guarda de ferramentas e equipamentos",
          "Perímetro do canteiro",
          "Pontos de circulação interna, conforme a fase da obra",
        ],
      },
      {
        title: "Desafios do canteiro",
        bullets: [
          "Energia provisória ou inexistente",
          "Falta de internet no local",
          "Mudança de layout conforme a obra avança",
          "Poeira, chuva e risco de vandalismo, que exigem equipamento e instalação adequados",
        ],
      },
      {
        title: "Soluções para obras",
        bullets: [
          "Câmeras solares 4G, que dispensam energia e internet cabeada",
          "Câmeras IP ou HD analógicas, quando há energia e cabeamento",
          "Câmeras PTZ para cobrir áreas abertas amplas",
          "Aluguel de câmeras, quando a necessidade é temporária",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para obra",
    steps: homeSteps,
    callout: {
      title: "Sem energia nem internet?",
      text: "A câmera solar 4G funciona com painel solar e bateria e transmite a imagem pela rede de celular.",
      linkLabel: "Conheça a câmera solar 4G",
      linkPath: "/cameras/camera-solar-4g/",
    },
    faq: [
      {
        q: "É possível monitorar uma obra sem energia elétrica?",
        a: "Sim, com câmeras solares 4G, que usam painel solar e bateria. A viabilidade depende da incidência de sol e do sinal de celular no local.",
      },
      {
        q: "As câmeras podem mudar de lugar quando a obra avança?",
        a: "Depende da solução. Câmeras solares 4G, por exemplo, não dependem de cabeamento, o que facilita a mudança de posição. As condições de cada contrato são apresentadas no orçamento.",
      },
      {
        q: "Posso ver as imagens da obra pelo celular?",
        a: "Sim, o acesso remoto pode ser configurado, conforme o projeto.",
      },
      {
        q: "Vocês atendem obras em outras cidades da região?",
        a: `Atendemos Curitiba e a Região Metropolitana, incluindo ${cityNames}.`,
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para obra",
    ctaText:
      "Informe o local, se há energia e internet e por quanto tempo precisa do monitoramento. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para obra.",
  },

  "/segmentos/comercios/": {
    path: "/segmentos/comercios/",
    navLabel: "Comércios",
    meta: {
      title: "CFTV para Comércios em Curitiba | CFTV Curitiba",
      description:
        "CFTV para comércios em Curitiba e Região: caixa, estoque e entrada de clientes com gravação e acesso remoto. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para comércios",
      description:
        "Instalação de câmeras de segurança para lojas e comércios em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para comércios em Curitiba e Região",
    intro:
      "Em lojas, mercados e outros pontos de venda, o CFTV registra o caixa, a circulação de clientes, o estoque e as entradas. As imagens ajudam a esclarecer ocorrências e a proteger mercadorias e a equipe.",
    sections: [
      {
        title: "Onde instalar câmeras no comércio",
        bullets: [
          "Entrada e saída de clientes",
          "Caixa e balcão de atendimento",
          "Corredores e áreas de exposição de produtos",
          "Estoque e depósito",
          "Área externa e fachada",
        ],
      },
      {
        title: "Pontos de atenção",
        bullets: [
          "Imagem com detalhe suficiente no caixa e na entrada",
          "Iluminação do estabelecimento, que influencia a qualidade da imagem",
          "Acesso às imagens restrito a pessoas autorizadas",
          "Observar a LGPD e informar clientes e funcionários sobre o monitoramento",
        ],
      },
      {
        title: "Soluções que costumam compor o projeto",
        bullets: [
          "Câmeras IP ou HD analógicas nas áreas internas",
          "Câmeras Wi-Fi em lojas pequenas e pontos de difícil cabeamento",
          "Câmeras com inteligência artificial para alertas e contagem de pessoas, em modelos compatíveis",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para comércio",
    steps: homeSteps,
    callout: {
      title: "Sem investimento inicial?",
      text: `O aluguel de câmeras parte de ${price} ${unit}, com equipamentos, instalação e manutenção incluídos.`,
      linkLabel: "Conheça o aluguel de câmeras",
      linkPath: "/servicos/aluguel-de-cameras-de-seguranca/",
    },
    faq: [
      {
        q: "Quantas câmeras uma loja pequena precisa?",
        a: "Depende do layout e dos pontos de interesse. Muitas lojas começam pela entrada, pelo caixa e pelo estoque. A quantidade é indicada no orçamento sem custo.",
      },
      {
        q: "Dá para ver o caixa com clareza?",
        a: "O projeto define o tipo de câmera, o ângulo e a iluminação adequados para o ponto. Esses detalhes são tratados no orçamento.",
      },
      {
        q: "Posso acompanhar a loja pelo celular?",
        a: "Sim, o acesso remoto pode ser configurado, conforme o projeto.",
      },
      {
        q: "Alugar câmeras é indicado para comércio?",
        a: `O aluguel parte de ${price} ${unit}, sem investimento inicial, e inclui equipamentos, instalação e manutenção. Esse modelo atende quem prefere não investir capital em equipamentos.`,
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para comércio",
    ctaText:
      "Informe o tipo de loja e o tamanho do espaço. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para meu comércio.",
  },

  "/segmentos/industrias/": {
    path: "/segmentos/industrias/",
    navLabel: "Indústrias",
    meta: {
      title: "CFTV para Indústrias em Curitiba | CFTV Curitiba",
      description:
        "CFTV para indústrias em Curitiba e Região: perímetro, docas e áreas de produção com gravação e acesso remoto. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para indústrias",
      description:
        "Instalação e manutenção de CFTV para indústrias e galpões em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para indústrias em Curitiba e Região",
    intro:
      "Em indústrias e galpões, o CFTV cobre perímetro, portarias, docas e áreas de produção e estoque, que costumam ser amplas e ter fluxo constante de veículos e pessoas. O projeto considera a extensão do local e as condições do ambiente.",
    sections: [
      {
        title: "Onde instalar câmeras em indústrias",
        bullets: [
          "Perímetro e muros",
          "Portaria e controle de veículos",
          "Docas de carga e descarga",
          "Áreas de produção e estoque",
          "Pátios e estacionamentos",
        ],
      },
      {
        title: "Particularidades do projeto",
        bullets: [
          "Áreas amplas, que exigem planejamento de cabeamento e de rede",
          "Ambientes com poeira, umidade ou variações de temperatura, que pedem equipamentos adequados",
          "Iluminação variável entre turnos e áreas externas",
          "Gravação centralizada, com acompanhamento pela portaria ou por uma central",
        ],
      },
      {
        title: "Soluções que costumam compor o projeto",
        bullets: [
          "Câmeras IP em áreas amplas e com rede estruturada",
          "Câmeras PTZ para pátios e perímetro",
          "Leitura de placas (LPR) em portarias",
          "Câmeras com inteligência artificial para alertas no perímetro",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para indústria",
    steps: homeSteps,
    callout: {
      title: "Sistema sempre funcionando",
      text: `O contrato de manutenção prevê visitas ${visits} e atendimento ${resp}.`,
      linkLabel: "Conheça o contrato de manutenção",
      linkPath: "/servicos/contrato-de-manutencao-de-cftv/",
    },
    faq: [
      {
        q: "É possível monitorar um galpão grande com poucas câmeras?",
        a: "A quantidade depende da área, do layout e do nível de detalhe desejado. Câmeras PTZ ajudam em áreas abertas, mas o projeto define a combinação adequada.",
      },
      {
        q: "As câmeras suportam poeira e umidade?",
        a: "Existem câmeras com proteção para ambientes mais exigentes. O tipo adequado é definido no projeto, conforme as condições do local.",
      },
      {
        q: "Dá para registrar os veículos que entram e saem?",
        a: "Com a leitura de placas (LPR), os veículos podem ser registrados na entrada e na saída. A integração com outros sistemas depende da compatibilidade e é verificada no orçamento.",
      },
      {
        q: "Vocês fazem manutenção em sistema industrial já instalado?",
        a: "Informe pelo WhatsApp o equipamento e o problema. A viabilidade do atendimento é confirmada no orçamento.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para indústria",
    ctaText:
      "Informe o tamanho da área e os pontos de acesso. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para indústria.",
  },

  "/segmentos/clinicas/": {
    path: "/segmentos/clinicas/",
    navLabel: "Clínicas e consultórios",
    meta: {
      title: "CFTV para Clínicas e Consultórios | CFTV Curitiba",
      description:
        "CFTV para clínicas e consultórios em Curitiba e Região: recepção e acessos com atenção à privacidade dos pacientes. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para clínicas e consultórios",
      description:
        "Instalação de câmeras de segurança para clínicas, consultórios e laboratórios em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para clínicas e consultórios em Curitiba e Região",
    intro:
      "Em clínicas, consultórios e laboratórios, o CFTV registra recepção, acessos e áreas de circulação, ajudando a proteger pessoas e patrimônio. Como o ambiente envolve pacientes e informações sensíveis, a privacidade deve ser prioridade no projeto.",
    sections: [
      {
        title: "Onde instalar câmeras em clínicas e consultórios",
        bullets: [
          "Entrada e recepção",
          "Corredores e áreas de circulação",
          "Estacionamento e acessos de serviço",
          "Entradas de áreas restritas, como farmácia e almoxarifado",
        ],
      },
      {
        title: "Cuidados com privacidade",
        intro: "Pacientes e informações sensíveis exigem cuidado especial.",
        bullets: [
          "Salas de consulta, de procedimentos, vestiários e banheiros não devem ser monitorados",
          "O enquadramento deve evitar captar pacientes além do necessário",
          "O acesso às imagens deve ser restrito a pessoas autorizadas",
          "A LGPD deve ser observada, e é recomendável consultar um profissional jurídico",
        ],
      },
      {
        title: "Soluções que costumam compor o projeto",
        bullets: [
          "Câmeras IP ou HD analógicas na recepção e nos corredores",
          "Câmeras posicionadas para evitar áreas de atendimento",
          "Leitura de placas (LPR) em estacionamentos, quando houver",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para clínica ou consultório",
    steps: homeSteps,
    callout: {
      title: "Quer o sistema completo?",
      text: "A instalação de CFTV reúne câmeras, gravador, cabeamento e configuração.",
      linkLabel: "Conheça a instalação de CFTV",
      linkPath: "/servicos/instalacao-de-cftv/",
    },
    faq: [
      {
        q: "Posso instalar câmeras dentro dos consultórios?",
        a: "Em geral, não é recomendado monitorar salas de consulta e de procedimentos, por causa da privacidade de pacientes e profissionais. Os locais são definidos no projeto, com atenção à LGPD.",
      },
      {
        q: "Quantas câmeras uma clínica precisa?",
        a: "Depende do tamanho, dos acessos e das áreas de circulação. A quantidade é indicada no orçamento sem custo.",
      },
      {
        q: "Quem pode ver as imagens da clínica?",
        a: "O acesso deve ser restrito a pessoas autorizadas pela clínica. Recomenda-se definir e registrar quem pode consultar e exportar as imagens.",
      },
      {
        q: "Dá para acompanhar a recepção pelo celular?",
        a: "Sim, o acesso remoto pode ser configurado, conforme o projeto.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para clínica ou consultório",
    ctaText:
      "Informe o tamanho do espaço e os acessos. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para clínica ou consultório.",
  },

  "/segmentos/estacionamentos/": {
    path: "/segmentos/estacionamentos/",
    navLabel: "Estacionamentos",
    meta: {
      title: "CFTV para Estacionamentos em Curitiba | CFTV Curitiba",
      description:
        "CFTV para estacionamentos em Curitiba e Região: entradas, saídas e vagas, com opção de leitura de placas. Orçamento sem custo pelo WhatsApp.",
    },
    schemaService: {
      name: "Instalação de CFTV para estacionamentos",
      description:
        "Instalação de câmeras de segurança e leitura de placas para estacionamentos em Curitiba e Região Metropolitana.",
    },
    h1: "CFTV para estacionamentos em Curitiba e Região",
    intro:
      "Em estacionamentos, o CFTV registra entradas, saídas, circulação e vagas, apoiando a apuração de ocorrências com veículos. A leitura de placas (LPR) pode complementar o sistema, registrando a passagem de cada veículo.",
    sections: [
      {
        title: "Onde instalar câmeras em estacionamentos",
        bullets: [
          "Entrada e saída de veículos",
          "Cancelas e guaritas",
          "Corredores de circulação",
          "Áreas de vagas e rampas",
          "Acessos de pedestres e escadas",
        ],
      },
      {
        title: "Pontos de atenção",
        bullets: [
          "Iluminação, especialmente à noite e em subsolos",
          "Posição e ângulo das câmeras nas faixas de entrada e saída",
          "Armazenamento suficiente para o tempo de guarda definido",
          "Observar a LGPD no uso de imagens e de dados de placas",
        ],
      },
      {
        title: "Soluções que costumam compor o projeto",
        bullets: [
          "Câmeras IP ou HD analógicas nos corredores e nas vagas",
          "Câmeras PTZ em pátios externos amplos",
          "Leitura de placas (LPR) nas entradas e saídas",
          "Câmeras com inteligência artificial para detectar pessoas e veículos",
        ],
      },
    ],
    stepsTitle: "Como solicitar CFTV para estacionamento",
    steps: homeSteps,
    callout: {
      title: "Registrar cada veículo?",
      text: "A leitura de placas (LPR) registra a passagem dos veículos com data e horário.",
      linkLabel: "Conheça a leitura de placas",
      linkPath: "/cameras/leitura-de-placas-lpr/",
    },
    faq: [
      {
        q: "Dá para registrar a placa de cada veículo?",
        a: "Sim, com a leitura de placas (LPR) instalada nas entradas e saídas. O resultado depende do ângulo, da iluminação e da velocidade de passagem.",
      },
      {
        q: "Como funciona a gravação em subsolos?",
        a: "O projeto considera a iluminação e o tipo de câmera adequados ao ambiente. As condições do local são avaliadas no orçamento.",
      },
      {
        q: "Quanto tempo as imagens ficam armazenadas?",
        a: "Depende da capacidade de armazenamento, da resolução e da quantidade de câmeras. O tempo é dimensionado no projeto, conforme a necessidade.",
      },
      {
        q: "Posso acompanhar o estacionamento pelo celular?",
        a: "Sim, o acesso remoto pode ser configurado, conforme o projeto.",
      },
    ],
    ctaTitle: "Peça o orçamento de CFTV para estacionamento",
    ctaText:
      "Informe o tamanho do estacionamento e o fluxo de veículos. O orçamento é sem custo.",
    whatsappMessage:
      "Olá! Vim pelo site CFTV Curitiba e gostaria de um orçamento de CFTV para estacionamento.",
  },
};
