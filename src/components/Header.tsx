'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { HEADER_CTA, MAIN_NAV_LINKS } from '@/config/navigation';
import { lockScroll, unlockScroll } from '@/lib/scrollLock';

function HeaderCtaArrow({ size = 18 }: { size?: number }) {
  return (
    <span className="header-btn-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M5 12h12M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      lockScroll();
      return () => unlockScroll();
    }
    return undefined;
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  /* Завжди solid-стиль — без зміни контенту/стану при скролі */
  const headerClass = [
    'site-header',
    'header--scrolled',
    menuOpen ? 'header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <header className={headerClass}>
        <div className="nav-row">
          <Link href="/" className="logo" aria-label="На головну — Royal Academy School" onClick={closeMenu}>
            <img src="/school-assets/logo.png" alt="" />
            <span className="logo-text">
              <span className="logo-text-line logo-text-line--main">Royal Academy</span>
              <span className="logo-text-line logo-text-line--accent">School</span>
              <span className="logo-text-tagline logo-text-tagline--header">
                Світ відкритий, коли ти знаєш мови
              </span>
            </span>
          </Link>

          <div className="nav-center nav-desktop-only">
            <nav className="nav-links nav-links--main" aria-label="Головна навігація">
              {MAIN_NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="nav-right">
            <LeadFormTrigger
              intent="consultation"
              className="ras-btn header-btn header-btn--signup header-btn--with-arrow header-btn--mobile nav-mobile-only"
              onClick={closeMenu}
            >
              <span className="header-btn-text">{HEADER_CTA.program.label}</span>
              <HeaderCtaArrow size={16} />
            </LeadFormTrigger>

            <div className="nav-cta-group nav-desktop-only">
              <LeadFormTrigger
                intent="consultation"
                className="ras-btn header-btn header-btn--signup header-btn--with-arrow"
                onClick={closeMenu}
              >
                <span className="header-btn-text">{HEADER_CTA.program.label}</span>
                <HeaderCtaArrow />
              </LeadFormTrigger>
            </div>

            <button
              type="button"
              className={`burger${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Закрити меню' : 'Меню'}
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          className={`nav-drawer${menuOpen ? ' open' : ''}`}
          aria-label="Мобільна навігація"
          aria-hidden={!menuOpen}
        >
          {MAIN_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <div className="nav-mobile-actions">
            <LeadFormTrigger
              intent="consultation"
              className="ras-btn header-btn--signup header-btn--with-arrow"
              onClick={closeMenu}
            >
              <span className="header-btn-text">{HEADER_CTA.program.label}</span>
              <HeaderCtaArrow />
            </LeadFormTrigger>
          </div>
        </nav>
      </header>
    </>
  );
}
