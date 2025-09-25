import React from 'react';
import { BarChart3, TrendingUp, Users, Target, Activity, Eye } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const metrics = [
    { title: 'Active Campaigns', value: '12', change: '+2', icon: Target, color: 'blue' },
    { title: 'Total Impressions', value: '2.4M', change: '+15.2%', icon: Eye, color: 'green' },
    { title: 'Conversion Rate', value: '3.2%', change: '+0.8%', icon: TrendingUp, color: 'purple' },
    { title: 'Active Agents', value: '8', change: '+1', icon: Users, color: 'orange' },
  ];

  const recentCampaigns = [
    { name: 'Holiday Sale 2024', status: 'running', performance: 'excellent', spend: '$2,400' },
    { name: 'Brand Awareness Q1', status: 'pending', performance: 'good', spend: '$1,800' },
    { name: 'Product Launch', status: 'completed', performance: 'excellent', spend: '$3,200' },
    { name: 'Retargeting Campaign', status: 'running', performance: 'good', spend: '$950' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'fair': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Campaign Dashboard</h2>
        <p className="text-gray-600">Monitor and analyze your campaign performance</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${metric.color}-100 rounded-xl`}>
                  <Icon className={`text-${metric.color}-600`} size={24} />
                </div>
                <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Performance Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Performance Overview</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              7D
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors">
              30D
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              90D
            </button>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="text-purple-400 mb-4 mx-auto" size={48} />
            <p className="text-gray-500">Interactive chart will render here</p>
          </div>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Campaigns</h3>
        <div className="space-y-4">
          {recentCampaigns.map((campaign, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Activity className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                  <p className="text-sm text-gray-500">Spend: {campaign.spend}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
                <span className={`text-sm font-medium ${getPerformanceColor(campaign.performance)}`}>
                  {campaign.performance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Graph Preview */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Knowledge Graph Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 rounded-xl p-4">
            <h4 className="font-medium text-indigo-900 mb-2">Causal Relationships</h4>
            <p className="text-sm text-indigo-700">24 connections identified</p>
          </div>
          <div className="bg-white/70 rounded-xl p-4">
            <h4 className="font-medium text-indigo-900 mb-2">Pattern Recognition</h4>
            <p className="text-sm text-indigo-700">8 trends detected</p>
          </div>
          <div className="bg-white/70 rounded-xl p-4">
            <h4 className="font-medium text-indigo-900 mb-2">Optimization Opportunities</h4>
            <p className="text-sm text-indigo-700">12 recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
};