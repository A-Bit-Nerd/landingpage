export default function CryptoPage() {
  // Canal específico de WhatsApp para Crypto
  const whatsappCrypto =
    process.env.NEXT_PUBLIC_WHATSAPP_CRYPTO ||
    'https://chat.whatsapp.com/GUkybf4Uz6A0q0x0gly5yb';

  return (
    <>
      <section className="nerd-hero" aria-labelledby="crypto-title">
        <div className="nerd-kicker">Finanzas descentralizadas</div>
        <h1 id="crypto-title" className="nerd-title">
          Crypto ₿
        </h1>
        <p className="nerd-subtitle">
          Explora el mundo de las criptomonedas, blockchain, DeFi y Web3.
          Aprende sobre trading, análisis técnico, proyectos innovadores y las
          últimas tendencias en el ecosistema crypto.
        </p>
      </section>

      <section className="nerd-features">
        <h2 className="nerd-section-title">Áreas de interés</h2>
        <div className="nerd-features-grid">
          <div className="nerd-feature">
            <div className="nerd-feature-icon">₿</div>
            <h3 className="nerd-feature-title">Trading</h3>
            <p className="nerd-feature-desc">
              Análisis técnico, estrategias de trading y gestión de riesgo.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">⛓️</div>
            <h3 className="nerd-feature-title">Blockchain</h3>
            <p className="nerd-feature-desc">
              Tecnología blockchain, smart contracts y desarrollo de dApps.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🌐</div>
            <h3 className="nerd-feature-title">DeFi</h3>
            <p className="nerd-feature-desc">
              Finanzas descentralizadas, yield farming y protocolos DeFi.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🖼️</div>
            <h3 className="nerd-feature-title">NFTs</h3>
            <p className="nerd-feature-desc">
              Mercado de NFTs, colecciones y utilidades de tokens no fungibles.
            </p>
          </div>
        </div>
      </section>

      <nav className="nerd-cta" aria-label="Acciones principales">
        <a
          className="nerd-btn"
          href={whatsappCrypto}
          target="_blank"
          rel="noopener"
          aria-label="Únete al grupo de WhatsApp"
        >
          ₿ Unirme al grupo en WhatsApp
        </a>
        <a
          className="nerd-btn nerd-btn-secondary"
          href="/escape-room"
          aria-label="Explorar Escape Room"
        >
          🔐 Explorar Escape Room
        </a>
      </nav>
    </>
  );
}
