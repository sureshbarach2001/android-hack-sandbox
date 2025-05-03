
import React from 'react';
import { Smartphone, CheckCircle, XCircle, Info } from 'lucide-react';
import { EmulatorStatusType } from '@/lib/types';

interface AndroidEmulatorStatusProps {
  status: EmulatorStatusType;
}

const AndroidEmulatorStatus: React.FC<AndroidEmulatorStatusProps> = ({ status }) => {
  const getStatusIcon = () => {
    switch (status.status) {
      case 'online':
        return <CheckCircle className="w-5 h-5 text-cyber-green" />;
      case 'offline':
        return <XCircle className="w-5 h-5 text-cyber-red" />;
      case 'starting':
        return <Info className="w-5 h-5 text-cyber-yellow" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-cyber-red" />;
      default:
        return <Info className="w-5 h-5 text-cyber-blue" />;
    }
  };
  
  return (
    <div className="cyber-card">
      <div className="cyber-card-header">
        <div className="flex items-center space-x-2">
          <Smartphone className="w-5 h-5 text-cyber-green" />
          <h2 className="font-bold text-cyber-green">Android Emulator</h2>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className="text-sm capitalize">{status.status}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-muted-foreground">Device</div>
            <div className="text-sm font-medium">{status.name}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Android Version</div>
            <div className="text-sm font-medium">{status.androidVersion}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">IP Address</div>
            <div className="text-sm font-medium">{status.ipAddress}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">ADB Status</div>
            <div className="text-sm font-medium flex items-center">
              {status.adbConnected ? 
                <><CheckCircle className="w-3 h-3 text-cyber-green mr-1" /> Connected</> : 
                <><XCircle className="w-3 h-3 text-cyber-red mr-1" /> Disconnected</>}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-xs text-muted-foreground">Running Applications</div>
          <div className="mt-1 flex flex-wrap gap-2">
            {status.runningApps.map((app, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-cyber-green">
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidEmulatorStatus;
