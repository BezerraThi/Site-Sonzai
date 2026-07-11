import { Reveal } from "./Reveal";
import { Slash } from "./Slash";

export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap manifesto__grid">
        <Reveal>
          <div className="manifesto__kanji" aria-hidden="true">
            存在
            <small>son·zai — existência, presença</small>
          </div>
        </Reveal>

        <div className="manifesto__text">
          <Reveal delay={0.1}>
            <p className="eyebrow">
              <Slash color="var(--gold-deep)" />
              Por que Sonzai
            </p>
            <p className="manifesto__lead">
              <em className="hl">Sonzai</em> é a palavra japonesa para{" "}
              <strong>existência</strong>. É o que separa empresas que o mercado
              sente das que o mercado apenas tolera.
            </p>
            <div className="manifesto__body">
              <p>
                A maioria das empresas não tem um problema de produto — tem um
                problema de presença. Aparece quando dá, vende quando o mês ajuda
                e chama isso de marketing.
              </p>
              <p>
                Nós fazemos o oposto: engenharia. Tecnologia e marketing operando
                como um sistema único de geração de receita — cada real investido
                rastreado do clique ao contrato, cada etapa medida, cada gargalo
                atacado com dado.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
