import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.1) 35px, rgba(251, 191, 36, 0.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Estilo & Tradição
              <span className="block text-yellow-500 mt-2">desde 1998</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            A melhor experiência em cortes clássicos e modernos. Barbeiros especializados prontos para te atender.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToContact}
              className="bg-yellow-500 text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition-all font-bold text-lg flex items-center justify-center gap-2 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Agende Agora
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all font-bold text-lg hover:scale-105"
            >
              Ver Serviços
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-yellow-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
