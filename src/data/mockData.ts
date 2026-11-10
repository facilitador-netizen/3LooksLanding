import { JourneyStep, Modality, Professional, Project } from '../types';

export const HERO_DATA = {
  headline: 'Seu espaço não apenas bonito, mas verdadeiramente seu.',
  subtext:
    'Três visões complementares que transformam projetos de arquitetura e interiores em espaços com identidade, alma e equilíbrio.',
  services: [
    {
      title: 'Curadoria Autoral',
      description: 'Seleção minuciosa de design autoral, antiquário e peças afetivas que contam a sua história.',
    },
    {
      title: 'Gestão de Fornecedores',
      description: 'Cotação, cronograma e negociação direta com marcenarias, tapeçarias e ateliês de excelência.',
    },
    {
      title: 'Produção Final & Styling',
      description: 'Composição presencial de arte, tecidos, iluminação e detalhes na entrega pronta para morar.',
    },
  ],
  trioImage: '/assets/aistudio/image_90d452f6.png',
};

export const DIFERENCIAIS_DATA = {
  title: 'Você não compra decoração. Você compra tranquilidade.',
  subtitle:
    'Aqui, a ambientação não é apenas a escolha de peças. É curadoria. É composição. É equilíbrio. Transformar um imóvel não precisa gerar desgaste.',
  antesDepoisImage: '/src/assets/images/antes_depois_espaco_1794077664945.jpg',
  modeloConvencional: [
    'Múltiplos contatos dispersos exigindo cobrança de prazos e alinhamento diário do morador.',
    'Compras isoladas e impulsivas que geram desarmonia estética e erros de escala no espaço.',
    'Orçamento imprevisível com retrabalhos, fretes duplicados e custos ocultos ao longo dos meses.',
    'Caixas entregues na sala sem ninguém para pendurar arte, regular luz ou fazer a arrumação final.',
    'Sensação de sobrecarga e meses de ansiedade até sentir que o imóvel está habitável.',
  ],
  experienciaTresOlhares: [
    'Canal único de diálogo com três profissionais que orquestram toda a cadeia de parceiros.',
    'Curadoria autoral intencional: cada obra, tecido e móvel dialoga com proporção e alma.',
    'Planilha orçamentária única, preços negociados com fornecedores homologados e cronograma firme.',
    'Produção presencial completa: iluminação afinada, arte alinhada, tecidos e camas prontas.',
    'Tranquilidade absoluta de abrir a porta e entrar em um refúgio acolhedor e com sentido.',
  ],
};

export const MODALIDADES_DATA: Modality[] = [
  {
    id: 'curadoria-autoral',
    number: '01',
    title: 'Curadoria Autoral & Garimpo',
    tagline: 'Para quem busca peças únicas e significado estético.',
    description:
      'Pesquisa e seleção dedicada de mobiliário brasileiro moderno e contemporâneo, obras de arte, luminárias assinadas, cerâmicas e tapeçarias.',
    deliverables: [
      'Caderno de curadoria com especificações detalhadas',
      'Visitas guiadas a galerias, ateliês e feiras de antiquário',
      'Negociação direta com galeristas e artesãos',
      'Alinhamento dimensional e harmonia cromática',
    ],
  },
  {
    id: 'styling-ambientacao',
    number: '02',
    title: 'Styling & Ambientação',
    tagline: 'Para elevar a atmosfera de imóveis já construídos ou decorados.',
    description:
      'Intervenção estética focada em camadas sensoriais: tapeçaria, almofadas sob medida, cortinas, cerâmica, livros e iluminação pontual.',
    deliverables: [
      'Levantamento das peças existentes a valorizar ou recontextualizar',
      'Paleta de texturas, tecidos e elementos botânicos',
      'Lista de compras com lojas e parceiros selecionados',
      'Dia de styling presencial com arrumação e composição final',
    ],
    isPopular: true,
  },
  {
    id: 'producao-completa',
    number: '03',
    title: 'Produção Completa & Turnkey',
    tagline: 'A experiência integral de ponta a ponta sem qualquer desgaste.',
    description:
      'Planejamento do conceito até a entrega pronta para morar. Nossa equipe cuida de toda a especificação, compras, logística, recebimento e staging.',
    deliverables: [
      'Conceito estético e memorial completo de ambientação',
      'Gestão orçamentária e centralização de pedidos',
      'Recebimento, conferência e guarda técnica de materiais',
      'Montagem presencial com iluminação, quadros e detalhes sensoriais',
    ],
  },
  {
    id: 'transformacao-ambientes',
    number: '04',
    title: 'Transformação de Ambientes',
    tagline: 'Renovação expressiva de impacto sem reformas estruturais invasivas.',
    description:
      'Repaginação visual completa de livings, suítes ou varandas através de novas cores, revestimentos leves decorativos, marcenaria de acabamento e curadoria.',
    deliverables: [
      'Estudo de layout e circulação funcional',
      'Projeto de pintura, texturas de parede e iluminação decorativa',
      'Especificação de marcenaria solta e planejada de apoio',
      'Produção final e ambientação acolhedora',
    ],
    scopeNote:
      'Nota técnica de escopo: A Três Olhares foca estritamente em curadoria, ambientação, marcenaria fina e styling. A gestão de obras civis e intervenções estruturais pesadas ainda precisa de confirmação pela equipe e não é anunciada como serviço validado.',
  },
];

export const JORNADA_DATA: JourneyStep[] = [
  {
    step: '01',
    title: 'Imersão & Diagnóstico de Repertório',
    subtitle: 'Ouvir e compreender o que torna seu lar único.',
    description:
      'Encontro inicial para investigar hábitos, afetos, memórias e necessidades da sua rotina. Analisamos o espaço físico, iluminação natural e o potencial de cada cômodo.',
    deliverables: ['Briefing aprofundado', 'Diagnóstico sensorial do imóvel', 'Definição de cronograma e diretrizes'],
  },
  {
    step: '02',
    title: 'Curadoria Autoral & Caderno Conceitual',
    subtitle: 'Três visões artísticas refinando cada escolha.',
    description:
      'Desenvolvemos a proposta de ambientação com moodboard de texturas, seleção de mobiliário, amostras de tecidos, paleta de cores e indicação de peças de arte.',
    deliverables: ['Caderno conceitual completo', 'Plantas de layout de ambientação', 'Orçamento consolidado e transparente'],
  },
  {
    step: '03',
    title: 'Gestão de Fornecedores & Logística',
    subtitle: 'Nenhum atrito entre fornecedores e sua rotina.',
    description:
      'Conduzimos as cotações, prazos de entrega e negociações com marcenarias, tapeceiros, vidraçarias e lojas de design. Tudo sincronizado para o grande dia.',
    deliverables: ['Gestão de pedidos e notas fiscais', 'Acompanhamento rigoroso de prazos', 'Armazenamento e conferência prévia'],
  },
  {
    step: '04',
    title: 'Produção Final & Staging no Local',
    subtitle: 'O dia em que o espaço ganha alma.',
    description:
      'Nossa equipe assume o imóvel para a produção presencial. Quadros são pendurados com precisão milimétrica, tapetes ajustados, iluminação calibrada, livros e arranjos postos.',
    deliverables: ['Entrega pronta para morar e celebrar', 'Guia de cuidados com peças e tecidos', 'Espaço com identidade e sentido'],
  },
];

export const GESTAO_OBRAS_DATA = {
  question: 'Vocês farão gestão de obras?',
  answerTitle: 'Foco exclusivo em curadoria, marcenaria fina e produção final.',
  description:
    'A Três Olhares não assume a gestão de obras civis estruturais (alvenaria, quebra de paredes ou demolição). Nosso papel é transformar o ambiente através da sensibilidade estética, proporção, mobiliário e iluminação acolhedora.',
  civilWorksResolution:
    'Caso o imóvel necessite de intervenções civis prévias, indicamos nossos parceiros técnicos ou dialogamos diretamente com a sua equipe de engenharia, assumindo o projeto a partir da fase de acabamentos.',
};

export const QUEM_SOMOS_DATA = {
  title: 'Quem Somos',
  institutionalText:
    'A Três Olhares nasce do encontro de três profissionais com trajetórias diferentes, repertórios distintos e uma paixão em comum: transformar projetos de arquitetura e interiores em espaços que tenham presença, identidade e, sobretudo, sentido.',
  featuredImage: '/assets/aistudio/image_90d452f6.png',
  professionals: [
    {
      id: 'prof-1',
      name: 'Curadoria & Arte Autoral',
      role: 'Sócia Fundadora · Curadora de Design & Arte',
      focusArea: 'Pesquisa de Mobiliário Brasileiro, Antiquário e Arte Contemporânea',
      image: '/assets/aistudio/image_90d452f6.png',
      bio: 'Com olhar treinado no garimpo de peças raras e diálogo com artesãos e artistas contemporâneos, é responsável por imprimir narrativa e exclusividade em cada seleção.',
      isBioPending: true,
    },
    {
      id: 'prof-2',
      name: 'Arquitetura de Interiores & Composição',
      role: 'Sócia Fundadora · Arquiteta & Diretora Espacial',
      focusArea: 'Layout, Fluidez de Circulação, Proporções e Luminotécnica',
      image: '/src/assets/images/portfolio_residencia_alto_1794077665458.jpg',
      bio: 'Atua no equilíbrio volumétrico e na harmonia entre a arquitetura construída e os objetos que a habitam, garantindo conforto visual, acústico e funcional.',
      isBioPending: true,
    },
    {
      id: 'prof-3',
      name: 'Produção, Fornecedores & Styling',
      role: 'Sócia Fundadora · Produtora Executiva & Stylist',
      focusArea: 'Gestão de Parceiros, Camadas Têxteis e Encenação Final no Local',
      image: '/src/assets/images/portfolio_apartamento_arte_1794077666424.jpg',
      bio: 'Mestria na coordenação de prazos com ateliês de alta marcenaria e na sensibilidade tátil de tecidos, arranjos e iluminação cênica na entrega presencial.',
      isBioPending: true,
    },
  ] as Professional[],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'residencia-alto-pinheiros',
    title: 'Residência Alto de Pinheiros',
    subtitle: 'Harmonia entre o modernismo brasileiro e a luminosidade natural',
    category: 'organico',
    categoryLabel: 'Afetivo & Orgânico',
    location: 'São Paulo, SP',
    year: '2025',
    coverImage: '/src/assets/images/portfolio_residencia_alto_1794077665458.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_residencia_alto_1794077665458.jpg',
      '/src/assets/images/portfolio_apartamento_arte_1794077666424.jpg',
      '/src/assets/images/portfolio_quarto_refugio_1794077666283.jpg',
    ],
    description:
      'Uma residência pensada para acolher a coleção de livros de arte e a paixão dos moradores pela botânica. Curadoria com poltrona clássica Sergio Rodrigues em couro natural, console estriado em travertino romano e tapete artesanal em pura lã.',
    curationHighlights: [
      'Poltrona Mole em couro conhaque envelhecido',
      'Console sob medida em travertino navona canelado',
      'Coleção de cerâmicas queimadas em alta temperatura por mestres artesãos',
      'Iluminação quente pontual valorizando a textura da argamassa mineral',
    ],
    scope: 'Curadoria Autoral & Produção Final',
  },
  {
    id: 'apartamento-itaim-bibi',
    title: 'Apartamento Arte & Convivência',
    subtitle: 'Composição escultural com mármore, palhinha e arte abstrata',
    category: 'contemporaneo',
    categoryLabel: 'Contemporâneo Brasileiro',
    location: 'Itaim Bibi, SP',
    year: '2025',
    coverImage: '/src/assets/images/portfolio_apartamento_arte_1794077666424.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_apartamento_arte_1794077666424.jpg',
      '/src/assets/images/antes_depois_espaco_1794077664945.jpg',
      '/src/assets/images/portfolio_residencia_alto_1794077665458.jpg',
    ],
    description:
      'Área social integrada onde mesa oval em mármore calacatta dialoga com cadeiras de palhinha austríaca envernizada em preto fosco. A tela texturizada em tons ocres aquece o ambiente, ancorada por pendente cerâmico em terracota.',
    curationHighlights: [
      'Mesa de jantar escultural com pés monolíticos em mármore',
      'Pendente autoral em terracota crua moldada à mão',
      'Pintura em relevo mineral com pigmentos naturais',
      'Linhos orgânicos em tons de areia e oliva suave',
    ],
    scope: 'Produção Completa & Turnkey',
  },
  {
    id: 'refugio-jardins',
    title: 'Suíte Refúgio nos Jardins',
    subtitle: 'Camadas de linho lavado, carvalho branco e luz matinal',
    category: 'minimalismo-quente',
    categoryLabel: 'Minimalismo Quente',
    location: 'Jardins, SP',
    year: '2024',
    coverImage: '/src/assets/images/portfolio_quarto_refugio_1794077666283.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_quarto_refugio_1794077666283.jpg',
      '/src/assets/images/portfolio_residencia_alto_1794077665458.jpg',
      '/src/assets/images/antes_depois_espaco_1794077664945.jpg',
    ],
    description:
      'Um dormitório projetado como santuário de descompressão. Cabeceira baixa em carvalho branco escovado, roupas de cama em puro linho lavado belga e arandelas minimalistas em latão escovado com lâmpadas de temperatura de cor quente (2400K).',
    curationHighlights: [
      'Jogo de cama em linho belga certificado com acabamento lavado',
      'Arandelas direcionais em bronze maciço',
      'Tapete de juta e lã natural antialérgica',
      'Luminária de mesa em cerâmica esmaltada off-white',
    ],
    scope: 'Styling & Ambientação Sensorial',
  },
  {
    id: 'living-transformacao',
    title: 'Living Renovado — Antes & Depois',
    subtitle: 'Revolução luminotécnica, tecidos e marcenaria de apoio',
    category: 'classico-renovado',
    categoryLabel: 'Clássico Renovado',
    location: 'Higienópolis, SP',
    year: '2024',
    coverImage: '/src/assets/images/antes_depois_espaco_1794077664945.jpg',
    galleryImages: [
      '/src/assets/images/antes_depois_espaco_1794077664945.jpg',
      '/src/assets/images/portfolio_apartamento_arte_1794077666424.jpg',
    ],
    description:
      'A transformação completa deste living substituiu o mobiliário escuro e a iluminação fria por uma atmosfera solar, fluida e serena. O sofá em bouclé claro amplia o espaço, enquanto o painel e a tela em tons de ocre trazem profundidade e nobreza.',
    curationHighlights: [
      'Substituição de cortinas pesadas por gaze de linho translúcida',
      'Mesa de centro orgânica em nogueira maciça brasileira',
      'Sofá curvo em bouclé de algodão de toque suave',
      'Luminária de piso arco em latão dourado acetinado',
    ],
    scope: 'Transformação de Ambientes & Curadoria',
  },
];

export const PENDENCIAS_DATA = [
  {
    item: 'Foto oficial das três profissionais',
    status: 'Atualizada com foto do cliente',
    detalhes: 'Foto oficial fornecida pelo cliente (/assets/aistudio/image_90d452f6.png) integrada com sucesso na Home e em Quem Somos, garantindo presença sofisticada, moderna e apelativa para o cliente final.',
  },
  {
    item: 'Confirmação sobre gestão de obras',
    status: 'Esclarecido no site e FAQ',
    detalhes: 'Resposta oficial incorporada na página: a Três Olhares não faz gestão de obras civis pesadas (reforma estrutural/alvenaria/demolição), focando em curadoria autoral, marcenaria fina, luminotécnica decorativa, tecidos e styling.',
  },
  {
    item: 'Formato de conteúdo Convencional x Três Olhares',
    status: 'Atualizado em matriz comparativa',
    detalhes: 'Reestruturado em matriz comparativa dimensão a dimensão com seletor de visualização (Visão Comparativa Detalhada e Colunas Lado a Lado).',
  },
  {
    item: 'Desenho da linha do tempo "Sua Jornada"',
    status: 'Implementado como roadmap arquitetônico',
    detalhes: 'Sua Jornada posicionada logo na sequência de Modalidades com desenho visual contínuo de linha do tempo, marcos de semanas e checkpoints ilustrados.',
  },
  {
    item: 'Minibios individuais das três profissionais',
    status: 'Em aberto para envio',
    detalhes: 'Pilares e papéis técnicos das fundadoras preservados com transparência, aguardando o texto biográfico oficial definitivo redigido por cada sócia.',
  },
];
