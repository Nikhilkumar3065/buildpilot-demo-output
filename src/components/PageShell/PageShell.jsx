import React from 'react';
import './PageShell.css';

/**
 * Default placeholder navigation items.
 * Consumers can override these via the `navItems` prop.
 */
const DEFAULT_NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
];

/**
 * PageShell
 *
 * A reusable, responsive page layout wrapper that provides:
 *  - a consistent header (brand + navigation)
 *  - placeholder navigation links
 *  - a flexible main content area
 *  - a footer
 *
 * @param {Object}   props
 * @param {string}   [props.title='BuildPilot']      Brand / site title shown in the header.
 * @param {Array}    [props.navItems]                Navigation items: [{ label, href }].
 * @param {React.ReactNode} props.children           Main page content.
 * @param {React.ReactNode} [props.footerText]       Footer content.
 */
export default function PageShell({
  title = 'BuildPilot',
  navItems = DEFAULT_NAV_ITEMS,
  children,
  footerText = `\u00A9 ${new Date().getFullYear()} BuildPilot. All rights reserved.`,
}) {
  return (
    <div className="page-shell">
      <header className="page-shell__header">
        <div className="page-shell__header-inner">
          <a className="page-shell__brand" href="#">
            {title}
          </a>
          <nav className="page-shell__nav" aria-label="Primary">
            <ul className="page-shell__nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="page-shell__nav-item">
                  <a className="page-shell__nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="page-shell__main">
        <div className="page-shell__main-inner">{children}</div>
      </main>

      <footer className="page-shell__footer">
        <div className="page-shell__footer-inner">{footerText}</div>
      </footer>
    </div>
  );
}
