import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';

import AppointmentModal from './components/AppointmentModal';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState('');

  const openAppointment = (serviceName = '') => {
    setPreSelectedService(serviceName);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-300 flex flex-col">
      {!isDashboard && <Navbar onBookAppointment={() => openAppointment()} />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onBookAppointment={openAppointment} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        </Routes>
      </main>

      {!isDashboard && (
        <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">ARMONIZA<span className="text-pink-dark">LP</span></h3>
              <p className="text-sm">
                Comprometidos con la excelencia en odontología y el bienestar de nuestros pacientes.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-pink-brand">Inicio</a></li>
                <li><a href="/services" className="hover:text-pink-brand">Servicios</a></li>
                <li><a href="#" className="hover:text-pink-brand">Doctores</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Horario</h4>
              <ul className="space-y-2 text-sm">
                <li>Lun - Vie: 9:00 - 18:00</li>
                <li>Sábados: 9:00 - 14:00</li>
                <li>Domingos: Cerrado</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>Calle Principal 123</li>
                <li>Ciudad, País</li>
                <li>info@dentalcare.com</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            © 2024 DentalCare. Todos los derechos reservados.
          </div>
        </footer>
      )}

      {!isDashboard && <Chatbot />}

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preSelectedService={preSelectedService}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
