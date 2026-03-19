import { motion } from 'motion/react';
import { Scissors, Sparkles, Brush, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Corte Clássico',
      description: 'Cortes tradicionais com técnicas refinadas',
      price: 'R$ 45',
      features: ['Lavagem', 'Corte', 'Finalização']
    },
    {
      icon: Sparkles,
      title: 'Corte + Barba',
      description: 'Tratamento completo para visual impecável',
      price: 'R$ 70',
      features: ['Lavagem', 'Corte', 'Design de Barba', 'Toalha Quente'],
      featured: true
    },
    {
      icon: Brush,
      title: 'Barba Premium',
      description: 'Modelagem e hidratação profissional',
      price: 'R$ 40',
      features: ['Aparar', 'Modelar', 'Hidratação', 'Toalha Quente']
    },
    {
      icon: Star,
      title: 'Pacote VIP',
      description: 'Experiência completa de cuidados',
      price: 'R$ 120',
      features: ['Corte Premium', 'Barba', 'Massagem', 'Tratamento Capilar']
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 text-xl">
            Qualidade e estilo em cada detalhe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-900 p-8 rounded-lg border ${
                service.featured
                  ? 'border-yellow-500 shadow-lg shadow-yellow-500/20'
                  : 'border-gray-800'
              } hover:border-yellow-500 transition-all group`}
            >
              {service.featured && (
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              )}

              <service.icon className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />

              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {service.description}
              </p>

              <div className="text-3xl font-bold text-yellow-500 mb-6">
                {service.price}
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Agendar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
