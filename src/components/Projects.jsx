import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaDocker } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiPypi } from "react-icons/si";

const projects = [
  {
    id: "skin-lesion",
    title: "Skin Lesion Segmentation",
    description: `Designed a Swin-UNet-based model for skin lesion segmentation, combining a U-Net decoder to capture local structural features with a Swin Transformer backbone for global statistical context. The architecture fuses texture and structural information through dynamic attention mechanisms and enhances multi-scale representations using enriched embeddings, achieving a Dice Similarity Coefficient of 90.28% on the ISIC2018 dataset.`,
    image: "/images/skin-lesion-proj.jpg",
  },
  {
    id: "virtual-assistant",
    title: "Real-Time Virtual Assistant with Multimodal LLM",
    description: `Built a low-latency real-time multimodal AI assistant using Faster-Whisper & SpeechRecognition for transcription, Gemini API for webcam-based reasoning, and Gemma 3 & LLaMA 3.2 via Ollama for dialogue and tool execution. Delivered offline TTS for natural responses, deployed the frontend (React & Tailwind) on GitHub Pages, containerized the backend (FastAPI → Docker Hub), and published a hybrid STT package on PyPI.`,
    image: "/images/virtual-assistant-proj.png",
    links: [
      {
        label: "Live Demo",
        url: "https://harsha-2703.github.io/virtual-assistant-frontend/",
        icon: <FaExternalLinkAlt />,
      },
      {
        label: "Docker Image",
        url: "https://hub.docker.com/r/rharsharaj/virtual-assistant-backend",
        icon: <FaDocker />,
      },
      {
        label: "Pypi",
        url: "https://pypi.org/project/faststt/",
        icon: <SiPypi />,
      },
    ],
  },
];

function Projects() {
  return (
    <section className="w-full bg-gray-50 py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6 pt-0 lg:pt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:scale-[1.02] transition-transform duration-300 flex flex-col"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description} &nbsp;
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-purple-600 text-sm font-medium hover:underline"
                  >
                    Read More
                    <MdKeyboardDoubleArrowRight className="mt-1 size-4" />
                  </Link>
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  {project.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-700 hover:text-purple-600"
                    >
                      {link.icon && <span className="mr-1">{link.icon}</span>}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
