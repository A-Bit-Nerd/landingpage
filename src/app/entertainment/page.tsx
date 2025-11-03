export default function EntertainmentPage() {
  // Canal específico de WhatsApp para Entretenimiento
  const whatsappEntertainment =
    process.env.NEXT_PUBLIC_WHATSAPP_ESCAPE_ROOM ||
    'https://chat.whatsapp.com/DW3ZtOG85meKywPaF4Cokn';

  return (
    <>
      <section className="nerd-hero" aria-labelledby="entertainment-title">
        <div className="nerd-kicker">Entretenimiento nerd</div>
        <h1 id="entertainment-title" className="nerd-title">
          Entretenimiento 🎮
        </h1>
        <p className="nerd-subtitle">
          Pon a prueba tu lógica y creatividad con nuestros desafíos de escape
          room diseñados especialmente para la comunidad nerd. Resuelve puzzles,
          descifra códigos y trabaja en equipo para escapar.
        </p>
      </section>

      <section className="nerd-features">
        <h2 className="nerd-section-title">¿Qué encontrarás?</h2>
        <div className="nerd-features-grid">
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🧩</div>
            <h3 className="nerd-feature-title">Puzzles Únicos</h3>
            <p className="nerd-feature-desc">
              Desafíos temáticos de programación, matemáticas, lógica y cultura
              nerd.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">👥</div>
            <h3 className="nerd-feature-title">Trabajo en Equipo</h3>
            <p className="nerd-feature-desc">
              Colabora con otros miembros para resolver los retos más complejos.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🏆</div>
            <h3 className="nerd-feature-title">Competencias</h3>
            <p className="nerd-feature-desc">
              Participa en torneos mensuales y demuestra tus habilidades.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">💡</div>
            <h3 className="nerd-feature-title">Aprendizaje</h3>
            <p className="nerd-feature-desc">
              Mejora tu pensamiento crítico mientras te diviertes.
            </p>
          </div>
        </div>
      </section>

      <section className="nerd-features">
        <h2 className="nerd-section-title">Proyectos de la Comunidad</h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Conoce los increíbles proyectos que desarrollan los miembros de
          nuestra comunidad. ¡Síguelos y apóyalos en sus aventuras!
        </p>
        <div className="nerd-features-grid">
          <div className="nerd-feature group">
            <div className="nerd-feature-icon">🚪</div>
            <h3 className="nerd-feature-title">Salir</h3>
            <p className="nerd-feature-desc mb-4">
              Escape room físico creado por miembros de la comunidad. Una
              experiencia inmersiva que combina tecnología y narrativa.
            </p>
            <a
              href="https://instagram.com/salir.escape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-nerd-accent hover:text-nerd-cyan transition-colors duration-200 font-medium"
              aria-label="Visitar Instagram de Salir Escape"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.017 0C8.396 0 7.896.011 6.69.058 5.486.107 4.67.252 3.958.53a5.886 5.886 0 0 0-2.126 1.384 5.886 5.886 0 0 0-1.384 2.126C.252 4.67.107 5.486.058 6.69.01 7.896 0 8.396 0 12.017c0 3.621.011 4.121.058 5.327.049 1.204.194 2.02.471 2.732.259.708.628 1.379 1.384 2.126.747.756 1.418 1.125 2.126 1.384.712.277 1.528.422 2.732.471 1.206.047 1.706.058 5.327.058 3.621 0 4.121-.01 5.327-.058 1.204-.049 2.02-.194 2.732-.471a5.886 5.886 0 0 0 2.126-1.384 5.886 5.886 0 0 0 1.384-2.126c.277-.712.422-1.528.471-2.732.047-1.206.058-1.706.058-5.327 0-3.621-.01-4.121-.058-5.327-.049-1.204-.194-2.02-.471-2.732a5.886 5.886 0 0 0-1.384-2.126A5.886 5.886 0 0 0 18.896.53C18.184.252 17.368.107 16.164.058 14.958.01 14.458 0 12.017 0zm0 2.162c3.549 0 3.97.012 5.372.059 1.297.059 2.001.271 2.472.45.621.242 1.064.531 1.53.997.465.466.754.909.997 1.53.179.471.391 1.175.45 2.472.047 1.402.059 1.823.059 5.372 0 3.549-.012 3.97-.059 5.372-.059 1.297-.271 2.001-.45 2.472-.242.621-.531 1.064-.997 1.53-.466.465-.909.754-1.53.997-.471.179-1.175.391-2.472.45-1.402.047-1.823.059-5.372.059-3.549 0-3.97-.012-5.372-.059-1.297-.059-2.001-.271-2.472-.45-.621-.242-1.064-.531-1.53-.997-.465-.466-.754-.909-.997-1.53-.179-.471-.391-1.175-.45-2.472-.047-1.402-.059-1.823-.059-5.372 0-3.549.012-3.97.059-5.372.059-1.297.271-2.001.45-2.472.242-.621.531-1.064.997-1.53.466-.465.909-.754 1.53-.997.471-.179 1.175-.391 2.472-.45 1.402-.047 1.823-.059 5.372-.059z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12.017 5.837a6.18 6.18 0 1 0 0 12.36 6.18 6.18 0 0 0 0-12.36zm0 10.198a4.018 4.018 0 1 1 0-8.037 4.018 4.018 0 0 1 0 8.037z"
                  clipRule="evenodd"
                />
                <circle cx="18.206" cy="5.794" r="1.442" />
              </svg>
              @salir.escape
            </a>
          </div>

          {/* Placeholder para futuros proyectos */}
          <div className="nerd-feature opacity-60 border-2 border-dashed border-gray-600">
            <div className="nerd-feature-icon">➕</div>
            <h3 className="nerd-feature-title">Tu Proyecto Aquí</h3>
            <p className="nerd-feature-desc">
              ¿Tienes un proyecto increíble? ¡Compártelo con la comunidad y
              aparece en esta sección!
            </p>
          </div>
        </div>
      </section>

      <nav className="nerd-cta" aria-label="Acciones principales">
        <a
          className="nerd-btn"
          href={whatsappEntertainment}
          target="_blank"
          rel="noopener"
          aria-label="Únete al grupo de WhatsApp"
        >
          🎮 Unirme al grupo en WhatsApp
        </a>
        <a
          className="nerd-btn nerd-btn-secondary"
          href="/programming"
          aria-label="Explorar Programación"
        >
          💻 Explorar Programación
        </a>
      </nav>
    </>
  );
}
