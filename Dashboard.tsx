import * as Icons from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import type { LessonProgress, Phase } from "@/types";

interface DashboardProps {
  onSelectLesson: (id: string) => void;
  progress: Record<string, LessonProgress>;
}

const phaseInfo: Record<Phase, { label: string; description: string; gradient: string; icon: string }> = {
  basic: {
    label: "Basic",
    description: "Syntax, variables, data types, conditionals & loops",
    gradient: "from-emerald-500 to-teal-600",
    icon: "BookOpen",
  },
  intermediate: {
    label: "Intermediate",
    description: "Functions, file handling, OOPs & error handling",
    gradient: "from-amber-500 to-orange-600",
    icon: "Code2",
  },
  advanced: {
    label: "Absolute Advanced",
    description: "Decorators, generators, threading, metaclasses & memory",
    gradient: "from-rose-500 to-pink-600",
    icon: "Sparkles",
  },
};

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] || BookOpen;
}

export function Dashboard({ onSelectLesson, progress }: DashboardProps) {
  const totalLessons = curriculum.length;
  const completedLessons = Object.values(progress).filter((p) => p.completed).length;
  const completedChallenges = Object.values(progress).filter((p) => p.challenge_completed).length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  // Find next lesson to continue
  const nextLesson = curriculum.find((l) => !progress[l.id]?.completed) ?? curriculum[0];
  const phases: Phase[] = ["basic", "intermediate", "advanced"];

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 lg:px-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-8 lg:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <GraduationCap className="h-4 w-4" />
            Hinglish Python Masterclass
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Python seekho,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              zero se hero tak
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Beginner se absolute advanced tak ka complete journey. Har concept real-world
            analogy, clean code, aur practice challenges ke saath. Cricket, Bollywood aur
            daily life ke examples se Python bohot easily samajh aayega!
          </p>

          {/* Continue Learning Button */}
          <div className="mt-8">
            <button
              onClick={() => onSelectLesson(nextLesson.id)}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/40"
            >
              {completedLessons > 0 ? "Continue Learning" : "Shuru Karte Hain"}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-400" />
            <span className="text-xs font-medium text-slate-400">Total Lessons</span>
          </div>
          <p className="text-2xl font-bold text-white">{totalLessons}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-sky-400" />
            <span className="text-xs font-medium text-slate-400">Progress</span>
          </div>
          <p className="text-2xl font-bold text-white">{progressPercent}%</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-amber-400" />
            <span className="text-xs font-medium text-slate-400">Challenges Solved</span>
          </div>
          <p className="text-2xl font-bold text-white">{completedChallenges}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <span className="text-xs font-medium text-slate-400">Completed</span>
          </div>
          <p className="text-2xl font-bold text-white">{completedLessons}</p>
        </div>
      </div>

      {/* Phase Sections */}
      <div className="mt-10 space-y-10">
        {phases.map((phase) => {
          const info = phaseInfo[phase];
          const lessons = curriculum.filter((l) => l.phase === phase);
          const phaseCompleted = lessons.filter((l) => progress[l.id]?.completed).length;
          const PhaseIcon = getIcon(info.icon);

          return (
            <section key={phase}>
              {/* Phase Header */}
              <div className="mb-5 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${info.gradient} shadow-lg`}
                >
                  <PhaseIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white">{info.label}</h2>
                  <p className="text-sm text-slate-400">{info.description}</p>
                </div>
                <span className="text-sm font-medium text-slate-500">
                  {phaseCompleted}/{lessons.length}
                </span>
              </div>

              {/* Phase Progress Bar */}
              <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${info.gradient} transition-all duration-500`}
                  style={{ width: `${(phaseCompleted / lessons.length) * 100}%` }}
                />
              </div>

              {/* Lesson Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {lessons.map((lesson) => {
                  const isCompleted = progress[lesson.id]?.completed;
                  const hasChallenge = progress[lesson.id]?.challenge_completed;
                  const LessonIcon = getIcon(lesson.icon);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-left transition hover:border-slate-700 hover:bg-slate-800/50"
                    >
                      {/* Completed indicator */}
                      {isCompleted && (
                        <div className="absolute right-4 top-4">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                            <Icons.CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          </div>
                        </div>
                      )}

                      <div
                        className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition group-hover:scale-110`}
                      >
                        <LessonIcon className="h-5 w-5 text-slate-300" />
                      </div>

                      <h3 className="mb-1.5 font-semibold text-white">{lesson.title}</h3>

                      <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
                        {lesson.analogy.slice(0, 100)}...
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        {hasChallenge && (
                          <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                            <Trophy className="h-3 w-3" />
                            Solved
                          </span>
                        )}
                        {isCompleted && (
                          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                            Done
                          </span>
                        )}
                        {!isCompleted && !hasChallenge && (
                          <span className="flex items-center gap-1 text-xs text-slate-500 transition group-hover:text-emerald-400">
                            Start <ArrowRight className="h-3 w-3" />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
        <p className="text-sm text-slate-400">
          Made with <span className="text-rose-400">dil</span> for Python learners in India.
          Keep coding, keep growing!
        </p>
      </div>
    </div>
  );
}
