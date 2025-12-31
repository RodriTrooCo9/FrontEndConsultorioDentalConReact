import React from 'react';
import { Award, Users, Heart, Clock, CheckCircle, Smartphone, ShieldCheck, Smile } from 'lucide-react';

export default function About() {
    const stats = [
        { label: 'Años de Experiencia', value: '15+' },
        { label: 'Pacientes Atendidos', value: '10k+' },
        { label: 'Especialistas', value: '12' },
        { label: 'Garantía', value: '100%' },
    ];

    const values = [
        {
            icon: Heart,
            title: 'Empatía Total',
            desc: 'Entendemos tus necesidades y miedos. Nos tomamos el tiempo para escucharte y explicarte cada paso.',
        },
        {
            icon: ShieldCheck,
            title: 'Seguridad e Higiene',
            desc: 'Protocolos de esterilización hospitalaria y bioseguridad rigurosa en cada procedimiento.',
        },
        {
            icon: Smartphone,
            title: 'Tecnología 3D',
            desc: 'Diagnósticos precisos con scanners intraorales y tomografía computarizada de última generación.',
        },
        {
            icon: Award,
            title: 'Excelencia Clínica',
            desc: 'Nuestro equipo se capacita constantemente en las técnicas más avanzadas a nivel mundial.',
        },
    ];

    const team = [
        { name: "Dr. Juan Pérez", role: "Director Médico & Cirujano", image: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Dra. Maria Rodriguez", role: "Jefa de Ortodoncia", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Dr. Roberto Gomez", role: "Especialista en Endodoncia", image: "https://randomuser.me/api/portraits/men/67.jpg" },
        { name: "Dra. Elena Silva", role: "Odontopediatría", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068"
                        alt="Clínica Dental Team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-black/50 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
                    <span className="text-pink-light font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Nuestra Historia</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Más que una clínica, una <span className="text-pink-brand italic">familia</span> dedicada a tu sonrisa.
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        Desde 2010, redefiniendo la experiencia odontológica con calidez humana y tecnología de vanguardia.
                    </p>
                </div>
            </div>

            {/* Our Story / Mision Vision */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 animate-fade-in-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Nuestra <span className="text-pink-dark dark:text-pink-brand">Misión</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            En <span className="font-bold">ARMONIZA LP</span>, nuestra misión es simple pero poderosa: transformar la vida de nuestros pacientes devolviéndoles la confianza para sonreír.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            No creemos en los tratamientos 'talla única'. Cada sonrisa es única y merece un plan personalizado que considere no solo la estética, sino la salud funcional y el bienestar emocional del paciente.
                        </p>

                        <div className="pt-8 grid grid-cols-2 gap-6">
                            <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-2xl border border-pink-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-pink-dark dark:text-pink-brand mb-2">Visión</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Ser reconocidos como el centro de referencia en odontología estética y restauradora de la región.</p>
                            </div>
                            <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-2xl border border-pink-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-pink-dark dark:text-pink-brand mb-2">Compromiso</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Garantizar resultados duraderos y una experiencia libre de estrés en cada visita.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-right">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf4722e63?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg mt-10" alt="Consultorio Moderno" />
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg" alt="Doctora sonriendo" />
                        </div>
                        {/* Stats Overlay */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-2xl w-[90%] grid grid-cols-2 gap-4 text-center border border-gray-100 dark:border-gray-700">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-2">
                                    <div className="text-2xl font-bold text-pink-brand">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-pink-dark dark:text-pink-brand font-semibold uppercase text-sm tracking-wider">¿Por qué elegirnos?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Nuestros Pilares</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center border border-gray-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-900">
                                <div className="w-16 h-16 mx-auto bg-pink-50 dark:bg-pink-900/20 rounded-full flex items-center justify-center text-pink-brand mb-6 group-hover:scale-110 transition-transform">
                                    <val.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{val.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Conoce a tus Especialistas</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                        Un equipo multidisciplinario apasionado por la excelencia y el trato humano.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-pink-200 text-sm font-medium">{member.role}</p>
                                <div className="w-full h-0.5 bg-pink-brand mt-4 mb-2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform delay-100"></div>
                                <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                    Experto en brindar sonrisas perfectas.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-pink-brand dark:bg-pink-900 py-16 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <Smile size={48} className="mx-auto mb-6 text-pink-100 animate-bounce-subtle" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Listo para conocer tu nueva clínica favorita?</h2>
                    <button className="bg-white text-pink-dark font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-gray-50 transition-all hover:scale-105">
                        Agendar Visita de Conocimiento
                    </button>
                </div>
            </section>

        </div>
    );
}
