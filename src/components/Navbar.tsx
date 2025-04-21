import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Church } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Church className={`h-8 w-8 ${scrolled ? 'text-purple-700' : 'text-white'}`} />
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold ${scrolled ? 'text-purple-700' : 'text-white'}`}>
                CORIM
              </span>
              <span className={`text-xs ${scrolled ? 'text-purple-600' : 'text-yellow-400'}`}>
                City of Refuge International Ministries
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'activities', 'donate', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => navigateTo(item)} 
                className={`font-medium capitalize transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-purple-700' : 'text-white hover:text-yellow-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg absolute top-full left-0 right-0 mx-4">
            <div className="flex flex-col space-y-3 px-4 py-3">
              {['home', 'about', 'projects', 'activities', 'donate', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => navigateTo(item)}
                  className="text-gray-700 hover:text-purple-700 font-medium capitalize text-left py-2 border-b border-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;