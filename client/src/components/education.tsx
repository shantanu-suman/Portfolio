import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      institution: "Bits Pilani",
      degree: "M.Tech in Data Science",
      duration: "November 2023 – Present",
      grade: "In Progress",
      color: "accent"
    },
    {
      institution: "RVCE, Bengaluru",
      degree: "B.E in Electrical and Electronics Engineering",
      duration: "August 2012 – May 2016",
      grade: "CGPA: 8.4/10",
      color: "highlight"
    },
    {
      institution: "Sree Ayyappa Public School, Bokaro Steel City",
      degree: "Senior School Certificate Examination",
      duration: "July 2010 – April 2012",
      grade: "91.2%",
      color: "accent"
    },
    {
      institution: "St. Joseph's Public School, Samastipur",
      degree: "Secondary School Certificate",
      duration: "March 2008 – April 2009",
      grade: "89%",
      color: "highlight"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="relative bg-secondary/50 rounded-xl p-8 hover:bg-secondary/70 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className={`absolute top-8 left-8 w-4 h-4 rounded-full ${
                  edu.color === "accent" ? "bg-accent" : "bg-accent"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
              <div className={`ml-8 pl-8 border-l-2 ${
                edu.color === "accent" ? "border-accent/30" : "border-accent/30"
              }`}>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {edu.institution}
                </motion.h3>
                <motion.p 
                  className={`font-semibold mb-2 ${
                    edu.color === "accent" ? "text-accent" : "text-accent"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {edu.degree}
                </motion.p>
                <motion.p 
                  className="text-slate-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {edu.duration}
                </motion.p>
                <motion.p 
                  className="text-lg font-semibold text-accent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {edu.grade}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
