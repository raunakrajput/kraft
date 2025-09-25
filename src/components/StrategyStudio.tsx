import React, { useState } from 'react';
import { ArrowRight, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';

export const StrategyStudio: React.FC = () => {
  const [campaignPrompt, setCampaignPrompt] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    'Launch holiday sale campaign with 20% discount',
    'Create brand awareness campaign for new product line',
    'Retargeting campaign for abandoned cart users',
    'Seasonal fashion collection promotion'
  ];

  const handlePromptChange = (value: string) => {
    setCampaignPrompt(value);
    setShowSuggestions(value.length > 3);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategy Studio</h2>
        <p className="text-gray-600">AI-powered campaign creation and strategy development</p>
      </div>

      {/* Main Campaign Creation */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-purple-700">
              <ArrowRight size={24} className="mr-2" />
              <ArrowRight size={24} className="mr-4 transform scale-x-[-1]" />
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              What campaign do you want to run today?
            </h3>
          </div>

          <div className="relative">
            <textarea
              value={campaignPrompt}
              onChange={(e) => handlePromptChange(e.target.value)}
              placeholder="Describe your campaign goals, target audience, and key objectives..."
              className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
            />
            <button className="absolute bottom-4 right-4 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
              <Sparkles size={16} />
            </button>
          </div>

          {showSuggestions && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Auto Suggestions:</p>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setCampaignPrompt(suggestion)}
                    className="block w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Target className="text-orange-600 mr-2" size={20} />
            <span className="font-medium text-orange-900">
              AI Suggestion (Past campaign, trend, causal, optimization)
            </span>
          </div>
          <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
            <Zap size={16} className="text-orange-600" />
          </div>
        </div>
      </div>

      {/* Campaign Plan & Reasoning */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6">
        <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
          <h4 className="font-semibold text-blue-900 mb-2">Campaign Plan</h4>
          <div className="h-20 bg-white/70 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Campaign details will appear here...</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-xl p-6 bg-green-50">
          <h4 className="font-semibold text-green-900 mb-2">Reasoning</h4>
          <div className="h-16 bg-white/70 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">AI reasoning will be displayed here...</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium">
            Confirm Campaign
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium">
            Move to Creator Studio
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { title: 'Strategy Templates', icon: Target, color: 'purple' },
          { title: 'Market Analysis', icon: TrendingUp, color: 'blue' },
          { title: 'Competitor Insights', icon: Sparkles, color: 'pink' }
        ].map((action, index) => {
          const Icon = action.icon;
          return (
            <div key={index} className={`bg-${action.color}-50 border border-${action.color}-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group`}>
              <Icon className={`text-${action.color}-600 mb-2 group-hover:scale-110 transition-transform`} size={24} />
              <h4 className={`font-medium text-${action.color}-900`}>{action.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};