import { ABOUT_QUICK_LINKS } from '@/data/pages/aboutContent';

export function AboutQuickNav() {
  return (
    <nav className="site-about-nav" aria-label="Розділи сторінки">
      <ul className="site-about-nav__list">
        {ABOUT_QUICK_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="site-about-nav__link">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
