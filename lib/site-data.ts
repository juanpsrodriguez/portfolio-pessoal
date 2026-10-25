const whatsappMessage = "Olá, Juan! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export const siteConfig = {
  name: "Juan Rodriguez",
  url: "https://portfolio-pessoal-ten-virid.vercel.app",
  location: "Niterói/RJ",
  phoneDisplay: "+55 21 99834-2574",
  phoneInternational: "5521998342574",
  email: "jrodriguez@id.uff.br",
  github: "https://github.com/juanpsrodriguez",
  whatsappMessage,
  whatsappUrl: `https://wa.me/5521998342574?text=${encodeURIComponent(whatsappMessage)}`,
} as const;

export type ProjectCategory = "web" | "jogos" | "apps" | "visual";

export const projects = [
  {
    slug: "sabor-e-brasa",
    name: "Sabor e Brasa",
    category: "web" as ProjectCategory,
    segment: "Lanchonete e churrasco · Projeto demonstrativo",
    description:
      "Website para apresentar o Sabor e Brasa, com cardápio digital, ofertas, opções dos produtos, localização e caminhos diretos para pedidos pelo iFood.",
    visualDirection:
      "Identidade marcante em preto, branco e azul elétrico, fotografias gastronômicas e navegação centrada no cardápio.",
    url: "https://sabor-e-brasa-2.vercel.app/",
    urlLabel: "sabor-e-brasa-2.vercel.app",
    image: "/images/projects/sabor-e-brasa.webp",
  },
  {
    slug: "vitaly-padaria-bistro",
    name: "Vitaly Padaria Bistrô",
    category: "web" as ProjectCategory,
    segment: "Padaria & bistrô · Projeto demonstrativo",
    description:
      "Projeto demonstrativo de site para uma padaria e bistrô em Itacoatiara, com foco em apresentação gastronômica, cardápio digital, ambiente e experiência responsiva.",
    visualDirection:
      "Direção visual acolhedora e gastronômica, com tons quentes, fotografia real do estabelecimento e composição editorial.",
    url: "https://vitaly-phi.vercel.app/",
    urlLabel: "vitaly-phi.vercel.app",
    image: "/images/projects/vitaly-padaria-bistro.webp",
  },
] as const;

export const workAreas = [
  { id: "01", title: "Desenvolvimento web", description: "Sites institucionais, landing pages, portfólios e vitrines digitais responsivas, do visual à publicação.", capabilities: ["Interfaces responsivas", "Integração com WhatsApp", "Publicação e manutenção"] },
  { id: "02", title: "Jogos e protótipos", description: "Experimentos em Unity com cenas, interfaces, mecânicas e sistemas para projetos de PC e mobile.", capabilities: ["Unity", "Mecânicas de jogo", "Interfaces e cenas"] },
  { id: "03", title: "Apps e software", description: "Ferramentas próprias, utilitários, automações e interfaces que resolvem necessidades específicas.", capabilities: ["Protótipos", "Ferramentas próprias", "Automação"] },
  { id: "04", title: "Criação visual", description: "Edição de vídeo, tratamento de imagens e composição visual para dar consistência a cada projeto.", capabilities: ["Adobe Photoshop", "Sony Vegas", "Edição e composição"] },
] as const;

export const toolGroups = [
  { label: "Web", tools: ["Next.js", "React", "TypeScript", "HTML", "CSS", "Git", "GitHub", "Vercel"] },
  { label: "Jogos", tools: ["Unity"] },
  { label: "Visual", tools: ["Adobe Photoshop", "Sony Vegas"] },
] as const;
