"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Show header when scrolling up, hide when scrolling down
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isTransparent = isHome && !isScrolled;

  const headerClass = isTransparent
    ? 'bg-transparent border-transparent'
    : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm';

  const ribbonClass = isTransparent
    ? 'bg-white/30 backdrop-blur-sm border-transparent'
    : 'ribbon-gradient border border-transparent shadow-2xl';

  const logoTextClass = isTransparent ? 'text-gray-900' : 'text-white';
  return (
    <header className={`fixed top-3 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl pointer-events-auto rounded-2xl px-6 py-3">
          <div className={`flex items-center justify-between gap-6 rounded-2xl px-10 py-5 ${ribbonClass}`}>
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <Image
                src="/CODIN LOGO.png"
                alt="Codin Logo"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full"
              />
              <span className={`text-2xl font-bold tracking-tight ${logoTextClass}`}>Codin Technologies</span>
            </Link>
            <Navigation isTransparent={isTransparent} />
          </div>
        </div>
      </div>
    </header>
  );
}
