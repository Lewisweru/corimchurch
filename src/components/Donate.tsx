import React, { useState } from 'react';
import { donationOptions } from '../data/donationOptions';
import { Heart, CreditCard, DollarSign, Users, Building, ChevronRight, HeartHandshake, Church } from 'lucide-react';

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('1');
  
  const handleAmountSelect = (value: string) => {
    setAmount(value);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'church':
        return <Church className="h-8 w-8" />;
      case 'building':
        return <Building className="h-8 w-8" />;
      case 'heart-handshake':
        return <HeartHandshake className="h-8 w-8" />;
      case 'users':
        return <Users className="h-8 w-8" />;
      default:
        return <Heart className="h-8 w-8" />;
    }
  };
  
  return (
    <div id="donate" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Support Our Ministry</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Your generous donations help us continue our mission and make a meaningful impact in our community and beyond.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Select Donation Amount</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {['25', '50', '100', '250', '500', '1000'].map((value, index) => (
                  <button
                    key={index}
                    onClick={() => handleAmountSelect(value)}
                    className={`py-3 rounded-lg font-medium transition-colors ${
                      amount === value 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
                  <DollarSign className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Custom Amount"
                  className="w-full bg-white/20 rounded-lg py-3 pl-10 pr-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Select Donation Fund</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {donationOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      selectedOption === option.id 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <div className="mr-3">
                      {getIcon(option.icon)}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{option.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center">
              <CreditCard className="mr-2 h-5 w-5" />
              Proceed to Payment
              <ChevronRight className="ml-1 h-5 w-5" />
            </button>
            
            <p className="text-sm text-center mt-4 text-white/70">
              Donations are tax-deductible as allowed by law. You will receive a receipt via email.
            </p>
          </div>
          
          <div className="bg-white text-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-purple-800">Why Give?</h3>
            <p className="mb-6 text-gray-600">
              Your donations support our various ministries and outreach programs that make a difference in our community.
            </p>
            
            <div className="space-y-4">
              {donationOptions.map((option) => (
                <div 
                  key={option.id}
                  className="rounded-lg p-4 transition-colors cursor-pointer hover:bg-purple-50"
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-full ${selectedOption === option.id ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-500'} mr-3`}>
                      {getIcon(option.icon)}
                    </div>
                    <h4 className={`font-bold ${selectedOption === option.id ? 'text-purple-800' : 'text-gray-700'}`}>
                      {option.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-12">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;