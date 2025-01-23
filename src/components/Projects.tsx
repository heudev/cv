import React from 'react';
import { Project } from '@/types/cv';

interface ProjectsProps {
    projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 border-b pb-2">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
                        <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">
                                {project.name}
                            </a>
                        </h3>
                        <p className="text-zinc-600 text-sm mt-2">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-3">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="text-xs text-zinc-500 bg-white px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <span className="text-xs text-zinc-500 font-normal flex justify-end mt-3">{project.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
} 