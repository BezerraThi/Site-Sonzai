import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#topo" className="nav__brand" aria-label="Sonzai — voltar ao topo">
          <img src="/logo.png" alt="" width={36} height={36} />
          <span className="nav__wordmark">SONZAI</span>
        </a>
        <nav className="nav__links" aria-label="Navegação principal">
          <a className="nav__link" href="#sistema">
            O sistema
          </a>
          <a className="nav__link" href="#metricas">
            O que medimos
          </a>
          <a className="btn btn--sm" href="#briefing">
            Iniciar projeto
          </a>
        </nav>
      </div>
    </header>
  );
}
