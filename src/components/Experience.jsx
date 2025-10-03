import { FaBuilding } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "Mobius Knowledge Services",
      location: "Chennai, Tamil Nadu",
      role: "AI Developer",
      duration: "Sep 2025 - Present",
      logo: "/images/mobius-logo.png",
      points: [
        "Led the automation of RFP (Request for Proposal) classification using Large Language Models (LLMs) to categorize RFPs based on predefined keyword sets, significantly reducing manual review time and improving overall response accuracy.",
      ],
    },
    {
      company: "DataReveal AI",
      location: "Chennai, Tamil Nadu",
      role: "AI Developer Intern",
      duration: "Jan 2025 - Aug 2025",
      logo: "/images/datareveal-logo.jpg",
      points: [
        "Automated extraction and processing of candidate data from diverse sources, raising ATS accuracy and reducing manual entry time, by embedding Large Language Models (LLMs) for intelligent parsing and information retrieval.",
        "Enhanced system performance and UX by crafting responsive, cross-platform interfaces with React.js, Tailwind CSS, and Redux Toolkit; linked real-time APIs, modularized components, and streamlined state management.",
      ],
    },
    {
      company: "Mobius Knowledge Services",
      location: "Chennai, Tamil Nadu",
      role: "AI/ML Intern",
      duration: "May 2024 - Dec 2024",
      logo: "/images/mobius-logo.png",
      points: [
        "Increased retrieval precision for transcripts and financial reports by designing an advanced RAG pipeline, leveraging a coder agent powered by GPT-4o to produce contextually accurate content chunks.",
        "Developed a CAD/blueprint query-answering platform with a Streamlit-based conversational UI, integrating GPT-4o for refined prompt handling, persistent chat storage, and automated PDF chart-to-dataframe conversion, reducing manual data extraction time.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-20" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>

        <div className="relative border-l border-gray-300">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-6">
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-purple-700 rounded-full -left-1.5 mt-2"></div>

              <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                {/* Logo + Header */}
                <div className="flex items-center gap-4 mb-3">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-contain rounded-md"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
                      <FaBuilding className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-600">
                      <span className="text-purple-700">{exp.company}</span> •{" "}
                      {exp.location}
                    </p>
                    <p className="text-xs text-gray-500">{exp.duration}</p>
                  </div>
                </div>

                {/* Points */}
                <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
                  {exp.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;



