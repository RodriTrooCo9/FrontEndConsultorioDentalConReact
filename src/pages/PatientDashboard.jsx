import React, { useState } from 'react';
import { Calendar, User, Clock, FileText, Settings, LogOut, ChevronRight, Bell } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PatientDashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const navigate = useNavigate();

    const handleLogout = () => {
        // Here we would typically clear auth tokens
        navigate('/');
    };

    const appointments = [
        { id: 1, doctor: "Dr. Juan Pérez", treatment: "Limpieza Dental", date: "12 Oct, 2025", time: "10:00 AM", status: "Confirmada" },
        { id: 2, doctor: "Dra. Maria Rodriguez", treatment: "Revisión Ortodoncia", date: "25 Oct, 2025", time: "15:30 PM", status: "Pendiente" },
    ];

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">

            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white">
                        ARMONIZA<span className="text-pink-brand">LP</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <SidebarItem icon={User} label="Mi Perfil" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
                    <SidebarItem icon={Calendar} label="Mis Citas" active={activeTab === 'appointments'} onClick={() => setActiveTab('appointments')} />
                    <SidebarItem icon={FileText} label="Historial Clínico" active={activeTab === 'history'} onClick={() => setActiveTab('history')} />
                    <SidebarItem icon={Clock} label="Pagos Pendientes" active={activeTab === 'payments'} onClick={() => setActiveTab('payments')} />
                    <SidebarItem icon={Settings} label="Configuración" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full p-3 rounded-xl transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Panel de Paciente</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-pink-brand relative">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-800 dark:text-white">Adela Barra</p>
                                <p className="text-xs text-gray-500">Paciente VIP</p>
                            </div>
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-pink-brand" />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-5xl mx-auto">

                        {/* Welcome Card */}
                        <div className="bg-gradient-to-r from-pink-500 to-pink-700 rounded-3xl p-8 text-white mb-8 shadow-xl">
                            <h2 className="text-3xl font-bold mb-2">¡Hola, Adela! 👋</h2>
                            <p className="text-pink-100 mb-6">Recuerda que tu próxima limpieza dental es en 3 días.</p>
                            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors">
                                Ver detalles
                            </button>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <StatCard icon={Calendar} title="Citas Programadas" value="2" color="bg-blue-500" />
                            <StatCard icon={FileText} title="Tratamientos" value="4" color="bg-purple-500" />
                            <StatCard icon={Clock} title="Próxima Visita" value="12 Oct" color="bg-green-500" />
                        </div>

                        {/* Upcoming Appointments */}
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Próximas Citas</h3>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                            {appointments.map((apt) => (
                                <div key={apt.id} className="p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center text-pink-500 font-bold text-lg">
                                            {apt.date.split(" ")[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 dark:text-white">{apt.treatment}</h4>
                                            <p className="text-sm text-gray-500">{apt.doctor} • {apt.time}</p>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${apt.status === 'Confirmada' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                        {apt.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-pink-brand text-white shadow-lg shadow-pink-500/30' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
            {active && <ChevronRight size={16} className="ml-auto" />}
        </button>
    )
}

function StatCard({ icon: Icon, title, value, color }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-4">
            <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h4>
            </div>
        </div>
    )
}
