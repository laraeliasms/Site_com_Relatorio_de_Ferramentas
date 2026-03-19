import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Agendamento solicitado! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', service: '', date: '', time: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agende Seu Horário
          </h2>
          <p className="text-gray-400 text-xl">
            Entre em contato e garanta seu visual impecável
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-400">Rua das Barbearias, 123<br />Centro, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-400">(11) 98765-4321<br />(11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">E-mail</h4>
                  <p className="text-gray-400">contato@barbershop.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-400">
                    Segunda a Sexta: 9h às 20h<br />
                    Sábado: 9h às 18h<br />
                    Domingo: 9h às 14h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 p-6 rounded-lg border border-yellow-500/20">
              <h4 className="text-white font-bold mb-4">Localização</h4>
              <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                <MapPin className="w-16 h-16 text-yellow-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Formulário de Agendamento
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-yellow-500 focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-yellow-500 focus:outline-none"
                    placeholder="(11) 98765-4321"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2">
                    Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-yellow-500 focus:outline-none"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="corte">Corte Clássico - R$ 45</option>
                    <option value="corte-barba">Corte + Barba - R$ 70</option>
                    <option value="barba">Barba Premium - R$ 40</option>
                    <option value="vip">Pacote VIP - R$ 120</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-2">
                      Data
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-gray-300 mb-2">
                      Horário
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-lg"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
