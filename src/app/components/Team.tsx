import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Carlos Silva',
      role: 'Barbeiro Master',
      experience: '15 anos de experiência',
      specialties: ['Cortes Clássicos', 'Barba', 'Design'],
    },
    {
      name: 'Roberto Santos',
      role: 'Barbeiro Sênior',
      experience: '10 anos de experiência',
      specialties: ['Degradê', 'Cortes Modernos', 'Penteados'],
    },
    {
      name: 'Miguel Costa',
      role: 'Barbeiro Profissional',
      experience: '8 anos de experiência',
      specialties: ['Barba Premium', 'Acabamentos', 'Tratamentos'],
    },
    {
      name: 'Felipe Oliveira',
      role: 'Barbeiro',
      experience: '5 anos de experiência',
      specialties: ['Cortes Jovens', 'Estilo Urbano', 'Finalização'],
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa Equipe
          </h2>
          <p className="text-gray-400 text-xl">
            Profissionais experientes e apaixonados pelo que fazem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all group"
            >
              <div className="relative aspect-square bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-30">👨‍🦱</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-yellow-500 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {member.experience}
                </p>

                <div className="mb-4">
                  <p className="text-gray-500 text-sm mb-2">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-800 text-white py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors flex items-center justify-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm">Instagram</span>
                  </button>
                  <button className="bg-gray-800 text-white p-2 rounded hover:bg-yellow-500 hover:text-black transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
