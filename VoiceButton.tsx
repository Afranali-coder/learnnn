import { Volume2, Square } from "lucide-react";

interface VoiceButtonProps {
  isSpeaking: boolean;
  onClick: () => void;
  label?: string;
  size?: "sm" | "md";
}

export function VoiceButton({
  isSpeaking,
  onClick,
  label = "Listen",
  size = "md",
}: VoiceButtonProps) {
  const sizeClasses = size === "sm" ? "h-9 px-3 text-xs" : "h-10 px-4 text-sm";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-1.5 rounded-lg font-medium transition ${sizeClasses}
        ${
          isSpeaking
            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
            : "border border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
        }
      `}
    >
      {isSpeaking ? (
        <>
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
            <Square className={`relative ${iconSize} fill-current`} />
          </span>
          {label === "Listen" ? "Stop" : label}
        </>
      ) : (
        <>
          <Volume2 className={iconSize} />
          {label}
        </>
      )}
    </button>
  );
}
