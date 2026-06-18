import { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone } from 'lucide-react';

function InstagramIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-acai-950/95 backdrop-blur-xl shadow-2xl shadow-acai-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-acai-500 to-berry-500 flex items-center justify-center shadow-lg group-hover:shadow-acai-500/50 transition-all duration-300">
              <span className="text-2xl">🍇</span>
            </div>
            <div>
              <span className="font-dancing text-2xl font-bold text-white">Açaí Da Lalá</span>
              <div className="flex items-center gap-1 text-acai-300 text-xs">
                <Clock size={10} />
                <span>Ter a Dom · 14h–22h</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-acai-400 after:to-berry-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://www.instagram.com/acaidalalla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-acai-500 transition-all duration-300"
              >
                <InstagramIcon size={16} className="text-white" />
              </a>
              <a
                href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-acai-600 to-berry-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-acai-500/30 transition-all duration-300 hover:scale-105"
              >
                <Phone size={14} />
                Peça Agora
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-6 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-4 text-center bg-gradient-to-r from-acai-600 to-berry-600 text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              <Phone size={14} className="inline mr-2" />
              (82) 98862-7498
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
