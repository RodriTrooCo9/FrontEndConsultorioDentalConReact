import React, { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { Stethoscope, Smile, Activity, Calendar, Sparkles, Syringe, Zap, HeartPulse, Droplets, Bone, ArrowRight } from 'lucide-react';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);

  // Featured services for Home (subset)
  const featuredServices = [
    {
      title: 'Ortodoncia Invisible',
      description: 'Alinea tu sonrisa discretamente con nuestra tecnología de alineadores transparentes de última generación.',
      image: 'https://images.unsplash.com/photo-1598256989494-06fc7c433129?auto=format&fit=crop&q=80&w=1000',
      icon: Smile,
    },
    {
      title: 'Implantes Dentales',
      description: 'Recupera la funcionalidad y estética de tu boca con implantes de titanio que duran toda la vida.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000',
      icon: Activity,
    },
    {
      title: 'Blanqueamiento',
      description: 'Ilumina tu sonrisa hasta 8 tonos en una sola sesión con nuestro sistema láser avanzado.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000',
      icon: Stethoscope,
    },
    {
      title: 'Odontopediatría',
      description: 'Atención especializada para los más pequeños en un ambiente divertido y sin miedo.',
      image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1000',
      icon: Calendar,
    },
  ];

  return (
    <>
      <HeroCarousel />

      {/* Features/Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
            <div className="p-4">
              <h3 className="text-4xl font-bold text-pink-dark dark:text-pink-brand mb-2">5+</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Años de Experiencia</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-pink-dark dark:text-pink-brand mb-2">854+</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Pacientes Felices</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-pink-dark dark:text-pink-brand mb-2">12H</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Atención entre semana y fin de semana</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Nosotros) Section */}
      <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 dark:bg-pink-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=2069"
                alt="Nuestra Clínica Dental"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-pink-brand/30 rounded-[2rem] -z-10 transform -rotate-2"></div>

            <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-xs animate-float">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Sparkles className="text-green-600" size={20} />
                </div>
                <span className="font-bold text-gray-800 dark:text-white">Excelencia</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Comprometidos con los más altos estándares de calidad y seguridad.</p>
            </div>
          </div>

          <div className="relative z-10 animate-fade-in-right">
            <span className="text-pink-dark dark:text-pink-brand font-bold tracking-wider uppercase text-sm mb-2 block">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transformando vidas a través de <span className="text-pink-dark dark:text-pink-brand relative">
                sonrisas
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-300 dark:text-pink-900 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                En <span className="font-bold text-pink-dark dark:text-pink-brand">ARMONIZA LP</span>, no solo cuidamos dientes, cuidamos personas. Nuestra clínica nació de la pasión por combinar la ciencia odontológica avanzada con un trato humano y cálido.
              </p>
              <p>
                Creemos que una visita al dentista debería ser una experiencia positiva y relajante. Por eso, hemos diseñado nuestras instalaciones para transmitir calma y bienestar, equipándolas con la última tecnología para garantizar tratamientos precisos, rápidos y sin dolor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0 text-pink-dark dark:text-pink-brand">
                    <Stethoscope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Profesionales Expertos</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Equipo en constante capacitación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0 text-pink-dark dark:text-pink-brand">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Atención Personalizada</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Planes de tratamiento únicos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href="/#testimonios" className="inline-flex items-center gap-2 text-pink-dark dark:text-pink-brand font-bold hover:gap-4 transition-all group">
                  Conoce a nuestro equipo <ArrowRight size={20} className="group-hover:text-pink-darker" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-pink-dark dark:text-pink-brand font-semibold tracking-wider uppercase text-sm bg-pink-light dark:bg-gray-800 px-4 py-2 rounded-full border border-pink-100 dark:border-gray-700">Nuestros Tratamientos Destacados</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">Todo lo que tu sonrisa necesita</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios dentales con tecnología de punta y un equipo de especialistas apasionados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/services" className="inline-block bg-pink-brand hover:bg-pink-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105">
              Ver Todos los Servicios
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-brand dark:bg-gray-800 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-light/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">¿Listo para sonreír con confianza?</h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Descubre una experiencia dental única. Agenda tu cita o consulta tus dudas al instante.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => document.querySelector('button[class*="fixed bottom-6"]').click()}
              className="bg-white dark:bg-gray-700 text-pink-darker dark:text-pink-light font-bold py-4 px-8 rounded-full shadow-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all hover:scale-110 flex items-center gap-2 animate-bounce-subtle"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              Consultar por Chatbot
            </button>
            <a
              href="/services"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm"
            >
              Más Servicios
            </a>
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}
