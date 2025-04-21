import React, { useState } from 'react';
import { activities } from '../data/activities';
import { Calendar, MapPin, Clock, Filter } from 'lucide-react';

const Activities: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const filteredActivities = categoryFilter === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === categoryFilter);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'worship':
        return 'bg-purple-100 text-purple-800';
      case 'youth':
        return 'bg-blue-100 text-blue-800';
      case 'education':
        return 'bg-green-100 text-green-800';
      case 'outreach':
        return 'bg-orange-100 text-orange-800';
      case 'community':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-purple-900">Church Activities</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            From worship services to community outreach, we offer many opportunities to connect, serve, and grow in faith.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="relative inline-block">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="all">All Categories</option>
              <option value="worship">Worship</option>
              <option value="youth">Youth</option>
              <option value="education">Education</option>
              <option value="outreach">Outreach</option>
              <option value="community">Community</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl"
            >
              {activity.imageUrl && (
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${activity.imageUrl})` }}
                ></div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-purple-800">{activity.title}</h3>
                  <span className={`${getCategoryColor(activity.category)} text-xs font-medium px-2.5 py-0.5 rounded-full capitalize`}>
                    {activity.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    <span>{formatDate(activity.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-purple-600" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                    <span>{activity.location}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-md transition-colors">
                  Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-white border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors font-medium"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Activities;