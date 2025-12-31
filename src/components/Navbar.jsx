
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UserCircle, Sun, Moon, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';
import logo from '../assets/logo.png';

export default function Navbar({ onBookAppointment }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Init Theme
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/services' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Testimonios', path: '/testimonios' }
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                } `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <img src={logo} alt="ARMONIZA LP" className="h-12 w-auto object-contain" />
                            <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-gray-800 dark:text-white' : 'text-gray-800 dark:text-white'}`}>
                                ARMONIZA<span className="text-pink-dark">LP</span>
                            </span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navLinks.map((item) => (
                                    <Link key={item.name} to={item.path} className={`hover:text-pink-dark dark:text-gray-300 dark:hover:text-pink-brand text-gray-700 px-3 py-2 rounded-md font-medium transition-colors relative group ${location.pathname === item.path ? 'text-pink-dark' : ''}`}>
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-brand transition-all group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={onBookAppointment}
                                className="flex items-center gap-2 text-pink-dark dark:text-pink-brand font-medium hover:text-pink-darker transition-colors"
                            >
                                <Calendar size={18} />
                                <span>Agendar Cita</span>
                            </button>
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="bg-gradient-to-r from-pink-brand to-pink-dark hover:from-pink-dark hover:to-pink-darker text-white px-6 py-2.5 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-pink-brand/30 flex items-center gap-2"
                            >
                                <UserCircle size={18} />
                                Login
                            </button>
                        </div>
                        <div className="-mr-2 flex md:hidden items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-pink-dark focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 animate-fade-in-down">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((item) => (
                                <Link key={item.name} to={item.path} className="text-gray-700 dark:text-gray-200 hover:text-pink-dark dark:hover:text-pink-brand hover:bg-pink-light dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => { setIsLoginOpen(true); setIsOpen(false); }}
                                className="w-full mt-4 bg-pink-brand text-white px-3 py-3 rounded-lg font-medium"
                            >
                                Inciar Sesión
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
