/* eslint-disable @next/next/no-img-element -- imagens WebP locais evitam incompatibilidade de next/image no runtime Vinext */
import { ArrowDownRight, ExternalLink, MessageCircle } from "lucide-react";

import { MobileMenu } from "@/components/mobile-menu";
import { projects, siteConfig, toolGroups, workAreas } from "@/lib/site-data";

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Áreas", href: "#areas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Juan Rodriguez — início">
          <span>JR</span>
          <span className="brand-name">Juan Rodriguez</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-contact" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" size={18} />
          Vamos conversar
        </a>

        <MobileMenu />
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Juan Rodriguez · Niterói/RJ</p>
          <h1 id="hero-title">
            Desenvolvimento e criação digital em <em>mais de um formato.</em>
          </h1>
          <p className="hero-intro">
            Construo sites, protótipos, jogos, ferramentas e trabalhos visuais enquanto amplio meu repertório em projetos reais.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              Falar comigo <ExternalLink aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="hero-index" aria-label="Áreas de trabalho">
          <p className="index-label">Frentes de trabalho</p>
          <ol>
            <li><span>01</span> Desenvolvimento web</li>
            <li><span>02</span> Jogos e protótipos</li>
            <li><span>03</span> Apps e software</li>
            <li><span>04</span> Criação visual</li>
          </ol>
          <p className="index-note">Programação, interface e imagem no mesmo processo.</p>
        </div>
      </section>

      <section className="project-section" id="projetos" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">Trabalho selecionado · 2026</p>
          <h2 id="projects-title">Projetos com identidade própria.</h2>
          <p>
            Projetos web para negócios e iniciativas diferentes — explorando direção visual, interface responsiva e publicação web.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.slug}>
              <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} em nova aba`}>
                <div className="browser-bar" aria-hidden="true">
                  <span /><span /><span /><b>{project.urlLabel}</b>
                </div>
                {/* Screenshots já chegam otimizados em WebP e mantêm proporção fixa. */}
                <img
                  className="project-image"
                  src={project.image}
                  alt={`Página inicial do projeto ${project.name}`}
                  width={1440}
                  height={1000}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </a>
              <div className="project-copy">
                <div>
                  <p className="project-meta">{project.segment}</p>
                  <h3>{project.name}</h3>
                </div>
                <div className="project-description">
                  <p>{project.description}</p>
                  <small>{project.visualDirection}</small>
                </div>
                <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                  Visitar projeto <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="areas-section" id="areas" aria-labelledby="areas-title">
        <div className="areas-intro">
          <p className="eyebrow">Quatro frentes, um repertório</p>
          <h2 id="areas-title">O que eu construo.</h2>
          <p>
            Hoje, os projetos web são a parte mais visível do portfólio. As outras frentes fazem parte do mesmo caminho e ganham espaço conforme novos trabalhos ficam prontos para mostrar.
          </p>
        </div>

        <div className="areas-grid">
          {workAreas.map((area) => (
            <article className="area-card" key={area.id}>
              <span>{area.id}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul>
                {area.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="commercial-strip">
          <p>Trabalhos que posso colocar em movimento agora</p>
          <div>
            <span>Sites institucionais</span>
            <span>Landing pages</span>
            <span>Portfólios</span>
            <span>Vitrines digitais</span>
            <span>Integração com WhatsApp</span>
            <span>Personalização visual</span>
          </div>
        </div>
      </section>

      <section className="about-section" id="sobre" aria-labelledby="about-title">
        <div className="about-marker" aria-hidden="true">
          <span>22.9° S</span>
          <span>43.1° W</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Sobre</p>
          <h2 id="about-title">Gosto de entender como as partes se encontram.</h2>
          <div className="about-text">
            <p>
              Sou Juan Rodriguez, desenvolvedor e criador digital em Niterói. Aprendo construindo: testo uma ideia, resolvo a interface, programo e volto ao visual até o projeto fazer sentido como um todo.
            </p>
            <p>
              Web, jogos, software e edição me interessam justamente porque pedem formas diferentes de pensar. Praia, rua, natureza e a Região Oceânica aparecem como referência pessoal — sem tirar o foco do trabalho.
            </p>
          </div>
        </div>
      </section>

      <section className="tools-section" aria-labelledby="tools-title">
        <div className="tools-heading">
          <p className="eyebrow">Ferramentas</p>
          <h2 id="tools-title">Tecnologia serve ao projeto.</h2>
          <p>Sem porcentagens de domínio ou listas infinitas. Estas são as ferramentas presentes no meu trabalho atual.</p>
        </div>
        <div className="tool-groups">
          {toolGroups.map((group) => (
            <div className="tool-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          ))}
          <div className="tool-group software-note">
            <h3>Software</h3>
            <p>A stack muda conforme a ferramenta e o protótipo. Só entra aqui o que já estiver confirmado por um projeto.</p>
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="process-heading">
          <p className="eyebrow">Como eu trabalho</p>
          <h2 id="process-title">Da conversa ao link no ar.</h2>
        </div>
        <ol className="process-list">
          <li><span>01</span><h3>Entender</h3><p>O que o projeto precisa comunicar, para quem e com qual prioridade.</p></li>
          <li><span>02</span><h3>Dar direção</h3><p>Organizar referências, conteúdo e uma linguagem visual coerente com o negócio.</p></li>
          <li><span>03</span><h3>Construir</h3><p>Desenvolver a interface e ajustar os detalhes sem perder velocidade ou clareza.</p></li>
          <li><span>04</span><h3>Revisar e publicar</h3><p>Testar no celular e no computador, corrigir o necessário e preparar a entrega.</p></li>
        </ol>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="contact-main">
          <p className="eyebrow">Contato direto</p>
          <h2 id="contact-title">Tem um projeto para tirar da conversa?</h2>
          <p>Me conte o que você precisa. Posso ajudar a organizar a ideia, definir um caminho visual e construir uma primeira versão bem resolvida.</p>
          <a className="contact-button" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
            Chamar no WhatsApp <ArrowDownRight aria-hidden="true" size={28} />
          </a>
        </div>
        <aside className="contact-aside" aria-label="Outros dados de contato">
          <div>
            <span>WhatsApp</span>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">{siteConfig.phoneDisplay}</a>
          </div>
          <div>
            <span>GitHub</span>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              @juanpsrodriguez
            </a>
          </div>
          <div>
            <span>E-mail</span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div>
            <span>Base</span>
            <p>{siteConfig.location}</p>
          </div>
        </aside>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span>JR</span><span>Juan Rodriguez</span></a>
        <p>Desenvolvimento e criação digital · Niterói/RJ</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
