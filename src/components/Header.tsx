import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { PersonalInfo, SocialLink } from '@/types/cv';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FaGithub,
    FaLinkedin,
    FaGlobe,
    SiGmail,
};

interface HeaderProps {
    personalInfo: PersonalInfo;
    socialLinks: SocialLink[];
}

export function Header({ personalInfo, socialLinks }: HeaderProps) {
    return (
        <header>
            <div className="flex justify-between items-start gap-8">
                <div className="flex-1">
                    <h1
                        className="text-3xl font-bold text-zinc-900"
                    >
                        {personalInfo.name}
                    </h1>
                    <p className="text-lg text-zinc-600 mt-2 font-mono">{personalInfo.title}</p>
                    <p className="text-sm text-zinc-500 mt-1 font-mono">{personalInfo.location}</p>
                </div>
                <div
                >
                    <Image
                        src={personalInfo.image}
                        alt={personalInfo.name}
                        width={120}
                        height={120}
                        className="rounded-xl object-cover shadow-lg"
                    />
                </div>
            </div>
            <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                        <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-900 transition-colors"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    );
                })}
            </div>
        </header>
    );
} 