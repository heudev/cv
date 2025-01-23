import React from 'react';
import { Language } from '@/types/cv';

interface LanguagesProps {
    languages: Language[];
}

export function Languages({ languages }: LanguagesProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 border-b pb-2">Languages</h2>
            <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg">
                        <span className="text-zinc-900">{lang.name}</span>
                        <span className="text-zinc-500 text-sm">{lang.level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
} 