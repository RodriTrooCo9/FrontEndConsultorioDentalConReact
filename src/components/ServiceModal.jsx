import React from 'react';
import { X, CheckCircle, Calendar, ArrowRight } from 'lucide-react';

export default function ServiceModal({ isOpen, onClose, service }) {
    if (!isOpen || !service) return null;

    // Additional mock details that could be dynamic in a real app
    const benefits = [
        "Primera consulta de evaluación gratuita",
        "Plan de tratamiento personalizado",
        "Tecnología de última generación",
        "Resultados garantizados por expertos"
    ];

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
                onClick={onClose}
            />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden animate-fade-in-up flex flex-col md:flex-row max-h-[90vh]">

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors md:hidden"
                    >
                        <X size={20} />
                    </button>
                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                        <div className="bg-pink-brand p-2 rounded-lg inline-block mb-3 shadow-lg">
                            <service.icon size={24} className="text-white" />
                        </div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors hidden md:block"
                    >
                        <X size={24} />
                    </button>

                    <div className="hidden md:block mb-6">
                        <div className="bg-pink-brand dark:bg-pink-darker p-3 rounded-xl inline-block mb-4 shadow-lg text-white">
                            <service.icon size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{service.title}</h2>
                    </div>

                    <div className="space-y-6 flex-1">
                        <div>
                            <h3 className="text-lg font-semibold text-pink-dark dark:text-pink-brand mb-2">Descripción General</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {service.description}
                                <br /><br />
                                Además, nuestro equipo se especializa en brindar una experiencia cómoda y sin dolor, asegurando que cada visita sea lo más placentera posible. Utilizamos materiales biocompatibles y técnicas mínimamente invasivas.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-pink-dark dark:text-pink-brand mb-3">Beneficios Clave</h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {service.doctors && service.doctors.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-pink-dark dark:text-pink-brand mb-3">Especialistas Disponibles</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.doctors.map((doctor) => (
                                        <div key={doctor.id} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                                            <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full object-cover border-2 border-pink-brand" />
                                            <div>
                                                <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">{doctor.name}</p>
                                                <p className="text-xs text-pink-dark dark:text-pink-light">{doctor.specialty}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <button className="w-full bg-pink-brand hover:bg-pink-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-brand/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                            <Calendar size={20} />
                            Agendar Cita para este Servicio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
