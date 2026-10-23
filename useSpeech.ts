import { useState, useEffect, useCallback, useRef } from "react";

interface UseSpeechReturn {
  speak: (text: string, id?: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  activeId: string | null;
}

export function useSpeech(): UseSpeechReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const handleEnd = () => {
      setIsSpeaking(false);
      setActiveId(null);
      utteranceRef.current = null;
    };

    window.speechSynthesis.addEventListener("end", handleEnd);
    return () => {
      window.speechSynthesis.removeEventListener("end", handleEnd);
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = useCallback((text: string, id?: string) => {
    if (!("speechSynthesis" in window)) return;

    // If already speaking this section, stop
    if (isSpeaking && activeId === id) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setActiveId(null);
      return;
    }

    // Stop any existing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Prefer an English voice (Hinglish is written in Latin script, so English voices read it well)
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((v) => v.name.includes("Google US English")) ||
      voices.find((v) => v.name.includes("Google")) ||
      voices.find((v) => v.lang.startsWith("en") && v.name.includes("Female")) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0];
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utteranceRef.current = utterance;
    setActiveId(id ?? "default");
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking, activeId]);

  const stop = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setActiveId(null);
    utteranceRef.current = null;
  }, []);

  return { speak, stop, isSpeaking, activeId };
}
