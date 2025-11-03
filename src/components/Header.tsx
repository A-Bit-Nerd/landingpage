import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  // Enlace de la comunidad de WhatsApp
  const whatsappCommunity =
    process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY ||
    'https://chat.whatsapp.com/ItxIlzImaWN1SBGpAZSdrg';

  return (
    <header className="nerd-header">
      <Link href="/" className="nerd-brand" aria-label="A Bit Nerd — inicio">
        <div className="nerd-logo" aria-hidden="true"></div>
        <span className="font-bold tracking-wide">A Bit Nerd</span>
      </Link>

      <Navigation />

      <div className="flex items-center gap-4">
        <a
          href={whatsappCommunity}
          target="_blank"
          rel="noopener"
          className="nerd-btn-small"
          aria-label="Únete a WhatsApp"
        >
          Únete
        </a>
      </div>
    </header>
  );
}
