
// General types for the app
export type ToolType = {
  id: string;
  name: string;
  description: string;
  status: "available" | "running" | "completed" | "failed";
  icon: string;
};

export type VulnerabilityType = {
  id: string;
  title: string;
  severity: "low" | "medium" | "high" | "critical";
  description: string;
  status: "open" | "in_progress" | "mitigated" | "verified";
  type: string; // e.g., "authentication", "data storage", "network"
  discoveredAt: string; // ISO date string
};

export type TerminalCommandType = {
  command: string;
  output: string;
  timestamp: string;
  status: "success" | "error" | "info";
};

export type EmulatorStatusType = {
  status: "offline" | "starting" | "online" | "error";
  name: string;
  androidVersion: string;
  ipAddress: string;
  adbConnected: boolean;
  runningApps: string[];
};

export type NetworkRequestType = {
  id: string;
  source: string;
  destination: string;
  protocol: string;
  status: "intercepted" | "modified" | "forwarded" | "blocked";
  timestamp: string;
};
