import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria Silva',
    initial: 'M',
    rating: 5,
    text: 'Melhor açaí de Rio Largo! Sempre fresquinho e com toppings generosos. A Lalá capricha demais! Recomendo muito!',
    time: '2 semanas atrás',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'João Santos',
    initial: 'J',
    rating: 5,
    text: 'O açaí é simplesmente maravilhoso! Sempre fresquinho e cremoso. Vou toda semana com a família e nunca decepciona. Qualidade top!',
    time: '1 mês atrás',
    color: 'from-acai-500 to-acai-700',
  },
  {
    name: 'Ana Costa',
    initial: 'A',
    rating: 5,
    text: 'A Roleta de Açaí é sensacional! Perfeita para dividir com a família. Muita variedade de toppings e o açaí é muito cremoso.',
    time: '3 semanas atrás',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Pedro Oliveira',
    initial: 'P',
    rating: 4,
    text: 'Entrega rápida e açaí sempre bem gelado. O copo de 500ml é perfeito pra matar a vontade. Virei cliente fiel!',
    time: '1 mês atrás',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Carla Ferreira',
    initial: 'C',
    rating: 5,
    text: 'Lugar maravilhoso! O atendimento é excelente e o açaí é de qualidade superior. Melhor sorveteria da região sem dúvida.',
    time: '2 meses atrás',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Lucas Mendes',
    initial: 'L',
    rating: 5,
    text: 'A barca é enorme e cheia de coisas boas! Preço justo e sabor incomparável. Parabéns, Lalá! Continue assim!',
    time: '3 semanas atrás',
    color: 'from-berry-500 to-berry-700',
  },
];

const ratingDistribution = [
  { stars: 5, count: 14, percentage: 78 },
  { stars: 4, count: 3, percentage: 17 },
  { stars: 3, count: 1, percentage: 5 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-24 bg-gradient-to-b from-[#0f0020] via-acai-950 to-acai-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-acai-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-berry-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-dancing text-3xl text-acai-400">O que dizem</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2">
            Nossos{' '}
            <span className="bg-gradient-to-r from-acai-400 to-berry-400 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-acai-500 to-berry-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Rating Summary */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 mb-12 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            {/* Overall Score */}
            <div className="text-center">
              <div className="text-7xl font-bold text-white font-playfair">4,7</div>
              <div className="flex justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/50 text-yellow-400/50'}
                  />
                ))}
              </div>
              <p className="text-white/50 mt-2 text-sm">Baseado em 18 avaliações</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-white/40 text-xs">Avaliações do Google</span>
              </div>
            </div>

            {/* Distribution */}
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-white/60 text-sm w-4">{item.stars}</span>
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-white/40 text-xs w-6">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 relative"
            >
              <Quote size={40} className="absolute top-4 right-4 text-white/5" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-white/40 text-xs">{review.time}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-white/10 text-white/10'}
                  />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
