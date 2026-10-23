import * as Icons from "lucide-react";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Code2,
  GraduationCap,
  Trophy,
  X,
  type LucideIcon,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import type { LessonProgress, Phase } from "@/types";

interface SidebarProps {
  activeLessonId: string | null;
  onSelectLesson: (id: string) => void;
  onHome: () => void;
  progress: Record<string, LessonProgress>;
  isOpen: boolean;
  onClose: () => void;
}

const phaseConfig: Record<Phase, { label: string; color: string; bgColor: string; dotColor: string }> = {
  basic: {
    label: "Basic",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    dotColor: "bg-emerald-400",
  },
  intermediate: {
    label: "Intermediate",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    dotColor: "bg-amber-400",
  },
  advanced: {
    label: "Absolute Advanced",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    dotColor: "bg-rose-400",
  },
};

function getIcon(name: string): LucideIcon {
  const icon = (Icons as unknown as Record<string, LucideIcon>)[name];
  return icon || BookOpen;
}

export function Sidebar({
  activeLessonId,
  onSelectLesson,
  onHome,
  progress,
  isOpen,
  onClose,
}: SidebarProps) {
  const phases: Phase[] = ["basic", "intermediate", "advanced"];
  const totalLessons = curriculum.length;
  const completedLessons = Object.values(progress).filter((p) => p.completed).length;
  const completedChallenges = Object.values(progress).filter((p) => p.challenge_completed).length;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed z-40 flex h-full w-[320px] flex-col border-r border-slate-800 bg-slate-900/95 backdrop-blur-md
          transition-transform duration-300 lg:static lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-5">
          <button onClick={onHome} className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">PythonGuru</h1>
              <p className="text-xs text-slate-400">Hinglish Tutorial</p>
            </div>
          </button>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Stats */}
        <div className="border-b border-slate-800 px-5 py-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-slate-800/50 p-3 text-center">
              <p className="text-lg font-bold text-white">{completedLessons}</p>
              <p className="text-[10px] text-slate-400">Lessons</p>
            </div>
            <div className="rounded-lg bg-slate-800/50 p-3 text-center">
              <p className="text-lg font-bold text-amber-400">{completedChallenges}</p>
              <p className="text-[10px] text-slate-400">Challenges</p>
            </div>
            <div className="rounded-lg bg-slate-800/50 p-3 text-center">
              <p className="text-lg font-bold text-emerald-400">
                {Math.round((completedLessons / totalLessons) * 100)}%
              </p>
              <p className="text-[10px] text-slate-400">Done</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
            />
          </div>
        </div>

        {/* Curriculum List */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {phases.map((phase) => {
            const phaseLessons = curriculum.filter((l) => l.phase === phase);
            const config = phaseConfig[phase];
            return (
              <div key={phase} className="mb-6">
                <div className="mb-2 flex items-center gap-2 px-2">
                  <span className={`h-2 w-2 rounded-full ${config.dotColor}`} />
                  <h3 className={`text-xs font-semibold uppercase tracking-wider ${config.color}`}>
                    {config.label}
                  </h3>
                  <span className="ml-auto text-[10px] text-slate-500">
                    {phaseLessons.filter((l) => progress[l.id]?.completed).length}/
                    {phaseLessons.length}
                  </span>
                </div>
                <div className="space-y-1">
                  {phaseLessons.map((lesson) => {
                    const isActive = activeLessonId === lesson.id;
                    const isCompleted = progress[lesson.id]?.completed;
                    const hasChallenge = progress[lesson.id]?.challenge_completed;
                    const Icon = getIcon(lesson.icon);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onSelectLesson(lesson.id)}
                        className={`
                          group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition
                          ${
                            isActive
                              ? "bg-slate-800 text-white shadow-sm"
                              : "text-slate-300 hover:bg-slate-800/50"
                          }
                        `}
                      >
                        <div className="flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-600 group-hover:text-slate-500" />
                          )}
                        </div>
                        <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? config.color : "text-slate-500"}`} />
                        <span className="flex-1 truncate text-sm font-medium">
                          {lesson.title}
                        </span>
                        {hasChallenge && (
                          <Trophy className="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 px-5 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Code2 className="h-4 w-4" />
            <span>Learn Python from zero to hero</span>
          </div>
        </div>
      </aside>
    </>
  );
}
