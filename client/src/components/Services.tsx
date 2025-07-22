import { FaPaintBrush, FaCode, FaBrain, FaChartBar, FaMicrochip } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Crafting intuitive, user‑friendly interfaces with vibrant aesthetics that reflect your brand identity.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Building fast, responsive React and Tailwind websites with seamless animations and interactions.",
  },
  {
    icon: <FaBrain />,
    title: "AI/ML Integration",
    desc: "Implementing intelligent AI features—NLP, computer vision, LLM APIs—for smarter user experiences.",
  },
  {
    icon: <FaChartBar />,
    title: "Data Dashboards",
    desc: "Designing real‑time, interactive dashboards and analytics visualizations to drive insights.",
  },
  {
    icon: <FaMicrochip />,
    title: "Embedded & IoT",
    desc: "Developing C/C++, CAN Bus, PLC, and automation systems with edge‑computing expertise.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-br from-yellow-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">What I Do</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Offering a range of services from design and development to AI solutions, IoT systems, and data visualization.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center"
            >
              <div className="text-5xl text-yellow-600 mb-4">{svc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-600">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
