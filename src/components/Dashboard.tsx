
import React from 'react';
import Header from './Header';
import AndroidEmulatorStatus from './AndroidEmulatorStatus';
import ToolsPanel from './ToolsPanel';
import VulnerabilityTracker from './VulnerabilityTracker';
import TerminalEmulator from './TerminalEmulator';
import NetworkVisualizer from './NetworkVisualizer';
import { 
  mockTools, 
  mockVulnerabilities, 
  mockTerminalCommands, 
  mockEmulatorStatus,
  mockNetworkRequests 
} from '@/lib/mock-data';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-foreground">
      <Header />
      
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <AndroidEmulatorStatus status={mockEmulatorStatus} />
          </div>
          <div>
            <NetworkVisualizer requests={mockNetworkRequests} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <ToolsPanel tools={mockTools} />
          </div>
          <div>
            <VulnerabilityTracker vulnerabilities={mockVulnerabilities} />
          </div>
          <div>
            <TerminalEmulator commands={mockTerminalCommands} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
