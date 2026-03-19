import { motion } from 'motion/react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, value: '25+', label: 'Anos de Experiência' },
    { icon: Users, value: '10k+', label: 'Clientes Satisfeitos' },
    { icon: Clock, value: '24/7', label: 'Atendimento' },
    { icon: ThumbsUp, value: '98%', label: 'Satisfação' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre Nós
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Fundada em 1998, a BarberShop é referência em estilo e qualidade. Nossa equipe de barbeiros especializados combina técnicas tradicionais com as tendências mais modernas.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Cada corte é uma obra de arte, cada cliente é tratado com excelência. Nosso compromisso é fazer você sair daqui com um visual impecável e confiança renovada.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
                Profissionais Certificados
              </div>
              <div className="bg-amber-900 text-white px-6 py-3 rounded-lg font-bold border border-amber-700">
                Produtos Premium
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500 transition-all"
              >
                <stat.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
