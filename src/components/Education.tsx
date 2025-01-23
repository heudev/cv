import React from 'react';
import { Education as EducationType } from '@/types/cv';

interface EducationProps {
    education: EducationType[];
}

export function Education({ education }: EducationProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 border-b pb-2">Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                        <h3 className="font-semibold text-zinc-900">{edu.school}</h3>
                        <p className="text-zinc-600 text-sm">{edu.degree}</p>
                        <div className="block sm:hidden text-sm text-zinc-500 font-mono mt-1">{edu.period}</div>
                    </div>
                    <div className="hidden sm:block text-sm text-zinc-500 font-mono">{edu.period}</div>
                </div>
            ))}
        </section>
    );
} 