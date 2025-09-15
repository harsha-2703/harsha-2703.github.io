import { HashLink } from "react-router-hash-link";

function HeroSection({ imageSrc }) {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-purple-50 flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I’m <br /><span className="text-purple-700">Harsharaj Rajaselvam</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Dedicated <b>AI & Data Science engineer</b> with a strong foundation in programming, ML, and data-driven problem-solving, eager to craft innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <HashLink
    smooth
    to="/#projects"
    className="px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 active:bg-purple-900 transition cursor-pointer text-center"
  >
    View My Work
  </HashLink>

  <HashLink
    smooth
    to="/#contact"
    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-purple-100 hover:text-purple-700 active:bg-purple-200 transition cursor-pointer text-center"
  >
    Contact Me
  </HashLink>
</div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Profile"
              className="w-64 h-64 rounded-full shadow-lg object-cover object-top"
            />
          ) : (
            <div className="w-64 h-64 rounded-full bg-gray-300 shadow-lg" />
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
