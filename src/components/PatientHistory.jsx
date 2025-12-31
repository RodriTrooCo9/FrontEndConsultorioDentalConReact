import React, { useState } from 'react';
import { ArrowLeft, Edit2, Check, AlertCircle, FileText, Activity, Plus, Save, X } from 'lucide-react';
import Odontogram from './Odontogram';

export default function PatientHistory({ patient, onBack }) {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTool, setActiveTool] = useState('caries'); // 'caries', 'treated', 'extracted'
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [newNote, setNewNote] = useState('');

    // Mock initial data for the odontogram
    const [teethState, setTeethState] = useState({
        18: { C: 'caries' },
        24: { T: 'treated', C: 'treated' },
        46: { C: 'caries', R: 'caries' }
    });

    const [medicalHistory, setMedicalHistory] = useState([
        { date: '10 Oct 2024', event: 'Consulta Inicial', notes: 'Paciente refiere dolor en cuadrante inferior derecho.' },
        { date: '05 Sep 2023', event: 'Limpieza Profunda', notes: 'Sin complicaciones.' },
        { date: '12 Ene 2023', event: 'Extracción 38', notes: 'Muela del juicio impactada.' }
    ]);

    const handleAddNote = () => {
        if (!newNote.trim()) return;
        const note = {
            date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
            event: 'Nota Adicional',
            notes: newNote
        };
        setMedicalHistory([note, ...medicalHistory]);
        setNewNote('');
        setIsAddingNote(false);
    };

    return (
        <div className="space-y-6 animate-fade-in-up">
            {/* Header / Back Button */}
            <div className="flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-500 hover:text-pink-brand dark:text-gray-400 dark:hover:text-pink-brand transition-colors font-medium"
                >
                    <ArrowLeft size={20} />
                    Volver a Pacientes
                </button>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">ID: #{patient?.id || '000'}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold">Activo</span>
                </div>
            </div>

            {/* Patient Info Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-6 items-start">
                <img src={`https://randomuser.me/api/portraits/men/${patient?.id || 1}.jpg`} alt="Patient" className="w-20 h-20 rounded-2xl border-4 border-gray-50 dark:border-gray-700" />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{patient?.name || 'Nombre Paciente'}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-gray-500 dark:text-gray-400">Edad</p>
                            <p className="font-medium text-gray-800 dark:text-white">{patient?.age || 'N/A'} años</p>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400">Teléfono</p>
                            <p className="font-medium text-gray-800 dark:text-white">{patient?.phone || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400">Correo</p>
                            <p className="font-medium text-gray-800 dark:text-white">{patient?.email || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visual Odontogram Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                <Activity size={24} className="text-pink-brand" />
                                Odontograma
                            </h3>

                            <div className="flex items-center gap-2">
                                {isEditing && (
                                    <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mr-2">
                                        <button
                                            onClick={() => setActiveTool('caries')}
                                            className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${activeTool === 'caries' ? 'bg-red-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
                                        >
                                            Picado (Caries)
                                        </button>
                                        <button
                                            onClick={() => setActiveTool('treated')}
                                            className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${activeTool === 'treated' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
                                        >
                                            Tratado
                                        </button>
                                        <button
                                            onClick={() => setActiveTool('extracted')}
                                            className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${activeTool === 'extracted' ? 'bg-gray-800 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
                                        >
                                            Extirpado
                                        </button>
                                    </div>
                                )}
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isEditing
                                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                >
                                    {isEditing ? <><Check size={18} /> Finalizar</> : <><Edit2 size={18} /> Modificar</>}
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 overflow-x-auto">
                            <Odontogram
                                teethData={teethState}
                                onUpdate={setTeethState}
                                readOnly={!isEditing}
                                currentTool={activeTool}
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            * Selecciona una herramienta y haz click en los dientes para marcar el estado.
                        </p>
                    </div>

                    {/* Problems / Notes Summary */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                            <AlertCircle size={20} className="text-orange-500" />
                            Problemas Detectados
                        </h3>
                        <div className="space-y-3">
                            <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl text-sm flex items-start gap-2">
                                <span className="font-bold">• Pieza 18:</span> Caries profunda en cara oclusal. Requiere evaluación endodóntica.
                            </div>
                            <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl text-sm flex items-start gap-2">
                                <span className="font-bold">• Pieza 46:</span> Lesión cariosa mesio-oclusal.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medical History Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                        <h3 className="font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                            <FileText size={20} className="text-blue-500" />
                            Historial Médico
                        </h3>

                        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-8 flex-1 overflow-y-auto max-h-[500px] pr-2">
                            {medicalHistory.map((item, idx) => (
                                <div key={idx} className="relative pl-6 animate-fade-in">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-pink-brand"></div>
                                    <span className="text-xs text-gray-400 font-bold block mb-1">{item.date}</span>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-white">{item.event}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.notes}</p>
                                </div>
                            ))}
                        </div>

                        {isAddingNote ? (
                            <div className="mt-4 animate-fade-in-up">
                                <textarea
                                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm focus:ring-2 focus:ring-pink-brand outline-none dark:text-white"
                                    rows="3"
                                    placeholder="Escribe la nota aquí..."
                                    value={newNote}
                                    onChange={(e) => setNewNote(e.target.value)}
                                    autoFocus
                                />
                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={handleAddNote}
                                        className="flex-1 bg-pink-brand text-white py-2 rounded-lg text-sm font-bold hover:bg-pink-dark transition-colors flex items-center justify-center gap-1"
                                    >
                                        <Save size={16} /> Guardar
                                    </button>
                                    <button
                                        onClick={() => setIsAddingNote(false)}
                                        className="w-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsAddingNote(true)}
                                className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 font-bold text-sm hover:border-pink-brand hover:text-pink-brand transition-colors flex items-center justify-center gap-2"
                            >
                                <Plus size={18} /> Agregar Nota
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
