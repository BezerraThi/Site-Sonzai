import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__kanji" aria-hidden="true">
        在
      </div>
      <div className="wrap">
        <Reveal>
          <h2 className="display cta-banner__title">
            Sua empresa já existe. Falta o mercado <em>sentir</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="cta-banner__sub">
            Conte onde está o gargalo — tráfego, conversão, relacionamento ou
            escala — e volte com um diagnóstico honesto, sem compromisso.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Magnetic>
            <a className="btn" href="#briefing">
              Começar pelo briefing
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
