
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send } from 'lucide-react';
import { TerminalCommandType } from '@/lib/types';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TerminalEmulatorProps {
  commands: TerminalCommandType[];
}

const TerminalEmulator: React.FC<TerminalEmulatorProps> = ({ commands: initialCommands }) => {
  const [commands, setCommands] = useState<TerminalCommandType[]>(initialCommands);
  const [inputValue, setInputValue] = useState<string>('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [commands]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Mock response based on command
    let response: string;
    let status: "success" | "error" | "info" = "success";
    
    if (inputValue.startsWith('adb')) {
      response = "Connected to device emulator-5554";
    } else if (inputValue.startsWith('nmap')) {
      response = "Starting Nmap scan...\nScan complete: 3 ports open";
    } else if (inputValue.includes("help")) {
      response = "Available commands: adb, nmap, frida, apktool, exit";
      status = "info";
    } else {
      response = `Command not found: ${inputValue}`;
      status = "error";
    }
    
    const newCommand: TerminalCommandType = {
      command: inputValue,
      output: response,
      timestamp: new Date().toISOString(),
      status
    };
    
    setCommands([...commands, newCommand]);
    setInputValue('');
  };

  return (
    <div className="cyber-card h-full flex flex-col">
      <div className="cyber-card-header">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-5 h-5 text-cyber-green" />
          <h2 className="font-bold text-cyber-green">Terminal</h2>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4 terminal-text bg-cyber-black">
        <div ref={scrollAreaRef} className="min-h-full">
          <div className="text-xs mb-4 text-cyber-green">
            Android Hack Sandbox Terminal v1.0.0
            <br />
            Type 'help' for available commands
          </div>
          
          {commands.map((cmd, index) => (
            <div key={index} className="mb-3">
              <div className="flex">
                <span className="text-cyber-blue mr-2">$</span>
                <span>{cmd.command}</span>
              </div>
              <div className={`pl-4 text-sm ${
                cmd.status === 'error' 
                  ? 'text-cyber-red' 
                  : cmd.status === 'info' 
                    ? 'text-cyber-blue' 
                    : 'text-cyber-green/80'
              }`}>
                {cmd.output.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="h-4"></div>
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSubmit} className="p-2 border-t border-cyber-green/20 bg-cyber-black flex">
        <div className="text-cyber-blue mr-2 flex items-center">$</div>
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter command..."
          className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-cyber-green placeholder:text-cyber-green/30"
        />
        <Button type="submit" size="icon" variant="ghost" className="text-cyber-green hover:bg-cyber-green/10">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default TerminalEmulator;
