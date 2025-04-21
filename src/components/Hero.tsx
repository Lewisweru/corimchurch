import React from 'react';
import { Calendar, Heart, ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/266547/pexels-photo-266547.jpeg)', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fadeIn">
          Welcome to <span className="text-yellow-400">CORIM</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 text-yellow-400">
          City of Refuge International Ministries
        </p>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
          A place of refuge, restoration, and spiritual growth
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <button 
            onClick={() => scrollToSection('activities')}
            className="flex items-center justify-center bg-white text-purple-800 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Join Our Activities
          </button>
          <button 
            onClick={() => scrollToSection('donate')}
            className="flex items-center justify-center bg-yellow-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 font-medium text-lg"
          >
            <Heart className="mr-2 h-5 w-5" />
            Support Our Growth
          </button>
        </div>
        
        <div className="max-w-md mx-auto p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <h3 className="text-xl font-bold mb-2">Join Us This Sunday</h3>
          <p className="mb-2">10:00 AM - "Finding Your Refuge in Christ"</p>
          <p>Experience worship in our new sanctuary</p>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 animate-bounce"
      >
        <ArrowDownCircle className="h-10 w-10 text-white/70 hover:text-white transition-colors" />
      </button>
    </div>
  );
};

export default Hero;