export const SIDEBAR_WIDTH = 256;

import {
  Search,
  ChevronDown,
  Sparkles,
  Brain,
  Zap,
  ImageIcon,
  Code,
  MessageSquare,
  Filter,
  Compass,
  Code2,
  GraduationCap,
} from "lucide-react";

export interface Model {
  id: string;
  name: string;
  type: string;
  status: "available" | "pro" | "limited";
  capabilities: string[];
  icon: React.ReactNode;
  description?: string;
  category: "favorites" | "others";
}

export const models: Model[] = [
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    type: "Google",
    status: "available",
    capabilities: ["fast", "vision", "code"],
    icon: <Sparkles className="w-4 h-4" />,
    description: "Fastest model with vision capabilities",
    category: "favorites",
  },
  {
    id: "gemini-2.6-pro",
    name: "Gemini 2.6 Pro",
    type: "Google",
    status: "pro",
    capabilities: ["reasoning", "vision", "code"],
    icon: <Brain className="w-4 h-4" />,
    description: "Advanced reasoning and analysis",
    category: "favorites",
  },
  {
    id: "gpt-imagegen",
    name: "GPT ImageGen",
    type: "OpenAI",
    status: "pro",
    capabilities: ["image-gen"],
    icon: <ImageIcon className="w-4 h-4" />,
    description: "AI-powered image generation",
    category: "favorites",
  },
  {
    id: "o1-mini",
    name: "o1-mini",
    type: "OpenAI",
    status: "available",
    capabilities: ["reasoning", "code"],
    icon: <Zap className="w-4 h-4" />,
    description: "Optimized for coding tasks",
    category: "favorites",
  },
  {
    id: "claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    type: "Anthropic",
    status: "available",
    capabilities: ["reasoning", "writing", "code"],
    icon: <MessageSquare className="w-4 h-4" />,
    description: "Best for creative writing and analysis",
    category: "favorites",
  },
  {
    id: "claude-3.5-sonnet-reasoning",
    name: "Claude 3.5 Sonnet (Reasoning)",
    type: "Anthropic",
    status: "pro",
    capabilities: ["advanced-reasoning", "analysis"],
    icon: <Brain className="w-4 h-4" />,
    description: "Enhanced reasoning capabilities",
    category: "favorites",
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    type: "DeepSeek",
    status: "limited",
    capabilities: ["reasoning", "code"],
    icon: <Code className="w-4 h-4" />,
    description: "Specialized reasoning model",
    category: "favorites",
  },
  // Others category
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    type: "Google",
    status: "available",
    capabilities: ["fast", "vision"],
    icon: <Sparkles className="w-4 h-4" />,
    description: "Previous generation flash model",
    category: "others",
  },
  {
    id: "gemini-2.0-flash-lite",
    name: "Gemini 2.0 Flash Lite",
    type: "Google",
    status: "available",
    capabilities: ["fast", "code"],
    icon: <Zap className="w-4 h-4" />,
    description: "Lightweight version",
    category: "others",
  },
  {
    id: "gemini-2.5-flash-thinking",
    name: "Gemini 2.5 Flash (Thinking)",
    type: "Google",
    status: "limited",
    capabilities: ["reasoning"],
    icon: <Brain className="w-4 h-4" />,
    description: "Enhanced thinking capabilities",
    category: "others",
  },
  {
    id: "gpt-4o-mini",
    name: "GPT 4o-mini",
    type: "OpenAI",
    status: "available",
    capabilities: ["fast", "code"],
    icon: <Zap className="w-4 h-4" />,
    description: "Compact but powerful",
    category: "others",
  },
  {
    id: "gpt-4o",
    name: "GPT 4o",
    type: "OpenAI",
    status: "pro",
    capabilities: ["reasoning", "vision", "code"],
    icon: <Brain className="w-4 h-4" />,
    description: "Advanced multimodal model",
    category: "others",
  },
  {
    id: "gpt-4.1",
    name: "GPT 4.1",
    type: "OpenAI",
    status: "limited",
    capabilities: ["reasoning", "writing"],
    icon: <MessageSquare className="w-4 h-4" />,
    description: "Latest GPT iteration",
    category: "others",
  },
  {
    id: "gpt-4.1-mini",
    name: "GPT 4.1 Mini",
    type: "OpenAI",
    status: "available",
    capabilities: ["fast", "code"],
    icon: <Zap className="w-4 h-4" />,
    description: "Efficient mini version",
    category: "others",
  },
  {
    id: "gpt-4.1-nano",
    name: "GPT 4.1 Nano",
    type: "OpenAI",
    status: "available",
    capabilities: ["fast"],
    icon: <Sparkles className="w-4 h-4" />,
    description: "Ultra-lightweight model",
    category: "others",
  },
  {
    id: "o3-mini",
    name: "o3-mini",
    type: "OpenAI",
    status: "limited",
    capabilities: ["reasoning"],
    icon: <Brain className="w-4 h-4" />,
    description: "Next-gen reasoning",
    category: "others",
  },
  {
    id: "o3-mini-2",
    name: "o3-mini",
    type: "OpenAI",
    status: "limited",
    capabilities: ["reasoning"],
    icon: <Brain className="w-4 h-4" />,
    description: "Alternative o3 instance",
    category: "others",
  },
];

export const capabilityIcons = {
  fast: <Zap className="w-3 h-3" />,
  vision: <ImageIcon className="w-3 h-3" />,
  code: <Code className="w-3 h-3" />,
  reasoning: <Brain className="w-3 h-3" />,
  "advanced-reasoning": <Brain className="w-3 h-3" />,
  "image-gen": <ImageIcon className="w-3 h-3" />,
  writing: <MessageSquare className="w-3 h-3" />,
  analysis: <Filter className="w-3 h-3" />,
};

export const capabilityColors = {
  fast: "bg-green-100 text-green-700 border-green-200",
  vision: "bg-blue-100 text-blue-700 border-blue-200",
  code: "bg-purple-100 text-purple-700 border-purple-200",
  reasoning: "bg-orange-100 text-orange-700 border-orange-200",
  "advanced-reasoning": "bg-red-100 text-red-700 border-red-200",
  "image-gen": "bg-pink-100 text-pink-700 border-pink-200",
  writing: "bg-indigo-100 text-indigo-700 border-indigo-200",
  analysis: "bg-teal-100 text-teal-700 border-teal-200",
};

export interface Suggestion {
  text: string;
  description: string;
}

export interface FilterCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  suggestions: Suggestion[];
}

export const categories: FilterCategory[] = [
  {
    id: "create",
    title: "Create",
    icon: <Sparkles className="w-4 h-4" />,
    color: "from-purple-500 to-pink-500",
    suggestions: [
      {
        text: "Design a modern landing page",
        description: "Create a sleek, responsive website",
      },
      {
        text: "Generate a logo concept",
        description: "Design a unique brand identity",
      },
      {
        text: "Build a mobile app mockup",
        description: "Prototype your next app idea",
      },
      {
        text: "Create social media graphics",
        description: "Design engaging visual content",
      },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    icon: <Compass className="w-4 h-4" />,
    color: "from-blue-500 to-cyan-500",
    suggestions: [
      {
        text: "Analyze market trends",
        description: "Discover emerging opportunities",
      },
      { text: "Research competitors", description: "Study industry landscape" },
      {
        text: "Explore new technologies",
        description: "Stay ahead of the curve",
      },
      {
        text: "Investigate user behavior",
        description: "Understand your audience",
      },
    ],
  },
  {
    id: "code",
    title: "Code",
    icon: <Code2 className="w-4 h-4" />,
    color: "from-green-500 to-emerald-500",
    suggestions: [
      {
        text: "Build a React component",
        description: "Create reusable UI elements",
      },
      {
        text: "Optimize database queries",
        description: "Improve application performance",
      },
      {
        text: "Debug a complex issue",
        description: "Solve tricky programming problems",
      },
      {
        text: "Implement authentication",
        description: "Secure your application",
      },
    ],
  },
  {
    id: "learn",
    title: "Learn",
    icon: <GraduationCap className="w-4 h-4" />,
    color: "from-orange-500 to-red-500",
    suggestions: [
      {
        text: "Master React hooks",
        description: "Deep dive into modern React patterns",
      },
      {
        text: "Learn TypeScript basics",
        description: "Add type safety to your code",
      },
      {
        text: "Understand design patterns",
        description: "Write better, maintainable software",
      },
      {
        text: "Study algorithm complexity",
        description: "Optimize your coding solutions",
      },
    ],
  },
];
