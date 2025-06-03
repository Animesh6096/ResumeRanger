import { Users, Award } from "lucide-react";

const executivePositions = [
  {
    id: "art-photography",
    title: "Executive of Marketing and Design",
    organization: "BRAC University Art and Photography Society", 
    period: "April 2023 – Present",
    type: "Leadership",
    icon: Users,
    description: [
      "Leading marketing initiatives and design projects for the society",
      "Organizing photography exhibitions and art showcases",
      "Managing social media presence and promotional campaigns"
    ]
  },
  {
    id: "research-development", 
    title: "Executive of Research and Development",
    organization: "BRAC University Research for Development",
    period: "September 2023 – Present", 
    type: "Research",
    icon: Users,
    description: [
      "Contributing to research initiatives and development projects",
      "Coordinating with faculty and students on research opportunities",
      "Organizing seminars and workshops on emerging technologies"
    ]
  },
  {
    id: "volunteer",
    title: "Volunteer",
    organization: "Office of Co-curricular Activities (OCA)",
    period: "2023 – Present",
    type: "Community",
    icon: Users,
    description: [
      "Supporting university events and co-curricular activities",
      "Assisting in student engagement programs",
      "Contributing to campus community development"
    ]
  }
];

const certifications = [
  {
    id: "app-development",
    title: "App Development Course",
    issuer: "BRAC University TARC",
    type: "Technical",
    icon: Award,
    description: [
      "Figma design principles and prototyping",
      "Dart programming fundamentals",
      "Flutter app development using Android Studio"
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning A-Z™",
    issuer: "Udemy",
    type: "Professional",
    icon: Award,
    description: [
      "Comprehensive machine learning algorithms",
      "Data preprocessing and feature engineering",
      "Model evaluation and validation techniques"
    ]
  }
];

const typeColors = {
  Leadership: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
  Research: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
  Community: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
  Technical: "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400",
  Professional: "bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400",
};

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Executive Positions */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Leadership & Activities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Executive positions and volunteer work contributing to university community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executivePositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <div
                  key={position.id}
                  className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover-lift animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${typeColors[position.type as keyof typeof typeColors]} rounded-xl flex items-center justify-center group-hover:animate-bounce`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[position.type as keyof typeof typeColors]}`}>
                      {position.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {position.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">{position.organization}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">{position.period}</p>
                  
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    {position.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Certifications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Professional certifications and specialized training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover-lift animate-scale-in group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${typeColors[cert.type as keyof typeof typeColors]} rounded-xl flex items-center justify-center group-hover:animate-bounce`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[cert.type as keyof typeof typeColors]}`}>
                      {cert.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-medium mb-4">{cert.issuer}</p>
                  
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    {cert.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}