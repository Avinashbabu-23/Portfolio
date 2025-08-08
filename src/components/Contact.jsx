import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react'; // Added Phone icon for potential future use or just for visual

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Avinashbabu-23',
      color: 'hover:text-black'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/marri-avinash-babu-0a03002a1',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:avinash@example.com',
      color: 'hover:text-red-600'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next data project? Let's connect and discuss how we can turn your data into actionable insights.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex justify-center">
            <div className="animate-fade-in max-w-xl text-center space-y-8"> {/* Adjusted max-w and added space-y */}
              <h3 className="text-3xl font-semibold text-black">Let's Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting data projects, 
                or just having a conversation about analytics and business intelligence.
              </p>

              {/* Direct Email */}
              {/* <div className="flex items-center justify-center gap-4 text-black text-xl font-medium">
                <Mail className="w-6 h-6 text-red-600" />
                <a 
                  href="mailto:avinash@example.com" 
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  avinash@example.com
                </a>
              </div> */}

              {/* Social Links */}
              <div className="space-y-4 pt-4"> {/* Added pt-4 for spacing */}
                <h4 className="text-lg font-semibold text-black">Find me on:</h4>
                <div className="flex justify-center gap-6"> {/* Changed to flex row with gap */}
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={social.name}
                        onClick={() => handleSocialClick(social.url)}
                        className={`flex flex-col items-center gap-2 text-gray-600 ${social.color} transition-colors duration-200 group`}
                      >
                        <div className="p-3 bg-white rounded-full group-hover:bg-red-50 transition-colors border border-gray-200 shadow-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium">{social.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm mx-auto max-w-md"> {/* Centered and constrained width */}
                <h4 className="font-semibold mb-2 text-black">Quick Response</h4>
                <p className="text-gray-600 text-sm">
                  I typically respond to messages within 24 hours during weekdays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
