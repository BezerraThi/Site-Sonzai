import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { Slash } from "./Slash";

const LINES = ["Presença", "que vira", "receita"];

const TICKER = [
  "Tráfego pago estratégico",
  "Funil estratégico",
  "Nutrição de vendas",
  "Automações",
  "CRM & dados",
  "Alta performance",
];

export function Hero() {
  const { scrollY } = useScroll();
  const kanjiY = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section className="hero" id="topo">
      <div className="hero__grid-glow" />

      <motion.div className="hero__kanji" style={{ y: kanjiY }} aria-hidden="true">
        <span>存在</span>
      </motion.div>

      <div className="wrap hero__content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Slash />
          Sonzai — tecnologia &amp; marketing de alta performance
        </motion.p>

        <h1 className="display hero__title">
          {LINES.map((line, i) => (
            <span className="hero__line" key={line}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
                {i === LINES.length - 1 && <span className="dot">.</span>}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          A Sonzai constrói <strong>sistemas de aquisição e vendas</strong> — tráfego,
          funil, nutrição e automação operando como uma máquina única, medida em
          receita. Não em curtidas.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic>
            <a className="btn" href="#briefing">
              Iniciar projeto
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Magnetic>
          <a className="btn btn--ghost" href="#sistema">
            Conhecer o sistema
          </a>
        </motion.div>
      </div>

      <motion.div
        className="ticker"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
      >
        <div className="ticker__track">
          {[0, 1].map((copy) => (
            <span key={copy} className="ticker__item">
              {TICKER.map((t) => (
                <span key={t} className="ticker__item">
                  {t} <i>◆</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
