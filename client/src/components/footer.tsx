import { Mail, Linkedin, Github, FacebookIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              AB
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                ANIMESH BHATTACHARJEE
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                AI Researcher & Full-Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/animesh-bhattacharjee-jhalok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
              aria-label="LinkedIn profile of Animesh Bhattacharjee"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Animesh6096"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub profile of Animesh Bhattacharjee"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:banimesh2002@gmail.com"
              className="hover:text-red-600 transition-colors duration-300"
              aria-label="Email Animesh Bhattacharjee"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="/Animesh_Bhattacharjee_Resume(LaTeX).pdf"
              download
              className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200 px-4 py-2 rounded font-medium ml-2 shadow hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </a>
            <a
              href="https://www.facebook.com/animesh.bhattacharjee.6096"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook profile of Animesh Bhattacharjee"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2024 ANIMESH BHATTACHARJEE. All rights reserved. Built with passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
