import React, { useState } from 'react';
import { 
  Wrench, Terminal, Network, Search, FileSearch, 
  Play, Square, AlertCircle, CheckCircle 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ToolType } from '@/lib/types';
import { toast } from 'sonner';

interface ToolsPanelProps {
  tools: ToolType[];
}

const ToolsPanel: React.FC<ToolsPanelProps> = ({ tools }) => {
  const [activeTools, setActiveTools] = useState<string[]>([]);
  
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-4 h-4" />;
      case 'network':
        return <Network className="w-4 h-4" />;
      case 'search':
        return <Search className="w-4 h-4" />;
      case 'file-search':
        return <FileSearch className="w-4 h-4" />;
      case 'code':
        return <Terminal className="w-4 h-4" />;
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return null;
      case 'running':
        return <Play className="w-4 h-4 text-cyber-green animate-pulse" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-cyber-green" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-cyber-red" />;
      default:
        return null;
    }
  };

  const handleToolClick = (tool: ToolType) => {
    if (tool.status === 'running') {
      toast(`${tool.name} is already running`);
      return;
    }
    
    if (activeTools.includes(tool.id)) {
      setActiveTools(activeTools.filter(id => id !== tool.id));
      toast.success(`${tool.name} stopped`);
    } else {
      setActiveTools([...activeTools, tool.id]);
      toast.success(`${tool.name} launched`);
    }
  };

  return (
    <div className="cyber-card h-full">
      <div className="cyber-card-header">
        <div className="flex items-center space-x-2">
          <Wrench className="w-5 h-5 text-cyber-green" />
          <h2 className="font-bold text-cyber-green">Penetration Testing Tools</h2>
        </div>
      </div>
      
      <div className="p-4">
        <div className="space-y-2">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all 
                ${activeTools.includes(tool.id) ? 'bg-cyber-green/10 border border-cyber-green/30' : 'hover:bg-cyber-dark-gray'}`}
              onClick={() => handleToolClick(tool)}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${activeTools.includes(tool.id) ? 'bg-cyber-green/20' : 'bg-muted'}`}>
                  {getToolIcon(tool.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-medium">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {getStatusIcon(tool.status)}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-cyber-green/30 text-cyber-green hover:bg-cyber-green/10"
                >
                  {activeTools.includes(tool.id) ? <Square className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPanel;
