import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Contact Me
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-800 text-lg">
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-purple-700 w-6 h-6" />
            <a href="mailto:rharsharaj03@gmail.com" className="underline">
              rharsharaj03@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlinePhone className="text-purple-700 w-6 h-6" />
            <a href="tel:+919445506527" className="underline">
              +91 9445506527
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaLinkedin className="text-purple-700 w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/harsharaj-r-412b17259"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-md md:text-base lg:text-lg"
            >
              linkedin.com/in/harsharaj-r
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
