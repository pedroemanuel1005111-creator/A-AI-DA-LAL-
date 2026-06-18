import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

function InstagramIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const businessHours = [
  { day: 'Segunda-feira', hours: 'Fechado', closed: true },
  { day: 'Terça-feira', hours: '14:00 – 22:00', closed: false },
  { day: 'Quarta-feira', hours: '14:00 – 22:00', closed: false },
  { day: 'Quinta-feira', hours: '14:00 – 22:00', closed: false },
  { day: 'Sexta-feira', hours: '14:00 – 22:00', closed: false },
  { day: 'Sábado', hours: '14:00 – 22:00', closed: false },
  { day: 'Domingo', hours: '14:00 – 22:00', closed: false },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 bg-gradient-to-b from-acai-950 to-[#080012] overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-acai-500/50 to-transparent" />
      <div className="absolute top-20 left-1/3 w-72 h-72 bg-acai-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-dancing text-3xl text-berry-400">Venha nos visitar</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2">
            Como nos{' '}
            <span className="bg-gradient-to-r from-acai-400 to-berry-400 bg-clip-text text-transparent">
              Encontrar
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-acai-500 to-berry-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Area */}
          <div className="space-y-6">
            {/* Map Embed */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-acai-500/10 border border-white/10 h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5!2d-35.8130634!3d-9.4763759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701372a86337cc1%3A0x46ee508ae309b44f!2sA%C3%A7a%C3%AD%20Da%20Lal%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1720000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Açaí Da Lalá"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl" />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.google.com/maps/place/A%C3%A7a%C3%AD+Da+Lal%C3%A1/@-9.4763759,-35.8130634,15.75z/data=!4m6!3m5!1s0x701372a86337cc1:0x46ee508ae309b44f!8m2!3d-9.4746646!4d-35.8120851!16s%2Fg%2F11j4gdnsgd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-acai-600 to-acai-700 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-acai-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Navigation size={18} />
                Rotas
              </a>
              <a
                href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-berry-600 to-berry-700 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-berry-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-acai-500 to-acai-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Endereço</h4>
                  <p className="text-white/60 leading-relaxed">
                    Quadra D5, Nº 40<br />
                    Conj. Jarbas Oiticica<br />
                    Rio Largo - AL, 57100-000
                  </p>
                  <p className="text-acai-400 text-sm mt-2 font-mono">G5GQ+45</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-berry-500 to-berry-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Telefone / WhatsApp</h4>
                  <a
                    href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acai-300 text-lg font-medium hover:text-acai-200 transition-colors"
                  >
                    (82) 98862-7498
                  </a>
                  <p className="text-white/40 text-sm mt-1">Clique para falar no WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/acaidalalla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acai-300 font-medium hover:text-acai-200 transition-colors"
                  >
                    @acaidalalla
                  </a>
                  <p className="text-white/40 text-sm mt-1">Siga-nos para novidades e promoções</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg mb-3">Horário de Funcionamento</h4>
                  <div className="space-y-2">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center">
                        <span className={`text-sm ${item.closed ? 'text-white/40' : 'text-white/60'}`}>{item.day}</span>
                        <span className={`text-sm font-medium flex items-center gap-1.5 ${item.closed ? 'text-red-400' : 'text-emerald-400'}`}>
                          {!item.closed && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                          {item.closed && <span className="w-2 h-2 rounded-full bg-red-400" />}
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
