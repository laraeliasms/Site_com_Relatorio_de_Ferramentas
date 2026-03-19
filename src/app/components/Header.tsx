import { Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold text-white">BarberShop</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-500 transition-colors">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition-colors">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-500 transition-colors">
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-yellow-500 transition-colors">
                Galeria
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-yellow-500 transition-colors">
                Equipe
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold">
                Agendar
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Galeria
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('team')} className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Equipe
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold inline-block">
                Agendar
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
