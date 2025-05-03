
import React from 'react';
import { ShieldAlert, Activity, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-cyber-green/30 bg-cyber-dark-gray">
      <div className="flex items-center space-x-2">
        <ShieldAlert className="w-6 h-6 text-cyber-green" />
        <h1 className="text-xl font-bold text-cyber-green">Android Hack Sandbox</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center">
          <span className="flex items-center space-x-1">
            <span className="h-2 w-2 rounded-full bg-cyber-green animate-pulse-green"></span>
            <span className="text-sm text-cyber-green">System Active</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10">
            <Activity className="mr-2 h-4 w-4" />
            Status
          </Button>
          <Button variant="outline" size="sm" className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
