import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { Stethoscope, Smile, Activity, Calendar, Sparkles, Syringe, Zap, HeartPulse, Droplets, Bone } from 'lucide-react';

// Mock doctors database
const doctors = [
  { id: 1, name: "Dr. Juan Pérez", specialty: "Cirujano Maxilofacial", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Dra. Maria Rodriguez", specialty: "Ortodoncista", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Dr. Roberto Gomez", specialty: "Endodoncista", image: "https://randomuser.me/api/portraits/men/67.jpg" },
  { id: 4, name: "Dra. Elena Silva", specialty: "Odontopediatra", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Dr. Pedro Sanchez", specialty: "Implantólogo", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 6, name: "Dra. Carla Diaz", specialty: "Estética Facial", image: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 7, name: "Dr. Luis Torres", specialty: "Rehabilitación Oral", image: "https://randomuser.me/api/portraits/men/22.jpg" }
];

// Helper to assign doctors to services
const getDoctorsForService = (serviceTitle) => {
  const title = serviceTitle.toLowerCase();
  if (title.includes('cirugía')) return [doctors[0], doctors[4]];
  if (title.includes('ortodoncia') || title.includes('ortopedia')) return [doctors[1]];
  if (title.includes('conducto')) return [doctors[2], doctors[6]];
  if (title.includes('niño') || title.includes('ortopedia')) return [doctors[3], doctors[1]];
  if (title.includes('implante') || title.includes('prótesis')) return [doctors[4], doctors[6]];
  if (title.includes('estética') || title.includes('botox') || title.includes('relleno') || title.includes('hilos') || title.includes('bioestimuladores')) return [doctors[5], doctors[0]];
  return [doctors[0], doctors[5]]; // Default
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    { id: 'cirugia-terceros', title: 'Cirugía terceros molares', category: 'Cirugía Maxilofacial', icon: Activity, description: 'Extracción segura de muelas del juicio.', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&q=80&w=1000' },
    { id: 'cirugia-simple', title: 'Cirugía simple', category: 'Cirugía', icon: Stethoscope, description: 'Procedimientos quirúrgicos básicos.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000' },
    { id: 'cirugia-retenidos', title: 'Cirugía dientes retenidos', category: 'Cirugía', icon: Activity, description: 'Liberación de dientes retenidos.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000' },
    { id: 'implantes', title: 'Implantes', category: 'Implantología', icon: Bone, description: 'Reemplazo de piezas dentales.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000' },
    { id: 'curaciones', title: 'Curaciones', category: 'Odontología General', icon: Sparkles, description: 'Tratamiento de caries.', image: 'https://images.unsplash.com/photo-1598256989494-06fc7c433129?auto=format&fit=crop&q=80&w=1000' },
    { id: 'protesis-fija', title: 'Prótesis fija', category: 'Rehabilitación', icon: Smile, description: 'Coronas y puentes fijos.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf4722e63?auto=format&fit=crop&q=80&w=1000' },
    { id: 'protesis-removible', title: 'Prótesis removible', category: 'Rehabilitación', icon: Smile, description: 'Prótesis dentales removibles.', image: 'https://images.unsplash.com/photo-1595822813414-0cce312b23a3?auto=format&fit=crop&q=80&w=1000' },
    { id: 'limpieza', title: 'Limpieza', category: 'Prevención', icon: Sparkles, description: 'Profilaxis dental profunda.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000' },
    { id: 'fluorizaciones', title: 'Fluorizaciones', category: 'Prevención', icon: Droplets, description: 'Aplicación de flúor protector.', image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1000' },
    { id: 'conducto-uni', title: 'Conducto uniradicular', category: 'Endodoncia', icon: Activity, description: 'Tratamiento de conducto en dientes anteriores.', image: 'https://images.unsplash.com/photo-1588775405971-ce49fc06b746?auto=format&fit=crop&q=80&w=1000' },
    { id: 'conducto-bi', title: 'Conducto biradicular', category: 'Endodoncia', icon: Activity, description: 'Tratamiento de conducto en premolares.', image: 'https://images.unsplash.com/photo-1585834882195-2c8c43914a5d?auto=format&fit=crop&q=80&w=1000' },
    { id: 'conducto-multi', title: 'Conducto multiradicular', category: 'Endodoncia', icon: Activity, description: 'Tratamiento de conducto en molares.', image: 'https://images.unsplash.com/photo-1600171732668-3e4ca1785507?auto=format&fit=crop&q=80&w=1000' },
    { id: 'ortodoncia', title: 'Ortodoncia', category: 'Ortodoncia', icon: Smile, description: 'Alineación dental (Brackets/Invisalign).', image: 'https://images.unsplash.com/photo-1598256989494-06fc7c433129?auto=format&fit=crop&q=80&w=1000' },
    { id: 'ortopedia', title: 'Ortopedia', category: 'Ortodoncia', icon: Bone, description: 'Corrección ósea maxilar.', image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1000' },
    { id: 'botox', title: 'Botox', category: 'Estética Facial', icon: Syringe, description: 'Toxina botulínica estética y terapéutica.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000' },
    { id: 'rinomodelacion', title: 'Rinomodelacion', category: 'Estética Facial', icon: Sparkles, description: 'Perfilado nasal sin cirugía.', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000' },
    { id: 'relleno-labios', title: 'Relleno labios', category: 'Estética Facial', icon: HeartPulse, description: 'Aumento y perfilado de labios.', image: 'https://images.unsplash.com/photo-1587776487661-049830238808?auto=format&fit=crop&q=80&w=1000' },
    { id: 'prp', title: 'PRP', category: 'Estética Facial', icon: Droplets, description: 'Plasma rico en plaquetas para rejuvenecimiento.', image: 'https://images.unsplash.com/photo-1512290746430-3574d2597552?auto=format&fit=crop&q=80&w=1000' },
    { id: 'bioestimuladores', title: 'Bioestimuladores', category: 'Estética Facial', icon: Zap, description: 'Inducción de colágeno.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000' },
    { id: 'hilos-pdo', title: 'Hilos PDO', category: 'Estética Facial', icon: Activity, description: 'Hilos tensores para lifting facial.', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000' },
    { id: 'pdrn', title: 'PDRN y exosomas', category: 'Estética Facial', icon: Sparkles, description: 'Regeneración celular avanzada.', image: 'https://images.unsplash.com/photo-1598256989494-06fc7c433129?auto=format&fit=crop&q=80&w=1000' },
  ].map(s => ({
    ...s,
    doctors: getDoctorsForService(s.title)
  }));

  // Categories for filtering (Optional enhancement)
  // const categories = [...new Set(servicesList.map(s => s.category))];

  return (
    <div className="pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce nuestro catálogo completo de tratamientos diseñados para tu salud y belleza.
            Contamos con equipos de última tecnología y profesionales certificados en cada área.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
