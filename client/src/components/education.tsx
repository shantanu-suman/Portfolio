export default function Education() {
  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "Aug 2023 – Present",
      grade: "CGPA: 8.17/10",
      color: "accent"
    },
    {
      institution: "Namdev Public School",
      degree: "Class 12th CBSE",
      duration: "April 2022 - May 2023",
      grade: "96.5%",
      color: "highlight"
    },
    {
      institution: "Namdev Public School",
      degree: "Class 10th CBSE",
      duration: "April 2020 - May 2021",
      grade: "95.17%",
      color: "accent"
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
            <div key={index} className="relative bg-secondary/50 rounded-xl p-8 hover:bg-secondary/70 transition-all duration-300">
              <div className={`absolute top-8 left-8 w-4 h-4 rounded-full ${
                edu.color === "accent" ? "bg-accent" : "bg-accent"
              }`}></div>
              <div className={`ml-8 pl-8 border-l-2 ${
                edu.color === "accent" ? "border-accent/30" : "border-accent/30"
              }`}>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className={`font-semibold mb-2 ${
                  edu.color === "accent" ? "text-accent" : "text-accent"
                }`}>
                  {edu.degree}
                </p>
                <p className="text-slate-400 mb-4">{edu.duration}</p>
                <p className="text-lg font-semibold text-accent">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
