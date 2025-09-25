import React from 'react';
import { 
  BarChart3, 
  Users, 
  Sparkles, 
  Target, 
  Settings, 
  Layers3,
  TrendingUp,
  Shield
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { id: 'strategy', label: 'Strategy Studio', icon: Target, color: 'text-purple-600' },
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'text-blue-600' },
  { id: 'creator', label: 'Creator Studio', icon: Sparkles, color: 'text-pink-600' },
  { id: 'simulations', label: 'Simulations', icon: Layers3, color: 'text-green-600' },
  { id: 'agents', label: 'Agents', icon: Users, color: 'text-orange-600' },
  { id: 'performance', label: 'Performance Cockpit', icon: TrendingUp, color: 'text-red-600' },
  { id: 'admin', label: 'Admin Controls', icon: Shield, color: 'text-gray-600' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-900">Builder Module</h1>
        <p className="text-sm text-gray-500 mt-1">Campaign Orchestrator</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-purple-50 border border-purple-100 shadow-sm' 
                  : 'hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              <Icon 
                size={20} 
                className={`mr-3 transition-colors ${
                  isActive ? item.color : 'text-gray-400 group-hover:text-gray-600'
                }`} 
              />
              <span className={`font-medium transition-colors ${
                isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
          <p className="font-medium text-sm">Brand Profile</p>
          <div className="flex items-center mt-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">P</span>
            </div>
            <span className="ml-2 text-sm">Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};