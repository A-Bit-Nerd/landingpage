export default function WellbeingPage() {
  // Canal específico de WhatsApp para Bienestar
  const whatsappWellbeing =
    process.env.NEXT_PUBLIC_WHATSAPP_WELLBEING ||
    'https://chat.whatsapp.com/DOKEM1Yg2TiFv9PWxDd4ic';

  return (
    <>
      <section className="nerd-hero" aria-labelledby="wellbeing-title">
        <div className="nerd-kicker">Salud mental y bienestar</div>
        <h1 id="wellbeing-title" className="nerd-title">
          Bienestar 🧘
        </h1>
        <p className="nerd-subtitle">
          Cuidamos la salud mental y el bienestar de nuestra comunidad.
          Encuentra apoyo, recursos y estrategias para mantener un equilibrio
          saludable entre la pasión nerd y el autocuidado.
        </p>
      </section>

      <section className="nerd-features">
        <h2 className="nerd-section-title">Áreas de bienestar</h2>
        <div className="nerd-features-grid">
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🧠</div>
            <h3 className="nerd-feature-title">Salud Mental</h3>
            <p className="nerd-feature-desc">
              Recursos, apoyo y estrategias para mantener una mente saludable.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">💪</div>
            <h3 className="nerd-feature-title">Fitness</h3>
            <p className="nerd-feature-desc">
              Rutinas de ejercicio adaptadas para el estilo de vida nerd.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">⚖️</div>
            <h3 className="nerd-feature-title">Work-Life Balance</h3>
            <p className="nerd-feature-desc">
              Equilibrio entre trabajo, hobbies nerds y vida personal.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🤝</div>
            <h3 className="nerd-feature-title">Apoyo Comunitario</h3>
            <p className="nerd-feature-desc">
              Espacio seguro para compartir experiencias y recibir apoyo.
            </p>
          </div>
        </div>
      </section>

      <nav className="nerd-cta" aria-label="Acciones principales">
        <a
          className="nerd-btn"
          href={whatsappWellbeing}
          target="_blank"
          rel="noopener"
          aria-label="Únete al canal de Bienestar"
        >
          🧘 Unirme al grupo en WhatsApp
        </a>
        <a
          className="nerd-btn nerd-btn-secondary"
          href="/entertainment"
          aria-label="Explorar Entretenimiento"
        >
          🎮 Explorar Entretenimiento
        </a>
      </nav>
    </>
  );
}
