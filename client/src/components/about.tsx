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
              Hello! I'm Shantanu, a passionate Senior Software Developer with over 7 years of experience in 
              Industrial automation and ADAS development. With specialization in C++ development and a strong 
              academic background, I create innovative solutions that make a real impact.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently pursuing M.Tech in Data Science at BITS Pilani while working at Siemens, I'm constantly 
              learning and exploring new technologies. I'm recognized as a Rising Inventor for my patent contributions 
              and have received awards for proactive contributions in CAN gateway development.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Industrial Automation</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">ADAS Development</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">C++ Development</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Data Science</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-[hsl(188,94%,42%)]/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">7+</h3>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </div>
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">10+</h3>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">2</h3>
                  <p className="text-sm text-slate-400">Patents</p>
                </div>
                <div className="bg-primary/50 rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-accent">3</h3>
                  <p className="text-sm text-slate-400">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
