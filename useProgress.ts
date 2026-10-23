import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { LessonProgress } from "@/types";

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, LessonProgress>>({});
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    const { data, error } = await supabase
      .from("lesson_progress")
      .select("*")
      .order("lesson_id", { ascending: true });

    if (error) {
      console.error("Progress fetch error:", error.message);
      setLoading(false);
      return;
    }

    const map: Record<string, LessonProgress> = {};
    (data || []).forEach((row: LessonProgress) => {
      map[row.lesson_id] = row;
    });
    setProgress(map);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const markLessonComplete = useCallback(
    async (lessonId: string) => {
      const existing = progress[lessonId] as LessonProgress | undefined;

      if (existing) {
        const { data, error } = await supabase
          .from("lesson_progress")
          .update({ completed: true, updated_at: new Date().toISOString() })
          .eq("lesson_id", lessonId)
          .select()
          .maybeSingle();

        if (error) {
          console.error("Update error:", error.message);
          return;
        }
        if (data) {
          setProgress((prev) => ({ ...prev, [lessonId]: data }));
        }
      } else {
        const { data, error } = await supabase
          .from("lesson_progress")
          .insert({
            lesson_id: lessonId,
            completed: true,
            challenge_completed: false,
          })
          .select()
          .maybeSingle();

        if (error) {
          console.error("Insert error:", error.message);
          return;
        }
        if (data) {
          setProgress((prev) => ({ ...prev, [lessonId]: data }));
        }
      }
    },
    [progress]
  );

  const markChallengeComplete = useCallback(
    async (lessonId: string) => {
      const existing = progress[lessonId];

      if (existing) {
        const { data, error } = await supabase
          .from("lesson_progress")
          .update({
            challenge_completed: true,
            completed: true,
            updated_at: new Date().toISOString(),
          })
          .eq("lesson_id", lessonId)
          .select()
          .maybeSingle();

        if (error) {
          console.error("Update error:", error.message);
          return;
        }
        if (data) {
          setProgress((prev) => ({ ...prev, [lessonId]: data }));
        }
      } else {
        const { data, error } = await supabase
          .from("lesson_progress")
          .insert({
            lesson_id: lessonId,
            completed: true,
            challenge_completed: true,
          })
          .select()
          .maybeSingle();

        if (error) {
          console.error("Insert error:", error.message);
          return;
        }
        if (data) {
          setProgress((prev) => ({ ...prev, [lessonId]: data }));
        }
      }
    },
    [progress]
  );

  return {
    progress,
    loading,
    markLessonComplete,
    markChallengeComplete,
    refetch: fetchProgress,
  };
}
