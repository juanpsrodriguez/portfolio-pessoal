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
  slug: "gymbro-club",
  name: "Gymbro Club",
  category: "web" as ProjectCategory,
  segment: "Academia · Protótipo conceitual",
  description:
    "Protótipo de site desenvolvido por iniciativa própria para uma academia da Região Oceânica de Niterói, reunindo estrutura, aulas, planos, localização e contato.",
  visualDirection:
    "Atmosfera noturna, contraste azul e preto, fotografia de equipamentos e uma interface inspirada na identidade da academia.",
  url: "https://gymbro-concept.vercel.app/",
  urlLabel: "gymbro-concept.vercel.app",
  image: "/images/projects/gymbro-club.webp",
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
  url: "https://vitaly-fhi.vercel.app/",
  urlLabel: "vitaly-fhi.vercel.app",
  image: "/images/projects/vitaly-padaria-bistro.webp",
},

  {
    slug: "cais-27", name: "Cais 27", category: "web" as ProjectCategory, segment: "Barbearia premium",
    description: "Uma presença digital sóbria e direta, com foco em serviços, atmosfera da marca e agendamento pelo WhatsApp.",
    visualDirection: "Tipografia editorial, tons escuros e detalhes de barbearia contemporânea.",
    url: "https://barbearia-demo-nu.vercel.app/", urlLabel: "barbearia-demo-nu.vercel.app", image: "/images/projects/cais-27.webp",
  },
  {
    slug: "linho-e-sal", name: "Linho & Sal", category: "web" as ProjectCategory, segment: "Restaurante contemporâneo",
    description: "Site conceitual para um restaurante em Icaraí, equilibrando cardápio, reservas e uma direção visual mais sensorial.",
    visualDirection: "Composição clara, fotografia de gastronomia e ritmo editorial leve.",
    url: "https://restaurant-demo-olive-seven.vercel.app/", urlLabel: "restaurant-demo-olive-seven.vercel.app", image: "/images/projects/linho-e-sal.webp",
  },
  {
    slug: "sal-e-lixa", name: "SAL & LIXA", category: "web" as ProjectCategory, segment: "Surf & skate shop",
    description: "Uma vitrine digital com linguagem de rua e litoral, inspirada na Região Oceânica de Niterói.",
    visualDirection: "Contraste alto, recortes fortes e energia de surf/skate sem perder usabilidade.",
    url: "https://surf-skate-shop-demo.vercel.app/", urlLabel: "surf-skate-shop-demo.vercel.app", image: "/images/projects/sal-e-lixa.webp",
  },
{
  slug: "igreja-jesus-vem-breve",
  name: "Igreja Evangélica Jesus Vem Breve",
  category: "web" as ProjectCategory,
  segment: "Igreja",
  description: "Um espaço digital pensado como um livro da igreja, reunindo sua história, fé, cultos, memórias, fotos e informações importantes para a comunidade.",
  visualDirection: "Visual simples, acolhedor e contemplativo, priorizando leitura, memória e identidade da igreja sem linguagem comercial.",
  url: "https://igreja-jesus-vem-breve.vercel.app/",
  urlLabel: "igreja-jesus-vem-breve.vercel.app",
  image: "/images/projects/igreja-jesus-vem-breve.webp",
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
