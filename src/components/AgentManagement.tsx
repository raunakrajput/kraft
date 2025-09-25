import React, { useState } from 'react';
import { Users, Shield, CheckCircle, Clock, AlertTriangle, Settings, Plus } from 'lucide-react';

export const AgentManagement: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents = [
    {
      id: '1',
      name: 'Content Creator Agent',
      role: 'Creative Generation',
      status: 'active',
      permissions: ['create_campaigns', 'edit_creatives', 'view_analytics'],
      lastActive: '2 hours ago',
      performance: 'excellent',
      tasksCompleted: 45,
    },
    {
      id: '2',
      name: 'Performance Optimizer',
      role: 'Campaign Optimization',
      status: 'active',
      permissions: ['optimize_campaigns', 'view_analytics', 'generate_reports'],
      lastActive: '15 minutes ago',
      performance: 'good',
      tasksCompleted: 32,
    },
    {
      id: '3',
      name: 'Strategy Analyst',
      role: 'Strategic Planning',
      status: 'pending',
      permissions: ['create_strategies', 'approve_campaigns', 'view_all_data'],
      lastActive: '1 day ago',
      performance: 'fair',
      tasksCompleted: 28,
    },
    {
      id: '4',
      name: 'Quality Assurance Bot',
      role: 'Content Review',
      status: 'inactive',
      permissions: ['review_content', 'approve_creatives'],
      lastActive: '3 days ago',
      performance: 'good',
      tasksCompleted: 15,
    },
  ];

  const pendingApprovals = [
    {
      id: '1',
      campaign: 'Holiday Sale Campaign',
      agent: 'Content Creator Agent',
      action: 'Create new ad creative',
      timestamp: '10 minutes ago',
      priority: 'high',
    },
    {
      id: '2',
      campaign: 'Brand Awareness Q1',
      agent: 'Performance Optimizer',
      action: 'Adjust budget allocation',
      timestamp: '1 hour ago',
      priority: 'medium',
    },
    {
      id: '3',
      campaign: 'Product Launch',
      agent: 'Strategy Analyst',
      action: 'Modify targeting parameters',
      timestamp: '2 hours ago',
      priority: 'low',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle size={16} className="text-green-600" />;
      case 'pending': return <Clock size={16} className="text-yellow-600" />;
      case 'inactive': return <AlertTriangle size={16} className="text-red-600" />;
      default: return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Agent Management</h2>
        <p className="text-gray-600">Monitor and control your AI agents with role-based permissions</p>
      </div>

      {/* Agent Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Agents', value: '8', icon: Users, color: 'blue' },
          { title: 'Active Now', value: '5', icon: CheckCircle, color: 'green' },
          { title: 'Pending Approval', value: '3', icon: Clock, color: 'yellow' },
          { title: 'Blocked Actions', value: '2', icon: Shield, color: 'red' },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`text-${metric.color}-600`} size={24} />
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
              </div>
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Agent List */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Active Agents</h3>
          <button className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            <Plus size={16} className="mr-2" />
            Add Agent
          </button>
        </div>

        <div className="space-y-4">
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className={`p-4 border rounded-xl transition-all cursor-pointer ${
                selectedAgent === agent.id
                  ? 'border-purple-300 bg-purple-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
              onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                    <p className="text-sm text-gray-600">{agent.role}</p>
                    <p className="text-xs text-gray-500">Last active: {agent.lastActive}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{agent.tasksCompleted} tasks</p>
                    <p className={`text-xs ${
                      agent.performance === 'excellent' ? 'text-green-600' :
                      agent.performance === 'good' ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {agent.performance}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(agent.status)}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                      {agent.status}
                    </span>
                  </div>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Settings size={18} />
                  </button>
                </div>
              </div>

              {selectedAgent === agent.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-2">Permissions</h5>
                  <div className="flex flex-wrap gap-2">
                    {agent.permissions.map((permission, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {permission.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Pending Approvals</h3>
        
        <div className="space-y-3">
          {pendingApprovals.map((approval) => (
            <div 
              key={approval.id}
              className={`p-4 border-l-4 rounded-lg ${getPriorityColor(approval.priority)}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{approval.campaign}</h4>
                  <p className="text-sm text-gray-600">{approval.action}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Requested by {approval.agent} • {approval.timestamp}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Performance */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Performance Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 rounded-xl p-4">
            <h4 className="font-medium text-indigo-900 mb-2">Efficiency Rate</h4>
            <p className="text-2xl font-bold text-indigo-600">94.2%</p>
            <p className="text-sm text-indigo-700">+2.1% from last week</p>
          </div>
          <div className="bg-white/70 rounded-xl p-4">
            <h4 className="font-medium text-indigo-900 mb-2">Response Time</h4>
            <p className="text-2xl font-bold text-indigo-600">1.3s</p>
            <p className="text-sm text-indigo-700">-0.2s improvement</p>
          </div>
          <div className="bg-white/70 rounded-xl p-4">
            <h4 className="font-medium text-indigo-900 mb-2">Success Rate</h4>
            <p className="text-2xl font-bold text-indigo-600">87.8%</p>
            <p className="text-sm text-indigo-700">+5.4% this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};