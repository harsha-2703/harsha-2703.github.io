import { useParams } from "react-router-dom";
import { AiOutlineAudio, AiOutlineCamera, AiOutlineSound } from "react-icons/ai";
import { FaRobot, FaComments, FaCogs } from "react-icons/fa";

const projectDetails = {
  "skin-lesion": {
    title: "Skin Lesion Segmentation",
    description: (
      <>
        {/* Intro */}
        <p className="mb-6">
          Skin cancer is one of the most prevalent tumors among the elderly. Early identification can increase the survival rate up to 95% if 
          treated properly. Traditional segmentation methods (manual HSV tweaking & CAD tools) 
          were either time-consuming or inaccurate. With the evolution of deep learning, 
          segmentation performance has improved significantly.
        </p>

        {/* Manual Segmentation */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Manual Segmentation</h2>
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/skin-lesion/manual-segmentation.jpg"
            alt="Manual segmentation"
            className="rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-600 mt-2">
            Example of manual segmentation by tweaking HSV values.
          </p>
        </div>

        {/* Model Comparisons */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Model Comparisons</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/unet-1.png" alt="U-Net result" className="rounded mb-2" />
            <p className="text-sm font-medium">U-Net Dice: 0.593</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/swin-unet-1.png" alt="Swin-Unet result" className="rounded mb-2" />
            <p className="text-sm font-medium">Swin-Unet Dice: 0.9652</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/unet-2.png" alt="U-Net result" className="rounded mb-2" />
            <p className="text-sm font-medium">U-Net Dice: 0.743</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/swin-unet-2.png" alt="Swin-Unet result" className="rounded mb-2" />
            <p className="text-sm font-medium">Swin-Unet Dice: 0.9383</p>
          </div>
        </div>

        {/* Methodology */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Our Approach</h2>
        <p className="mb-4">
          A medical image contains both <strong>local structural information </strong> 
          and <strong>global statistical information</strong>. 
          We used a <strong>U-Net decoder</strong> for local features and a 
          <strong> Swin Transformer backbone</strong> for global context. 
          Together, this Swin-UNet hybrid architecture enables more accurate lesion segmentation.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            <strong>Module 1:</strong> Fuses structural & statistical texture information with 
            a dynamic gating mechanism and comprehensive attention.
          </li>
          <li>
            <strong>Module 2:</strong> Enhances multi-scale statistical features using 
            embedding enrichment and a novel Te-FFN.
          </li>
        </ul>

        {/* Dataset Performance */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Dataset Performance</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/ham-graph.jpg" alt="HAM10000" className="rounded mb-2" />
            <p className="text-sm">Tested on HAM10000</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/ph2-graph.jpg" alt="PH2" className="rounded mb-2" />
            <p className="text-sm">Tested on PH2</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
            <img src="/images/skin-lesion/isic-graph.png" alt="ISIC" className="rounded mb-2" />
            <p className="text-sm">ISIC Dataset</p>
          </div>
        </div>

        {/* Results */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Best Results</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <img src="/images/skin-lesion/swin-unet-best1.png" alt="Best result 1" className="rounded shadow" />
          <img src="/images/skin-lesion/swin-unet-best2.png" alt="Best result 2" className="rounded shadow" />
          <img src="/images/skin-lesion/swin-unet-best3.png" alt="Best result 3" className="rounded shadow" />
        </div>

        {/* Conclusion */}
        <p>
          Using the <strong>Dice Similarity Coefficient (DSC)</strong> as the evaluation metric, 
          our proposed Swin-UNet with texture-aware modules achieved a 
          <strong> Dice score of 90.28% on the ISIC2018 dataset</strong>, 
          demonstrating the effectiveness of attention mechanisms and texture-aware modules.
        </p>
      </>
    ),
  },
  "virtual-assistant": {
    title: "Real-Time Virtual Assistant with Multimodal LLM",
    description: (
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16 text-gray-800 text-lg leading-relaxed">
        {/* Screenshot */}
        <div className="w-full flex justify-center">
          <img
            src="/images/virtual-assistant/frontend-design.jpg"
            alt="Virtual Assistant Frontend"
            className="rounded-xl shadow-lg w-full max-w-5xl object-contain"
          />
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b border-gray-300 pb-2">Overview</h2>
          <p>
            A <strong>real-time, memory-efficient multimodal AI assistant</strong> designed to run entirely on CPU by
            leveraging <strong>smaller LLMs</strong> without sacrificing performance. The system supports
            <strong> voice, text, and webcam</strong> based interactions, all processed with <strong>low latency</strong>.
            Incoming queries are routed through a <strong>Prompt Classifier (Gemma 3 API)</strong> to determine if they
            are <em>vision</em>, <em>conversation</em>, or <em>tool</em> related. The appropriate model is invoked,
            and the <strong>final response is delivered instantly via TTS</strong>.
          </p>
        </div>

        {/* Architecture */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b border-gray-300 pb-2">Architecture</h2>
          <img
            src="/images/virtual-assistant/architecture.png"
            alt="Virtual Assistant Architecture"
            className="rounded-md shadow-md w-full max-w-6xl mx-auto"
          />
        </div>

        {/* Two Interfaces */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b border-gray-300 pb-2">Two Interfaces</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Terminal Version */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md h-full">
              <h3 className="font-semibold text-xl mb-3">Terminal Version</h3>
              <p className="text-base">
                Hybrid STT (Faster-Whisper + SpeechRecognition), OpenCV for webcam input,
                <strong> Gemma 3 (API key)</strong> for prompt classification & vision queries,
                <strong> Gemma 3 (Ollama)</strong> for dialogue,
                <strong> LLaMA 3.2 (Ollama)</strong> for tool calling, and
                <strong> offline TTS</strong>.
              </p>
            </div>

            {/* Frontend Version */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md h-full">
              <h3 className="font-semibold text-xl mb-3">Frontend Version (React + Tailwind)</h3>
              <p className="mb-3 text-base">
                Same backend flow, but replaces STT/TTS with browser-native libraries for
                <strong> zero-latency voice interactions</strong>. Includes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-base">
                <li><strong>Voice-only</strong> mode with mic toggle (back-and-forth, interruptible)</li>
                <li><strong>Continuous voice</strong> mode (auto-submit after pauses)</li>
                <li><strong>Text-only</strong> mode (standard chatbot typing, webcam access available)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend & Local Deployment */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b border-gray-300 pb-2">Backend & Local Deployment</h2>
          <p>
            The backend is implemented in <strong>FastAPI</strong> and fully containerized with <strong>Docker</strong>.
            Users can pull the Docker image and run it locally, connecting seamlessly with the React frontend.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Advantages of Local Deployment</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Privacy:</strong> Queries (voice, text, or webcam) never leave the user’s machine</li>
            <li><strong>Low Latency:</strong> No dependency on remote servers → faster response cycle</li>
            <li><strong>Offline Capability:</strong> Works without a constant internet connection (except API key calls)</li>
            <li><strong>Customizability:</strong> Users can extend or fine-tune the assistant by modifying the container</li>
            <li><strong>Portability:</strong> Single Docker command to set up on any OS</li>
          </ul>
        </div>

        {/* Tools & Models */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b border-gray-300 pb-2">Tools & Models</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="flex items-center gap-2 text-base">
              <AiOutlineAudio className="text-purple-600 text-3xl" />
              Hybrid STT: Faster-Whisper + SpeechRecognition
            </li>
            <li className="flex items-center gap-2 text-base">
              <AiOutlineCamera className="text-purple-600 text-3xl" />
              OpenCV for real-time webcam capture
            </li>
            <li className="flex items-center gap-2 text-base">
              <FaRobot className="text-purple-600 text-4xl" />
              Gemma 3 (API key, large) - Prompt Classifier + Vision Queries
            </li>
            <li className="flex items-center gap-2 text-base">
              <FaComments className="text-purple-600 text-3xl" />
              Gemma 3 (Ollama, small) - Dialogue Control
            </li>
            <li className="flex items-center gap-2 text-base">
              <FaCogs className="text-purple-600 text-3xl" />
              LLaMA 3.2 (Ollama) - Tool Execution
            </li>
            <li className="flex items-center gap-2 text-base">
              <AiOutlineSound className="text-purple-600 text-4xl" />
              TTS: pyttsx3 (Terminal) / Web Speech API (Frontend)
            </li>
          </ul>
        </div>

        {/* Development & Deployment */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b border-gray-300 pb-2">Development & Deployment</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Frontend built with React.js + Tailwind CSS, deployed on GitHub Pages</li>
            <li>Backend containerized with FastAPI, image published to Docker Hub</li>
            <li>Reusable Hybrid STT package published on PyPI</li>
          </ul>
        </div>

        {/* CTA Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="https://harsha-2703.github.io/virtual-assistant-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition"
          >
            Live Demo
          </a>
          <a
            href="https://hub.docker.com/r/rharsharaj/virtual-assistant-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-purple-700 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
          >
            Docker Image
          </a>
          <a
            href="https://pypi.org/project/faststt/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-purple-700 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
          >
            PyPI Package
          </a>
        </div>
      </div>
    )
  }
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <p className="text-center py-10">Project not found</p>;

  return (
    <div
      className={`mx-auto px-6 py-10 ${
        id === "skin-lesion" ? "max-w-7xl" : "max-w-4xl"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">{project.title}</h1>

      <div className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed">
        {project.description}
      </div>
    </div>
  );
}

export default ProjectDetail;