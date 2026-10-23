import { useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { LessonView } from "@/components/LessonView";
import { Dashboard } from "@/components/Dashboard";
import { useProgress } from "@/hooks/useProgress";
import { curriculum } from "@/data/curriculum";

function App() {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { progress, loading, markLessonComplete, markChallengeComplete } = useProgress();

  const activeLesson = activeLessonId
    ? curriculum.find((l) => l.id === activeLessonId) ?? null
    : null;

  const handleSelectLesson = useCallback((id: string) => {
    setActiveLessonId(id);
    setSidebarOpen(false);
  }, []);

  const handleHome = useCallback(() => {
    setActiveLessonId(null);
    setSidebarOpen(false);
  }, []);

  const handlePrev = useCallback(() => {
    if (!activeLessonId) return;
    const index = curriculum.findIndex((l) => l.id === activeLessonId);
    if (index > 0) {
      setActiveLessonId(curriculum[index - 1].id);
    }
  }, [activeLessonId]);

  const handleNext = useCallback(() => {
    if (!activeLessonId) return;
    const index = curriculum.findIndex((l) => l.id === activeLessonId);
    if (index < curriculum.length - 1) {
      setActiveLessonId(curriculum[index + 1].id);
    }
  }, [activeLessonId]);

  const currentIndex = activeLessonId
    ? curriculum.findIndex((l) => l.id === activeLessonId)
    : -1;

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar
        activeLessonId={activeLessonId}
        onSelectLesson={handleSelectLesson}
        onHome={handleHome}
        progress={progress}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800"
          >
            <Menu className="h-5 w-5" />
          </button>
          <button onClick={handleHome} className="text-sm font-semibold text-white">
            PythonGuru
          </button>
          <div className="w-9" />
        </div>

        {loading ? (
          <div className="flex h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-emerald-500" />
          </div>
        ) : activeLesson ? (
          <LessonView
            key={activeLesson.id}
            lesson={activeLesson}
            progress={progress[activeLesson.id]}
            onMarkComplete={markLessonComplete}
            onMarkChallenge={markChallengeComplete}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < curriculum.length - 1}
          />
        ) : (
          <Dashboard onSelectLesson={handleSelectLesson} progress={progress} />
        )}
      </main>
    </div>
  );
}

export default App;
