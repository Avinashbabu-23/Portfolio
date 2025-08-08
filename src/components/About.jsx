import React from 'react';

const About = () => {
  // Removed useState and handleImageUpload as per your request
  const profileImageSrc = "./src/assets/profile.jpg?height=400&width=400"; // Static image source

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-red-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 rounded-2xl transform rotate-6"></div>
                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 bg-gray-100 flex items-center justify-center" style={{height: '400px'}}>
                  <img 
                    src={profileImageSrc || "/placeholder.svg"} 
                    alt="Marri Avinash Babu - Data Analyst" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Removed the image upload label/button */}
              </div>
            </div>

            {/* Bio Content */}
            <div className="animate-fade-in-up space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                Passionate Data Analyst
              </h3>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hello! I'm Marri Avinash Babu, a results-driven Data Analyst with a passion for 
                  transforming raw data into meaningful insights. With strong expertise in tools like 
                  Power BI, Python, SQL, and Excel, I specialize in creating dynamic dashboards, 
                  automating reports, and performing exploratory data analysis.
                </p>
                
                <p>
                  My journey in data analysis started with curiosity about patterns and trends, 
                  and has evolved into a deep expertise in turning complex datasets into 
                  actionable business intelligence that drives strategic decision-making.
                </p>
                
                <p>
                  When I'm not analyzing data, you'll find me exploring new visualization techniques, 
                  learning advanced analytics methods, or sharing insights with the data community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">2</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">0+</div>
                  <div className="text-sm text-gray-500">Experience(Fresher)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">90%</div>
                  <div className="text-sm text-gray-500">Data Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
