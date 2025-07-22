import {
  ExternalLink,
  Github,
  Sprout,
  Hammer,
  Warehouse,
  TrendingUp,
  Heart,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AgriSure",
      duration: "March 2025 – Present",
      type: "Full Stack",
      description:
        "Improved financial access for over 12,000 farmers boosting microloan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.",
      tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
      icon: <Sprout size={48} />,
      bgColor: "from-green-500/20 to-blue-500/20",
      iconColor: "text-green-400",
      links: {
        github: "https://github.com/aditiarya37/AgriSure",
      },
    },
    {
      title: "BuildBridge",
      duration: "March 2025 – Present",
      type: "Full Stack",
      description:
        "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
      tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
      icon: <Hammer size={48} />,
      bgColor: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
      links: {
        github: "https://github.com/aditiarya37/BuildBridge",
        live: "https://build-bridge-seven.vercel.app/",
      },
    },
    {
      title: "FarmConnect",
      duration: "Feb 2025 – Present",
      type: "Full Stack",
      description:
        "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
      tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
      icon: <Warehouse size={48} />,
      bgColor: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-400",
      links: {
        github: "https://github.com/aditiarya37/FarmConnect",
        live: "https://farm-connect-iota-psi.vercel.app/",
      },
    },
    {
      title: "WealthWise",
      duration: "Jan 2025 – Present",
      type: "Fintech",
      description:
        "Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.",
      tech: ["React JS", "Node JS", "Firebase", "API Integration"],
      icon: <TrendingUp size={48} />,
      bgColor: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      links: {
        github: "https://github.com/aditiarya37/WealthWise",
        live: "https://wealthwisefinance.vercel.app/",
      },
    },
    {
      title: "Blood Shortage Survey and Dashboard",
      duration: "Jan 2025 – Present",
      type: "Healthcare",
      description:
        "Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.",
      tech: ["React.js", "Node.js", "MongoDB"],
      icon: <Heart size={48} />,
      bgColor: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-400",
      links: {
        github: "https://github.com/aditiarya37/BloodLink",
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
