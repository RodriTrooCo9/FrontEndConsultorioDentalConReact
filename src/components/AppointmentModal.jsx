import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, ChevronDown } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, preSelectedService = '' }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: preSelectedService,
        date: '',
        time: '',
        name: '',
        phone: '',
        notes: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Show success state
        // Here you would typically send data to backend
        setTimeout(() => {
            onClose();
            setStep(1); // Reset for next time
            setFormData({ ...formData, service: '', date: '', time: '' });
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {step === 1 ? (
                    <div className="p-8 overflow-y-auto">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Reservar Cita</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Tu sonrisa perfecta comienza aquí.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Service Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Tratamiento</label>
                                <div className="relative">
                                    <select
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none appearance-none bg-gray-50 dark:bg-gray-700 dark:text-white"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        required
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="Ortodoncia">Ortodoncia Invisible</option>
                                        <option value="Implantes">Implantes Dentales</option>
                                        <option value="Blanqueamiento">Blanqueamiento</option>
                                        <option value="Limpieza">Limpieza Profunda</option>
                                        <option value="General">Consulta General</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            {/* Date & Time Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Fecha</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="date"
                                            className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white text-sm"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Hora</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="time"
                                            className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white text-sm"
                                            required
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Nombre Completo</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white text-sm"
                                        placeholder="Tu nombre"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Teléfono</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="tel"
                                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white text-sm"
                                        placeholder="+591 ..."
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full mt-4 bg-pink-brand hover:bg-pink-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-brand/30 transition-all hover:scale-[1.02]">
                                Confirmar Cita
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="p-12 flex flex-col items-center justify-center text-center h-full">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-subtle">
                            <CheckCircle size={40} className="text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">¡Cita Reservada!</h2>
                        <p className="text-gray-500 dark:text-gray-300">
                            Hemos recibido tu solicitud. Te enviaremos un mensaje de confirmación a tu WhatsApp en breve.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
