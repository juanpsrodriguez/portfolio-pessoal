const whatsappMessage = "Olá, Juan! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export const siteConfig = {
  name: "Juan Rodriguez",
  location: "Niterói/RJ",
  phoneDisplay: "+55 21 99834-2574",
  phoneInternational: "5521998342574",
  github: "https://github.com/juanpsrodriguez",
  whatsappMessage,
  whatsappUrl: `https://wa.me/5521998342574?text=${encodeURIComponent(whatsappMessage)}`,
} as const;

export type ProjectCategory = "web" | "jogos" | "apps" | "visual";

export const projects = [
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
