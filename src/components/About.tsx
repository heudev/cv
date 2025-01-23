import React from 'react';
import { PersonalInfo } from '@/types/cv';

interface AboutProps {
    personalInfo: PersonalInfo;
}

export function About({ personalInfo }: AboutProps) {
    return (
        <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 border-b pb-2">About</h2>
            <p className="text-zinc-600 leading-relaxed text-justify">
                {personalInfo.about}
            </p>
        </section>
    );
}