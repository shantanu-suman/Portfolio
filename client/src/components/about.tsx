export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Hello! I'm Aditi, a driven Full Stack Developer with a strong foundation in computer science 
              and a knack for crafting efficient, user-centric applications. My journey into tech is fueled 
              by a desire to learn, innovate, and contribute to projects that make a difference.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I thrive in collaborative environments and am always excited to tackle new challenges. 
              With a CGPA of 8.17/10 and experience in 15+ hackathons, I bring both academic excellence 
              and practical problem-solving skills to every project.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Problem Solving</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Team Leadership</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Full Stack Development</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Agile Methodologies</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-[hsl(188,94%,42%)]/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">15+</h3>
                  <p className="text-sm text-slate-400">Hackathons</p>
                </div>
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">8.17</h3>
                  <p className="text-sm text-slate-400">CGPA</p>
                </div>
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">5+</h3>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">2nd</h3>
                  <p className="text-sm text-slate-400">AMCAT Rank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
