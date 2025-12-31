import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ isOpen, onClose }) {
    const [view, setView] = useState('login'); // 'login', 'register', 'forgot'
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [resetSent, setResetSent] = useState(false);

    // Hook must be called at the top level
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        // FORGOT PASSWORD LOGIC
        if (view === 'forgot') {
            setResetSent(true);
            setTimeout(() => {
                setResetSent(false);
                setView('login');
            }, 3000);
        }
        // LOGIN LOGIC
        else if (view === 'login') {
            // Check hardcoded credentials
            if (formData.email === 'adelabarra73@gmail.com' && formData.password === '1234') {
                onClose();
                navigate('/patient-dashboard');
            }
            else if (formData.email === 'rodrigo73@gmail.com' && formData.password === '1234') {
                onClose();
                navigate('/doctor-dashboard');
            } else {
                alert("Usuario no encontrado o contraseña incorrecta.");
            }
        }
        // REGISTER LOGIC
        else {
            console.log('Registering:', formData);
            alert("Registro exitoso. Por favor inicia sesión.");
            setView('login');
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setView('login');
            setResetSent(false);
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        }, 300);
    }

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up transition-colors">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-pink-light dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-dark dark:text-pink-brand border-2 border-pink-100 dark:border-gray-600">
                            {view === 'register' ? <User size={32} /> : view === 'forgot' ? <Mail size={32} /> : <Lock size={32} />}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white transition-all">
                            {view === 'register' ? 'Crear Cuenta' : view === 'forgot' ? 'Recuperar Contraseña' : 'Bienvenido'}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            {view === 'register' ? 'Únete a ARMONIZA LP' : view === 'forgot' ? 'Te enviaremos las instrucciones' : 'Ingresa para gestionar tus citas'}
                        </p>
                    </div>

                    {resetSent ? (
                        <div className="text-center animate-fade-in-down py-4">
                            <div className="flex justify-center mb-4">
                                <CheckCircle size={48} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">¡Correo Enviado!</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Revisa tu bandeja de entrada. Hemos enviado un enlace para restablecer tu contraseña.
                            </p>
                            <button
                                onClick={() => setView('login')}
                                className="text-pink-dark dark:text-pink-brand font-bold hover:underline"
                            >
                                Volver a Iniciar Sesión
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {view === 'register' && (
                                <div className="animate-fade-in-down">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre Completo</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="text"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none transition-all bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-700"
                                            placeholder="Tu nombre"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Correo Electrónico</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none transition-all bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-700"
                                        placeholder="ejemplo@correo.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {view !== 'forgot' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contraseña</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="password"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-pink-brand focus:ring-2 focus:ring-pink-light dark:focus:ring-pink-900/50 outline-none transition-all bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-700"
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            required={view !== 'forgot'}
                                        />
                                    </div>
                                </div>
                            )}

                            {view === 'login' && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-pink-brand focus:ring-pink-brand" />
                                        <span className="text-gray-600 dark:text-gray-400">Recordarme</span>
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setView('forgot')}
                                        className="text-pink-dark dark:text-pink-brand hover:text-pink-darker font-medium"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </button>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-pink-brand hover:bg-pink-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-brand/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                                {view === 'register' ? 'Registrarme' : view === 'forgot' ? 'Enviar Enlace' : 'Ingresar'}
                                <ArrowRight size={20} />
                            </button>

                            {view === 'forgot' && (
                                <button
                                    type="button"
                                    onClick={() => setView('login')}
                                    className="w-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium py-2 transition-colors"
                                >
                                    Cancelar y volver
                                </button>
                            )}
                        </form>
                    )}

                    {!resetSent && (
                        <div className="mt-8 text-center text-sm text-gray-500">
                            {view === 'register' ? '¿Ya tienes una cuenta?' : view === 'forgot' ? '' : '¿No tienes una cuenta?'}
                            {view !== 'forgot' && (
                                <button
                                    onClick={() => setView(view === 'login' ? 'register' : 'login')}
                                    className="text-pink-dark dark:text-pink-brand font-bold hover:underline ml-1"
                                >
                                    {view === 'register' ? 'Inicia Sesión' : 'Regístrate'}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
