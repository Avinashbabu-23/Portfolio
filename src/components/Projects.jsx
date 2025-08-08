import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // Please provide your actual project data to replace this template
  const projects = [
    {
      id: 1,
      title: "Sales Data Dashboard – Power BI",
      description: "Comprehensive sales analytics dashboard that provides real-time insights into regional performance, customer segmentation, and revenue trends. Features interactive visualizations, KPI tracking, and automated reporting capabilities that helped increase sales efficiency by 25%.",
      image: "/dashboard.jpeg?height=200&width=400&text=Sales+Dashboard+Power+BI",
      techStack: ["Power BI", "DAX", "Excel"],
      githubUrl: "https://github.com/Avinashbabu-23/Result-Analysis-Dashboard.git",
    },
    {
      id: 2,
      title: "Result Analysis – Python",
      description: "Tool for automating result analysis and performance visualization. Built with Python and advanced data science libraries, this system automates the entire result analysis workflow with statistical analysis, grade distribution visualization, and generates automated reports.",
      image: "/data_analysis.jpeg?height=200&width=400&text=Result+Analysis+Python",
      techStack: ["Python", "Pandas", "Matplotlib", "Streamlit", "NumPy"],
      githubUrl: "https://github.com/avinash/result-analysis",
    },
  ];

  const handleProjectLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-red-25 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here are some of my recent data analysis projects that showcase my skills in transforming data into actionable insights.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-gray-100 hover:border-red-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleProjectLink(project.githubUrl)}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors border border-white/30"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={() => handleProjectLink(project.liveUrl)}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors border border-white/30"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-sm rounded-full font-medium border border-red-200 hover:from-red-100 hover:to-red-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleProjectLink(project.githubUrl)}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all flex-1 justify-center text-gray-700 hover:text-black hover:border-gray-400"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    {/* <button
                      onClick={() => handleProjectLink(project.liveUrl)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all flex-1 justify-center shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
