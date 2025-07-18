import { CheckCircle, Trophy, Users, Calendar } from "lucide-react";

export default function Leadership() {
  const experiences = [
    {
      title: "Senior Software Developer",
      organization: "Siemens Technology and Services Limited, Bengaluru",
      duration: "June 2021 – Present",
      achievements: [
        "Developed and maintained Onboard Compiler system, fixing bugs in various System Function Calls.",
        "Performed comprehensive bug fixes for various Jobs in Test and Debugging environments.",
        "Worked with industrial automation systems and contributed to ADAS development projects."
      ],
      icon: <Users size={24} />
    },
    {
      title: "Software Engineer",
      organization: "Robert Bosch Engineering and Business Solution Private Limited, Bengaluru",
      duration: "September 2016 – June 2021",
      achievements: [
        "Developed CAN gateway for various OEM's during HIL Development phase.",
        "Implemented Static and Online Camera Calibration systems.",
        "Led HIL Development Gen3 project involving replaying and recording of images in mf4 format for validation.",
        "Worked on HIL Installer development and testing including all software as a single package.",
        "Developed various sequence validation filters and contributed to delta installer development."
      ],
      icon: <Calendar size={24} />
    },
    {
      title: "Rising Inventor Award",
      organization: "Siemens, Bengaluru",
      duration: "January 2024",
      achievements: [
        "Received Rising Inventor award for filing decision on Patent Application.",
        "Recognized for innovative contributions to industrial automation and software development."
      ],
      icon: <Trophy size={24} />
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-primary/50 rounded-xl p-8 hover:bg-primary/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-accent">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-accent font-semibold">{exp.organization}</p>
                  </div>
                </div>
                <p className="text-slate-400 mt-2 md:mt-0">{exp.duration}</p>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-3">
                    <div className="text-accent mt-1">
                      {exp.title === "AMCAT 2nd Rank Holder" ? (
                        <Trophy size={20} className="text-yellow-500" />
                      ) : (
                        <CheckCircle size={20} />
                      )}
                    </div>
                    <span className="text-slate-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
