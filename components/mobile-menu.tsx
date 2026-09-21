"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site-data";

const items = [
  { label: "Projetos", href: "#projetos" },
  { label: "Áreas", href: "#areas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true">{open ? "×" : "≡"}</span>
      </button>
      {open ? (
        <nav id="mobile-navigation" aria-label="Navegação móvel">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp</a>
        </nav>
      ) : null}
    </div>
  );
}
