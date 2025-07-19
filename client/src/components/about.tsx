import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p 
  className="text-lg text-slate-300 leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  Hello! I'm Shantanu, a passionate <span className="font-semibold text-white">Senior Software Developer</span> with over <span className="font-semibold text-white">9+ years of experience</span> in 
  <span className="font-semibold text-white"> Industrial Automation</span> and <span className="font-semibold text-white">ADAS development</span>. Specializing in <span className="font-semibold text-white">C++ development</span>, I build innovative solutions that deliver real-world impact.
  <br /><br />
  I'm currently pursuing an <span className="font-semibold text-white">M.Tech in Data Science</span> at <span className="font-semibold text-white">BITS Pilani</span> while working at <span className="font-semibold text-white">Siemens</span>. I've been recognized as a <span className="text-yellow-400 font-semibold">Rising Inventor</span> for my patent contributions and awarded for my <span className="font-semibold text-white">proactive excellence in CAN Gateway development</span>.
</motion.p>

            <motion.p 
              className="text-lg text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Currently pursuing M.Tech in Data Science at BITS Pilani while working at Siemens, I'm constantly 
              learning and exploring new technologies. I'm recognized as a Rising Inventor for my patent contributions 
              and have received awards for proactive contributions in CAN gateway development.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/30 transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>Industrial Automation</motion.span>
              <motion.span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/30 transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>ADAS Development</motion.span>
              <motion.span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/30 transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>C++ Development</motion.span>
              <motion.span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/30 transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>Data Science</motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-accent/20 to-[hsl(188,94%,42%)]/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                <motion.div 
                  className="bg-primary/50 rounded-lg p-4 hover:bg-primary/70 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-accent">9+</h3>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </motion.div>
                <motion.div 
                  className="bg-primary/50 rounded-lg p-4 hover:bg-primary/70 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-accent">10+</h3>
                  <p className="text-sm text-slate-400">Projects</p>
                </motion.div>
                <motion.div 
                  className="bg-primary/50 rounded-lg p-4 hover:bg-primary/70 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-accent">2</h3>
                  <p className="text-sm text-slate-400">Patents</p>
                </motion.div>
                <motion.div 
                  className="bg-primary/50 rounded-lg p-4 hover:bg-primary/70 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-accent">3</h3>
                  <p className="text-sm text-slate-400">Awards</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
