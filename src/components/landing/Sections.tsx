import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight, BadgeCheck, CalendarClock, ClipboardList, Clock, Coins, FileText, History, PackageCheck,
  Play, Rocket, Scissors, ShieldCheck, Sparkles, TrendingUp, UserPlus, Users, Wallet, X, Check, Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site, track, faqs } from "@/config/site";
import { BrowserFrame, Logo, LogoMark, MediaPlaceholder, Reveal, SectionHeading } from "./primitives";
import { navItems } from "./Header";
import { cn } from "@/lib/utils";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto max-w-7xl px-5 lg:px-8", className)}>{children}</div>
);

function Cta({ label, location }: { label: string; location: string }) {
  return (
    <Button variant="hero" size="xl" asChild>
      <a href={site.links.signup} onClick={() => track("signup_cta_click", { location })}>{label} <ArrowRight /></a>
    </Button>
  );
}

export function ProblemSolution() {
  const without = ["Pedidos espalhados em conversas e cadernos.", "Dificuldade para acompanhar prazos.", "Falta de clareza sobre pagamentos.", "Custos e lucros difíceis de calcular.", "Informações de clientes desorganizadas."];
  const withA = ["Pedidos centralizados em um único sistema.", "Acompanhamento das etapas de produção.", "Registro de pagamentos e sinais.", "Visualização de custos e lucros.", "Histórico organizado de clientes."];
  return (
    <section className="bg-muted py-24 lg:py-32">
      <Container>
        <SectionHeading title="Seu talento merece mais do que planilhas e anotações." subtitle="Administrar um ateliê envolve muito mais do que produzir peças. São clientes, orçamentos, prazos, pagamentos e entregas que precisam funcionar juntos." />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Sem AteliMatch</p>
            <ul className="mt-6 space-y-4">
              {without.map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted"><X className="h-3.5 w-3.5" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl bg-gradient-deep p-8 text-primary-foreground shadow-elegant lg:p-10">
            <LogoMark className="absolute -right-10 -bottom-10 h-48 w-48 opacity-15" />
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Com AteliMatch</p>
            <ul className="relative mt-6 space-y-4">
              {withA.map((t) => (
                <li key={t} className="flex gap-3 font-medium"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-foreground/20"><Check className="h-3.5 w-3.5" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const features = [
  { icon: Users, title: "Gestão de clientes", text: "Centralize os dados dos clientes e mantenha as informações necessárias para cada atendimento." },
  { icon: ClipboardList, title: "Orçamentos e pedidos", text: "Crie pedidos com descrição dos serviços, valores, forma de pagamento e previsão de entrega." },
  { icon: Scissors, title: "Acompanhamento da produção", text: "Acompanhe o andamento de cada serviço, desde a aprovação até a finalização e entrega." },
  { icon: Wallet, title: "Controle de pagamentos", text: "Registre sinais, acompanhe pagamentos e identifique o status financeiro de cada pedido." },
  { icon: TrendingUp, title: "Custos e lucratividade", text: "Registre custos estimados e acompanhe informações de lucro dos serviços realizados." },
  { icon: History, title: "Histórico e organização", text: "Consulte pedidos anteriores, datas, anexos, informações de entrega e registros de atendimento." },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Funcionalidades" title="Tudo o que seu ateliê precisa, em um só lugar." subtitle="Conheça as ferramentas que ajudam você a organizar a rotina e tomar decisões com mais segurança." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-elegant">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground"><f.icon className="h-6 w-6" /></span>
                <h3 className="mt-6 text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-3 text-muted-foreground">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex justify-center"><Cta label="Começar agora" location="features" /></div>
      </Container>
    </section>
  );
}

export function ProductDemo() {
  const [active, setActive] = useState<string>(site.demos[0].id);
  const reduce = useReducedMotion();
  const demo = site.demos.find((d) => d.id === active)!;
  return (
    <section id="demonstracao" className="bg-muted py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Demonstração" title="Veja o AteliMatch em ação." subtitle="Uma experiência simples e organizada para acompanhar cada etapa do seu ateliê." />
        <div role="tablist" aria-label="Demonstrações" className="mt-12 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          {site.demos.map((d) => (
            <button key={d.id} id={`tab-${d.id}`} role="tab" tabIndex={active === d.id ? 0 : -1} aria-selected={active === d.id} aria-controls="demo-panel"
              onKeyDown={event => { const keys = ["ArrowRight", "ArrowLeft", "Home", "End"]; if (!keys.includes(event.key)) return; event.preventDefault(); const index = site.demos.findIndex(item => item.id === active); const next = event.key === "Home" ? 0 : event.key === "End" ? site.demos.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + site.demos.length) % site.demos.length; setActive(site.demos[next].id); document.getElementById(`tab-${site.demos[next].id}`)?.focus(); track("feature_tab_click", { tab: site.demos[next].id }); }}
              onClick={() => { setActive(d.id); track("feature_tab_click", { tab: d.id }); }}
              className={cn("shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all", active === d.id ? "bg-gradient-brand text-primary-foreground shadow-soft" : "bg-card text-muted-foreground hover:text-primary")}>
              {d.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={demo.id} id="demo-panel" role="tabpanel" aria-labelledby={`tab-${demo.id}`} tabIndex={0}
            initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
            className="mt-10 grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{demo.title}</h3>
              <p className="mt-4 text-lg text-muted-foreground">{demo.description}</p>
              <div className="mt-8"><Cta label="Organizar meu ateliê" location="demo" /></div>
            </div>
            <div className="lg:col-span-3">
              <BrowserFrame>
                {demo.video ? (
                  <video key={demo.video} src={demo.video} poster={demo.poster || undefined} controls preload="none" playsInline className="h-full w-full bg-muted object-contain" onPlay={() => track("demo_video_play", { tab: demo.id })} />
                ) : (
                  <div className="relative h-full">
                    <MediaPlaceholder label={`Vídeo: ${demo.label}`} />
                    <Play className="absolute right-4 bottom-4 h-5 w-5 text-muted-foreground" aria-hidden />
                  </div>
                )}
              </BrowserFrame>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

const steps = [
  { icon: UserPlus, title: "Cadastre o cliente", text: "Organize os dados necessários para iniciar o atendimento." },
  { icon: FileText, title: "Crie o orçamento", text: "Adicione os serviços, valores, condições de pagamento e previsão de entrega." },
  { icon: ClipboardList, title: "Registre o pedido", text: "Após a aprovação, acompanhe as informações do serviço e registre o sinal recebido, quando houver." },
  { icon: Hammer, title: "Inicie a produção", text: "Atualize o andamento do pedido e acompanhe os custos envolvidos." },
  { icon: BadgeCheck, title: "Finalize o serviço", text: "Registre a conclusão, o pagamento e as informações de retirada." },
  { icon: PackageCheck, title: "Confirme a entrega", text: "Marque o pedido como entregue e mantenha o histórico organizado." },
];

export function Workflow() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Como funciona" title="Do primeiro contato à entrega. Tudo sob controle." />
        <div className="relative mt-16 grid gap-10 lg:grid-cols-6 lg:gap-6">
          <span aria-hidden className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-brand lg:top-6 lg:right-[8%] lg:bottom-auto lg:left-[8%] lg:h-0.5 lg:w-auto" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <div className="contents">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-4 border-background bg-gradient-brand text-primary-foreground shadow-soft"><s.icon className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-bold text-brand-pink">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinancialBenefits() {
  const items = [
    { icon: Coins, t: "Registro de custos estimados." },
    { icon: FileText, t: "Acompanhamento de valores cobrados." },
    { icon: Wallet, t: "Identificação de pagamentos recebidos." },
    { icon: TrendingUp, t: "Visualização de lucro por pedido." },
    { icon: Sparkles, t: "Informações para apoiar decisões de precificação." },
  ];
  return (
    <section className="bg-muted py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-pink">Gestão financeira</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">Saiba quanto seu ateliê realmente está ganhando.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Não basta saber quanto você vendeu. É importante acompanhar os custos de cada serviço e compreender o resultado do seu trabalho.</p>
          <ul className="mt-8 space-y-4">
            {items.map((i) => (
              <li key={i.t} className="flex items-center gap-4 font-medium text-foreground"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft"><i.icon className="h-5 w-5" /></span>{i.t}</li>
            ))}
          </ul>
          <div className="mt-10"><Cta label="Organizar meu ateliê" location="finance" /></div>
        </Reveal>
        <Reveal delay={0.1}>
          <BrowserFrame>
            {site.financeScreenshot ? <img src={site.financeScreenshot} alt="Tela financeira do AteliMatch" loading="lazy" className="h-full w-full object-contain object-top" /> : <MediaPlaceholder label="Captura da tela financeira do AteliMatch" />}
          </BrowserFrame>
        </Reveal>
      </Container>
    </section>
  );
}

export function Benefits() {
  const items = [
    { icon: Clock, title: "Economize tempo", text: "Reduza o trabalho de procurar informações em diferentes lugares." },
    { icon: ShieldCheck, title: "Tenha mais controle", text: "Acompanhe pedidos, pagamentos e entregas com mais clareza." },
    { icon: CalendarClock, title: "Profissionalize seu atendimento", text: "Mantenha um histórico organizado e facilite o acompanhamento dos serviços." },
    { icon: Rocket, title: "Cresça com organização", text: "Tenha uma estrutura de gestão preparada para acompanhar a evolução do seu negócio." },
  ];
  return (
    <section id="beneficios" className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Benefícios" title="Mais organização para você focar no que faz de melhor." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07} className="rounded-3xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-elegant">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft"><b.icon className="h-6 w-6" /></span>
              <h3 className="mt-6 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TargetAudience() {
  const segs = [
    { img: "https://about.ups.com/content/dam/upsstories/images/our-stories/customer-first/made-in-italy/Italy_NewFlight_768x760.jpg", t: "Ateliês de costura" },
    { img: "https://www.salzburg.info/deskline/infrastruktur/objekte/madl-haute-couture-und-tracht_9059/image-thumb__719503__slider-main/Atelier%20von%20Madl_9752783.jpg", t: "Costureiras autônomas" },
    { img: "https://image.hurimg.com/i/hurriyet/75/0x0/65704f124e3fe11ea02cf3d5.jpg", t: "Ateliês de ajustes e reformas" },
    { img: "https://viggo-tailoring.com/cdn/shop/files/MG_4760.jpg?width=640", t: "Ateliês de moda sob medida" },
    { img: "https://kallxo.com/wp-content/uploads/2018/02/Izet-Curri.jpg", t: "Pequenos negócios de produção artesanal" },
  ];
  return (
    <section className="bg-muted py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Para quem é" title="Feito para quem transforma criatividade em negócio." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {segs.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06} className="group relative overflow-hidden rounded-3xl shadow-soft">
              <img src={s.img} alt={s.t} loading="lazy" width={1024} height={768} className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 font-bold text-primary-foreground">{s.t}</h3>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-deep px-6 py-20 text-center text-primary-foreground shadow-elegant sm:px-12">
          <LogoMark className="absolute -top-16 -left-16 h-64 w-64 opacity-10" />
          <LogoMark className="absolute -right-20 -bottom-20 h-80 w-80 opacity-10" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-balance">Seu ateliê pode ser mais organizado a partir de hoje.</h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg opacity-85">Centralize sua operação, acompanhe seus pedidos e tenha mais controle sobre cada etapa do seu negócio.</p>
          <div className="relative mt-10">
            <Button variant="light" size="xl" asChild><a href={site.links.signup} onClick={() => track("signup_cta_click", { location: "final_cta" })}>Começar com AteliMatch <ArrowRight /></a></Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-muted py-24 lg:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3" onValueChange={(v) => v && track("faq_open", { question: v })}>
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="rounded-2xl border border-border bg-card px-6">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-muted-foreground">Sistema de gestão para ateliês: clientes, pedidos, produção e pagamentos organizados do orçamento à entrega.</p>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="text-sm font-bold text-foreground">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((i) => <li key={i.href}><a href={i.href} className="text-muted-foreground hover:text-primary">{i.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold text-foreground">AteliMatch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={site.links.login} onClick={() => track("login_click")} className="text-muted-foreground hover:text-primary">Entrar</a></li>
            <li><a href={site.links.signup} onClick={() => track("signup_cta_click", { location: "footer" })} className="text-muted-foreground hover:text-primary">Começar agora</a></li>
            <li><a href={site.links.privacy} className="text-muted-foreground hover:text-primary">Política de privacidade</a></li>
            <li><a href={site.links.terms} className="text-muted-foreground hover:text-primary">Termos de uso</a></li>
            <li><a href={site.links.contact} className="text-muted-foreground hover:text-primary">Contato</a></li>
          </ul>
        </div>
      </Container>
      <Container className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">© {new Date().getFullYear()} AteliMatch. Todos os direitos reservados.</Container>
    </footer>
  );
}
