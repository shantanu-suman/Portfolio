import { CheckCircle, Trophy, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {
  const experiences = [
    {
      title: "Senior Software Developer",
      organization: "Siemens Technology and Services Limited, Bengaluru",
      duration: "June 2021 – Present",
      achievements: [
        "Developed and maintained Onboard Compiler system, fixing bugs in various System Function Calls.",
        "Performed comprehensive bug fixes for various Jobs in Test and Debugging environments.",
        "Worked with industrial automation systems and contributed to ADAS development projects.",
      ],
      icon: <Users size={24} />,
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
        "Developed various sequence validation filters and contributed to delta installer development.",
      ],
      icon: <Calendar size={24} />,
    },
  ];

  const awards = [
    {
      title: "Rising Inventor Award",
      organization: "Siemens, Bengaluru",
      duration: "January 2024",
      achievements: [
        "Received Rising Inventor award for filing decision on Patent Application.",
        "Recognized for innovative contributions to industrial automation and software development.",
      ],
      icon: <Trophy size={24} className="text-slate-200" />,
    },
    {
      title: "Silver Award",
      organization: "Bosch, Bengaluru",
      duration: "June 2019",
      achievements: [
        "Honored for proactive contributions in CAN Gateway development.",
        "Praised for cross-functional collaboration and timely delivery in embedded automotive projects.",
      ],
      icon: <Trophy size={24} className="text-slate-200" />,
    },
  ];

  const silverAchievements = new Set([
    "Received Rising Inventor award for filing decision on Patent Application.",
    "Recognized for innovative contributions to industrial automation and software development.",
    "Honored for proactive contributions in CAN Gateway development.",
    "Praised for cross-functional collaboration and timely delivery in embedded automotive projects.",
  ]);

  const renderSection = (sectionTitle: string, items: any[]) => (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">{sectionTitle}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
      </div>

      <div className="space-y-8">
        {items.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-primary/50 rounded-xl p-8 hover:bg-primary/70 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  className="text-accent"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {exp.icon}
                </motion.div>
                <div>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p
                    className="text-accent font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {exp.organization}
                  </motion.p>
                </div>
              </div>
              <motion.p
                className="text-slate-400 mt-2 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
              >
                {exp.duration}
              </motion.p>
            </div>

            <ul className="space-y-3">
              {exp.achievements.map((achievement: string, achievementIndex: number) => (
                <motion.li
                  key={achievementIndex}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div className="text-accent mt-1" whileHover={{ scale: 1.2 }}>
                    {silverAchievements.has(achievement) ? (
                      <Trophy size={20} className="text-slate-200" />
                    ) : (
                      <CheckCircle size={20} />
                    )}
                  </motion.div>
                  <span className="text-slate-300 leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );

  return (
    <section id="leadership" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderSection("Experience", experiences)}
        <div className="mt-24" />
        {renderSection("Awards", awards)}
      </div>
    </section>
  );
}
