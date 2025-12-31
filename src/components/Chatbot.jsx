import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: '¡Hola! Bienvenido a DentalCare. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
        setInput('');

        // Auto-reply simulation
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: 'Gracias por tu mensaje. Un especialista te contactará pronto.',
                sender: 'bot'
            }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-pink-darker animate-bounce-subtle'
                    } text-white`}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-[500px] animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-pink-darker p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                            <MessageSquare size={20} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold">Asistente Virtual</h3>
                            <p className="text-pink-light/90 text-xs">En línea ahora</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-pink-darker text-white rounded-tr-none'
                                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm rounded-tl-none border border-gray-100 dark:border-gray-600'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-brand bg-transparent border border-gray-200 dark:border-gray-600 dark:text-white"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-pink-darker text-white rounded-full hover:bg-pink-dark transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
