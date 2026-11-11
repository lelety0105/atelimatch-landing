import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, ClipboardList, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, track } from "@/config/site";
import { BrowserFrame, MediaPlaceholder } from "./primitives";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } });
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-brand-pink/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.span {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <span className="h-2 w-2 rounded-full bg-brand-pink" /> Gestão inteligente para ateliês
          </motion.span>
          <motion.h1 {...fade(0.08)} className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Seu ateliê organizado. Seu <span className="text-gradient-brand">negócio crescendo.</span>
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            Do orçamento à entrega, gerencie clientes, pedidos, produção e pagamentos em um só lugar. Menos tempo com planilhas, mais tempo para fazer seu ateliê crescer.
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href={site.links.signup} onClick={() => track("hero_cta_click")}>Começar agora <ArrowRight /></a>
            </Button>
            <Button variant="soft" size="xl" asChild><a href="#demonstracao">Conhecer o sistema</a></Button>
          </motion.div>
          <motion.ul {...fade(0.32)} className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {["Pedidos organizados", "Controle de pagamentos", "Acompanhamento da produção"].map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-secondary text-primary"><Check className="h-3 w-3" /></span>{b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div {...(reduce ? {} : { initial: { opacity: 0, scale: 0.96, y: 30 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 } })} className="relative">
          <BrowserFrame>
            {site.heroScreenshot ? (
              <img src={site.heroScreenshot} alt="Dashboard do AteliMatch" className="h-full w-full object-contain object-top" />
            ) : (
              <MediaPlaceholder label="Captura do dashboard do AteliMatch" />
            )}
          </BrowserFrame>
          <div className="absolute -left-4 bottom-10 hidden rounded-2xl border border-border bg-card p-4 shadow-elegant sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><ClipboardList className="h-5 w-5" /></span>
              <div><p className="text-xs text-muted-foreground">Exemplo ilustrativo</p><p className="text-sm font-bold text-foreground">Pedido organizado</p></div>
            </div>
          </div>
          <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-border bg-card p-4 shadow-elegant sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary"><Wallet className="h-5 w-5" /></span>
              <div><p className="text-xs text-muted-foreground">Exemplo ilustrativo</p><p className="text-sm font-bold text-foreground">Sinal registrado</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
