import { Heart, Phone, MapPin } from 'lucide-react';

function InstagramIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050010] border-t border-white/5">
      {/* CTA Bar */}
      <div className="bg-gradient-to-r from-acai-700 via-acai-600 to-berry-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold text-xl font-playfair">
                Bateu a vontade? 🍇
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Peça agora e receba em casa ou retire na loja!
              </p>
            </div>
            <a
              href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-acai-700 px-8 py-3 rounded-full font-bold hover:bg-acai-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Phone size={18} />
              (82) 98862-7498
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-acai-500 to-berry-500 flex items-center justify-center">
                <span className="text-lg">🍇</span>
              </div>
              <span className="font-dancing text-2xl font-bold text-white">Açaí Da Lalá</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              O melhor açaí de Rio Largo, feito com amor e ingredientes premium. 
              De terça a domingo, das 14h às 22h!
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/acaidalalla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/5582988627498"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Cardápio', href: '#cardapio' },
                { label: 'Avaliações', href: '#avaliacoes' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-acai-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {['Para viagem', 'Entrega sem contato', 'Delivery', 'Encomendas', 'Festas e eventos'].map((item) => (
                <li key={item} className="text-white/50 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-acai-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/50 text-sm">
                  Quadra D5, Nº 40, Conj. Jarbas Oiticica, Rio Largo - AL
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-acai-400 flex-shrink-0" />
                <a href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-acai-400 transition-colors">
                  (82) 98862-7498
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Açaí Da Lalá. Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-sm flex items-center gap-1">
              Feito com <Heart size={12} className="text-berry-500 fill-berry-500" /> em Rio Largo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
