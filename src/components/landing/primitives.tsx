import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, className }: { eyebrow?: string; title: string; subtitle?: string; className?: string }) {
  return (
    <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-pink">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground text-pretty">{subtitle}</p>}
    </Reveal>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#80147d" />
          <stop offset="1" stopColor="#c95add" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="17" fill="none" stroke="url(#lg)" strokeWidth="3" />
      <circle cx="20" cy="11" r="4" fill="#80147d" />
      <circle cx="12" cy="25" r="4" fill="#c95add" />
      <circle cx="28" cy="25" r="4" fill="#54105e" />
      <path d="M20 11 L12 25 L28 25 Z" fill="none" stroke="url(#lg)" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  if (site.logoUrl) return <span className={cn("inline-flex items-center gap-2 text-xl font-extrabold tracking-tight", className)}><span className="relative block h-10 w-10 overflow-hidden rounded-full"><img src={site.logoUrl} alt="" width={500} height={500} className="absolute left-1/2 top-1/2 h-24 w-24 max-w-none -translate-x-1/2 -translate-y-1/2" /></span><span>Ateli<span className="text-primary">Match</span></span></span>;
  return (
    <span className={cn("flex items-center gap-2 font-extrabold text-xl tracking-tight", inverted ? "text-primary-foreground" : "text-foreground", className)}>
      <LogoMark className="h-9 w-9" />
      Ateli<span className={inverted ? "" : "text-primary"}>Match</span>
    </span>
  );
}

/** Espaço identificado para substituir por material real (captura ou vídeo). */
export function MediaPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col items-center justify-center gap-3 bg-muted p-6 text-center", className)}>
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary"><ImageIcon className="h-6 w-6" /></div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="max-w-xs text-xs text-muted-foreground">Espaço reservado para o material real do AteliMatch.</p>
    </div>
  );
}

export function BrowserFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border bg-card shadow-elegant", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-pink/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-background" />
      </div>
      <div className="aspect-[16/10]">{children}</div>
    </div>
  );
}
