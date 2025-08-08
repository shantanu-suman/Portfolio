import {
  ExternalLink,
  Github,
  BarChart3,
  MessageSquare,
  GraduationCap,
  Code,
  Bot,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Titanic Classifier",
      duration: "2024 – Present",
      type: "Machine Learning",
      description:
        "Predicts passenger survival on the Titanic using various ML algorithms. Includes data preprocessing, feature engineering, and model evaluation.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      icon: <BarChart3 size={48} />,
      bgColor: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
      links: {
        github: "https://github.com/shantanu-suman/Titanic_Classifier",
        live: null,
      },
    },
    {
      title: "Sentiment Analysis",
      duration: "2024 – Present",
      type: "NLP",
      description:
        "Performs sentiment analysis on text data using machine learning and natural language processing techniques.",
      tech: ["Python", "NLTK", "Scikit-learn"],
      icon: <MessageSquare size={48} />,
      bgColor: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-400",
      links: {
        github: "https://github.com/shantanu-suman/SentimentAnalysis",
        live: null,
      },
    },
    {
      title: "College Student Placement Predictor",
      duration: "2024 – Present",
      type: "Data Science",
      description:
        "Predicts whether a student will get placed based on academic and skill-related data using ML classification models.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      icon: <GraduationCap size={48} />,
      bgColor: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
      links: {
        github:
          "https://github.com/shantanu-suman/RFC_CollegeStudentPlacement",
        live: null,
      },
    },
    {
      title: "FineTune CodeT5 – C Linter",
      duration: "2024 – Present",
      type: "AI/ML",
      description:
        "Fine-tunes the CodeT5 model for automated linting and quality checks in C programming.",
      tech: ["Python", "Hugging Face", "Transformers"],
      icon: <Code size={48} />,
      bgColor: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      links: {
        github:
          "https://github.com/shantanu-suman/FineTune_CodeT5__C-Linter",
        live: null,
      },
    },
    {
      title: "Teams Python Bot",
      duration: "2024 – Present",
      type: "Bot Development",
      description:
        "A Python-based bot for Microsoft Teams that automates responses and handles tasks based on chat commands.",
      tech: ["Python", "Bot Framework", "Flask"],
      icon: <Bot size={48} />,
      bgColor: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-400",
      links: {
        github: "https://github.com/shantanu-suman/teams-python-bot",
        live: null,
      },
    },
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            My Creations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>

        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] space-x-6 w-max">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[300px] bg-secondary/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group shrink-0"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}
                >
                  <div className={project.iconColor}>{project.icon}</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {project.duration} | {project.type}
                  </p>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent/20 text-accent px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
