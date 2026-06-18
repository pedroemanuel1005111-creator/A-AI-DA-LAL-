import { useState } from 'react';
import { Flame, Star, Crown } from 'lucide-react';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  popular?: boolean;
};

type MenuCategory = {
  name: string;
  emoji: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    name: 'Mais Pedidos',
    emoji: '🔥',
    items: [
      {
        name: 'Barca P',
        description: 'Açaí cremoso na barca pequena com até 3 acompanhamentos à sua escolha',
        price: 'A partir de R$ 15,00',
        image: '/images/acai-barca.jpg',
        badge: 'Mais vendido',
        popular: true,
      },
      {
        name: 'Copo 500ml',
        description: 'Meio litro de puro sabor com granola, banana e leite condensado',
        price: 'A partir de R$ 18,00',
        image: '/images/acai-copo.jpg',
        badge: 'Favorito',
        popular: true,
      },
      {
        name: 'Roleta de Açaí 1L',
        description: 'Um litro de açaí com toppings variados em formato roleta, perfeito para compartilhar',
        price: 'A partir de R$ 30,00',
        image: '/images/acai-roleta.jpg',
        badge: 'Premium',
        popular: true,
      },
    ],
  },
  {
    name: 'Tigelas',
    emoji: '🥣',
    items: [
      {
        name: 'Açaí na Tigela P',
        description: 'Tigela pequena de açaí com granola, banana e mel. Perfeito para um lanche',
        price: 'A partir de R$ 12,00',
        image: '/images/acai-tigela.jpg',
      },
      {
        name: 'Açaí na Tigela M',
        description: 'Tigela média com açaí cremoso e até 4 acompanhamentos',
        price: 'A partir de R$ 20,00',
        image: '/images/acai-tigela.jpg',
      },
      {
        name: 'Açaí na Tigela G',
        description: 'Tigela grande para os verdadeiros amantes de açaí. Até 5 toppings',
        price: 'A partir de R$ 28,00',
        image: '/images/acai-tigela.jpg',
        badge: 'Sucesso',
      },
    ],
  },
  {
    name: 'Especiais',
    emoji: '✨',
    items: [
      {
        name: 'Açaí com Nutella',
        description: 'Açaí premium coberto com generosa camada de Nutella e morangos',
        price: 'A partir de R$ 25,00',
        image: '/images/acai-barca.jpg',
        badge: 'Especial',
      },
      {
        name: 'Açaí Tropical',
        description: 'Açaí com manga, abacaxi, coco ralado e calda de frutas tropicais',
        price: 'A partir de R$ 22,00',
        image: '/images/acai-copo.jpg',
      },
      {
        name: 'Barca Família',
        description: 'Barca gigante com 2L de açaí e 8 toppings. Ideal para a família toda!',
        price: 'A partir de R$ 55,00',
        image: '/images/acai-roleta.jpg',
        badge: 'Para compartilhar',
      },
    ],
  },
];

const toppings = [
  'Granola', 'Banana', 'Morango', 'Leite condensado', 'Leite em pó',
  'Paçoca', 'Nutella', 'Confete', 'Bis', 'Coco ralado',
  'Amendoim', 'Mel', 'Calda de chocolate', 'Calda de morango',
  'Kiwi', 'Manga', 'Uva', 'Aveia', 'Chia', 'Granola crocante',
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="cardapio" className="relative py-24 bg-gradient-to-b from-acai-950 to-[#0f0020] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-acai-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-berry-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-dancing text-3xl text-berry-400">Delícias geladas</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2">
            Nosso{' '}
            <span className="bg-gradient-to-r from-acai-400 to-berry-400 bg-clip-text text-transparent">
              Cardápio
            </span>
          </h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto">
            Descubra nossas opções irresistíveis de açaí, preparadas com ingredientes 
            selecionados e muito carinho
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-acai-500 to-berry-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-acai-600 to-berry-600 text-white shadow-lg shadow-acai-500/30 scale-105'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-lg">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {menuCategories[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-acai-500/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-acai-950/80 via-transparent to-transparent" />
                
                {item.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-acai-600 to-berry-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {item.popular ? <Flame size={12} /> : item.badge === 'Premium' ? <Crown size={12} /> : <Star size={12} />}
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-acai-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-acai-400 font-bold text-lg">{item.price}</span>
                  <a
                    href="https://wa.me/5582988627498?text=Olá! Gostaria de fazer um pedido de açaí 🍇"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-acai-600/20 border border-acai-500/30 text-acai-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-acai-600 hover:text-white transition-all duration-300"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toppings Section */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
              🍓 Escolha seus Toppings
            </h3>
            <p className="text-white/50 mt-2">Mais de 20 opções para personalizar seu açaí</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {toppings.map((topping) => (
              <span
                key={topping}
                className="bg-acai-500/10 border border-acai-500/20 text-acai-300 px-4 py-2 rounded-full text-sm hover:bg-acai-500/20 hover:border-acai-400/40 transition-all duration-300 cursor-default"
              >
                {topping}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
