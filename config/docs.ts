export interface NavLink {
  label: string
  href: string
}

export interface CtaLink extends NavLink {
  mobileLabel?: string
}

export interface HeaderConfig {
  nav: NavLink[]
  ctas: CtaLink[]
}

export interface FooterConfig {
  address: string
  email: string
  phone: { display: string; href: string }
  responsavelTecnico: string
  crm: string
  companyName: string
}

export interface HeroConfig {
  image: { desktop: string; mobile: string }
  heading: string
  subheading: string
  ctas: [primary: CtaLink, secondary: CtaLink]
}

export interface RichTextPart {
  text: string
  bold?: boolean
}

export interface AboutCard {
  title: string
  description: string
}

export interface AboutConfig {
  intro: RichTextPart[]
  cards: AboutCard[]
}

export interface RtBioPart {
  text: string
  emphasis?: boolean
}

export interface RtConfig {
  photo: string
  name: string
  credentials: string
  role: string[]
  bio: RtBioPart[][]
}

export interface DonorSectionConfig {
  heading: [string, string]
  paragraph: string
  highlight: string
}

export interface ClinicStep {
  number: string
  description: string
}

export interface ClinicSectionConfig {
  heading: [string, string]
  paragraph: string
  steps: ClinicStep[]
}

export const docsConfig = {
  hero: {
    image: {
      desktop: "/assets/images/banner-main-desktop.png",
      mobile: "/assets/images/banner-main-mobile.png",
    },
    heading: "Banco de óvulos",
    subheading: "O DOE conecta pacientes a doadoras",
    ctas: [
      { label: "Quero ser uma clínica parceira", href: "#form-clinica" },
      { label: "Quero ser uma doadora de óvulos", href: "#form-doadora" },
    ],
  } satisfies HeroConfig,

  about: {
    intro: [
      { text: "O DOE é um banco de óvulos criado para " },
      { text: "auxiliar pacientes no sonho da maternidade", bold: true },
      {
        text: ". Com cuidado, ética e segurança, disponibilizamos óvulos doados para ",
      },
      { text: "clínicas de reprodução assistida parceiras", bold: true },
      {
        text: " que oferecem tratamentos a mulheres que enfrentam dificuldades para engravidar com óvulos próprios.",
      },
    ],
    cards: [
      {
        title: "Fenomatch",
        description:
          "Em cada jornada, contamos com o Fenomatch, uma plataforma inovadora que usa Inteligência Artificial para realizar a análise da biometria facial das receptoras e a busca pelas doadoras mais compatíveis no nosso banco de dados. Dessa forma, é possível aproximar as características físicas da doadora e da receptora.",
      },
      {
        title: "Triagem rigorosa",
        description:
          "No DOE, todos os óvulos doados passam por uma triagem rigorosa, realizada por uma equipe especializada com base em critérios médicos e genéticos. As doadoras também fazem uma avaliação criteriosa de saúde, incluindo avaliações clínicas e exames laboratoriais.",
      },
    ],
  } satisfies AboutConfig,

  rt: {
    photo: "/assets/images/dra-ana-paula-aquino.png",
    name: "Dra. Ana Paula Aquino",
    credentials: "CRM-SP 128.884 | RQE: 863.811",
    role: [
      "Especialista em Reprodução Assistida e",
      "Coordenadora Nacional do Programa DOE",
    ],
    bio: [
      [
        {
          text: "A Dra. Ana Paula Aquino é formada em medicina pela Universidade Federal de São Paulo (UNIFESP/EPM), com residência médica em Obstetrícia e Ginecologia e especialização em reprodução humana. Com quase 20 anos de experiência, é a responsável técnica e coordenadora médica do DOE.",
        },
      ],
      [
        { text: "A doação de óvulos no Brasil é regulamentada pela " },
        { text: "Resolução CFM n° 2.320/2022", emphasis: true },
        {
          text: " do Conselho Federal de Medicina, que estabelece critérios éticos e de segurança.\nTodo o processo ocorre, obrigatoriamente, de forma anônima, voluntária e sem fins lucrativos. Portanto, a identidade das doadoras e receptoras é mantida em sigilo absoluto.",
        },
      ],
    ],
  } satisfies RtConfig,

  donor: {
    heading: ["Quer ser uma", "doadora de óvulos ?"],
    paragraph:
      "Doar óvulos é um ato de generosidade que pode ajudar famílias a realizarem o sonho de gerar uma vida. Mais do que um procedimento médico, a doação de óvulos é um gesto que representa esperança para mulheres com dificuldade para engravidar com óvulos próprios.",
    highlight: "Preencha o formulário e seja uma doadora!",
  } satisfies DonorSectionConfig,

  clinic: {
    heading: ["Como se tornar uma", "clínica parceira ?"],
    paragraph:
      "O processo para se tornar uma clínica parceira do DOE é simples e conta com suporte especializado em todas as etapas:",
    steps: [
      {
        number: "1",
        description:
          "A clínica de reprodução assistida entra em contato com o DOE e apresenta o caso da paciente receptora.",
      },
      {
        number: "2",
        description:
          "Realizamos a busca e a compatibilização da doadora por meio do Fenomatch.",
      },
      {
        number: "3",
        description:
          "A clínica parceira recebe o perfil da doadora compatível e confirma a continuidade do procedimento.",
      },
      {
        number: "4",
        description:
          "A equipe especializada do DOE acompanha todo o processo junto à equipe da clínica parceira.",
      },
    ],
  } satisfies ClinicSectionConfig,

  header: {
    nav: [
      { label: "O que é o DOE?", href: "#sobre" },
      { label: "Como funciona?", href: "#como-funciona" },
    ],
    ctas: [
      {
        label: "Quero ser uma clínica parceira",
        mobileLabel: "Parceiros",
        href: "#form-clinica",
      },
      {
        label: "Quero ser uma doadora",
        mobileLabel: "Doadores",
        href: "#form-doadora",
      },
    ],
  } satisfies HeaderConfig,

  footer: {
    address: "R. Dr. Eduardo Amaro, 152 - 8º Andar - Paraíso, São Paulo - SP, 04104-080",
    email: "contato@doeovulos.com.br",
    phone: {
      display: "telefone: +55 11 97296-3293",
      href: "tel:+5511972963293",
    },
    responsavelTecnico: "Responsável Técnico: Dra. Ana Paula",
    crm: "CRM-SP 128.884 | RQE: 863.811",
    companyName: "DOE Óvulos",
  } satisfies FooterConfig,
}
