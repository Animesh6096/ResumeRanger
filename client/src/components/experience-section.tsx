import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const experiences = [
  {
    id: "nyntax",
    title: "Quality Assurance & Content Manager",
    company: "NYNTAX",
    period: "February 2023 – October 2024",
    location: "",
    type: "Leadership",
    icon: Briefcase,
    description: [
      "Led quality assurance initiatives across mobile apps and websites",
      "Streamlined testing processes and ensured product reliability",
      "Identified, documented, and prioritized bugs for timely resolution",
      "Provided UX-focused design feedback to enhance user satisfaction"
    ]
  }
];

const typeColors = {
  Current: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
  Leadership: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Professional experience in quality assurance, teaching, and leadership roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-300 dark:bg-slate-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={exp.id} className="relative flex items-center">
                  {isLeft ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg animate-slide-in-left">
                          <div className="flex items-center justify-end space-x-2 mb-2">
                            {exp.type && (
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[exp.type as keyof typeof typeColors] || 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                                {exp.type}
                              </span>
                            )}
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                              {exp.title}
                            </h3>
                          </div>
                          {exp.company && (
                            <p className="text-accent font-medium mb-2">{exp.company}</p>
                          )}
                          {exp.period && (
                            <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                              {exp.period} {exp.location && `| ${exp.location}`}
                            </p>
                          )}
                          <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900" />
                      <div className="flex-1 pl-8" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8" />
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900" />
                      <div className="flex-1 pl-8">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg animate-slide-in-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                              {exp.title}
                            </h3>
                            {exp.type && (
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[exp.type as keyof typeof typeColors] || 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                                {exp.type}
                              </span>
                            )}
                          </div>
                          {exp.company && (
                            <p className="text-accent font-medium mb-2">{exp.company}</p>
                          )}
                          {exp.period && (
                            <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                              {exp.period} {exp.location && `| ${exp.location}`}
                            </p>
                          )}
                          <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
