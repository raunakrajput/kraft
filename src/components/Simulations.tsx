import React, { useState } from 'react';
import { Play, Pause, RotateCcw, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

export const Simulations: React.FC = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [simulationStatus, setSimulationStatus] = useState<'idle' | 'running' | 'completed'>('idle');

  const simulationTypes = [
    {
      id: 'market-response',
      title: 'Market Response Simulation',
      description: 'Predict how your target audience will respond to different campaign strategies',
      icon: Target,
      color: 'blue',
      estimatedTime: '3-5 minutes'
    },
    {
      id: 'budget-optimization',
      title: 'Budget Optimization',
      description: 'Find the optimal budget allocation across different channels and campaigns',
      icon: TrendingUp,
      color: 'green',
      estimatedTime: '2-4 minutes'
    },
    {
      id: 'creative-performance',
      title: 'Creative Performance Prediction',
      description: 'Test how different creative variations might perform before launch',
      icon: Zap,
      color: 'purple',
      estimatedTime: '4-6 minutes'
    },
    {
      id: 'competitor-analysis',
      title: 'Competitive Landscape Analysis',
      description: 'Simulate market dynamics and competitor responses to your campaigns',
      icon: BarChart3,
      color: 'orange',
      estimatedTime: '5-8 minutes'
    }
  ];

  const runningSimulations = [
    {
      id: '1',
      name: 'Holiday Campaign A/B Test',
      type: 'Creative Performance',
      progress: 75,
      eta: '2 minutes',
      status: 'running'
    },
    {
      id: '2',
      name: 'Q1 Budget Allocation',
      type: 'Budget Optimization',
      progress: 100,
      eta: 'Completed',
      status: 'completed'
    },
    {
      id: '3',
      name: 'Market Entry Simulation',
      type: 'Market Response',
      progress: 45,
      eta: '4 minutes',
      status: 'running'
    }
  ];

  const simulationResults = [
    {
      metric: 'Predicted CTR',
      baseline: '2.4%',
      optimized: '3.8%',
      improvement: '+58%',
      confidence: '94%'
    },
    {
      metric: 'Conversion Rate',
      baseline: '1.2%',
      optimized: '1.9%',
      improvement: '+58%',
      confidence: '89%'
    },
    {
      metric: 'Cost per Acquisition',
      baseline: '$24.50',
      optimized: '$18.75',
      improvement: '-23%',
      confidence: '91%'
    },
    {
      metric: 'Return on Ad Spend',
      baseline: '2.1x',
      optimized: '3.4x',
      improvement: '+62%',
      confidence: '87%'
    }
  ];

  const handleStartSimulation = (simulationId: string) => {
    setActiveSimulation(simulationId);
    setSimulationStatus('running');
    
    // Simulate running time
    setTimeout(() => {
      setSimulationStatus('completed');
    }, 5000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Campaign Simulations</h2>
        <p className="text-gray-600">Test and optimize your strategies before going live</p>
      </div>

      {/* Simulation Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {simulationTypes.map((simulation) => {
          const Icon = simulation.icon;
          const isActive = activeSimulation === simulation.id;
          
          return (
            <div
              key={simulation.id}
              className={`bg-white border rounded-2xl p-6 transition-all cursor-pointer ${
                isActive
                  ? `border-${simulation.color}-300 bg-${simulation.color}-50 shadow-lg`
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => setActiveSimulation(simulation.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 bg-${simulation.color}-100 rounded-xl`}>
                  <Icon className={`text-${simulation.color}-600`} size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isActive ? `text-${simulation.color}-900` : 'text-gray-900'
                  }`}>
                    {simulation.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{simulation.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Est. {simulation.estimatedTime}
                    </span>
                    
                    {isActive && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartSimulation(simulation.id);
                        }}
                        disabled={simulationStatus === 'running'}
                        className={`flex items-center px-4 py-2 bg-${simulation.color}-500 text-white rounded-lg hover:bg-${simulation.color}-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {simulationStatus === 'running' ? (
                          <>
                            <Pause size={16} className="mr-2" />
                            Running...
                          </>
                        ) : (
                          <>
                            <Play size={16} className="mr-2" />
                            Start Simulation
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Simulations */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Active Simulations</h3>
        
        <div className="space-y-4">
          {runningSimulations.map((sim) => (
            <div key={sim.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Play className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{sim.name}</h4>
                  <p className="text-sm text-gray-600">{sim.type}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  {sim.status === 'running' && (
                    <div className="w-32 bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${sim.progress}%` }}
                      ></div>
                    </div>
                  )}
                  <p className="text-sm text-gray-600">ETA: {sim.eta}</p>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(sim.status)}`}>
                  {sim.status}
                </span>
                
                <div className="flex space-x-1">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Pause size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                    <RotateCcw size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simulation Results */}
      {simulationStatus === 'completed' && activeSimulation && (
        <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Simulation Results</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Export Report
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Apply Recommendations
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {simulationResults.map((result, index) => {
              const isImprovement = result.improvement.startsWith('+') || result.improvement.startsWith('-');
              const isPositive = result.improvement.startsWith('+') || (result.improvement.startsWith('-') && result.metric.includes('Cost'));
              
              return (
                <div key={index} className="bg-white/70 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 mb-3">{result.metric}</h4>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Baseline:</span>
                      <span className="font-medium text-gray-900">{result.baseline}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Optimized:</span>
                      <span className="font-medium text-gray-900">{result.optimized}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Improvement:</span>
                      <span className={`font-bold ${
                        isPositive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {result.improvement}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                      <span className="text-gray-600">Confidence:</span>
                      <span className="font-medium text-blue-600">{result.confidence}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Simulation Insights */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-indigo-900">Key Recommendations</h4>
            <ul className="text-sm text-indigo-700 space-y-2">
              <li>• Increase budget allocation to high-performing audiences by 35%</li>
              <li>• Test creative variant B with younger demographics</li>
              <li>• Shift 20% of spend from Display to Video campaigns</li>
              <li>• Implement dynamic bidding for peak performance hours</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-indigo-900">Risk Assessment</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-indigo-700">Market volatility impact:</span>
                <span className="font-medium text-green-600">Low</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-indigo-700">Competitive response risk:</span>
                <span className="font-medium text-yellow-600">Medium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-indigo-700">Budget overrun probability:</span>
                <span className="font-medium text-green-600">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};