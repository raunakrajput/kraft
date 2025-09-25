import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Zap, 
  Moon,
  Sun,
  Send,
  Bot,
  User,
  Lightbulb,
  Brain,
  Rocket,
  Wand2,
  ChevronDown,
  Palette,
  Settings
} from 'lucide-react';

interface SearchQuery {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
  suggestions?: string[];
}

export const StrategyStudio: React.FC = () => {
  const [campaignPrompt, setCampaignPrompt] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchQuery[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'neon'>('light');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const suggestions = [
    'Launch holiday sale campaign with 20% discount targeting millennials',
    'Create brand awareness campaign for new sustainable product line',
    'Retargeting campaign for abandoned cart users with personalized offers',
    'Seasonal fashion collection promotion with influencer partnerships',
    'B2B lead generation campaign for enterprise software solutions',
    'Local business promotion with geo-targeted social media ads'
  ];

  const aiResponses = [
    {
      plan: "Multi-channel holiday campaign with dynamic pricing, targeting high-intent shoppers across social media and search platforms.",
      reasoning: "Based on Q4 shopping patterns and competitor analysis, this approach maximizes conversion potential during peak season.",
      insights: ["Peak shopping hours: 7-9 PM", "Mobile traffic increases 40%", "Video ads perform 3x better"]
    },
    {
      plan: "Sustainable brand positioning campaign emphasizing eco-friendly values and transparent supply chain practices.",
      reasoning: "Consumer sentiment analysis shows 73% preference for sustainable brands, creating competitive advantage opportunity.",
      insights: ["Gen Z drives 60% of sustainable purchases", "Authenticity is key differentiator", "Story-driven content performs best"]
    }
  ];

  useEffect(() => {
    if (campaignPrompt.length > 3) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [campaignPrompt]);

  const handleSubmit = () => {
    if (!campaignPrompt.trim()) return;

    setIsTyping(true);
    setIsAnimating(true);

    const newQuery: SearchQuery = {
      id: Date.now().toString(),
      query: campaignPrompt,
      response: '',
      timestamp: new Date(),
      suggestions: suggestions.slice(0, 3)
    };

    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      newQuery.response = JSON.stringify(randomResponse);
      
      setSearchHistory(prev => [...prev, newQuery]);
      setCurrentIndex(prev => prev + 1);
      setIsTyping(false);
      setIsAnimating(false);
      setCampaignPrompt('');
    }, 2000);
  };

  const navigateHistory = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCampaignPrompt(searchHistory[currentIndex - 1].query);
    } else if (direction === 'next' && currentIndex < searchHistory.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCampaignPrompt(searchHistory[currentIndex + 1].query);
    }
  };

  const getCurrentResponse = () => {
    if (currentIndex >= 0 && searchHistory[currentIndex]) {
      try {
        return JSON.parse(searchHistory[currentIndex].response);
      } catch {
        return null;
      }
    }
    return null;
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-gray-900',
          cardBg: 'bg-gray-800',
          text: 'text-white',
          textSecondary: 'text-gray-300',
          border: 'border-gray-700',
          accent: 'bg-purple-600'
        };
      case 'neon':
        return {
          bg: 'bg-black',
          cardBg: 'bg-gray-900',
          text: 'text-cyan-400',
          textSecondary: 'text-pink-300',
          border: 'border-cyan-500',
          accent: 'bg-gradient-to-r from-cyan-500 to-pink-500'
        };
      default:
        return {
          bg: 'bg-gray-50',
          cardBg: 'bg-white',
          text: 'text-gray-900',
          textSecondary: 'text-gray-600',
          border: 'border-gray-200',
          accent: 'bg-purple-500'
        };
    }
  };

  const themeClasses = getThemeClasses();
  const currentResponse = getCurrentResponse();

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses.bg}`}>
      <div className="space-y-6 p-6">
        {/* Header with Theme Switcher */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <div className="flex items-center justify-start mb-2">
              <Brain className={`${themeClasses.text} mr-3 animate-pulse`} size={32} />
              <h2 className={`text-3xl font-bold ${themeClasses.text} bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                Strategy Studio AI
              </h2>
              <Rocket className={`${themeClasses.text} ml-3 animate-bounce`} size={32} />
            </div>
            <p className={`${themeClasses.textSecondary} flex items-center justify-start animate-fade-in`}>
              Next-generation AI-powered campaign creation and strategy development
            </p>
          </div>
          
          {/* Theme Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTheme('light')}
              className={`p-2 rounded-xl transition-all ${theme === 'light' ? 'bg-yellow-400 text-white' : `${themeClasses.cardBg} ${themeClasses.text}`}`}
            >
              <Sun size={20} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-xl transition-all ${theme === 'dark' ? 'bg-gray-700 text-white' : `${themeClasses.cardBg} ${themeClasses.text}`}`}
            >
              <Moon size={20} />
            </button>
            <button
              onClick={() => setTheme('neon')}
              className={`p-2 rounded-xl transition-all ${theme === 'neon' ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white' : `${themeClasses.cardBg} ${themeClasses.text}`}`}
            >
              <Zap size={20} />
            </button>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border-2 rounded-3xl p-8  transform transition-all duration-500  ${isAnimating ? 'animate-pulse' : ''}`}>
          <div className="mx-auto">
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateHistory('prev')}
                disabled={currentIndex <= 0}
                className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'neon' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50' 
                    : `${themeClasses.accent} text-white hover:shadow-lg`
                }`}
              >
                <ArrowLeft size={20} className="mr-2" />
                Previous Query
              </button>

              <div className={`flex items-center space-x-2 px-4 py-2 ${themeClasses.cardBg} rounded-xl ${themeClasses.border} border`}>
                <Bot className={`${theme === 'neon' ? 'text-cyan-400' : 'text-purple-600'} animate-spin`} size={20} />
                <span className={`${themeClasses.text} font-medium`}>
                  {searchHistory.length} queries processed
                </span>
              </div>

              <button
                onClick={() => navigateHistory('next')}
                disabled={currentIndex >= searchHistory.length - 1}
                className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'neon' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50' 
                    : `${themeClasses.accent} text-white hover:shadow-lg`
                }`}
              >
                Next Query
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>

            {/* Chat Input */}
            <div className="relative mb-6">
              <div className={`flex items-center ${themeClasses.cardBg} ${themeClasses.border} border-2 rounded-2xl p-2 transition-all duration-300 focus-within:shadow-xl ${theme === 'neon' ? 'focus-within:shadow-cyan-500/50' : 'focus-within:shadow-purple-500/20'}`}>
                <User className={`${themeClasses.textSecondary} ml-3`} size={20} />
                <textarea
                  ref={textareaRef}
                  value={campaignPrompt}
                  onChange={(e) => setCampaignPrompt(e.target.value)}
                  placeholder="Describe your campaign vision... (e.g., 'Launch a premium skincare line targeting eco-conscious millennials')"
                  className={`flex-1 p-4 bg-transparent ${themeClasses.text} placeholder-gray-400 resize-none focus:outline-none text-lg`}
                  rows={3}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!campaignPrompt.trim() || isTyping}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'neon' 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50' 
                      : `${themeClasses.accent} text-white hover:shadow-lg`
                  }`}
                >
                  {isTyping ? (
                    <div className="animate-spin">
                      <Sparkles size={20} />
                    </div>
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>

              {/* Auto Suggestions */}
              {showSuggestions && (
                <div className={`absolute top-full left-0 right-0 mt-2 ${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl shadow-2xl z-50 animate-fade-in`}>
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <Lightbulb className={`${theme === 'neon' ? 'text-yellow-400' : 'text-yellow-500'} mr-2 animate-pulse`} size={16} />
                      <span className={`text-sm ${themeClasses.textSecondary} font-medium`}>AI Suggestions</span>
                    </div>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCampaignPrompt(suggestion);
                            setShowSuggestions(false);
                          }}
                          className={`block w-full text-left p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                            theme === 'neon' 
                              ? 'hover:bg-gradient-to-r hover:from-cyan-900/50 hover:to-pink-900/50 hover:border-cyan-500' 
                              : `hover:bg-purple-50 hover:border-purple-200`
                          } ${themeClasses.border} border`}
                        >
                          <span className={`${themeClasses.text} text-sm`}>{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Response Display */}
            {currentResponse && (
              <div className="space-y-6 animate-fade-in">
                {/* Campaign Plan */}
                <div className={`${theme === 'neon' ? 'bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-cyan-500' : 'bg-blue-50 border-blue-200'} border-2 rounded-2xl p-6 transform transition-all duration-500 hover:scale-[1.01]`}>
                  <div className="flex items-center mb-4">
                    <Target className={`${theme === 'neon' ? 'text-cyan-400' : 'text-blue-600'} mr-3 animate-pulse`} size={24} />
                    <h4 className={`font-bold text-xl ${theme === 'neon' ? 'text-cyan-400' : 'text-blue-900'}`}>
                      Campaign Strategy
                    </h4>
                    <Wand2 className={`${theme === 'neon' ? 'text-cyan-400' : 'text-blue-600'} ml-auto animate-bounce`} size={20} />
                  </div>
                  <div className={`${theme === 'neon' ? 'bg-black/30' : 'bg-white/70'} rounded-xl p-4 ${themeClasses.border} border`}>
                    <p className={`${themeClasses.text} leading-relaxed`}>{currentResponse.plan}</p>
                  </div>
                </div>

                {/* AI Reasoning */}
                <div className={`${theme === 'neon' ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500' : 'bg-green-50 border-green-200'} border-2 rounded-2xl p-6 transform transition-all duration-500 hover:scale-[1.01]`}>
                  <div className="flex items-center mb-4">
                    <Brain className={`${theme === 'neon' ? 'text-green-400' : 'text-green-600'} mr-3 animate-pulse`} size={24} />
                    <h4 className={`font-bold text-xl ${theme === 'neon' ? 'text-green-400' : 'text-green-900'}`}>
                      AI Reasoning
                    </h4>
                    <Sparkles className={`${theme === 'neon' ? 'text-green-400' : 'text-green-600'} ml-auto animate-spin`} size={20} />
                  </div>
                  <div className={`${theme === 'neon' ? 'bg-black/30' : 'bg-white/70'} rounded-xl p-4 ${themeClasses.border} border`}>
                    <p className={`${themeClasses.text} leading-relaxed`}>{currentResponse.reasoning}</p>
                  </div>
                </div>

                {/* Key Insights */}
                <div className={`${theme === 'neon' ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-pink-500' : 'bg-purple-50 border-purple-200'} border-2 rounded-2xl p-6 transform transition-all duration-500 hover:scale-[1.01]`}>
                  <div className="flex items-center mb-4">
                    <Lightbulb className={`${theme === 'neon' ? 'text-pink-400' : 'text-purple-600'} mr-3 animate-pulse`} size={24} />
                    <h4 className={`font-bold text-xl ${theme === 'neon' ? 'text-pink-400' : 'text-purple-900'}`}>
                      Key Insights
                    </h4>
                    <TrendingUp className={`${theme === 'neon' ? 'text-pink-400' : 'text-purple-600'} ml-auto animate-bounce`} size={20} />
                  </div>
                  <div className={`${theme === 'neon' ? 'bg-black/30' : 'bg-white/70'} rounded-xl p-4 ${themeClasses.border} border`}>
                    <ul className="space-y-2">
                      {currentResponse.insights.map((insight: string, index: number) => (
                        <li key={index} className={`flex items-center ${themeClasses.text}`}>
                          <ChevronDown className={`${theme === 'neon' ? 'text-pink-400' : 'text-purple-600'} mr-2 transform rotate-[-90deg]`} size={16} />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <button className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
                    theme === 'neon' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50' 
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}>
                    🚀 Launch Campaign
                  </button>
                  <button className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
                    theme === 'neon' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}>
                    🎨 Move to Creator Studio
                  </button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isTyping && (
              <div className="text-center py-12 animate-fade-in">
                <div className={`inline-flex items-center px-6 py-3 ${themeClasses.cardBg} ${themeClasses.border} border-2 rounded-2xl`}>
                  <Bot className={`${theme === 'neon' ? 'text-cyan-400' : 'text-purple-600'} mr-3 animate-spin`} size={24} />
                  <span className={`${themeClasses.text} font-medium`}>AI is analyzing your strategy...</span>
                  <div className="flex space-x-1 ml-3">
                    <div className={`w-2 h-2 ${theme === 'neon' ? 'bg-cyan-400' : 'bg-purple-600'} rounded-full animate-bounce`}></div>
                    <div className={`w-2 h-2 ${theme === 'neon' ? 'bg-pink-400' : 'bg-purple-600'} rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
                    <div className={`w-2 h-2 ${theme === 'neon' ? 'bg-cyan-400' : 'bg-purple-600'} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions with Eccentric Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hidden">
          {[
            { title: 'Strategy Templates', icon: Target, color: 'purple', gradient: 'from-purple-500 to-pink-500' },
            { title: 'Market Analysis', icon: TrendingUp, color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
            { title: 'Competitor Insights', icon: Sparkles, color: 'pink', gradient: 'from-pink-500 to-rose-500' }
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <div 
                key={index} 
                className={`${themeClasses.cardBg} ${themeClasses.border} border-2 rounded-2xl p-6 transition-all duration-500 transform hover:scale-110 hover:rotate-1 cursor-pointer group ${
                  theme === 'neon' ? 'hover:shadow-2xl hover:shadow-cyan-500/50' : 'hover:shadow-2xl'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-spin transition-all duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className={`font-bold text-lg ${themeClasses.text} group-hover:animate-pulse`}>
                  {action.title}
                </h4>
                <div className={`w-full h-1 bg-gradient-to-r ${action.gradient} rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};