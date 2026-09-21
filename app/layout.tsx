import type { Metadata } from "next";
import "./globals.css";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: configuredUrl ? new URL(configuredUrl) : undefined,
  title: "Juan Rodriguez — Desenvolvimento e criação digital",
  description: "Portfólio de Juan Rodriguez: projetos de desenvolvimento web, jogos, aplicativos, software e criação visual em Niterói/RJ.",
  applicationName: "Portfólio Juan Rodriguez",
  authors: [{ name: "Juan Rodriguez" }],
  keywords: ["Juan Rodriguez", "desenvolvimento web", "criação digital", "Next.js", "Unity", "Niterói"],
  openGraph: {
    title: "Juan Rodriguez — Desenvolvimento e criação digital",
    description: "Sites, protótipos, jogos, ferramentas e trabalhos visuais construídos em projetos próprios.",
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
