import Link from 'next/link';

export const metadata = {
  title: 'A Bit Nerd - Misión, Visión y Valores',
  description:
    'Conoce nuestra misión, visión y valores como comunidad nerd que celebra la curiosidad y la inclusión.',
};

export default function MisionPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-nerd-green mb-8 text-center">
        🎯 Misión, Visión y Valores
      </h1>

      <div className="space-y-12 text-center">
        <section>
          <h2 className="text-3xl font-bold text-nerd-green mb-6">
            🚀 Nuestra Misión
          </h2>
          <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-8">
            <p className="text-lg text-nerd-text leading-relaxed">
              Crear una comunidad inclusiva y diversa donde cada persona pueda
              explorar sus pasiones nerd sin juicios, aprender de manera
              colaborativa y encontrar su tribu. Queremos demostrar que ser nerd
              es un superpoder que puede transformar vidas y cambiar el mundo
              para mejor.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-nerd-green mb-6">
            👁️ Nuestra Visión
          </h2>
          <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-8">
            <p className="text-lg text-nerd-text leading-relaxed">
              Ser la comunidad nerd de referencia en Latinoamérica, reconocida
              por su inclusividad, innovación y capacidad de empoderar a sus
              miembros. Visualizamos un futuro donde la cultura nerd sea
              celebrada y valorada como motor de progreso social y tecnológico.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-nerd-green mb-6">
            💎 Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nerd-fuchsia mb-4">
                🤝 Inclusión
              </h3>
              <p className="text-nerd-text">
                Creemos en la diversidad como fortaleza. Todos son bienvenidos,
                sin importar género, orientación, raza, edad o nivel de
                conocimiento.
              </p>
            </div>

            <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nerd-fuchsia mb-4">
                🧠 Curiosidad
              </h3>
              <p className="text-nerd-text">
                Fomentamos la búsqueda constante de conocimiento y la
                exploración de nuevas ideas. La curiosidad es nuestro motor de
                crecimiento.
              </p>
            </div>

            <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nerd-fuchsia mb-4">
                🤲 Colaboración
              </h3>
              <p className="text-nerd-text">
                Trabajamos juntos para lograr más. La competencia sana está
                bien, pero la colaboración nos lleva más lejos como comunidad.
              </p>
            </div>

            <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nerd-fuchsia mb-4">
                🎨 Creatividad
              </h3>
              <p className="text-nerd-text">
                Valoramos la expresión creativa en todas sus formas. Desde el
                arte hasta la programación, la creatividad transforma ideas en
                realidad.
              </p>
            </div>

            <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nerd-fuchsia mb-4">
                🛡️ Respeto
              </h3>
              <p className="text-nerd-text">
                Tratamos a todos con dignidad y respeto. No toleramos el
                bullying, la discriminación o cualquier forma de acoso.
              </p>
            </div>

            <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nerd-fuchsia mb-4">
                🌟 Autenticidad
              </h3>
              <p className="text-nerd-text">
                Ser uno mismo es suficiente. No necesitas fingir ser alguien más
                para encajar en nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-nerd-green mb-6">
            🎮 Nuestros Pilares
          </h2>
          <div className="bg-nerd-panel/50 border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-nerd-cyan mb-3">
                  📚 Aprendizaje
                </h3>
                <p className="text-nerd-text text-sm">
                  Charlas, workshops, mentorías y recursos para crecer
                  constantemente.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-nerd-cyan mb-3">
                  🎪 Entretenimiento
                </h3>
                <p className="text-nerd-text text-sm">
                  Gaming, anime, cómics, películas y todo lo que nos apasiona.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-nerd-cyan mb-3">
                  🌐 Networking
                </h3>
                <p className="text-nerd-text text-sm">
                  Conectamos personas con intereses similares para proyectos y
                  amistades.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center text-nerd-cyan hover:text-nerd-accent transition-colors duration-200 font-bold"
          >
            ⬅️ Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}
