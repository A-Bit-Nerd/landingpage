export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Enlaces de la comunidad y redes sociales
  const whatsappCommunity =
    process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY ||
    'https://chat.whatsapp.com/ItxIlzImaWN1SBGpAZSdrg';
  const facebookUrl =
    process.env.NEXT_PUBLIC_FACEBOOK_URL ||
    'https://www.facebook.com/share/17NAsKsuSN/';
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    'https://www.instagram.com/abitnerd_01';
  const tiktokUrl =
    process.env.NEXT_PUBLIC_TIKTOK_URL ||
    'https://www.tiktok.com/@a.bit.nerd?_t=ZM-8zkbjVw6UEC&_r=1';
  const githubUrl =
    process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/A-Bit-Nerd';

  return (
    <footer className="nerd-footer">
      <div className="nerd-footer-content">
        <div className="nerd-footer-section">
          <h3 className="nerd-footer-title">A Bit Nerd</h3>
          <p className="nerd-footer-desc">
            Comunidad nerd que celebra la curiosidad, la creatividad y la
            inclusión.
          </p>
        </div>

        <div className="nerd-footer-section">
          <h4 className="nerd-footer-subtitle">Enlaces</h4>
          <div className="nerd-footer-links">
            <a href="/manifiesto" className="nerd-footer-link">
              Manifiesto
            </a>
            <a href="/mision" className="nerd-footer-link">
              Misión
            </a>
            <a
              href={`mailto:${
                process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
                'thebignerd122@gmail.com'
              }`}
              className="nerd-footer-link"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="nerd-footer-section">
          <h4 className="nerd-footer-subtitle">Comunidad</h4>
          <div className="nerd-footer-links">
            <a
              href={whatsappCommunity}
              target="_blank"
              rel="noopener"
              className="nerd-footer-link"
            >
              WhatsApp
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener"
              className="nerd-footer-link"
            >
              Facebook
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener"
              className="nerd-footer-link"
            >
              Instagram
            </a>
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener"
              className="nerd-footer-link"
            >
              TikTok
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener"
              className="nerd-footer-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="nerd-footer-bottom">
        <div>© {currentYear} A Bit Nerd · Hecho con ♥ desde la comunidad</div>
        <div className="nerd-footer-legal">
          <a href="#" className="nerd-footer-link">
            Accesibilidad
          </a>
          <span>·</span>
          <a href="#" className="nerd-footer-link">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
