import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, track } from "@/config/site";
import { Logo } from "./primitives";
import { cn } from "@/lib/utils";

export const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent")}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" aria-label="AteliMatch — início"><Logo /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((i) => (
              <li key={i.href}><a href={i.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{i.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.links.login} onClick={() => track("login_click")} className="text-sm font-semibold text-foreground hover:text-primary">Entrar</a>
          <Button variant="hero" asChild><a href={site.links.signup} onClick={() => track("signup_cta_click", { location: "header" })}>Começar agora</a></Button>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-xl text-foreground lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-mobile" onKeyDown={event => { if (event.key === "Escape") setOpen(false); }} onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu móvel" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>('[aria-controls="menu-mobile"]')?.focus(); } }} className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {navItems.map((i) => (
              <li key={i.href}><a href={i.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-foreground">{i.label}</a></li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <Button variant="soft" size="xl" asChild><a href={site.links.login} onClick={() => track("login_click")}>Entrar</a></Button>
            <Button variant="hero" size="xl" asChild><a href={site.links.signup} onClick={() => track("signup_cta_click", { location: "mobile_menu" })}>Começar agora</a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
