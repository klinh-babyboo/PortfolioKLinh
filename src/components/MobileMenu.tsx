import { FC, useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills & ACCA', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[55] bg-[#0a0a0a] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Header Row with Close Button */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 p-2">
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 256 256" 
            fill="white" 
            className="w-7 h-7"
          >
            <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" />
          </svg>
          <span className="font-instrument-serif text-xl sm:text-2xl tracking-wide text-white">Nguyen KhanhLinh</span>
        </div>

        {/* Close Button top-right */}
        <button
          onClick={onClose}
          aria-label="Close Mobile Menu"
          className="liquid-glass w-11 h-11 rounded-full flex items-center justify-center relative animate-rotate-in focus:outline-none hover:bg-white/10 transition-colors"
        >
          <span className="w-5 h-[1.5px] bg-white absolute transform rotate-45 rounded-full" />
          <span className="w-5 h-[1.5px] bg-white absolute transform -rotate-45 rounded-full" />
        </button>
      </div>

      {/* Nav Items Stacked Vertically */}
      <nav className="flex flex-col items-center justify-center gap-6 my-auto">
        {menuItems.map((item, index) => {
          const delayMs = 100 + index * 60;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-3xl sm:text-4xl text-white/90 font-medium tracking-tight hover:text-white transition-colors animate-slide-up-fade opacity-0"
              style={{ animationDelay: `${delayMs}ms` }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Bottom CTA */}
      <div 
        className="flex justify-center w-full pb-4 animate-slide-up-fade opacity-0"
        style={{ animationDelay: `${100 + menuItems.length * 60}ms` }}
      >
        <a
          href="#contact"
          onClick={onClose}
          className="liquid-glass rounded-full px-6 py-3 flex items-center gap-2.5 text-white text-base font-medium hover:bg-white/10 transition-colors shadow-lg"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
          <span>Connect with Me</span>
        </a>
      </div>
    </div>
  );
};
