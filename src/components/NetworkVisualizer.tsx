
import React from 'react';
import { Network, Smartphone, Server, CheckCircle, AlertCircle } from 'lucide-react';
import { NetworkRequestType } from '@/lib/types';

interface NetworkVisualizerProps {
  requests: NetworkRequestType[];
}

const NetworkVisualizer: React.FC<NetworkVisualizerProps> = ({ requests }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'intercepted':
        return <AlertCircle className="w-4 h-4 text-cyber-yellow" />;
      case 'modified':
        return <AlertCircle className="w-4 h-4 text-cyber-red" />;
      case 'forwarded':
        return <CheckCircle className="w-4 h-4 text-cyber-green" />;
      case 'blocked':
        return <AlertCircle className="w-4 h-4 text-cyber-red" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="cyber-card h-full">
      <div className="cyber-card-header">
        <div className="flex items-center space-x-2">
          <Network className="w-5 h-5 text-cyber-green" />
          <h2 className="font-bold text-cyber-green">Network Traffic</h2>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-around mb-6">
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-full bg-cyber-dark-gray border border-cyber-green/20">
              <Smartphone className="w-6 h-6 text-cyber-green" />
            </div>
            <span className="mt-1 text-xs">Android Device</span>
          </div>
          
          <div className="flex-1 relative h-0.5 bg-cyber-green/20 mx-4">
            <div className="absolute inset-0 bg-cyber-green animate-pulse-green"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-full bg-cyber-dark-gray border border-cyber-green/20">
              <Server className="w-6 h-6 text-cyber-blue" />
            </div>
            <span className="mt-1 text-xs">Mock Server</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {requests.map((req) => (
            <div key={req.id} className="p-3 border border-cyber-green/20 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    {getStatusIcon(req.status)}
                    <span className="text-xs font-medium ml-1 capitalize">{req.status}</span>
                  </div>
                  <h4 className="text-sm font-medium mt-1">{req.destination}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">Source</span>
                  <div className="text-sm">{req.source}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs">
                <span className="text-muted-foreground">{req.protocol}</span>
                <span className="text-muted-foreground">
                  {new Date(req.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualizer;
