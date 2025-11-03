export default function ProgrammingPage() {
  // Canal específico de WhatsApp para Programming
  const whatsappProgramming =
    process.env.NEXT_PUBLIC_WHATSAPP_PROGRAMMING ||
    'https://chat.whatsapp.com/C56NdKzvKoUK2OrH82n9ck';

  return (
    <>
      <section className="nerd-hero" aria-labelledby="programming-title">
        <div className="nerd-kicker">Desarrollo y código</div>
        <h1 id="programming-title" className="nerd-title">
          Programación 💻
        </h1>
        <p className="nerd-subtitle">
          Mejora tus habilidades de programación, aprende nuevos lenguajes y
          colabora en proyectos open source con desarrolladores de todos los
          niveles. Desde principiantes hasta expertos.
        </p>
      </section>

      <section className="nerd-features">
        <h2 className="nerd-section-title">Áreas de desarrollo</h2>
        <div className="nerd-features-grid">
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🌐</div>
            <h3 className="nerd-feature-title">Frontend</h3>
            <p className="nerd-feature-desc">
              React, Vue, Angular, TypeScript y las últimas tecnologías web.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">⚡</div>
            <h3 className="nerd-feature-title">Backend</h3>
            <p className="nerd-feature-desc">
              Node.js, Python, Java, bases de datos y arquitectura de sistemas.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">📱</div>
            <h3 className="nerd-feature-title">Mobile</h3>
            <p className="nerd-feature-desc">
              React Native, Flutter, iOS y Android development.
            </p>
          </div>
          <div className="nerd-feature">
            <div className="nerd-feature-icon">🤖</div>
            <h3 className="nerd-feature-title">AI & ML</h3>
            <p className="nerd-feature-desc">
              Machine Learning, IA, automation y tecnologías emergentes.
            </p>
          </div>
        </div>
      </section>

      <section className="nerd-features">
        <h2 className="nerd-section-title">Juegos de la Comunidad</h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Descubre los increíbles juegos desarrollados por miembros de nuestra
          comunidad. ¡Juega, aprende del código y contribuye!
        </p>
        <div className="nerd-features-grid">
          <div className="nerd-feature group">
            <div className="nerd-feature-icon">🎯</div>
            <h3 className="nerd-feature-title">Simón Dice</h3>
            <p className="nerd-feature-desc mb-4">
              Clásico juego de memoria y secuencias desarrollado por Franco. Pon
              a prueba tu memoria siguiendo patrones de colores y sonidos.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/FrancoVivass/JuegoSimonDice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nerd-accent hover:text-nerd-cyan transition-colors duration-200 font-medium"
                aria-label="Jugar Simón Dice"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Jugar
              </a>
            </div>
          </div>

          {/* Segundo juego: Tetris */}
          <div className="nerd-feature group">
            <div className="nerd-feature-icon">🟦</div>
            <h3 className="nerd-feature-title">Tetris</h3>
            <p className="nerd-feature-desc mb-4">
              El clásico juego de bloques desarrollado por Camilo. Rota y encaja
              las piezas para completar líneas y conseguir la puntuación más
              alta.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/CamiloQuintana2005/tetris"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nerd-accent hover:text-nerd-cyan transition-colors duration-200 font-medium"
                aria-label="Jugar Tetris"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Jugar
              </a>
            </div>
          </div>

          {/* Tercer juego: Sudoku */}
          <div className="nerd-feature group">
            <div className="nerd-feature-icon">�</div>
            <h3 className="nerd-feature-title">Sudoku</h3>
            <p className="nerd-feature-desc mb-4">
              El popular juego de números y lógica desarrollado por Noah.
              Completa la cuadrícula siguiendo las reglas del sudoku
              tradicional.
            </p>
            <div className="flex justify-center">
              <a
                href="https://noaheritier.github.io/Sudoku/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nerd-accent hover:text-nerd-cyan transition-colors duration-200 font-medium"
                aria-label="Jugar Sudoku"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Jugar
              </a>
            </div>
          </div>

          {/* Cuarto juego: Snake Game */}
          <div className="nerd-feature group">
            <div className="nerd-feature-icon">🐍</div>
            <h3 className="nerd-feature-title">Snake Game</h3>
            <p className="nerd-feature-desc mb-4">
              El clásico juego de la serpiente desarrollado por Alejo. Controla
              la serpiente para comer y crecer sin chocar contigo mismo.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/Alejo-Pueblas/SnakeGame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nerd-accent hover:text-nerd-cyan transition-colors duration-200 font-medium"
                aria-label="Jugar Snake Game"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Jugar
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav className="nerd-cta" aria-label="Acciones principales">
        <a
          className="nerd-btn"
          href={whatsappProgramming}
          target="_blank"
          rel="noopener"
          aria-label="Únete al grupo de WhatsApp"
        >
          💻 Unirme al grupo en WhatsApp
        </a>
        <a
          className="nerd-btn nerd-btn-secondary"
          href="/crypto"
          aria-label="Explorar Crypto"
        >
          ₿ Explorar Crypto
        </a>
      </nav>
    </>
  );
}
