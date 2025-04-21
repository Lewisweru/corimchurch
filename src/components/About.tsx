import React from 'react';
import { CheckCircle, Users, Map } from 'lucide-react';
import { leaders } from '../data/leaders';

const About: React.FC = () => {
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-purple-900">About CORIM</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            City of Refuge International Ministries (CORIM) is a growing spiritual family dedicated to providing a sanctuary of hope, healing, and spiritual growth for all who seek refuge in Christ.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Our Vision & Mission</h3>
              <p className="text-gray-600 mb-6">
                To be a spiritual refuge where lives are transformed through the power of God's word, prayer, and community support.
              </p>
              <ul className="space-y-3">
                {[
                  'Provide a sanctuary for spiritual growth and healing',
                  'Build a vibrant prayer community through our Prayer Centre',
                  'Empower believers to fulfill their divine purpose',
                  'Extend Christ\'s love to our community and beyond'
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-700 rounded-lg shadow-lg overflow-hidden text-white">
            <div 
              className="h-64 w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/5412429/pexels-photo-5412429.jpeg)' }}
            ></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Family</h3>
              <p className="mb-6">
                Experience powerful worship and transformative teaching in our new sanctuary as we continue to expand our facilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Service Times:</span>
                    <p>Sunday Celebration: 10:00 AM</p>
                    <p>Prayer Meeting: Wednesday 6:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Map className="h-5 w-5 text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Location:</span>
                    <p>123 Faith Avenue, Cityville, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center text-purple-900">Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl">
                <img 
                  src={leader.imageUrl} 
                  alt={leader.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold text-purple-800">{leader.name}</h4>
                  <p className="text-yellow-600 mb-2">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;