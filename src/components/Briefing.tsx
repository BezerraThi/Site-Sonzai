import { useState } from "react";
import { Reveal } from "./Reveal";
import { Slash } from "./Slash";
import { CONTACT_EMAIL, whatsappLink } from "../config";

const REVENUES = ["até 50 mil", "50–200 mil", "200 mil–1 M", "acima de 1 M", "prefiro contar depois"];

const GOALS = [
  "escalar tráfego pago",
  "estruturar meu funil",
  "nutrir e reativar leads",
  "automatizar as vendas",
  "o sistema completo",
];

/** Input que cresce junto com o texto digitado. */
function GrowInput({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  label: string;
}) {
  const width = `${Math.max(placeholder.length, value.length) + 2}ch`;
  return (
    <input
      className={`madlib__input ${value ? "madlib__input--filled" : ""}`}
      style={{ width }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={label}
    />
  );
}

export function Briefing() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [revenue, setRevenue] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function submit() {
    if (!name.trim() || !company.trim() || !revenue || !goal) {
      setError("// faltou preencher: complete a frase acima para enviar.");
      return;
    }
    setError(null);
    const message =
      `Olá! Meu nome é ${name.trim()} e cuido da ${company.trim()}. ` +
      `Hoje faturamos ${revenue} por mês e meu foco agora é ${goal}. ` +
      `Vim pelo site da Sonzai e quero um diagnóstico.`;
    window.open(whatsappLink(message), "_blank", "noopener");
    setSent(true);
  }

  return (
    <section className="briefing" id="briefing">
      <div className="wrap">
        <Reveal>
          <div className="briefing__head">
            <p className="eyebrow">
              <Slash color="var(--gold-deep)" />
              Briefing de 30 segundos
            </p>
            <h2 className="display briefing__title">
              Sem formulário chato. Só complete a frase.
            </h2>
            <p className="briefing__hint">
              Ao enviar, a frase pronta abre no nosso WhatsApp — você só confirma.
              Resposta em até 1 dia útil.
            </p>
          </div>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="briefing__success">
              <h3>Briefing pronto. 存在 confirmada.</h3>
              <p>
                Abrimos seu WhatsApp com a mensagem montada — é só apertar
                enviar. Se preferir, escreva para{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <strong>{CONTACT_EMAIL}</strong>
                </a>
                .
              </p>
              <button className="btn" onClick={() => setSent(false)}>
                Preencher de novo
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <p className="madlib">
              Olá, meu nome é{" "}
              <GrowInput
                value={name}
                onChange={setName}
                placeholder="seu nome"
                label="Seu nome"
              />{" "}
              e cuido da{" "}
              <GrowInput
                value={company}
                onChange={setCompany}
                placeholder="sua empresa"
                label="Nome da sua empresa"
              />
              . Hoje faturamos{" "}
              <span className="pillset" role="radiogroup" aria-label="Faturamento mensal">
                {REVENUES.map((r) => (
                  <button
                    key={r}
                    className={`pill ${revenue === r ? "pill--on" : ""}`}
                    role="radio"
                    aria-checked={revenue === r}
                    onClick={() => setRevenue(r)}
                  >
                    {r}
                  </button>
                ))}
              </span>{" "}
              por mês, e meu foco agora é{" "}
              <span className="pillset" role="radiogroup" aria-label="Objetivo principal">
                {GOALS.map((g) => (
                  <button
                    key={g}
                    className={`pill ${goal === g ? "pill--on" : ""}`}
                    role="radio"
                    aria-checked={goal === g}
                    onClick={() => setGoal(g)}
                  >
                    {g}
                  </button>
                ))}
              </span>
              .
            </p>

            {error && <p className="briefing__error">{error}</p>}

            <div className="briefing__actions">
              <button className="btn" onClick={submit}>
                Enviar briefing no WhatsApp
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <p className="briefing__alt">
                ou direto por e-mail:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
