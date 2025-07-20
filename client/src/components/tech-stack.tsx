import { Code, Layers, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function TechStack() {
  const techCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Advance C++", icon: "💻" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Layers size={24} />,
      skills: [
        { name: "Jenkins & GitHub", icon: "🚀" },
        { name: "CMake & bazel", icon: "⚙️" },
        { name: "TensorFlow / PyTorch", icon: "🔥" },
        { name: "NSIS", icon: "📦" },
      ]
    },
    {
      title: "Specializations",
      icon: <Settings size={24} />,
      skills: [
        { name: "NLP & Deep Learning", icon: "🧠" },
        { name: "Industrial Automation", icon: "🏭" },
        { name: "Embedded Systems", icon: "🚗" },
        { name: "Windows Installers", icon: "🔌" },
      ]
    }
  ];

const coreCompetencies = [
  "Algorithm Design & Optimization",
  "Technical Documentation & Stakeholder Communication",
  "Version Control & Branching Strategy",
  "Cross-Functional Team Leadership",
  "Software Architecture & Design Patterns",
  "Agile SDLC (Scrum, CI/CD, Sprint Planning)"
];


  return (
    <section id="tech" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {techCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-primary/50 rounded-xl p-8 hover:bg-primary/70 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-6 group-hover:text-accent/80 transition-colors flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                  {category.icon}
                </motion.div>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span 
                      className="text-lg"
                      whileHover={{ scale: 1.3 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="text-slate-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div 
          className="bg-primary/30 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coreCompetencies.map((competency, index) => (
              <motion.div 
                key={index} 
                className="bg-accent/20 text-accent px-4 py-3 rounded-lg text-center font-semibold hover:bg-accent/30 transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {competency}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
