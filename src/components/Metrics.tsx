import { Reveal } from "./Reveal";
import { Slash } from "./Slash";

const METRICS = [
  {
    code: "CAC",
    name: "Custo de aquisição",
    what: "Quanto custa trazer um cliente novo — e quanto deveria custar.",
  },
  {
    code: "ROAS",
    name: "Retorno sobre mídia",
    what: "Cada real de anúncio precisa voltar multiplicado. Senão, muda a rota.",
  },
  {
    code: "LTV",
    name: "Valor por cliente",
    what: "Quanto um cliente vale ao longo do tempo — o número que libera escala.",
  },
  {
    code: "CVR",
    name: "Taxa de conversão",
    what: "Do clique ao contrato, etapa por etapa. Onde vaza, a gente fecha.",
  },
  {
    code: "TTR",
    name: "Tempo de resposta",
    what: "Lead atendido em minutos compra. Em horas, esfria. Automatizamos isso.",
  },
  {
    code: "SQL",
    name: "Leads qualificados",
    what: "Volume é vaidade. Contamos quem tem perfil e intenção de compra.",
  },
  {
    code: "PBK",
    name: "Payback",
    what: "Em quantos meses o investimento se paga — o prazo que define o fôlego.",
  },
  {
    code: "TKT",
    name: "Ticket médio",
    what: "Vender mais para quem já compra costuma ser o crescimento mais barato.",
  },
];

export function Metrics() {
  return (
    <section className="metrics" id="metricas">
      <div className="wrap">
        <Reveal>
          <div className="metrics__head">
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                <Slash />
                Obsessão declarada
              </p>
              <h2 className="display metrics__title">O que medimos, melhora.</h2>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="metrics__grid">
            {METRICS.map((m) => (
              <div className="metric" key={m.code}>
                <div className="metric__code">{m.code}</div>
                <div className="metric__name">{m.name}</div>
                <p className="metric__what">{m.what}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
