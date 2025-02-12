const ProjectCardOne = ({ project }) => {
    const projectDemoUrl = project.demo.startsWith('http') ? project.demo : `https://${project.demo}`;
  
    return (
      <div className="bg-gradient-to-r from-[#1d1f34] to-[#0a0d37] border-[#1b2c68a0] rounded-xl border p-6 shadow-lg text-white w-full max-w-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:z-10 hover:translate-y-[-5px]">
        {/* Header */}
        <h3 className="text-2xl font-semibold text-[#16f2b3] hover:text-[#0aeab2] transition-all duration-300 ease-in-out">
          {project.name}
        </h3>
        <p className="mt-2 text-sm lg:text-base text-gray-300">{project.description}</p>
  
        {/* Technologies Used */}
        <div className="mt-4">
          <p className="font-semibold text-pink-400">Technologies Used:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tools.map((tool, index) => (
              <span key={index} className="bg-gray-800 text-xs px-3 py-1 rounded-full transition-all duration-300 ease-in-out hover:bg-[#0aeab2] hover:text-black">
                {tool}
              </span>
            ))}
          </div>
        </div>
  
        {/* Links */}
        <div className="mt-4 flex gap-4">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 hover:underline transition-all duration-300 ease-in-out"
            >
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={projectDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 hover:underline transition-all duration-300 ease-in-out"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCardOne;
  