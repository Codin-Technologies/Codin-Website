"use client";

import Link from 'next/link';

export function Navigation({ isTransparent }: { isTransparent: boolean }) {
  const baseLinkClass = 'text-sm font-medium transition-colors';
  const linkColor = isTransparent ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:opacity-90';

  return (
    <nav className="flex items-center gap-8">
      <Link href="/Who We Are" className={`${baseLinkClass} ${linkColor}`}>Who we are</Link>
      <Link href="/What We Do" className={`${baseLinkClass} ${linkColor}`}>What we do</Link>
      <Link href="/Insights" className={`${baseLinkClass} ${linkColor}`}>Insights</Link>
      <Link href="/Contact" className={`${baseLinkClass} ${linkColor}`}>Contact</Link>
      <Link href="/Careers" className={`${baseLinkClass} ${linkColor}`}>Careers</Link>
    </nav>
  );
}
