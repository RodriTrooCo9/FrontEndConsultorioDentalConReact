import React from 'react';

const Tooth = ({ number, value = {}, onChange, readOnly = false, currentTool = null }) => {
    // Faces: T=Top, B=Bottom, L=Left, R=Right, C=Center

    const toggleFace = (face) => {
        if (readOnly) return;

        // If a specific tool is selected, apply it. If clicking same, clear it.
        if (currentTool) {
            if (value[face] === currentTool) {
                onChange(face, null); // Toggle off
            } else {
                onChange(face, currentTool); // Apply tool
            }
            return;
        }

        // Default cycling if no tool selected (Legacy behavior)
        const current = value[face];
        let next = null;
        if (!current) next = 'caries';
        else if (current === 'caries') next = 'treated';
        else if (current === 'treated') next = 'extracted';
        else next = null;

        onChange(face, next);
    };

    const getColor = (face) => {
        const status = value[face];
        if (status === 'caries') return 'bg-red-500';
        if (status === 'treated') return 'bg-blue-500';
        if (status === 'extracted') return 'bg-gray-800'; // Black/Dark Gray for extracted
        return 'bg-white dark:bg-gray-700'; // Default
    };

    return (
        <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-500 font-bold">{number}</span>
            <div className="relative w-10 h-10 border border-gray-300 dark:border-gray-600">
                {/* Top (Trapezoid) */}
                <div
                    onClick={() => toggleFace('T')}
                    className={`absolute top-0 left-0 right-0 h-[25%] cursor-pointer border-b border-gray-300 dark:border-gray-600 transition-colors ${getColor('T')}`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 25% 100%)' }}
                />
                {/* Bottom (Trapezoid) */}
                <div
                    onClick={() => toggleFace('B')}
                    className={`absolute bottom-0 left-0 right-0 h-[25%] cursor-pointer border-t border-gray-300 dark:border-gray-600 transition-colors ${getColor('B')}`}
                    style={{ clipPath: 'polygon(25% 0, 75% 0, 100% 100%, 0 100%)' }}
                />
                {/* Left (Trapezoid) */}
                <div
                    onClick={() => toggleFace('L')}
                    className={`absolute left-0 top-0 bottom-0 w-[25%] cursor-pointer border-r border-gray-300 dark:border-gray-600 transition-colors ${getColor('L')}`}
                    style={{ clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0 100%)' }}
                />
                {/* Right (Trapezoid) */}
                <div
                    onClick={() => toggleFace('R')}
                    className={`absolute right-0 top-0 bottom-0 w-[25%] cursor-pointer border-l border-gray-300 dark:border-gray-600 transition-colors ${getColor('R')}`}
                    style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 75%)' }}
                />
                {/* Center (Square) */}
                <div
                    onClick={() => toggleFace('C')}
                    className={`absolute inset-[25%] cursor-pointer border border-gray-300 dark:border-gray-600 transition-colors ${getColor('C')}`}
                />
            </div>
        </div>
    );
};

export default function Odontogram({ teethData = {}, onUpdate, readOnly = false, currentTool = null }) {
    // ISO 3950 notation
    const adultTopRight = [18, 17, 16, 15, 14, 13, 12, 11];
    const adultTopLeft = [21, 22, 23, 24, 25, 26, 27, 28];
    const adultBottomRight = [48, 47, 46, 45, 44, 43, 42, 41];
    const adultBottomLeft = [31, 32, 33, 34, 35, 36, 37, 38];

    const childTopRight = [55, 54, 53, 52, 51];
    const childTopLeft = [61, 62, 63, 64, 65];
    const childBottomRight = [85, 84, 83, 82, 81];
    const childBottomLeft = [71, 72, 73, 74, 75];

    const handleToothChange = (toothNum, face, newVal) => {
        if (!onUpdate) return;
        const currentTooth = teethData[toothNum] || {};
        const updatedTooth = { ...currentTooth, [face]: newVal };
        onUpdate({ ...teethData, [toothNum]: updatedTooth });
    };

    const renderRow = (range) => (
        <div className="flex gap-2">
            {range.map(num => (
                <Tooth
                    key={num}
                    number={num}
                    value={teethData[num]}
                    onChange={(face, val) => handleToothChange(num, face, val)}
                    readOnly={readOnly}
                    currentTool={currentTool}
                />
            ))}
        </div>
    );

    return (
        <div className="overflow-x-auto p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="flex flex-col gap-8 min-w-[600px] items-center">
                {/* Adult Teeth */}
                <div className="flex gap-12">
                    <div className="flex flex-col gap-2 items-end">
                        {renderRow(adultTopRight)}
                        {renderRow(adultBottomRight)}
                    </div>
                    <div className="flex flex-col gap-2">
                        {renderRow(adultTopLeft)}
                        {renderRow(adultBottomLeft)}
                    </div>
                </div>

                {/* Child Teeth */}
                <div className="flex gap-12">
                    <div className="flex flex-col gap-2 items-end">
                        {renderRow(childTopRight)}
                        {renderRow(childBottomRight)}
                    </div>
                    <div className="flex flex-col gap-2">
                        {renderRow(childTopLeft)}
                        {renderRow(childBottomLeft)}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex gap-4 text-sm mt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 border border-gray-300"></div>
                        <span className="text-gray-600 dark:text-gray-300">Caries/Problema</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 border border-gray-300"></div>
                        <span className="text-gray-600 dark:text-gray-300">Tratado/Obturado</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-800 border border-gray-300"></div>
                        <span className="text-gray-600 dark:text-gray-300">Extirpado</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
