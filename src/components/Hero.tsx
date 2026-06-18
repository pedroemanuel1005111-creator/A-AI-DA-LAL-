import { Star, Clock, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-acai.jpg"
          alt="Açaí"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-acai-950/95 via-acai-950/80 to-acai-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-acai-950 via-transparent to-acai-950/40" />
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-acai-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-berry-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-slide-up opacity-0">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-acai-200">
                <Clock size={14} />
                <span>Terça a Domingo · 14h às 22h · Delivery disponível</span>
              </div>
            </div>

            <div className="animate-slide-up opacity-0 delay-100">
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                O Melhor{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-acai-400 via-berry-400 to-acai-300 bg-clip-text text-transparent">
                    Açaí
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a670ff" />
                        <stop offset="1" stopColor="#ff6493" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                de Rio Largo
              </h1>
            </div>

            <div className="animate-slide-up opacity-0 delay-200">
              <p className="text-lg text-white/70 max-w-md leading-relaxed">
                Sabor irresistível, qualidade premium e toppings generosos. 
                Feito com amor pela Lalá para adoçar o seu dia, a qualquer hora!
              </p>
            </div>

            {/* Rating Badge */}
            <div className="animate-slide-up opacity-0 delay-300 flex items-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                <div className="text-3xl font-bold text-white font-playfair">4,7</div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/50 text-yellow-400/50'}
                      />
                    ))}
                  </div>
                  <p className="text-white/60 text-xs mt-0.5">18 avaliações no Google</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} />
                <span>Conj. Jarbas Oiticica</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-slide-up opacity-0 delay-400 flex flex-wrap gap-4">
              <a
                href="#cardapio"
                className="group relative bg-gradient-to-r from-acai-600 to-berry-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-acai-600/30 hover:shadow-acai-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Ver Cardápio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-acai-500 to-berry-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                📞 Fazer Pedido
              </a>
            </div>
          </div>

          {/* Right - Floating Image */}
          <div className="hidden lg:flex justify-center animate-fade-in opacity-0 delay-500">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-acai-500/30 shadow-2xl shadow-acai-500/20 animate-float">
                <img
                  src="/images/acai-tigela.jpg"
                  alt="Açaí na Tigela"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍓</span>
                  <div>
                    <p className="text-xs text-gray-500">Toppings</p>
                    <p className="text-sm font-bold text-gray-800">+20 opções</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛵</span>
                  <div>
                    <p className="text-xs text-gray-500">Delivery</p>
                    <p className="text-sm font-bold text-gray-800">Entrega rápida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-white/40" />
      </div>
    </section>
  );
}
