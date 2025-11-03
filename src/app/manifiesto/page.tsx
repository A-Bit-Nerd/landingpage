import Link from 'next/link';

export const metadata = {
  title: 'A Bit Nerd - Manifiesto',
  description:
    'El manifiesto de A Bit Nerd: creemos que ser nerd no es una etiqueta negativa, sino un superpoder.',
};

export default function ManifiestoPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-nerd-green mb-8 text-center">
        📜 A Bit Nerd Manifiesto
      </h1>

      <div className="space-y-8 text-center">
        <p className="text-lg text-nerd-text leading-relaxed">
          En <span className="text-nerd-yellow font-bold">A Bit Nerd</span>{' '}
          creemos que ser nerd no es una etiqueta negativa, sino un superpoder.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-nerd-green mb-6">
            🌟 Lo que defendemos
          </h2>
          <ul className="space-y-3 text-left max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-nerd-fuchsia mr-2">&gt;&gt;</span>
              <span className="text-nerd-text">
                La{' '}
                <span className="text-nerd-yellow font-bold">curiosidad</span>{' '}
                como motor de crecimiento
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-nerd-fuchsia mr-2">&gt;&gt;</span>
              <span className="text-nerd-text">
                El <span className="text-nerd-yellow font-bold">respeto</span>{' '}
                por las diferencias
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-nerd-fuchsia mr-2">&gt;&gt;</span>
              <span className="text-nerd-text">
                La{' '}
                <span className="text-nerd-yellow font-bold">colaboración</span>{' '}
                sobre la competencia
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-nerd-fuchsia mr-2">&gt;&gt;</span>
              <span className="text-nerd-text">
                La{' '}
                <span className="text-nerd-yellow font-bold">creatividad</span>{' '}
                para cambiar el mundo
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-nerd-green mb-6">
            🚀 Nuestra misión
          </h2>
          <p className="text-lg text-nerd-text leading-relaxed max-w-3xl mx-auto">
            Crear una comunidad inclusiva donde cada nerd pueda sentirse
            acompañado, potenciar sus habilidades y demostrar que la pasión
            transforma realidades.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-nerd-green mb-6">
            💡 Nuestro compromiso
          </h2>
          <p className="text-lg text-nerd-text leading-relaxed max-w-3xl mx-auto">
            Promover espacios libres de bullying, impulsar el aprendizaje
            constante y dar visibilidad a lo positivo de ser un nerd.
          </p>
        </section>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center text-nerd-cyan hover:text-nerd-accent transition-colors duration-200 font-bold"
          >
            ⬅️ Volver a la página principal
          </Link>
          <Link
            href="/wellbeing"
            className="nerd-btn nerd-btn-secondary"
            aria-label="Explorar Bienestar"
          >
            🧘 Explorar Bienestar
          </Link>
        </div>
      </div>
    </div>
  );
}
