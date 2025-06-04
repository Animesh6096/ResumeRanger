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
    logo: "/nyntax.jpg", // NYNTAX logo public
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
            Professional experience in quality assurance and leadership roles
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp) => {
              const IconComponent = exp.icon;
              
              return (
                <div key={exp.id} className="relative">
                  {/* Experience Card - Full Width */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start space-x-6">
                      {/* Company Logo or Icon */}
                      <div className="flex-shrink-0">
                        {exp.logo ? (
                          <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center p-2 shadow-sm">
                            <img src="/nyntax.jpg" alt="NYNTAX Logo" className="w-12 h-12 object-contain rounded-md" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                              {exp.title}
                            </h3>
                            {exp.company && (
                              <p className="text-accent font-medium text-lg">{exp.company}</p>
                            )}
                          </div>
                          {exp.type && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[exp.type as keyof typeof typeColors] || 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                              {exp.type}
                            </span>
                          )}
                        </div>
                        
                        {exp.period && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            {exp.period} {exp.location && `| ${exp.location}`}
                          </p>
                        )}
                        
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2 mt-1.5 text-xs">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}