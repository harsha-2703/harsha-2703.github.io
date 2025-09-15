function About({ imageSrc, resumeSrc }) {
  return (
    <section className="w-full bg-gray-50 py-20" id="about">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 pb-0 pt-0 lg:pt-30 lg:pb-16">
        
        {/* Left - Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={imageSrc}
            alt="About Me"
            className="w-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Hello! I’m <span className="font-semibold text-purple-700">Harsharaj Rajaselvam</span>, 
            a B.Tech graduate in <span className="font-semibold">Artificial Intelligence and Data Science </span> 
            from <span className="font-medium">Shiv Nadar University, Chennai</span>.  
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            I’m passionate about building intelligent systems that solve real-world challenges, from automating workflows and AI-powered assistants to computer vision models. I enjoy turning ideas into practical, impactful solutions and continuously exploring cutting-edge technologies to push the boundaries of AI and data-driven innovation.
          </p>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href={resumeSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 active:bg-purple-900 transition cursor-pointer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
