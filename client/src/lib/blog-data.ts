export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  readTime: number;
  publishedAt: string;
  image: {
    gradient: string;
    icon: string;
    animation?: string;
  };
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-visual-speech-recognition",
    title: "The Future of Visual Speech Recognition",
    excerpt: "Exploring the challenges and opportunities in developing language-agnostic lip reading systems for real-world applications.",
    category: "AI & ML",
    readTime: 5,
    publishedAt: "2024-12-15",
    image: {
      gradient: "from-blue-600 to-purple-600",
      icon: "robot",
      animation: "grid-pulse"
    },
    tags: ["AI", "Machine Learning", "Computer Vision", "Research"],
    featured: true,
    content: `
# The Future of Visual Speech Recognition

Visual speech recognition, commonly known as lip reading, has emerged as one of the most fascinating applications of computer vision and artificial intelligence. As I work on my thesis in this field, I've discovered the incredible potential and challenges that lie ahead.

## The Challenge of Language Independence

One of the most significant challenges in visual speech recognition is creating systems that can work across different languages. Traditional models are often trained on specific language datasets, making them less effective when applied to multilingual scenarios.

## Real-World Applications

The applications for this technology are vast:
- **Accessibility**: Helping individuals with hearing impairments
- **Communication**: Silent communication in noisy environments
- **Translation**: Real-time visual language translation
- **Security**: Enhanced surveillance systems

## Technical Innovations

Recent advances in transformer architectures, particularly Conformer models, have shown promising results in creating more robust and adaptable systems. The key is developing adaptive self-supervision techniques that can generalize across languages.

## Looking Forward

As we continue to push the boundaries of what's possible in visual speech recognition, I'm excited about the potential impact on accessibility and human communication. The future holds incredible possibilities for this technology.
    `
  },
  {
    id: "2",
    slug: "building-secure-web-applications",
    title: "Building Secure Web Applications",
    excerpt: "Best practices for implementing end-to-end encryption, secure authentication, and modern security patterns in web development.",
    category: "Security",
    readTime: 8,
    publishedAt: "2024-12-12",
    image: {
      gradient: "from-green-600 to-teal-600",
      icon: "lock",
      animation: "border-pulse"
    },
    tags: ["Security", "Web Development", "Encryption", "Authentication"],
    content: `
# Building Secure Web Applications

Security should never be an afterthought in web development. Through my work on SecureBlogVault, I've learned valuable lessons about implementing robust security measures from the ground up.

## End-to-End Encryption

Implementing AES encryption for sensitive data ensures that even if data is intercepted, it remains unreadable without the proper keys. Here's why it matters:

- **Data Protection**: Sensitive information remains encrypted at rest and in transit
- **User Trust**: Users feel confident sharing their information
- **Compliance**: Meeting regulatory requirements for data protection

## Secure Authentication

Using Scrypt for password hashing provides several advantages over traditional methods:
- **Memory-hard**: Makes brute force attacks computationally expensive
- **Configurable**: Allows for scaling security as hardware improves
- **Proven**: Battle-tested in production environments

## Best Practices

1. **Never trust user input**: Always validate and sanitize
2. **Use HTTPS everywhere**: Encrypt all communication
3. **Implement proper session management**: Secure token handling
4. **Regular security audits**: Continuous monitoring and improvement

Security is an ongoing process, not a one-time implementation.
    `
  },
  {
    id: "3",
    slug: "fullstack-development-react-flask",
    title: "Full-Stack Development with React and Flask",
    excerpt: "Lessons learned from building the HIRE ME platform: combining React frontend with Flask backend for seamless user experiences.",
    category: "Web Dev",
    readTime: 6,
    publishedAt: "2024-12-10",
    image: {
      gradient: "from-orange-600 to-red-600",
      icon: "code",
      animation: "grid-fade"
    },
    tags: ["React", "Flask", "Full-Stack", "Web Development"],
    content: `
# Full-Stack Development with React and Flask

Building the HIRE ME platform taught me valuable lessons about creating seamless full-stack applications. Here's what I learned from combining React's dynamic frontend capabilities with Flask's robust backend framework.

## Architecture Decisions

The choice of React for the frontend and Flask for the backend was driven by several factors:
- **React**: Component-based architecture for reusable UI elements
- **Flask**: Lightweight and flexible Python framework
- **RESTful API**: Clean separation between frontend and backend

## Real-Time Features

Implementing real-time messaging required careful consideration of:
- **WebSocket connections**: For instant communication
- **State management**: Keeping UI in sync with real-time data
- **Error handling**: Graceful degradation when connections fail

## Key Learnings

1. **API Design**: Well-structured endpoints make frontend development smoother
2. **State Management**: Using React's context API effectively
3. **Performance**: Optimizing both frontend rendering and backend queries
4. **Testing**: Comprehensive testing across the full stack

The result was a platform that successfully connects job seekers with recruiters in an intuitive, real-time environment.
    `
  },
  {
    id: "4",
    slug: "data-science-learning-journey",
    title: "My Journey in Data Science Learning",
    excerpt: "Documenting my progress through DataCamp's Associate Data Scientist Track and key insights from machine learning projects.",
    category: "Data Science",
    readTime: 7,
    publishedAt: "2024-12-08",
    image: {
      gradient: "from-purple-600 to-pink-600",
      icon: "chart",
      animation: "bar-chart"
    },
    tags: ["Data Science", "Machine Learning", "Learning", "DataCamp"],
    content: `
# My Journey in Data Science Learning

Currently pursuing the Associate Data Scientist Track on DataCamp has been an incredible learning experience. Here's what I've discovered about the intersection of computer science and data science.

## From Computer Science to Data Science

My background in computer science provides a strong foundation for data science:
- **Programming Skills**: Python proficiency transfers directly
- **Algorithm Knowledge**: Understanding of complexity and optimization
- **Problem-Solving**: Systematic approach to breaking down complex problems

## Key Concepts Mastered

1. **Data Manipulation**: Using pandas for efficient data processing
2. **Statistical Analysis**: Understanding distributions and hypothesis testing
3. **Machine Learning**: From supervised to unsupervised learning
4. **Visualization**: Creating meaningful insights through charts and graphs

## Practical Applications

Working on projects like animal detection has shown me how data science principles apply to real-world computer vision problems:
- **Data Collection**: Gathering and preparing training datasets
- **Model Selection**: Choosing appropriate algorithms for the task
- **Evaluation**: Understanding metrics and validation techniques

## Next Steps

I'm excited to continue exploring advanced topics like deep learning and neural networks, bridging my AI research with practical data science applications.
    `
  },
  {
    id: "5",
    slug: "qa-to-teaching-leadership-lessons",
    title: "From QA to Teaching: Leadership Lessons",
    excerpt: "How my experience in quality assurance and team leadership translates to effective teaching and mentorship approaches.",
    category: "Teaching",
    readTime: 4,
    publishedAt: "2024-12-05",
    image: {
      gradient: "from-teal-600 to-blue-600",
      icon: "teacher",
      animation: "classroom"
    },
    tags: ["Teaching", "Leadership", "QA", "Mentorship"],
    content: `
# From QA to Teaching: Leadership Lessons

Transitioning from Quality Assurance at NYNTAX to teaching Physics has revealed surprising parallels between ensuring software quality and effective education.

## Quality Mindset in Education

The QA mindset translates beautifully to teaching:
- **Attention to Detail**: Ensuring students understand each concept thoroughly
- **Process Improvement**: Continuously refining teaching methods
- **User Experience**: Focusing on the student's learning experience

## Leadership Skills Transfer

Leading QA initiatives taught me valuable skills that enhance my teaching:
- **Clear Communication**: Breaking down complex problems into understandable parts
- **Patience**: Working through issues systematically
- **Feedback Loops**: Creating systems for continuous improvement

## Student-Centered Approach

Just as QA focuses on the end user, effective teaching focuses on the student:
- **Understanding Needs**: Identifying individual learning styles
- **Personalized Solutions**: Adapting explanations to different comprehension levels
- **Measuring Success**: Using assessments to gauge understanding

## Building Confidence

Both QA and teaching involve building confidence:
- **In QA**: Confidence in product reliability
- **In Teaching**: Confidence in student abilities

The collaborative approach I developed in QA has proven invaluable in creating a supportive learning environment where students feel comfortable asking questions and making mistakes.
    `
  },
  {
    id: "6",
    slug: "emerging-technologies-2024",
    title: "Emerging Technologies in 2024",
    excerpt: "A student's perspective on the latest trends in AI, web development, and cybersecurity that are shaping our future.",
    category: "Innovation",
    readTime: 5,
    publishedAt: "2024-12-01",
    image: {
      gradient: "from-indigo-600 to-purple-600",
      icon: "lightbulb",
      animation: "idea-spark"
    },
    tags: ["Technology", "Innovation", "AI", "Future"],
    content: `
# Emerging Technologies in 2024: A Student's Perspective

As a computer science student passionate about AI and development, I've been following the rapid technological evolution of 2024. Here are the trends that excite me most.

## AI Integration Everywhere

Artificial Intelligence is no longer a separate field—it's becoming integrated into every aspect of technology:
- **Development Tools**: AI-powered coding assistants
- **User Interfaces**: More intuitive and adaptive applications
- **Decision Making**: AI-driven insights in business processes

## Advances in Computer Vision

My work in visual speech recognition has shown me how rapidly computer vision is advancing:
- **Real-time Processing**: Faster and more accurate image analysis
- **Multimodal Learning**: Combining visual, audio, and text data
- **Edge Computing**: Running complex models on mobile devices

## Cybersecurity Evolution

Security threats are becoming more sophisticated, but so are our defenses:
- **Zero Trust Architecture**: Assuming no implicit trust
- **AI-Powered Threat Detection**: Using machine learning for security
- **Privacy-First Design**: Building privacy into applications from the start

## The Human Element

Despite all these technological advances, the human element remains crucial:
- **User Experience**: Technology should enhance, not complicate, human life
- **Ethical Considerations**: Responsible development and deployment
- **Accessibility**: Ensuring technology benefits everyone

As I continue my studies and research, I'm excited to contribute to these evolving fields and help shape a future where technology truly serves humanity.
    `
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string) => {
  if (category === "All Categories") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getBlogCategories = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return ["All Categories", ...categories];
};
