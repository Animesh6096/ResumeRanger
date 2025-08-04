export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string[];
  image: {
    gradient: string;
    icon: string;
    animation?: string;
  };
  links: {
    github?: string;
    demo?: string;
    details?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "visual-speech-recognition",
    title: "Visual Speech Recognition",
    description: "Adaptive Self-Supervision for Cross-Language Generalization in Multilingual Conformer-Based Visual Speech Recognition",
    longDescription: "Developing a language-agnostic system for real-time multilingual lip reading, addressing challenges in language dependency and adaptability in low-resource settings. Applications include accessibility, communication, and translation technologies.",
    technologies: ["TensorFlow", "Computer Vision", "Deep Learning", "Python"],
    category: ["ai-ml"],
    image: {
      gradient: "from-blue-600 to-purple-600",
      icon: "brain",
      animation: "grid-pulse"
    },
    links: {
      github: "#",
      details: "#"
    },
    featured: true
  },
  {
    id: "secure-blog-vault",
    title: "SecureBlogVault",
    description: "Full-stack blog platform with end-to-end encryption, secure authentication, and modern security practices",
    longDescription: "Built a comprehensive blog platform using React, TypeScript, and Express, with support for both PostgreSQL and MongoDB databases. Implemented comprehensive security features including end-to-end encryption (AES), Scrypt password hashing, and secure user authentication.",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "MongoDB", "AES Encryption"],
    category: ["security", "web-dev"],
    image: {
      gradient: "from-green-600 to-teal-600",
      icon: "shield",
      animation: "border-pulse"
    },
    links: {
      github: "https://github.com/Animesh6096/SecureBlogVault",
      demo: "#"
    },
    featured: true
  },
  {
    id: "hire-me",
    title: "HIRE ME",
    description: "Full-stack recruiting platform connecting job seekers and recruiters with real-time messaging",
    longDescription: "Developed a full-stack recruiting platform connecting job seekers and recruiters. Built RESTful API backend using Flask and frontend using React. Implemented job search, posting, application tracking features and integrated real-time messaging system.",
    technologies: ["Flask", "React", "RESTful API", "Real-time Messaging"],
    category: ["web-dev"],
    image: {
      gradient: "from-orange-600 to-red-600",
      icon: "briefcase",
      animation: "grid-fade"
    },
    links: {
      github: "https://github.com/Animesh6096/Hire_me",
      demo: "#"
    }
  },
  {
    id: "animal-detection",
    title: "Animal Detection",
    description: "Machine learning model to detect and classify animals from images using computer vision",
    longDescription: "Worked in a team of five members to build a machine learning model to detect animals from images using advanced computer vision techniques and deep learning algorithms.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Team Project"],
    category: ["ai-ml"],
    image: {
      gradient: "from-yellow-600 to-orange-600",
      icon: "eye",
      animation: "box-detection"
    },
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: "bengali-literature-rag",
    title: "Bengali Literature RAG System",
    description: "Intelligent Bengali Literature Analysis System for \"অপরিচিতা\" Story Analysis powered by Google Gemini AI & 10 Minute School Technology",
    longDescription: "A sophisticated Retrieval-Augmented Generation (RAG) system specifically designed for analyzing Rabindranath Tagore's \"অপরিচিতা\" story. Features advanced Unicode normalization for flawless Bengali text rendering, AI-powered intelligence with Google Gemini for contextual understanding, bilingual conversation support, character deep-dive analysis, and comprehensive theme exploration. Built with 10 Minute School's commitment to making education accessible and engaging.",
    technologies: ["Python", "React", "FastAPI", "Google Gemini AI", "ChromaDB", "RAG", "Bengali NLP"],
    category: ["ai-ml"],
    image: {
      gradient: "from-emerald-600 to-cyan-600",
      icon: "book",
      animation: "text-flow"
    },
    links: {
      github: "https://github.com/Animesh6096/10-minute-school",
      demo: "#"
    },
    featured: true
  },
  {
    id: "leap-reader",
    title: "LeapReader",
    description: "Lip reading application using LipNet architecture with GRID Corpus Dataset and Tkinter interface",
    longDescription: "Utilized LipNet architecture to train a model for lip reading from video footage. Curated the GRID Corpus Dataset for training and validation. Developed a Tkinter-based interface for user video input and prediction display.",
    technologies: ["Python", "LipNet", "Tkinter", "Computer Vision"],
    category: ["ai-ml"],
    image: {
      gradient: "from-indigo-600 to-blue-600",
      icon: "eye",
      animation: "lip-animation"
    },
    links: {
      github: "https://github.com/Animesh6096/Lipread-CSE439",
      demo: "#"
    }
  },
  {
    id: "readventure",
    title: "Readventure",
    description: "Book swapping platform with comprehensive database design and Django web interface",
    longDescription: "Worked in a team of five members to build a book swapping platform. Designed schema, ER, EER diagram and implemented database management. Built a web interface using Django.",
    technologies: ["Django", "Database Design", "Team Project", "Python"],
    category: ["web-dev"],
    image: {
      gradient: "from-pink-600 to-purple-600",
      icon: "book",
      animation: "book-grid"
    },
    links: {
      github: "https://github.com/Animesh6096/readventure001",
      demo: "#"
    }
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter(project => project.category.includes(category));
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
