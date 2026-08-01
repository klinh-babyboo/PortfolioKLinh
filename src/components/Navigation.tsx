import type { FC } from 'react';

interface NavigationProps {
  onOpenMobileMenu: () => void;
}

export const Navigation: FC<NavigationProps> = ({ onOpenMobileMenu }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills & ACCA', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
      {/* Logo (top-left) */}
      <a 
        href="#" 
        aria-label="Nguyen KhanhLinh Home"
        className="pointer-events-auto flex items-center gap-3 p-2 rounded-full hover:opacity-90 transition-opacity"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 256 256" 
          fill="white" 
          className="w-7 h-7 drop-shadow-sm"
        >
          <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" />
        </svg>
        <span className="font-instrument-serif text-xl sm:text-2xl tracking-wide text-white">Nguyen KhanhLinh</span>
      </a>

      {/* Desktop center pill nav (hidden on mobile) */}
      <nav 
        className="hidden md:flex pointer-events-auto fixed left-1/2 -translate-x-1/2 top-4 sm:top-6 liquid-glass rounded-full px-3 py-1.5 items-center gap-1 shadow-lg"
        aria-label="Main Navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Action Section */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Desktop CTA (top-right, hidden on mobile) */}
        <a
          href="#contact"
          className="hidden md:flex liquid-glass rounded-full px-4 py-2 items-center gap-2 text-white text-sm font-medium hover:bg-white/10 transition-colors shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span>Connect with Me</span>
        </a>

        {/* Mobile hamburger (top-right, hidden md+) */}
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open Mobile Menu"
          className="md:hidden liquid-glass w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors shadow-lg focus:outline-none"
        >
          <span className="w-5 h-[1.5px] bg-white rounded-full" />
          <span className="w-3.5 h-[1.5px] bg-white rounded-full self-center" />
        </button>
      </div>
    </header>
  );
};
