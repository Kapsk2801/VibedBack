'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[var(--primary)] border-b-4 border-[var(--accent)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-2xl text-[var(--primary)] font-extrabold">VB</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">VibedBack</span>
          </Link>
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${pathname === link.href ? 'text-[var(--accent)]' : 'text-white hover:text-[var(--accent)]'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[var(--accent)] hover:text-white font-semibold transition-colors">Login</Link>
            <Button variant="primary" size="md" className="bg-[var(--accent)] text-[var(--primary)] font-bold px-6 py-2 hover:bg-white hover:text-[var(--primary)] border-2 border-[var(--accent)]">Submit Review</Button>
          </div>
        </div>
      </div>
    </header>
  );
} 