import { CONTACT_EMAIL, INSTAGRAM_URL, whatsappLink } from "../config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo.png" alt="Logo da Sonzai" width={44} height={44} />
            <div>
              <strong>SONZAI</strong>
              <small>存在 — existência, presença</small>
            </div>
          </div>
          <nav className="footer__links" aria-label="Links do rodapé">
            <a href="#sistema">O sistema</a>
            <a href="#metricas">Métricas</a>
            <a href="#briefing">Briefing</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={whatsappLink("Olá! Vim pelo site da Sonzai.")} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>E-mail</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Sonzai. Todos os direitos reservados.</span>
          <span>Tecnologia × marketing, medido em receita.</span>
        </div>
      </div>
    </footer>
  );
}
