import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Leadership from "@/components/leadership";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Leadership />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-secondary/50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400 mb-4">© 2025 Shantanu Suman. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/shantanusuman" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors duration-200">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/shantanusuman" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors duration-200">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:shantanu.suman@gmail.com" className="text-slate-400 hover:text-accent transition-colors duration-200">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
