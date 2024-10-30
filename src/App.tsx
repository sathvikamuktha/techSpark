import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              John Doe
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <User className="mr-2" /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate developer with 5 years of experience in building web applications.
                I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                you can find me contributing to open source projects or writing technical blogs.
              </p>
            </div>
            <Carousel />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code className="mr-2" /> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project and its main features.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center">
                    Demo <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Cpu className="mr-2" /> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB'].map((skill) => (
              <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2" /> Contact
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;