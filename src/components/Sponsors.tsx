export default function Sponsors() {
  // Email de contacto
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'thebignerd122@gmail.com';

  const sponsors = [
    {
      name: 'TechCorp',
      logo: '💻',
      tier: 'gold',
      description: 'Soluciones tecnológicas innovadoras',
    },
    {
      name: 'DevStudio',
      logo: '⚡',
      tier: 'gold',
      description: 'Desarrollo de software de vanguardia',
    },
    {
      name: 'CyberSec Pro',
      logo: '🛡️',
      tier: 'silver',
      description: 'Ciberseguridad y protección digital',
    },
    {
      name: 'AI Solutions',
      logo: '🤖',
      tier: 'silver',
      description: 'Inteligencia artificial y automatización',
    },
    {
      name: 'CodeAcademy',
      logo: '📚',
      tier: 'bronze',
      description: 'Educación tecnológica online',
    },
    {
      name: 'CloudTech',
      logo: '☁️',
      tier: 'bronze',
      description: 'Servicios en la nube',
    },
    {
      name: 'GameDev Plus',
      logo: '🎮',
      tier: 'bronze',
      description: 'Desarrollo de videojuegos',
    },
    {
      name: 'DataLab',
      logo: '📊',
      tier: 'bronze',
      description: 'Análisis de datos y BI',
    },
  ];

  const goldSponsors = sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = sponsors.filter((s) => s.tier === 'silver');
  const bronzeSponsors = sponsors.filter((s) => s.tier === 'bronze');

  return (
    <section className="nerd-sponsors" aria-labelledby="sponsors-title">
      <div className="nerd-sponsors-container">
        <h2 id="sponsors-title" className="nerd-section-title">
          🚀 Nuestros Sponsors
        </h2>
        <p className="nerd-sponsors-subtitle">
          Empresas que apoyan el crecimiento de la comunidad nerd
        </p>

        {/* Gold Sponsors */}
        <div className="nerd-sponsors-tier">
          <h3 className="nerd-sponsors-tier-title gold">⭐ Gold Sponsors</h3>
          <div className="nerd-sponsors-grid gold">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="nerd-sponsor-card gold">
                <div className="nerd-sponsor-logo">{sponsor.logo}</div>
                <h4 className="nerd-sponsor-name">{sponsor.name}</h4>
                <p className="nerd-sponsor-desc">{sponsor.description}</p>
                <div className="nerd-sponsor-badge">PREMIUM</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="nerd-sponsors-tier">
          <h3 className="nerd-sponsors-tier-title silver">
            🥈 Silver Sponsors
          </h3>
          <div className="nerd-sponsors-grid silver">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="nerd-sponsor-card silver">
                <div className="nerd-sponsor-logo">{sponsor.logo}</div>
                <h4 className="nerd-sponsor-name">{sponsor.name}</h4>
                <p className="nerd-sponsor-desc">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="nerd-sponsors-tier">
          <h3 className="nerd-sponsors-tier-title bronze">
            🥉 Bronze Sponsors
          </h3>
          <div className="nerd-sponsors-grid bronze">
            {bronzeSponsors.map((sponsor, index) => (
              <div key={index} className="nerd-sponsor-card bronze">
                <div className="nerd-sponsor-logo">{sponsor.logo}</div>
                <h4 className="nerd-sponsor-name">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action for Potential Sponsors */}
        <div className="nerd-sponsors-cta">
          <h3 className="nerd-sponsors-cta-title">
            ¿Quieres ser nuestro sponsor? 🤝
          </h3>
          <p className="nerd-sponsors-cta-desc">
            Únete a las empresas que apoyan el crecimiento de la comunidad tech
            más vibrante de LATAM
          </p>
          <a
            href={`mailto:${contactEmail}?subject=Sponsorship%20A%20Bit%20Nerd`}
            className="nerd-btn"
          >
            💼 Ser Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
