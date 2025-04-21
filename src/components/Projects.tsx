import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Check, Clock, PlusCircle } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'planning' | 'ongoing' | 'completed'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'planning':
        return <PlusCircle className="h-5 w-5 text-blue-500" />;
      case 'ongoing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'completed':
        return <Check className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'planning':
        return 'bg-blue-500';
      case 'ongoing':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-purple-900">Our Projects</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We're committed to making a difference in our community through these important initiatives. See what we're working on and how you can get involved.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'planning', label: 'Planning' },
              { value: 'ongoing', label: 'Ongoing' },
              { value: 'completed', label: 'Completed' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === option.value 
                    ? 'bg-purple-700 text-white shadow-md' 
                    : 'text-gray-700 hover:text-purple-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="h-64 w-full object-cover object-center"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-3">
                    <span className={`${getStatusColor(project.status)} rounded-full px-3 py-1 text-xs font-medium text-white flex items-center mr-2`}>
                      {getStatusIcon(project.status)}
                      <span className="ml-1 capitalize">{project.status}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {project.progress !== undefined && (
                    <div className="mt-auto">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <button className="mt-4 inline-flex items-center text-purple-700 hover:text-purple-900 font-medium">
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-800 transition-colors font-medium">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;