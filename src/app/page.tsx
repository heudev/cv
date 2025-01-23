import { cvData } from '@/data/cv';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 md:py-12 print:py-0">
      <div className="max-w-3xl mx-auto bg-white print:bg-white md:shadow-xl md:rounded-xl overflow-hidden">
        <div id="cv-content" className="space-y-10 p-8 md:p-12 print:p-6 max-w-3xl mx-auto">
          <Header personalInfo={cvData.personalInfo} socialLinks={cvData.socialLinks} />
          <About personalInfo={cvData.personalInfo} />
          <Experience experiences={cvData.experiences} />
          <Education education={cvData.education} />
          <Skills skills={cvData.skills} />
          <Projects projects={cvData.projects} />
        </div>
      </div>
    </div>
  );
} 