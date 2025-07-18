import { CheckCircle, Trophy, Users, Calendar } from "lucide-react";

export default function Leadership() {
  const experiences = [
    {
      title: "Junior Partner",
      organization: "The Apex Circle (TAC)",
      duration: "Jan 2025 – Present",
      achievements: [
        "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
        "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community."
      ],
      icon: <Users size={24} />
    },
    {
      title: "Technical Executive",
      organization: "Computer Society of India, CU Student Branch",
      duration: "Nov 2024 – Present",
      achievements: [
        "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
        "Coordinated with faculty and industry experts to bring technical opportunities to students."
      ],
      icon: <Calendar size={24} />
    },
    {
      title: "AMCAT 2nd Rank Holder",
      organization: "Chandigarh University",
      duration: "Sept 2024",
      achievements: [
        "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
        "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition."
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
