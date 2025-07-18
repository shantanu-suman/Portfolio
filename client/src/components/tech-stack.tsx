import { Code, Layers, Settings } from "lucide-react";

export default function TechStack() {
  const techCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "C++", icon: "💻" },
        { name: "C++ 11", icon: "🔧" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Layers size={24} />,
      skills: [
        { name: "TIA Portal", icon: "🔧" },
        { name: "ADTF", icon: "🚗" },
        { name: "Git", icon: "🔄" },
        { name: "NSIS", icon: "📦" },
        { name: "HIL Systems", icon: "🔧" }
      ]
    },
    {
      title: "Specializations",
      icon: <Settings size={24} />,
      skills: [
        { name: "Industrial Automation", icon: "🏭" },
        { name: "ADAS Development", icon: "🚗" },
        { name: "CAN Gateway", icon: "🔌" },
        { name: "Data Science", icon: "📊" },
        { name: "Camera Calibration", icon: "📷" },
        { name: "System Testing", icon: "🧪" }
      ]
    }
  ];

  const coreCompetencies = [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies"
  ];

  return (
    <section id="tech" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">My Tech Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-primary/50 rounded-xl p-8 hover:bg-primary/70 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-accent mb-6 group-hover:text-accent/80 transition-colors flex items-center gap-3">
                {category.icon}
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="bg-primary/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="bg-accent/20 text-accent px-4 py-3 rounded-lg text-center font-semibold">
                {competency}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
