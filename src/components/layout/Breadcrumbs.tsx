import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  variant = 'light',
}: {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}) {
  return (
    <nav
      className={`page-breadcrumbs page-breadcrumbs--${variant}`}
      aria-label="Хлібні крихти"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`}>
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
            )}
            {!isLast ? <span aria-hidden="true"> / </span> : null}
          </span>
        );
      })}
    </nav>
  );
}
