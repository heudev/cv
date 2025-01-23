import { CVData } from '@/types/cv';

export const cvData: CVData = {
    personalInfo: {
        name: "Hulki Enes Uysal",
        title: "Full-Stack Software Developer",
        location: "İzmir, Türkiye",
        about: "Full Stack Software Developer specialized in modern web technologies. Deep knowledge in React, Node.js, and cloud technologies. A software engineer focused on developing useful projects for university students, continuously learning and improving. Experienced in team leadership and technical architecture design.",
        image: "https://enes.run/_next/image?url=%2Fimages%2Fprofile%2Fenes1.jpg&w=3840&q=75"
    },
    socialLinks: [
        {
            platform: "Website",
            url: "https://enes.run",
            icon: "FaGlobe"
        },
        {
            platform: "Email",
            url: "mailto:hulkienesuysal@gmail.com",
            icon: "SiGmail"
        },
        {
            platform: "GitHub",
            url: "https://github.enes.run",
            icon: "FaGithub"
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.enes.run",
            icon: "FaLinkedin"
        }
    ],
    experiences: [
        {
            title: "Software Developer",
            company: "ECO - ROVER",
            period: "Oct 2024 - Present",
            type: "Remote",
            technologies: ["React", "Next.js", "Tailwind CSS"],
            description: [
                "Professional team website development to showcase projects, updates, and sponsors.",
                "User-friendly desktop interface development for rover control.",
            ]
        },
        {
            title: "Web Developer",
            company: "ECOWHEELS Electro Team",
            period: "Mar 2023 - Present",
            type: "Remote",
            technologies: ["React", "Next.js", "Tailwind CSS"],
            description: [
                "Professional team website development to showcase projects, updates, and sponsors.",
            ]
        },
        {
            title: "Software Developer Internship",
            company: "Bimar IT Services - Arkas Holding",
            period: "Aug 2024 - Sep 2024",
            type: "Hybrid",
            technologies: ["C#", ".Net"],
            description: [
                "Various projects related to the company's technology stack",
            ]
        },
    ],
    education: [
        {
            school: "Izmir University of Economics",
            degree: "Computer Engineering",
            period: "2021 - Present"
        }
    ],
    skills: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Electron" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Firebase" },
        { name: "Selenium" },
        { name: "Git" },
        { name: "Docker" }
    ],
    languages: [
        {
            name: "Turkish",
            level: "Native"
        },
        {
            name: "English",
            level: "Professional"
        },
    ],
    projects: [
        {
            name: "EcoRover",
            date: "November 2024",
            description: "Website for Izmir University of Economics rover development team.",
            technologies: ["Next.js", "Tailwind"],
            url: "https://ecorover.ieu.app"
        },
        {
            name: "Ecomun",
            date: "November 2024",
            description: "Website for Izmir University of Economics Model United Nations club.",
            technologies: ["Next.js", "Tailwind"],
            url: "https://ecomun.net"
        },
        {
            name: "IEU Announcements",
            date: "August 2024",
            description: "API service that tracks university announcements and shares them via Telegram.",
            technologies: ["Node.js", "Express", "Docker"],
            url: "https://announcements.ieu.app/"
        },
        {
            name: "IEU Course Analysis",
            date: "June 2024",
            description: "Mobile application for analyzing university courses in detail.",
            technologies: ["Flutter", "Firebase"],
            url: "https://github.com/heudev/ieu-course-analysis"
        },
        {
            name: "IEU HSK",
            date: "January 2024",
            description: "Web application tracking the status of campus cats and food units.",
            technologies: ["React", "Firebase", "Material UI"],
            url: "https://ieuhsk.vercel.app/"
        },
        {
            name: "IEU Timetable",
            date: "September 2023",
            description: "Web application for generating alternative course schedules.",
            technologies: ["JavaScript", "React", "Material UI", "Tailwind"],
            url: "https://ieu.app"
        },
        {
            name: "IEU Timetable Previous Version",
            date: "February 2023",
            description: "Previous version of timetable generator with different tech stack.",
            technologies: ["React", "Bootstrap", "Python", "Flask"],
            url: "https://heudev.github.io/ieutimetablegenerator"
        },
        {
            name: "Ecowheels",
            date: "August 2023",
            description: "Website for Izmir University of Economics electric vehicle development team.",
            technologies: ["React", "Tailwind", "Firebase"],
            url: "https://ecowheels.ieu.app"
        },
        {
            name: "Guitar Scales",
            date: "September 2020",
            description: "Interactive web application visually displaying guitar scales.",
            technologies: ["JavaScript", "Bootstrap"],
            url: "https://downpicking.enes.run/"
        },
        {
            name: "DISTANGER FTP",
            date: "July 2020",
            description: "FTP application for sharing files within local network.",
            technologies: ["Python"],
            url: "https://github.com/heudev/ftp"
        }
    ],
    hobbies: [
        {
            name: "Music",
            description: "Playing guitar and piano"
        }
    ]
}; 