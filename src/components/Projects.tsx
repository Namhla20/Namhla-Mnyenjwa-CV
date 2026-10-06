import { useState } from 'react';
import {
  Globe,
  ListChecks,
  ArrowRight,
  X,
  Check,
  ExternalLink,
} from 'lucide-react';
import { projects } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ListChecks,
};

/** Props for the project detail modal */
interface ProjectModalData {
  title: string;
  description: string;
  tools: string[];
  icon: LucideIcon;
  link: string;
}

/**
 * Projects section — three project cards with icons, descriptions, and
 * a "Learn More" button that opens a modal with the full details.
 */
export default function Projects() {
  const [modalData, setModalData] = useState<ProjectModalData | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            My work
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            Projects
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
          <p className="mt-6 text-navy-600 max-w-2xl mx-auto text-base sm:text-lg">
            A selection of digital projects showcasing my skills in web
            development, design and project coordination.
          </p>
        </div>

        {/* ---- Project cards grid ---- */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.icon] ?? Globe;
            return (
              <article
                key={project.title}
                className="reveal-scale group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Visual / icon header */}
                <div className="relative h-40 bg-gradient-to-br from-navy-700 to-blue-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl" />
                  </div>
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={36} className="text-white" />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-navy-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy-600 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tools preview (first 4) */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 text-navy-600 text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setModalData({
                          title: project.title,
                          description: project.description,
                          tools: project.tools,
                          icon: Icon,
                          link: project.link,
                        })
                      }
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all group-hover:text-blue-800"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-navy-500 font-medium text-sm hover:text-blue-700 transition-colors"
                    >
                      View Project
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ---- Project detail modal ---- */}
      {modalData && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm"
          onClick={() => setModalData(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="relative h-32 bg-gradient-to-br from-navy-700 to-blue-800 flex items-center justify-between px-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                <modalData.icon size={30} className="text-white" />
              </div>
              <button
                type="button"
                onClick={() => setModalData(null)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6">
              <h3 id="project-modal-title" className="text-xl font-bold text-navy-900">
                {modalData.title}
              </h3>
              <p className="mt-4 text-navy-600 leading-relaxed">
                {modalData.description}
              </p>

              <h4 className="mt-6 text-sm font-bold text-navy-900 uppercase tracking-wider">
                Skills & Tools
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {modalData.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-navy-700 text-sm font-medium"
                  >
                    <Check size={13} className="text-blue-600" />
                    {tool}
                  </span>
                ))}
              </div>

              {/* Live link */}
              <a
                href={modalData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-all w-full justify-center"
              >
                View Live Project
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
