import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Lightbulb,
  Target,
  Trophy,
  Undo2,
} from "lucide-react";
import type { Lesson, LessonProgress } from "@/types";
import { curriculum } from "@/data/curriculum";
import { CodeBlock } from "./CodeBlock";
import { VoiceButton } from "./VoiceButton";
import { useSpeech } from "@/hooks/useSpeech";

interface LessonViewProps {
  lesson: Lesson;
  progress?: LessonProgress;
  onMarkComplete: (lessonId: string) => void;
  onMarkChallenge: (lessonId: string) => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const phaseBadge: Record<string, string> = {
  basic: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  advanced: "bg-rose-500/10 text-rose-400 border-rose-500/30",
};

const phaseLabel: Record<string, string> = {
  basic: "Basic",
  intermediate: "Intermediate",
  advanced: "Absolute Advanced",
};

export function LessonView({
  lesson,
  progress,
  onMarkComplete,
  onMarkChallenge,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LessonViewProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [userCode, setUserCode] = useState(lesson.challenge.starterCode);
  const [challengeDone, setChallengeDone] = useState(false);
  const { speak, stop, activeId } = useSpeech();

  const currentIndex = curriculum.findIndex((l) => l.id === lesson.id);
  const isCompleted = progress?.completed ?? false;
  const hasChallenge = progress?.challenge_completed ?? false;

  const handleChallengeComplete = () => {
    onMarkChallenge(lesson.id);
    setChallengeDone(true);
  };

  const resetCode = () => {
    setUserCode(lesson.challenge.starterCode);
    setShowSolution(false);
    setShowHint(false);
    setChallengeDone(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 lg:px-10">
      {/* Breadcrumb / Phase Badge */}
      <div className="mb-6 flex items-center gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${phaseBadge[lesson.phase]}`}
        >
          {phaseLabel[lesson.phase]}
        </span>
        <span className="text-sm text-slate-500">
          Lesson {currentIndex + 1} of {curriculum.length}
        </span>
      </div>

      {/* Title */}
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold text-white lg:text-4xl">{lesson.title}</h1>
        <VoiceButton
          isSpeaking={activeId === "title"}
          onClick={() => speak(`${lesson.title}. ${lesson.analogy} ${lesson.explanation} ${lesson.challenge.prompt}`, "title")}
          label={activeId === "title" ? "Stop" : "Listen All"}
        />
      </div>

      {/* Progress indicators */}
      <div className="mb-8 flex items-center gap-4">
        {isCompleted && (
          <div className="flex items-center gap-1.5 text-sm text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>Lesson completed</span>
          </div>
        )}
        {hasChallenge && (
          <div className="flex items-center gap-1.5 text-sm text-amber-400">
            <Trophy className="h-4 w-4" />
            <span>Challenge solved</span>
          </div>
        )}
      </div>

      {/* Analogy Section */}
      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-400" />
            <h2 className="text-lg font-semibold text-white">Real-World Analogy</h2>
          </div>
          <VoiceButton
            isSpeaking={activeId === "analogy"}
            onClick={() => speak(lesson.analogy, "analogy")}
            size="sm"
          />
        </div>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-5">
          <p className="leading-relaxed text-slate-300">{lesson.analogy}</p>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-sky-400" />
            <h2 className="text-lg font-semibold text-white">Code Example</h2>
          </div>
          <VoiceButton
            isSpeaking={activeId === "code"}
            onClick={() => speak(lesson.codeSnippet, "code")}
            size="sm"
          />
        </div>
        <CodeBlock code={lesson.codeSnippet} />
      </section>

      {/* Explanation Section */}
      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <h2 className="text-lg font-semibold text-white">How It Works</h2>
          </div>
          <VoiceButton
            isSpeaking={activeId === "explanation"}
            onClick={() => speak(lesson.explanation, "explanation")}
            size="sm"
          />
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-800/30 p-5">
          <p className="leading-relaxed text-slate-300">{lesson.explanation}</p>
        </div>
      </section>

      {/* Mark Complete Button */}
      {!isCompleted && (
        <button
          onClick={() => onMarkComplete(lesson.id)}
          className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
        >
          <CheckCircle2 className="h-5 w-5" />
          Mark Lesson as Complete
        </button>
      )}

      {/* Practice Challenge Section */}
      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">Practice Challenge</h2>
          </div>
          <VoiceButton
            isSpeaking={activeId === "challenge"}
            onClick={() => speak(`${lesson.challenge.prompt} ${lesson.challenge.hint}`, "challenge")}
            size="sm"
          />
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-900 p-5">
          <p className="mb-4 leading-relaxed text-slate-200">
            <span className="font-semibold text-amber-400">Challenge: </span>
            {lesson.challenge.prompt}
          </p>

          <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-slate-400">Your Code:</p>
            <CodeBlock
              code={lesson.challenge.starterCode}
              isEditable
              value={userCode}
              onChange={setUserCode}
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700"
            >
              <Lightbulb className="h-4 w-4 text-yellow-400" />
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700"
            >
              <Code2 className="h-4 w-4 text-sky-400" />
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
            <button
              onClick={resetCode}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700"
            >
              <Undo2 className="h-4 w-4" />
              Reset
            </button>
            {!hasChallenge && (
              <button
                onClick={handleChallengeComplete}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:from-amber-600 hover:to-orange-600"
              >
                <Trophy className="h-4 w-4" />
                Mark Challenge Done
              </button>
            )}
          </div>

          {/* Hint */}
          {showHint && (
            <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Hint</span>
              </div>
              <p className="text-sm text-slate-300">{lesson.challenge.hint}</p>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="mt-4">
              <div className="mb-2 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-sky-400" />
                <span className="text-sm font-semibold text-sky-400">Solution</span>
              </div>
              <CodeBlock code={lesson.challenge.solution} />
            </div>
          )}

          {/* Success message */}
          {(hasChallenge || challengeDone) && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <Trophy className="h-5 w-5 text-amber-400" />
              <p className="text-sm font-medium text-emerald-400">
                Challenge complete! Bahut badhiya! Aap next lesson pe chalo.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-6">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:from-emerald-600 hover:to-teal-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        >
          Next Lesson
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
