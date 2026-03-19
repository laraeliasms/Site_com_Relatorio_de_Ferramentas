import { Scissors, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">BarberShop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Estilo e tradição desde 1998. A melhor experiência em cortes e cuidados masculinos.
            </p>
            <div className="flex gap-3">
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </button>
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </button>
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Equipe
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Corte Clássico</li>
              <li>Corte + Barba</li>
              <li>Barba Premium</li>
              <li>Pacote VIP</li>
              <li>Tratamentos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Rua das Barbearias, 123</li>
              <li>Centro, São Paulo - SP</li>
              <li>(11) 98765-4321</li>
              <li>contato@barbershop.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 BarberShop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
