import React from 'react';
import { Star, Quote, Play, MessageCircle } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Ana García",
            treatment: "Ortodoncia Invisible",
            rating: 5,
            text: "¡Increíble experiencia! Nunca pensé que arreglar mis dientes sería tan fácil y cómodo. El equipo es súper amable y el resultado superó mis expectativas.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            date: "Hace 2 semanas"
        },
        {
            id: 2,
            name: "Carlos Mendoza",
            treatment: "Implantes Dentales",
            rating: 5,
            text: "Recuperé mi confianza y puedo comer de todo nuevamente. El Dr. Pérez es un verdadero artista. El proceso fue mucho más rápido de lo que imaginé.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "Hace 1 mes"
        },
        {
            id: 3,
            name: "Lucía Fernández",
            treatment: "Diseño de Sonrisa",
            rating: 5,
            text: "Desde la primera consulta me hicieron sentir en casa. Me explicaron cada paso y el diseño final quedó súper natural. ¡No paro de sonreír!",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            date: "Hace 3 semanas"
        },
        {
            id: 4,
            name: "Miguel Ángel",
            treatment: "Blanqueamiento",
            rating: 5,
            text: "Resultados inmediatos y sin sensibilidad. Recomiendo totalmente ARMONIZA LP para cualquiera que quiera mejorar su imagen.",
            image: "https://randomuser.me/api/portraits/men/86.jpg",
            date: "Hace 2 meses"
        },
        {
            id: 5,
            name: "Sofía Torres",
            treatment: "Odontopediatría",
            rating: 5,
            text: "Llevé a mi hijo de 5 años y salió feliz. Tienen una paciencia infinita y saben cómo tratar a los niños. ¡Gracias Dra. Elena!",
            image: "https://randomuser.me/api/portraits/women/24.jpg",
            date: "Hace 1 semana"
        },
        {
            id: 6,
            name: "Javier Ruiz",
            treatment: "Limpieza Profunda",
            rating: 5,
            text: "La atención al detalle y la tecnología que usan es de otro nivel. Se nota la higiene y el profesionalismo en cada rincón de la clínica.",
            image: "https://randomuser.me/api/portraits/men/54.jpg",
            date: "Hace 3 días"
        }
    ];

    const videoTestimonials = [
        { id: 1, name: "Valentina", treatment: "Carillas de Porcelana", thumbnail: "https://images.unsplash.com/photo-1595822813414-0cce312b23a3?auto=format&fit=crop&q=80&w=800" },
        { id: 2, name: "Roberto", treatment: "Rehabilitación Completa", thumbnail: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800" },
        { id: 3, name: "Mariana", treatment: "Ortodoncia", thumbnail: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-pink-900">
                <div className="absolute inset-0 opacity-40">
                    {/* Abstract animated background shapes could go here */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="relative z-10 text-center px-4 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-pink-100 text-sm font-medium mb-6 border border-white/20">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span>Más de 800 sonrisas transformadas</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Historias que Inspiran</h1>
                    <p className="text-xl text-pink-100 font-light max-w-2xl mx-auto">
                        La verdadera medida de nuestro éxito es la felicidad de nuestros pacientes.
                    </p>
                </div>
            </div>

            {/* Video Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videoTestimonials.map((video) => (
                        <div key={video.id} className="group relative aspect-[9/16] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                            <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-pink-brand transition-colors duration-300 border border-white/30">
                                    <Play size={24} className="text-white fill-white ml-1" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                <p className="font-bold text-lg">{video.name}</p>
                                <p className="text-pink-200 text-sm">{video.treatment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Lo que dicen de nosotros</h2>
                    <div className="flex justify-center items-center gap-2 text-yellow-500 mb-2">
                        <Star className="fill-current" />
                        <Star className="fill-current" />
                        <Star className="fill-current" />
                        <Star className="fill-current" />
                        <Star className="fill-current" />
                        <span className="text-gray-800 dark:text-gray-200 font-bold ml-2 text-lg">5.0</span>
                    </div>
                    <p className="text-gray-500 text-sm">Basado en reseñas verificadas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl relative hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-700 group border border-transparent hover:border-pink-100 dark:hover:border-gray-600">
                            <Quote size={40} className="text-pink-200 dark:text-gray-600 absolute top-6 right-6 group-hover:text-pink-300 transition-colors" />

                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-200 dark:border-gray-600 pt-6">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-pink-brand" />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</h4>
                                    <p className="text-pink-dark dark:text-pink-400 text-xs font-medium">{review.treatment}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <MessageCircle size={48} className="mx-auto mb-6 text-pink-400" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Tuviste una buena experiencia?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Tu opinión nos ayuda a seguir mejorando y a que más personas pierdan el miedo al dentista.
                    </p>
                    <button className="bg-pink-brand hover:bg-pink-dark text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-pink-900/50 transition-all hover:scale-105">
                        Déjanos tu Reseña
                    </button>
                </div>
            </section>

        </div>
    );
}
