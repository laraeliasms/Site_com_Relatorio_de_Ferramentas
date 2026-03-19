import { motion } from 'motion/react';
import { useState } from 'react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Corte Degradê', category: 'Corte' },
    { id: 2, title: 'Barba Modelada', category: 'Barba' },
    { id: 3, title: 'Corte Social', category: 'Corte' },
    { id: 4, title: 'Barba e Bigode', category: 'Barba' },
    { id: 5, title: 'Corte Moderno', category: 'Corte' },
    { id: 6, title: 'Acabamento', category: 'Acabamento' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria de Trabalhos
          </h2>
          <p className="text-gray-400 text-xl">
            Confira alguns dos nossos melhores trabalhos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-black/80 group-hover:from-yellow-500/40 transition-all" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-30 group-hover:opacity-50 transition-opacity">✂️</div>
                  <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                  <span className="text-yellow-500 text-sm">{image.category}</span>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 transition-all rounded-lg" />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full aspect-square bg-gray-800 rounded-lg">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 w-10 h-10 rounded-full hover:bg-yellow-500 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
