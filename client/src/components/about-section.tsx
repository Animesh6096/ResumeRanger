export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about AI, machine learning, and development with a focus on creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            {/* Professional profile photo placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center">
              <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-6xl font-bold">
                AB
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Computer Science Student & AI Researcher
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a Computer Science student at BRAC University, passionate about AI, machine learning, and development. 
              I worked as a QA Manager at Nyntax, focusing on improving user experience. My teaching experience has 
              strengthened my ability to explain complex ideas.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Currently, I am working on my thesis in lip reading while also developing web applications. 
              I am always eager to learn and grow, currently pursuing the Associate Data Scientist Track on DataCamp.
            </p>

            {/* Education */}
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  BRAC University
                </h4>
                <p className="text-accent font-medium mb-2">BSc in Computer Science</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Graduating September 2025 | CGPA: 3.60
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                  Digital Logic Design, OOP, Data Structures, Algorithms, DBMS, OS, Image Processing, 
                  Computer Vision, Machine Learning, Cryptography
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Notre Dame College
                </h4>
                <p className="text-accent font-medium mb-2">Higher Secondary Certificate</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">GPA: 5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
