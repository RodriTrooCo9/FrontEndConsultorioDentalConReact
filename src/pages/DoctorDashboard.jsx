import React, { useState } from 'react';
import { Calendar, Users, Activity, DollarSign, Settings, LogOut, Search, MoreVertical } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PatientHistory from '../components/PatientHistory';

export default function DoctorDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const todayAppointments = [
        { id: 1, patient: "Juan Pérez", treatment: "Endodoncia", time: "09:00 AM", status: "En Sala" },
        { id: 2, patient: "Ana García", treatment: "Blanqueamiento", time: "10:30 AM", status: "Confirmado" },
        { id: 3, patient: "Carlos Ruiz", treatment: "Implante", time: "12:00 PM", status: "Pendiente" },
        { id: 4, patient: "Maria Lopez", treatment: "Consulta General", time: "15:00 PM", status: "Confirmado" },
    ];

    const allAppointments = [
        ...todayAppointments,
        { id: 5, patient: "Luis Torres", treatment: "Ortodoncia", time: "09:00 AM", date: "Mañana", status: "Confirmado" },
        { id: 6, patient: "Sofia Diaz", treatment: "Limpieza", time: "11:00 AM", date: "Mañana", status: "Pendiente" },
    ];

    const patients = [
        { id: 1, name: "Juan Pérez", age: 35, email: "juan@example.com", phone: "555-0101", lastVisit: "12 Oct 2024" },
        { id: 2, name: "Ana García", age: 28, email: "ana@example.com", phone: "555-0102", lastVisit: "10 Sep 2024" },
        { id: 3, name: "Carlos Ruiz", age: 45, email: "carlos@example.com", phone: "555-0103", lastVisit: "05 Oct 2024" },
        { id: 4, name: "Maria Lopez", age: 32, email: "maria@example.com", phone: "555-0104", lastVisit: "Today" },
        { id: 5, name: "Luis Torres", age: 22, email: "luis@example.com", phone: "555-0105", lastVisit: "Pending" },
    ];

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">

            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white">
                        ARMONIZA<span className="text-pink-brand">DOC</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <SidebarItem icon={Activity} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                    <SidebarItem icon={Calendar} label="Agenda" active={activeTab === 'agenda'} onClick={() => setActiveTab('agenda')} />
                    <SidebarItem icon={Users} label="Pacientes" active={activeTab === 'patients'} onClick={() => setActiveTab('patients')} />
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
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="text" placeholder="Buscar paciente..." className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm outline-none focus:ring-2 focus:ring-pink-brand" />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-800 dark:text-white">Dr. Rodrigo</p>
                                <p className="text-xs text-gray-500">Ortodoncista</p>
                            </div>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-pink-brand" />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-6xl mx-auto">

                        {activeTab === 'dashboard' && (
                            <>
                                {/* Summary Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                    <StatBox label="Citas Hoy" value="8" sub text-green-500="+2 nuevas" />
                                    <StatBox label="Pacientes Activos" value="142" text-pink-500="Total" />
                                    <StatBox label="Ingresos de Hoy" value="$1,250" text-blue-500="Estimado" />
                                    <StatBox label="Pendientes" value="3" text-yellow-500="Por confirmar" />
                                </div>

                                {/* Dashboard Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Today's Schedule */}
                                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Agenda de Hoy</h3>
                                            <button onClick={() => setActiveTab('agenda')} className="text-pink-brand text-sm font-bold hover:underline">Ver todo</button>
                                        </div>

                                        <div className="space-y-4">
                                            {todayAppointments.map((apt) => (
                                                <div key={apt.id} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-l-4 border-pink-brand">
                                                    <div className="mr-6 text-center w-16">
                                                        <span className="block font-bold text-gray-800 dark:text-white">{apt.time.split(' ')[0]}</span>
                                                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{apt.time.split(' ')[1]}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-800 dark:text-white">{apt.patient}</h4>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{apt.treatment}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                              ${apt.status === 'En Sala' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                                                            apt.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                                        {apt.status}
                                                    </span>
                                                    <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white">
                                                        <MoreVertical size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Notifications / Side Panel */}
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Solicitudes Recientes</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">L</div>
                                                    <div className="flex-1">
                                                        <p className="text-sm font-bold dark:text-white">Luis Torres</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">Solicitó cita de Ortodoncia</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">M</div>
                                                    <div className="flex-1">
                                                        <p className="text-sm font-bold dark:text-white">Marta Diaz</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">Consulta de precios</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'agenda' && (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Agenda Completa</h3>
                                <div className="space-y-4">
                                    {allAppointments.map((apt) => (
                                        <div key={apt.id} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-shadow">
                                            <div className="mr-6 text-center w-24">
                                                <span className="block font-bold text-pink-brand">{apt.date || "Hoy"}</span>
                                                <span className="block font-bold text-gray-800 dark:text-white">{apt.time}</span>
                                            </div>
                                            <div className="flex-1 border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                                                <h4 className="font-bold text-lg text-gray-800 dark:text-white">{apt.patient}</h4>
                                                <p className="text-gray-500 dark:text-gray-400">{apt.treatment}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                              ${apt.status === 'En Sala' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                                                    apt.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                                {apt.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'patients' && !selectedPatient && (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Listado de Pacientes</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                                                <th className="py-3 px-4">Nombre</th>
                                                <th className="py-3 px-4">Edad</th>
                                                <th className="py-3 px-4">Contacto</th>
                                                <th className="py-3 px-4">Última Visita</th>
                                                <th className="py-3 px-4">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patients.map(patient => (
                                                <tr key={patient.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                    <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{patient.name}</td>
                                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{patient.age}</td>
                                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                                        <div className="flex flex-col text-sm">
                                                            <span>{patient.email}</span>
                                                            <span>{patient.phone}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{patient.lastVisit}</td>
                                                    <td className="py-3 px-4">
                                                        <button
                                                            onClick={() => setSelectedPatient(patient)}
                                                            className="text-pink-brand hover:underline font-medium text-sm"
                                                        >
                                                            Ver Historia
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'patients' && selectedPatient && (
                            <PatientHistory
                                patient={selectedPatient}
                                onBack={() => setSelectedPatient(null)}
                            />
                        )}

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
        </button>
    )
}

function StatBox({ label, value, sub, ...props }) {
    // Extract color classes from props keys (e.g., text-green-500) or use explicit props
    const colorClass = Object.keys(props).find(key => key.startsWith('text-')) || 'text-gray-800 dark:text-white';

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{label}</p>
            <h3 className={`text-3xl font-bold ${colorClass.includes('text-gray') ? 'text-gray-800 dark:text-white' : 'text-gray-800 dark:text-white'}`}>{value}</h3>
            {sub && <p className={`text-xs mt-2 ${colorClass}`}>{sub}</p>}
        </div>
    )
}
