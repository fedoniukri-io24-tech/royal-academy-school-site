'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { lockScroll, unlockScroll } from '@/lib/scrollLock';

const NAV_LINKS = [
  { href: '#programs', label: 'Програми' },
  { href: '#languages', label: 'Мови' },
  { href: '#why-us', label: 'Про компанію' },
  { href: '#teachers', label: 'Викладачі' },
  { href: '#faq', label: 'Блог / Корисне' },
  { href: '#contacts', label: 'Контакти' },
] as const;

const SCROLL_OFFSET = 48;

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      lockScroll();
      return () => unlockScroll();
    }
    return undefined;
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_OFFSET);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <>
      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <header
        className={`site-header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}
      >
        <div className="nav-row">
          <Link href="/" className="logo" aria-label="На головну — Royal Academy School" onClick={closeMenu}>
            <img src="/school-assets/logo.png" alt="" />
            <span className="logo-text">
              <span className="logo-text-line logo-text-line--main">Royal Academy</span>
              <span className="logo-text-line logo-text-line--accent">School</span>
            </span>
          </Link>

          <div className="nav-center nav-desktop-only">
            <nav className="nav-links" aria-label="Головна навігація">
              {NAV_LINKS.map((link) => (
                <a key={`${link.href}-${link.label}`} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="nav-right">
            <div className="nav-cta-group nav-desktop-only">
              <LeadFormTrigger
                intent="level-test"
                className="ras-btn ras-btn-outline header-btn"
                onClick={closeMenu}
              >
                Визначити рівень
              </LeadFormTrigger>
              <LeadFormTrigger
                intent="consultation"
                className="ras-btn ras-btn-primary header-btn header-btn--with-arrow"
                onClick={closeMenu}
              >
                <span className="header-btn-text">Підібрати програму</span>
                <HeaderCtaArrow />
              </LeadFormTrigger>
            </div>

            <LeadFormTrigger
              intent="consultation"
              className="ras-btn ras-btn-primary header-btn header-btn--mobile header-btn--with-arrow nav-mobile-only"
              onClick={closeMenu}
            >
              <span className="header-btn-text">Записатися</span>
              <HeaderCtaArrow size={14} />
            </LeadFormTrigger>

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
          {NAV_LINKS.map((link) => (
            <a key={`mobile-${link.href}-${link.label}`} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <div className="nav-mobile-actions">
            <LeadFormTrigger
              intent="level-test"
              className="ras-btn ras-btn-outline"
              onClick={closeMenu}
            >
              Визначити рівень
            </LeadFormTrigger>
            <LeadFormTrigger
              intent="consultation"
              className="ras-btn ras-btn-primary header-btn--with-arrow"
              onClick={closeMenu}
            >
              <span className="header-btn-text">Підібрати програму</span>
              <HeaderCtaArrow />
            </LeadFormTrigger>
          </div>
        </nav>
      </header>
    </>
  );
}
