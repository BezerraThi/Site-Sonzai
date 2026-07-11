import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { Slash } from "./Slash";

type Stage = {
  num: string;
  stage: string;
  name: string;
  tag: string;
  desc: React.ReactNode;
  items: string[];
};

const STAGES: Stage[] = [
  {
    num: "01",
    stage: "aquisição",
    name: "Tráfego pago estratégico",
    tag: "Meta · Google · TikTok",
    desc: (
      <>
        Mídia comprada com engenharia por trás: <strong>público certo, oferta
        certa, custo sob controle</strong>. Campanha sem estratégia é doação para
        a plataforma — aqui, cada real tem um trabalho a fazer.
      </>
    ),
    items: [
      "Estrutura de campanhas full-funnel",
      "Criativos orientados a dado, não a gosto",
      "Otimização contínua de CAC e ROAS",
      "Escala progressiva de verba com teto de risco",
    ],
  },
  {
    num: "02",
    stage: "conversão",
    name: "Funil estratégico",
    tag: "arquitetura de venda",
    desc: (
      <>
        Cada clique entra num <strong>caminho desenhado para vender</strong> —
        da primeira dor até a decisão. Página, oferta e copy trabalhando na
        mesma direção, testados até o funil parar de vazar.
      </>
    ),
    items: [
      "Arquitetura de funil ponta a ponta",
      "Landing pages de alta conversão",
      "Oferta, copy e prova social",
      "Testes A/B com hipótese e critério",
    ],
  },
  {
    num: "03",
    stage: "relacionamento",
    name: "Nutrição de vendas",
    tag: "e-mail · WhatsApp · conteúdo",
    desc: (
      <>
        Quem não compra hoje é <strong>preparado para comprar amanhã</strong>.
        Sequências que educam, respondem objeções e mantêm sua marca presente
        até o momento da decisão — sem virar spam.
      </>
    ),
    items: [
      "Fluxos de e-mail e WhatsApp por comportamento",
      "Segmentação por estágio de consciência",
      "Reativação de base parada",
      "Conteúdo de meio de funil que vende",
    ],
  },
  {
    num: "04",
    stage: "escala",
    name: "Automações",
    tag: "CRM · IA · integrações",
    desc: (
      <>
        A máquina que <strong>trabalha enquanto o time dorme</strong>:
        qualificação automática de leads, respostas em minutos, dado fluindo
        entre as ferramentas sem planilha manual no meio.
      </>
    ),
    items: [
      "Implementação e higiene de CRM",
      "Qualificação e atendimento com IA",
      "Integrações entre mídia, funil e vendas",
      "Dashboards de receita em tempo real",
    ],
  },
];

export function System() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="system" id="sistema">
      <div className="wrap">
        <Reveal>
          <div className="system__head">
            <div>
              <p className="eyebrow" style={{ marginBottom: 24 }}>
                <Slash />O sistema Sonzai
              </p>
              <h2 className="display system__title">
                Um sistema. Não serviços avulsos.
              </h2>
            </div>
            <p className="system__note">
              Os quatro estágios operam em sequência — o que um gera, o próximo
              converte. Contratados juntos ou por estágio, conforme o gargalo.
            </p>
          </div>
        </Reveal>

        <div>
          {STAGES.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.num} delay={i * 0.06}>
                <div className={`stage ${isOpen ? "stage--open" : ""}`}>
                  <button
                    className="stage__row"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`stage-panel-${i}`}
                  >
                    <span className="stage__num">
                      {s.num}
                      <small>{s.stage}</small>
                    </span>
                    <span className="stage__name">{s.name}</span>
                    <span className="stage__tag">{s.tag}</span>
                    <span className="stage__toggle" aria-hidden="true">
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`stage-panel-${i}`}
                        className="stage__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="stage__panel-inner">
                          <p className="stage__desc">{s.desc}</p>
                          <ul className="stage__list">
                            {s.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
