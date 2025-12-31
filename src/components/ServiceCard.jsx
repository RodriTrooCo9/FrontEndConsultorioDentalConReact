import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, image, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 cursor-pointer h-full flex flex-col"
        >
            <div className="h-48 overflow-hidden relative">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-pink-brand dark:bg-pink-darker p-2 rounded-lg inline-block mb-2 shadow-lg">
                        <Icon size={24} className="text-white" />
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-dark dark:group-hover:text-pink-brand transition-colors">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {description}
                </p>
                <button className="flex items-center text-pink-dark dark:text-pink-brand font-semibold group-hover:gap-2 transition-all">
                    Saber más <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}
