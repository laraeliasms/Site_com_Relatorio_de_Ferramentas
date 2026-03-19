import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'João Pedro',
      role: 'Cliente há 5 anos',
      content: 'Melhor barbearia da cidade! Profissionais excelentes e ambiente top. Sempre saio satisfeito com o resultado.',
      rating: 5,
    },
    {
      name: 'Rafael Mendes',
      role: 'Cliente há 3 anos',
      content: 'Atendimento impecável, corte perfeito e sempre com aquele papo bacana. Recomendo demais!',
      rating: 5,
    },
    {
      name: 'Lucas Ferreira',
      role: 'Cliente há 2 anos',
      content: 'Equipe profissional e dedicada. Meu visual nunca esteve tão bem cuidado. Vale cada centavo!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-gray-400 text-xl">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-500/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
