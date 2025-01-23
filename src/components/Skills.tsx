import React from 'react';
import { Skill } from '@/types/cv';

interface SkillsProps {
    skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 border-b pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="px-1.5 py-1.5 bg-zinc-100 text-zinc-700 rounded text-xs font-mono">
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
} 