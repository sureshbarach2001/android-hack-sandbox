
import { 
  ToolType, 
  VulnerabilityType, 
  TerminalCommandType, 
  EmulatorStatusType, 
  NetworkRequestType 
} from './types';

export const mockTools: ToolType[] = [
  {
    id: "tool-1",
    name: "Burp Suite",
    description: "Intercept and modify HTTP traffic",
    status: "available",
    icon: "network"
  },
  {
    id: "tool-2",
    name: "Frida",
    description: "Runtime manipulation toolkit",
    status: "available",
    icon: "code"
  },
  {
    id: "tool-3",
    name: "ADB",
    description: "Android Debug Bridge",
    status: "running",
    icon: "terminal"
  },
  {
    id: "tool-4",
    name: "Nmap",
    description: "Network scanner",
    status: "available",
    icon: "search"
  },
  {
    id: "tool-5",
    name: "APK Analyzer",
    description: "Decompile and analyze APKs",
    status: "available",
    icon: "file-search"
  }
];

export const mockVulnerabilities: VulnerabilityType[] = [
  {
    id: "vuln-1",
    title: "Weak Authentication",
    severity: "high",
    description: "The app uses a hardcoded PIN (1234) for authentication that can be easily bypassed.",
    status: "open",
    type: "authentication",
    discoveredAt: "2025-05-01T14:30:00Z"
  },
  {
    id: "vuln-2",
    title: "Unencrypted Data Storage",
    severity: "medium",
    description: "User credentials are stored in plain text in shared preferences.",
    status: "in_progress",
    type: "data storage",
    discoveredAt: "2025-05-02T09:15:00Z"
  },
  {
    id: "vuln-3",
    title: "Insecure Network Communication",
    severity: "critical",
    description: "The app sends sensitive data over HTTP without encryption.",
    status: "open",
    type: "network",
    discoveredAt: "2025-05-02T11:45:00Z"
  },
  {
    id: "vuln-4",
    title: "SQL Injection",
    severity: "critical",
    description: "The login form is vulnerable to SQL injection attacks.",
    status: "mitigated",
    type: "input validation",
    discoveredAt: "2025-05-01T16:20:00Z"
  }
];

export const mockTerminalCommands: TerminalCommandType[] = [
  {
    command: "adb devices",
    output: "List of devices attached\nemulator-5554\tdevice",
    timestamp: "2025-05-03T08:32:15Z",
    status: "success"
  },
  {
    command: "adb install InsecureBankv2.apk",
    output: "Performing Streamed Install\nSuccess",
    timestamp: "2025-05-03T08:35:22Z",
    status: "success"
  },
  {
    command: "nmap -sV -p 1-65535 192.168.1.10",
    output: "Starting Nmap 7.91...\nNmap scan report for 192.168.1.10\nPort 8080/tcp open  http\nPort 5555/tcp open  adb",
    timestamp: "2025-05-03T08:40:05Z",
    status: "success"
  },
  {
    command: "frida --codeshare dzonerzy/fridantiroot -U -f com.android.insecurebankv2",
    output: "Error: Device not found",
    timestamp: "2025-05-03T08:42:30Z",
    status: "error"
  }
];

export const mockEmulatorStatus: EmulatorStatusType = {
  status: "online",
  name: "Pixel_4_API_30",
  androidVersion: "Android 11 (API 30)",
  ipAddress: "192.168.1.10",
  adbConnected: true,
  runningApps: ["com.android.insecurebankv2", "com.android.settings"]
};

export const mockNetworkRequests: NetworkRequestType[] = [
  {
    id: "req-1",
    source: "InsecureBankv2",
    destination: "http://192.168.1.5:8080/login",
    protocol: "HTTP",
    status: "intercepted",
    timestamp: "2025-05-03T09:05:12Z"
  },
  {
    id: "req-2",
    source: "InsecureBankv2",
    destination: "http://192.168.1.5:8080/transfer",
    protocol: "HTTP",
    status: "modified",
    timestamp: "2025-05-03T09:07:35Z"
  },
  {
    id: "req-3",
    source: "InsecureBankv2",
    destination: "http://192.168.1.5:8080/balance",
    protocol: "HTTP",
    status: "forwarded",
    timestamp: "2025-05-03T09:10:28Z"
  }
];
