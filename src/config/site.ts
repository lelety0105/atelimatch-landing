// Substitua os campos vazios apenas por URLs e mídias reais aprovadas.
export const site = {
  canonical: "",
  logoUrl: "/atelimatch-logo.png",
  heroScreenshot: "",
  financeScreenshot: "",
  links: { signup: "#cadastro-pendente", login: "#login-pendente", privacy: "#privacidade-pendente", terms: "#termos-pendentes", contact: "#contato-pendente" },
  demos: [
    { id: "geral", label: "Visão geral", title: "Sua rotina conectada, do início ao fim.", description: "Conheça a proposta do AteliMatch: reunir as informações do seu ateliê em um só lugar." },
    { id: "clientes", label: "Clientes", title: "Cada atendimento começa com organização.", description: "Centralize os dados dos clientes e mantenha o histórico de atendimento acessível." },
    { id: "pedidos", label: "Pedidos e orçamentos", title: "Clareza em cada novo pedido.", description: "Organize serviços, valores, condições de pagamento e previsão de entrega." },
    { id: "producao", label: "Produção", title: "Acompanhe cada etapa do trabalho.", description: "Visualize o andamento dos serviços, da aprovação à finalização." },
    { id: "pagamentos", label: "Pagamentos", title: "Mais clareza sobre o que você recebe.", description: "Acompanhe sinais e pagamentos vinculados aos pedidos." },
    { id: "entrega", label: "Finalização e entrega", title: "Um ciclo completo, um histórico organizado.", description: "Mantenha os registros de conclusão e entrega junto às informações do pedido." },
  ].map(d => ({ ...d, video: "", poster: "" })),
};
export const faqs = [
  { q: "O que é o AteliMatch?", a: "É um sistema de gestão para ateliês que reúne clientes, orçamentos, pedidos, produção e pagamentos em um só lugar." },
  { q: "Para quem o AteliMatch foi desenvolvido?", a: "Para ateliês de costura, profissionais autônomos, ajustes e reformas, moda sob medida e pequenos negócios de produção artesanal." },
  { q: "Como funciona o gerenciamento de pedidos?", a: "Os pedidos reúnem a descrição dos serviços, valores, forma de pagamento e previsão de entrega, permitindo acompanhar o trabalho até a conclusão." },
  { q: "Posso registrar pagamentos e sinais?", a: "Sim. A proposta inclui o registro de sinais e o acompanhamento dos pagamentos de cada pedido." },
  { q: "Consigo acompanhar os custos e lucros dos serviços?", a: "Você pode registrar custos estimados e acompanhar informações de lucro dos serviços realizados." },
  { q: "Como funciona o acompanhamento da produção?", a: "O acompanhamento organiza as etapas do serviço, da aprovação à finalização e entrega." },
  { q: "O sistema pode ser acessado pelo celular?", a: "A compatibilidade do sistema com dispositivos móveis será informada em breve. Esta página de apresentação já se adapta ao celular." },
  { q: "Como posso começar a utilizar o AteliMatch?", a: "O link de cadastro será disponibilizado em breve. As condições de contratação ainda não foram publicadas nesta página." },
];
export type AnalyticsEvent = "hero_cta_click" | "signup_cta_click" | "login_click" | "demo_video_play" | "feature_tab_click" | "faq_open";
// Evento local: nenhum dado é enviado. Conecte seu provedor somente após consentimento.
export function track(name: AnalyticsEvent, detail: Record<string, string> = {}) { window.dispatchEvent(new CustomEvent("atelimatch:analytics", { detail: { name, ...detail } })); }
