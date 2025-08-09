document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{}));
// Modal Áreas de Atuação
const AREA_TEXT = {"civil": "Atuamos em demandas de responsabilidade civil, contratos, família e sucessões (divórcio, guarda, alimentos, inventários e planejamento sucessório). Priorizamos soluções consensuais quando possível, com estratégia processual sólida quando o litígio é inevitável.", "trabalhista": "Consultoria preventiva para empresas e defesa em ações trabalhistas. Acordos, negociação coletiva, adequação de políticas internas e representação em audiências, com foco em segurança jurídica e redução de passivos.", "empresarial": "Assessoria em constituição societária, contratos comerciais, compliance, due diligence e recuperação de crédito. Atuação contenciosa e consultiva para suportar as decisões estratégicas do negócio.", "consumidor": "Atuação em demandas envolvendo vícios de produto/serviço, práticas abusivas, cobranças indevidas e danos materiais/morais, tanto para consumidores quanto para empresas em litígios de massa.", "tributario": "Planejamento tributário, defesas administrativas e judiciais, restituição/compensação de créditos e acompanhamento de fiscalizações. Nosso foco é segurança jurídica e eficiência fiscal.", "imobiliario": "Contratos de compra e venda, locações, incorporações, regularização de imóveis, due diligence e litígios possessórios. Priorizamos prevenção de riscos e celeridade nas transações.", "sucessorio": "Inventários, partilhas, testamentos, doações e planejamento patrimonial. Organização sucessória para preservar patrimônio familiar e evitar conflitos futuros.", "bancario": "Renegociação de dívidas, revisão de contratos, discussões sobre juros e encargos, e defesa em execuções. Estratégia técnica para reequilíbrio contratual e mitigação de riscos.", "contratos": "Elaboração, revisão e negociação de contratos civis e empresariais, com cláusulas claras, indicadores de performance e garantias, sempre alinhadas ao risco e ao objetivo do cliente.", "mediacao": "Mediação e arbitragem como vias céleres e confidenciais de resolução de conflitos. Estruturamos convenções e conduzimos procedimentos com foco em resultado e preservação de relações."};

document.querySelectorAll('.saiba').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.dataset.area;
    const title = btn.closest('.card-body').querySelector('h3').textContent.trim();
    const text = AREA_TEXT[key] || "";
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').innerHTML = "<p>"+text+"</p>";
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal').setAttribute('aria-hidden','false');
  });
});
document.querySelectorAll('[data-close]').forEach(el=>{
  el.addEventListener('click', ()=>{
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').setAttribute('aria-hidden','true');
  });
});
    