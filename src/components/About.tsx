import { Clock, Truck, Heart, Award, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Ter a Dom',
    description: 'Aberto de terça a domingo, das 14h às 22h para você',
    color: 'from-acai-500 to-acai-700',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Entrega rápida e sem contato para sua segurança',
    color: 'from-berry-500 to-berry-700',
  },
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada porção é preparada com carinho e dedicação',
    color: 'from-pink-500 to-rose-700',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Açaí 100% natural, direto do Pará para sua tigela',
    color: 'from-amber-500 to-orange-700',
  },
  {
    icon: Sparkles,
    title: '+20 Toppings',
    description: 'Variedade incrível de complementos para personalizar',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança',
    description: '4,7 estrelas no Google com clientes satisfeitos',
    color: 'from-blue-500 to-indigo-700',
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-gradient-to-b from-acai-950 via-acai-900 to-acai-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-acai-500/50 to-transparent" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-acai-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-berry-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-dancing text-3xl text-acai-400">Conheça nosso</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2">
            Por que somos{' '}
            <span className="bg-gradient-to-r from-acai-400 to-berry-400 bg-clip-text text-transparent">
              especiais
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-acai-500 to-berry-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-acai-500/20">
              <img
                src="/images/store-front.jpg"
                alt="Açaí Da Lalá - Loja"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-acai-950/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 sm:right-8 bg-gradient-to-br from-acai-600 to-berry-600 rounded-2xl p-6 shadow-2xl max-w-[220px]">
              <p className="text-white font-bold text-lg">Desde sempre</p>
              <p className="text-white/80 text-sm mt-1">Adoçando a vida dos alagoanos</p>
              <div className="mt-3 flex">
                <span className="text-3xl">💜</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-white">
              Uma paixão chamada{' '}
              <span className="text-acai-400 font-dancing text-4xl">Açaí</span>
            </h3>
            <p className="text-white/70 leading-relaxed text-lg">
              No <strong className="text-white">Açaí Da Lalá</strong>, cada tigela é uma experiência única. 
              Localizado no coração do Conj. Jarbas Oiticica em Rio Largo, nosso espaço foi 
              criado para quem ama açaí de verdade.
            </p>
            <p className="text-white/70 leading-relaxed">
              Trabalhamos com açaí premium, selecionado e preparado com todo cuidado. 
              Nossos toppings são sempre frescos e variados, para que você monte a 
              combinação perfeita. Estamos abertos de terça a domingo, das 14h às 22h!
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Para viagem', 'Entrega sem contato', 'Açaí premium', 'Ter a Dom'].map((tag) => (
                <span
                  key={tag}
                  className="bg-acai-500/20 border border-acai-500/30 text-acai-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-acai-500/10"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
