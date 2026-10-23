import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  isEditable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export function CodeBlock({ code, isEditable = false, value, onChange }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(isEditable && value !== undefined ? value : code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code, value, isEditable]);

  const displayCode = isEditable && value !== undefined ? value : code;

  return (
    <div className="relative group">
      <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md bg-slate-700/80 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-600 hover:text-white backdrop-blur-sm"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
        <div className="flex items-center gap-1.5 border-b border-slate-700 bg-slate-800/50 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-medium text-slate-400">
            {isEditable ? "practice.py" : "example.py"}
          </span>
        </div>
        {isEditable ? (
          <textarea
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            spellCheck={false}
            className="block min-h-[180px] w-full resize-y bg-slate-900 p-4 font-mono text-sm leading-relaxed text-green-300 outline-none placeholder:text-slate-600"
            placeholder="Yahan apna code likho..."
          />
        ) : (
          <pre className="overflow-x-auto p-4">
            <code className="font-mono text-sm leading-relaxed text-green-300 whitespace-pre">
              {displayCode}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
