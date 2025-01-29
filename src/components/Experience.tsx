import React from 'react';
import { Experience as ExperienceType } from '@/types/cv';

interface ExperienceProps {
    experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 border-b pb-2">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div>
                                <h3 className="font-semibold text-zinc-900">{exp.title}
                                    <span className="ml-2 px-2 py-1 text-xs text-zinc-500 bg-white rounded">
                                        {exp.type}
                                    </span>
                                </h3>
                                <p className="text-zinc-600 text-sm">
                                    {exp.companyUrl ? (
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-zinc-800 hover:underline transition-colors"
                                        >
                                            {exp.company}
                                        </a>
                                    ) : (
                                        exp.company
                                    )}
                                </p>
                                <div className="block sm:hidden text-sm text-zinc-500 font-mono mt-1">{exp.period}</div>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-xs bg-zinc-100 text-zinc-600 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden sm:block text-sm text-zinc-500 font-mono">{exp.period}</div>
                        </div>
                        <ul className="list-disc list-inside text-zinc-600 space-y-1 mt-2">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="text-sm">{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
} 