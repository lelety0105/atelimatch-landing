import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/hero";
import { Benefits, CTASection, FAQ, Features, FinancialBenefits, Footer, ProblemSolution, ProductDemo, TargetAudience, Workflow } from "./components/landing/Sections";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from "./components/landing/ui/alert-dialog";
import { site } from "./config/site";
import "./styles.css";
const pending: Record<string, [string, string]> = {
  "#cadastro-pendente": ["Cadastro em breve", "O endereço de cadastro do AteliMatch ainda não foi disponibilizado. Volte em breve para começar."],
  "#login-pendente": ["Acesso ao sistema", "O link oficial de acesso será disponibilizado em breve."],
  "#privacidade-pendente": ["Política de privacidade", "A política de privacidade ainda não foi publicada. Esta página não possui formulário de coleta de dados nem scripts de rastreamento."],
  "#termos-pendentes": ["Termos de uso", "Os termos de uso serão disponibilizados antes da contratação do sistema."],
  "#contato-pendente": ["Contato", "O canal oficial de atendimento será disponibilizado em breve."],
};
function App() {
  const [notice, setNotice] = useState<[string, string] | null>(null);
  useEffect(() => {
    if (site.canonical) { const link = document.createElement("link"); link.rel = "canonical"; link.href = site.canonical; document.head.append(link); return () => link.remove(); }
  }, []);
  return <div onClick={event => { const anchor = (event.target as Element).closest("a"); const message = pending[anchor?.getAttribute("href") || ""]; if (message) { event.preventDefault(); setNotice(message); } }}>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header /><main id="conteudo"><Hero /><ProblemSolution /><Features /><ProductDemo /><Workflow /><FinancialBenefits /><Benefits /><TargetAudience /><CTASection /><FAQ /></main><Footer />
    <AlertDialog open={!!notice} onOpenChange={open => { if (!open) setNotice(null); }}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>{notice?.[0]}</AlertDialogTitle><AlertDialogDescription>{notice?.[1]}</AlertDialogDescription></AlertDialogHeader><AlertDialogCancel>Entendi</AlertDialogCancel></AlertDialogContent></AlertDialog>
  </div>;
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
