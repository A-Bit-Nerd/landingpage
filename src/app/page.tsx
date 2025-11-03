import Link from 'next/link';
import Sponsors from '@/components/Sponsors';
import Donations from '@/components/Donations';

export default function HomePage() {
  // Variables de entorno para controlar qué secciones mostrar
  const showSponsors = process.env.NEXT_PUBLIC_SHOW_SPONSORS === 'true';
  const showDonations = process.env.NEXT_PUBLIC_SHOW_DONATIONS === 'true';

  // Variables de entorno para las estadísticas de la comunidad
  const activeMembers = process.env.NEXT_PUBLIC_ACTIVE_MEMBERS || '500+';
  const monthlyEvents = process.env.NEXT_PUBLIC_MONTHLY_EVENTS || '50+';
  const communityAvailability =
    process.env.NEXT_PUBLIC_COMMUNITY_AVAILABILITY || '24/7';

  // Enlaces de la comunidad
  const whatsappCommunity =
    process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY ||
    'https://chat.whatsapp.com/ItxIlzImaWN1SBGpAZSdrg';

  // Redes sociales
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
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'thebignerd122@gmail.com';

  return (
    <>
      <section className="nerd-hero" aria-labelledby="tit">
        <div className="nerd-kicker">Comunidad nerd</div>
        <h1 id="tit" className="nerd-title">
          Bienvenido a tu tribu nerd 🚀
        </h1>
        <p className="nerd-subtitle">
          Un espacio seguro e inclusivo donde la curiosidad, la creatividad y
          las pasiones nerd se encuentran. Únete a una comunidad que celebra el
          conocimiento, la colaboración y la autenticidad.
        </p>

        <div className="nerd-stats">
          <div className="nerd-stat">
            <div className="nerd-stat-number">{activeMembers}</div>
            <div className="nerd-stat-label">Miembros activos</div>
          </div>
          <div className="nerd-stat">
            <div className="nerd-stat-number">{monthlyEvents}</div>
            <div className="nerd-stat-label">Eventos mensuales</div>
          </div>
          <div className="nerd-stat">
            <div className="nerd-stat-number">{communityAvailability}</div>
            <div className="nerd-stat-label">Comunidad activa</div>
          </div>
        </div>
      </section>

      <nav className="nerd-cta" aria-label="Acciones principales">
        <a
          className="nerd-btn"
          href={whatsappCommunity}
          target="_blank"
          rel="noopener"
          aria-label="Únete a nuestra comunidad en WhatsApp"
        >
          💬 Únete a WhatsApp
        </a>
        <Link
          className="nerd-btn nerd-btn-secondary"
          href="/manifest"
          aria-label="Conoce nuestros valores"
        >
          📜 Nuestro Manifiesto
        </Link>
        <a
          className="nerd-btn nerd-btn-secondary"
          href={`mailto:${contactEmail}?subject=Hola%20desde%20A%20Bit%20Nerd`}
          aria-label="Contáctanos por email"
        >
          💬 Contáctanos
        </a>
      </nav>

      <section className="nerd-features">
        <h2 className="nerd-section-title">¿Por qué elegir A Bit Nerd?</h2>
        <div className="nerd-features-grid">
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🤝</div>
            <h3 className="nerd-feature-title">Comunidad Inclusiva</h3>
            <p className="nerd-feature-desc">
              Un espacio seguro donde todos son bienvenidos, sin importar tu
              nivel de conocimiento o experiencia.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🎓</div>
            <h3 className="nerd-feature-title">Aprendizaje Continuo</h3>
            <p className="nerd-feature-desc">
              Charlas, workshops, mentorías y recursos para que nunca dejes de
              crecer y aprender.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🎮</div>
            <h3 className="nerd-feature-title">Entretenimiento</h3>
            <p className="nerd-feature-desc">
              Gaming, anime, cómics, tecnología y todo lo que nos apasiona como
              comunidad nerd.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🌐</div>
            <h3 className="nerd-feature-title">Networking</h3>
            <p className="nerd-feature-desc">
              Conecta con personas que comparten tus intereses y construye
              relaciones duraderas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Sponsors - Controlada por NEXT_PUBLIC_SHOW_SPONSORS */}
      {showSponsors && <Sponsors />}

      {/* Sección de Donaciones - Controlada por NEXT_PUBLIC_SHOW_DONATIONS */}
      {showDonations && <Donations />}

      <div className="nerd-links" aria-label="Redes sociales">
        <span>Seguinos:</span>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          Facebook
        </a>
        <span>·</span>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          Instagram
        </a>
        <span>·</span>
        <a href={tiktokUrl} target="_blank" rel="noopener" aria-label="TikTok">
          TikTok
        </a>
        <span>·</span>
        <a href={githubUrl} target="_blank" rel="noopener" aria-label="GitHub">
          GitHub
        </a>
      </div>
    </>
  );
}
