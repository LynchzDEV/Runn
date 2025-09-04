"use client";

import { useState, useEffect } from "react";
import { weeklyPlan, RunningPlan } from "@/data/runningPlan";
import { fetchRandomHug, AnimeHug } from "@/data/quotes";
import Link from "next/link";

export default function Home() {
  const [currentPlan, setCurrentPlan] = useState<RunningPlan | null>(null);
  const [streak, setStreak] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dailyHug, setDailyHug] = useState<AnimeHug | null>(null);
  const [hugLoading, setHugLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const plan = weeklyPlan.find((p) => p.day === dayName);
    setCurrentPlan(plan || null);

    const savedStreak = localStorage.getItem("runningStreak");
    if (savedStreak) {
      setStreak(parseInt(savedStreak));
    }

    // Fetch random anime hug GIF
    setHugLoading(true);
    fetchRandomHug()
      .then((hug) => {
        setDailyHug(hug);
        setHugLoading(false);
      })
      .catch(() => {
        setHugLoading(false);
      });
  }, []);

  const handlePhotoSubmit = () => {
    setIsSubmitting(true);
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setTimeout(() => {
          const newStreak = streak + 1;
          setStreak(newStreak);
          localStorage.setItem("runningStreak", newStreak.toString());
          setIsSubmitting(false);
        }, 800);
      } else {
        setIsSubmitting(false);
      }
    };
    input.oncancel = () => setIsSubmitting(false);
    input.click();
  };

  if (!currentPlan) {
    return (
      <div className="min-h-screen bg-[#FEF9F3] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-6 h-6 bg-[#DE9151] rounded-full"></div>
        </div>
      </div>
    );
  }

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#FEF9F3]">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-[#F2F2F7] sticky top-0 z-10">
        <div className="max-w-sm mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-[#424242]">Today</h1>
            <p className="text-sm text-[#8E8E93] font-medium">
              {formattedDate}
            </p>
          </div>
          <Link
            href="/plan"
            className="w-10 h-10 rounded-full bg-[#DE9151] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 22V12h6v10"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-6 pt-8 pb-12 space-y-6">
        {/* Streak Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F2F2F7]">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#DE9151] to-[#c8823e] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">{streak}</span>
            </div>
            <h2 className="text-lg font-semibold text-[#424242] mb-1">
              Day Streak
            </h2>
            <p className="text-sm text-[#8E8E93]">Keep it going!</p>
          </div>
        </div>

        {/* Daily Motivation */}
        {(hugLoading || dailyHug) && (
          <div className="bg-gradient-to-br from-[#DE9151]/5 to-[#DE9151]/10 rounded-2xl p-6 border border-[#DE9151]/20">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#DE9151] flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                {hugLoading ? (
                  <div className="animate-pulse">
                    <div className="h-24 bg-gray-200 rounded-lg mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ) : dailyHug ? (
                  <div className="text-center">
                    <img
                      src={dailyHug.url}
                      alt="Motivational hug"
                      className="w-full h-32 object-cover rounded-lg mb-2 shadow-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <p className="text-[#8E8E93] text-xs font-medium">
                      A hug from{" "}
                      <span className="text-[#DE9151]">
                        {dailyHug.anime_name}
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="text-[#8E8E93] text-sm">
                    Unable to load motivation
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Today's Workout */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#F2F2F7] overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#424242]">
                {currentPlan.day}
              </h2>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentPlan.type === "Rest"
                    ? "bg-gray-100 text-gray-600"
                    : "bg-[#DE9151]/10 text-[#DE9151]"
                }`}
              >
                {currentPlan.type}
              </div>
            </div>

            {currentPlan.type === "Rest" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-[#8E8E93] font-medium">Rest Day</p>
                <p className="text-sm text-[#8E8E93] mt-1">
                  Recovery is important
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {currentPlan.duration && (
                  <div className="flex items-center justify-between py-3 border-b border-[#F2F2F7] last:border-b-0">
                    <span className="text-[#8E8E93] font-medium">Duration</span>
                    <span className="text-[#424242] font-semibold">
                      {currentPlan.duration}
                    </span>
                  </div>
                )}
                {currentPlan.pace && (
                  <div className="flex items-center justify-between py-3 border-b border-[#F2F2F7] last:border-b-0">
                    <span className="text-[#8E8E93] font-medium">Pace</span>
                    <span className="text-[#424242] font-semibold">
                      {currentPlan.pace}
                    </span>
                  </div>
                )}
                {currentPlan.targetHR && (
                  <div className="flex items-center justify-between py-3 border-b border-[#F2F2F7] last:border-b-0">
                    <span className="text-[#8E8E93] font-medium">
                      Target HR
                    </span>
                    <span className="text-[#424242] font-semibold">
                      {currentPlan.targetHR}
                    </span>
                  </div>
                )}
                {currentPlan.notes && (
                  <div className="pt-4">
                    <p className="text-[#8E8E93] font-medium mb-2">Notes</p>
                    <p className="text-sm text-[#424242] bg-[#FEF9F3] rounded-xl p-3">
                      {currentPlan.notes}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {currentPlan.type !== "Rest" && (
            <div className="p-6 pt-0">
              <button
                onClick={handlePhotoSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#DE9151] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:scale-100 shadow-sm"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                      />
                      <circle
                        cx="12"
                        cy="13"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Complete Workout</span>
                  </div>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#F2F2F7]">
            <div className="text-2xl font-bold text-[#DE9151] mb-1">7</div>
            <div className="text-xs text-[#8E8E93] font-medium">Days/Week</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#F2F2F7]">
            <div className="text-2xl font-bold text-[#DE9151] mb-1">
              {currentPlan.type === "Rest" ? "0" : "1"}
            </div>
            <div className="text-xs text-[#8E8E93] font-medium">Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}
