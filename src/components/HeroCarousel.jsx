import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068',
        title: 'Sonrisas que Iluminan',
        subtitle: 'Tecnología avanzada para tu salud dental',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=2070',
        title: 'Cuidado Profesional',
        subtitle: 'Expertos dedicados a tu bienestar',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2067',
        title: 'Clínica Moderna',
        subtitle: 'Ambiente relajante y seguro',
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[600px] w-full overflow-hidden" id="inicio">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center text-white px-4 max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg transform transition-all duration-700 translate-y-0 opacity-100">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 font-light tracking-wide text-gray-100 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                            <button className="bg-pink-brand hover:bg-pink-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-pink-brand/40 border-2 border-transparent hover:border-pink-brand">
                                Reserve su Cita
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-all">
                <ChevronLeft size={32} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-all">
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-pink-brand w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
