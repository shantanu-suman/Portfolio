// components/Services.tsx

import { FaCode, FaChalkboardTeacher, FaBrain } from "react-icons/fa";
import { SiOpencv, SiTensorflow, SiReact } from "react-icons/si";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-slate-400 text-lg">
            Leveraging years of experience in AI, Embedded Systems, and Web Technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          <ServiceCard
            Icon={FaBrain}
            title="AI/ML Solutions"
            description="Custom ML pipelines, model fine-tuning, and production-ready AI solutions using PyTorch, TensorFlow, and Scikit-learn."
          />
          <ServiceCard
            Icon={SiOpencv}
            title="Computer Vision"
            description="End-to-end vision-based solutions, especially in real-time systems, behavior analysis, and OpenCV-based applications."
          />
          <ServiceCard
            Icon={FaCode}
            title="Embedded Systems"
            description="9+ years of experience in IoT, C/C++, industrial automation, PLCs, and low-level optimization."
          />
          <ServiceCard
            Icon={SiReact}
            title="Web App Development"
            description="Building fast, scalable, and responsive web apps with React, Next.js, TailwindCSS, and REST APIs."
          />
          <ServiceCard
            Icon={FaChalkboardTeacher}
            title="Mentorship & Training"
            description="Guidance on M.Tech/Ph.D. research, project development, and ML/IoT interview preparation."
          />
          <ServiceCard
            Icon={SiTensorflow}
            title="Research Prototyping"
            description="Rapid prototyping of academic and industrial research ideas in ML, NLP, and signal processing."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ Icon, title, description }: { Icon: any; title: string; description: string }) {
  return (
    <div className="bg-secondary/30 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-secondary/40">
      <div className="text-accent mb-4">
        <Icon className="text-4xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
