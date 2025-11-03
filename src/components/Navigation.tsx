'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigationItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/manifest', label: 'Manifiesto', icon: '📜' },
  { href: '/wellbeing', label: 'Bienestar', icon: '🧘' },
  { href: '/entertainment', label: 'Entretenimiento', icon: '🎮' },
  { href: '/programming', label: 'Programación', icon: '💻' },
  { href: '/crypto', label: 'Crypto', icon: '₿' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex nerd-nav"
        aria-label="Navegación principal"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nerd-nav-link ${
              pathname === item.href ? 'active' : ''
            }`}
          >
            <span className="mr-2" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden nerd-nav-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={isMenuOpen}
      >
        <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden nerd-mobile-nav">
          <nav
            className="nerd-mobile-nav-content"
            aria-label="Navegación móvil"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nerd-mobile-nav-link ${
                  pathname === item.href ? 'active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
