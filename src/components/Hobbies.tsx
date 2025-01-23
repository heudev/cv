import React from 'react';
import { Hobby } from '@/types/cv';

interface HobbiesProps {
    hobbies: Hobby[];
}

export function Hobbies({ hobbies }: HobbiesProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 border-b pb-2">Hobbies</h2>
            <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="p-4 bg-zinc-50 rounded-lg">
                        <h3 className="font-medium text-zinc-900">{hobby.name}</h3>
                        {hobby.description && (
                            <p className="text-sm text-zinc-600 mt-1">{hobby.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
} 