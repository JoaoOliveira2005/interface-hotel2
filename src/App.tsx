import React from 'react';
import { Menu, X, MapPin, Phone, Mail, Star, Calendar, Instagram, Facebook, Wifi, Coffee, Bath } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-indigo-400">Pousada Serenity</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-indigo-400">Home</a>
              <a href="#rooms" className="text-gray-300 hover:text-indigo-400">Quartos</a>
              <a href="#gallery" className="text-gray-300 hover:text-indigo-400">Galeria</a>
              <a href="#contact" className="text-gray-300 hover:text-indigo-400">Contato</a>
              <button className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
                Reservar Agora
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Home</a>
              <a href="#rooms" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Quartos</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Galeria</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Contato</a>
              <button className="w-full text-left bg-indigo-700 text-white px-3 py-2 rounded-md hover:bg-indigo-800">
                Reservar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Pousada Serenity"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bem-vindo à Pousada Serenity
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Descubra o refúgio perfeito para suas férias. Uma experiência única de conforto e tranquilidade em meio à natureza.
            </p>
            <button className="bg-indigo-700 text-white px-8 py-3 rounded-md text-lg hover:bg-indigo-800">
              Reserve sua Estadia
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Reservas Online</h3>
              <p className="text-gray-400">
                Sistema de reservas fácil e rápido, com disponibilidade em tempo real.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <Star className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Experiência Premium</h3>
              <p className="text-gray-400">
                Quartos luxuosos e serviços de alta qualidade para sua estadia.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Localização Privilegiada</h3>
              <p className="text-gray-400">
                Fácil acesso às principais atrações turísticas da região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Quartos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quarto Standard */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Quarto Standard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Quarto Standard</h3>
                <p className="text-gray-400 mb-4">Conforto e praticidade para sua estadia.</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Wifi className="w-4 h-4 mr-1" />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>Banheiro</span>
                  </div>
                </div>
                <p className="text-2xl text-indigo-400 mb-4">R$ 200/noite</p>
                <button className="w-full bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
                  Reservar
                </button>
              </div>
            </div>

            {/* Quarto Luxo */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Quarto Luxo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Quarto Luxo</h3>
                <p className="text-gray-400 mb-4">Espaço amplo com vista privilegiada.</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Wifi className="w-4 h-4 mr-1" />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Coffee className="w-4 h-4 mr-1" />
                    <span>Café</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>Hidro</span>
                  </div>
                </div>
                <p className="text-2xl text-indigo-400 mb-4">R$ 350/noite</p>
                <button className="w-full bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
                  Reservar
                </button>
              </div>
            </div>

            {/* Suíte Master */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Suíte Master"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Suíte Master</h3>
                <p className="text-gray-400 mb-4">O máximo em luxo e conforto.</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Wifi className="w-4 h-4 mr-1" />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Coffee className="w-4 h-4 mr-1" />
                    <span>Café</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>Hidro</span>
                  </div>
                </div>
                <p className="text-2xl text-indigo-400 mb-4">R$ 500/noite</p>
                <button className="w-full bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossa Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Quarto Luxo"
              className="rounded-lg object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Área Comum"
              className="rounded-lg object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Café da Manhã"
              className="rounded-lg object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-indigo-400 mr-2" />
                <span className="text-gray-300">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-indigo-400 mr-2" />
                <span className="text-gray-300">contato@pousadaserenity.com.br</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-indigo-400 mr-2" />
                <span className="text-gray-300">Rua das Flores, 123 - Centro</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pousada Serenity</h3>
              <p className="text-gray-400">
                Seu refúgio perfeito para momentos inesquecíveis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#rooms" className="text-gray-400 hover:text-white">Quartos</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Galeria</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba nossas novidades e ofertas especiais.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-gray-700 border-gray-600 text-white"
                />
                <button className="bg-indigo-700 px-4 py-2 rounded-r-md hover:bg-indigo-800">
                  Assinar
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Pousada Serenity. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;