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
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:gap-8">
                    <div>
                        <Image
                            src={personalInfo.image}
                            alt={personalInfo.name}
                            width={120}
                            height={120}
                            className="rounded-xl object-cover shadow-lg w-24 h-24 md:w-[120px] md:h-[120px]"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
                            {personalInfo.name}
                        </h1>
                        <p className="text-base md:text-lg text-zinc-600 mt-1 md:mt-2 font-mono">{personalInfo.title}</p>
                        <p className="text-xs md:text-sm text-zinc-500 mt-1 font-mono">{personalInfo.location}</p>
                    </div>
                </div>
                <div className="flex md:flex-col gap-4 justify-center md:justify-start">
                    {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon];
                        return (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2"
                            >
                                <Icon className="w-5 h-5" />
                                <span className="hidden md:inline text-sm">
                                    {link.url.split("https://")[1] || link.url.split("mailto:")[1]}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </header>
    );
} 