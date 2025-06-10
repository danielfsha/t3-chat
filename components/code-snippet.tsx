import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Copy,
  Check,
  Code2,
  FileText,
  Terminal,
  Braces,
  Hash,
  Brackets,
  Database,
} from "lucide-react";
import { useClipboard } from "@/hooks/use-clipboard";

interface CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
  className?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language,
  title,
  className = "",
  showLineNumbers = true,
  maxHeight = "none",
}) => {
  const { copied, copyToClipboard } = useClipboard();

  const getLanguageIcon = (lang: string) => {
    const language = lang.toLowerCase();

    const iconMap: { [key: string]: React.ReactNode } = {
      javascript: <Braces className="w-4 h-4 text-yellow-400" />,
      js: <Braces className="w-4 h-4 text-yellow-400" />,
      typescript: <Braces className="w-4 h-4 text-blue-400" />,
      ts: <Braces className="w-4 h-4 text-blue-400" />,
      python: <Hash className="w-4 h-4 text-green-400" />,
      py: <Hash className="w-4 h-4 text-green-400" />,
      java: <Code2 className="w-4 h-4 text-orange-400" />,
      html: <Brackets className="w-4 h-4 text-orange-500" />,
      css: <FileText className="w-4 h-4 text-blue-500" />,
      scss: <FileText className="w-4 h-4 text-pink-500" />,
      sass: <FileText className="w-4 h-4 text-pink-500" />,
      bash: <Terminal className="w-4 h-4 text-green-500" />,
      shell: <Terminal className="w-4 h-4 text-green-500" />,
      sql: <Database className="w-4 h-4 text-purple-400" />,
      json: <Braces className="w-4 h-4 text-yellow-300" />,
      xml: <Brackets className="w-4 h-4 text-red-400" />,
      php: <Code2 className="w-4 h-4 text-purple-500" />,
      ruby: <Code2 className="w-4 h-4 text-red-500" />,
      go: <Code2 className="w-4 h-4 text-cyan-400" />,
      rust: <Code2 className="w-4 h-4 text-orange-600" />,
      cpp: <Code2 className="w-4 h-4 text-blue-600" />,
      c: <Code2 className="w-4 h-4 text-blue-700" />,
    };

    return iconMap[language] || <Code2 className="w-4 h-4 text-gray-400" />;
  };

  const getLanguageDisplayName = (lang: string) => {
    const language = lang.toLowerCase();

    const nameMap: Record<string, string> = {
      js: "JavaScript",
      ts: "TypeScript",
      py: "Python",
      html: "HTML",
      css: "CSS",
      scss: "SCSS",
      sass: "Sass",
      bash: "Bash",
      shell: "Shell",
      sql: "SQL",
      java: "Java",
      cpp: "C++",
      c: "C",
      php: "PHP",
      ruby: "Ruby",
      go: "Go",
      rust: "Rust",
      json: "JSON",
      xml: "XML",
    };

    return (
      nameMap[language] || language.charAt(0).toUpperCase() + language.slice(1)
    );
  };

  const handleCopy = () => {
    copyToClipboard(code);
  };

  return (
    <div
      className={`bg-gray-900 rounded-xl transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="relative flex items-center justify-between px-5 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700/50 backdrop-blur-sm">
            {getLanguageIcon(language)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-100">
              {title || getLanguageDisplayName(language)}
            </span>
            <span className="text-xs text-gray-400 capitalize">
              {getLanguageDisplayName(language)}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 
                     bg-gray-700/50 hover:bg-gray-600/70 hover:text-white 
                     transition-all duration-200 backdrop-blur-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800
                     active:scale-95"
          aria-label="Copy code to clipboard"
        >
          <div className="relative">
            {copied ? (
              <Check className="w-4 h-4 text-green-400 animate-in fade-in duration-200" />
            ) : (
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            )}
          </div>
          <span className="text-xs font-medium">
            {copied ? "Copied!" : "Copy"}
          </span>
        </button>
      </div>

      {/* Code Content */}
      <div
        className="relative overflow-auto overflow-x-hidden"
        style={{ maxHeight }}
      >
        <SyntaxHighlighter
          wrapLines
          wrapLongLines
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent",
            fontSize: "14px",
            lineHeight: "1.6",
            fontFamily:
              '"Fira Code", "JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            whiteSpace: "pre-wrap", // allows wrapping
            wordBreak: "break-word",
          }}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            color: "#6B7280",
            fontSize: "12px",
            paddingRight: "1.5rem",
            userSelect: "none",
            minWidth: "2.5rem",
          }}
          lineProps={(lineNumber) => ({
            style: {
              display: "block",
              width: "100%",
            },
          })}
        >
          {code}
        </SyntaxHighlighter>

        {/* Subtle gradient overlay for better visual hierarchy */}
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-gray-900/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
