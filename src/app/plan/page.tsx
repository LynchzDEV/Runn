"use client";

import { weeklyPlan } from "@/data/runningPlan";
import Link from "next/link";

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-[#FEF9F3]">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-[#F2F2F7] sticky top-0 z-10">
        <div className="max-w-sm mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-[#424242]">
              Weekly Plan
            </h1>
            <p className="text-sm text-[#8E8E93] font-medium">
              Training Schedule
            </p>
          </div>
          <Link
            href="/"
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
                d="M19 12H5M12 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-6 pt-6 pb-12">
        <div className="space-y-3">
          {weeklyPlan.map((plan, index) => {
            const today = new Date().toLocaleDateString("en-US", {
              weekday: "long",
            });
            const isToday = plan.day === today;

            return (
              <div
                key={plan.day}
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-200 ${
                  isToday
                    ? "border-[#DE9151] shadow-md ring-1 ring-[#DE9151]/20"
                    : "border-[#F2F2F7]"
                }`}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {isToday && (
                        <div className="w-2 h-2 bg-[#DE9151] rounded-full"></div>
                      )}
                      <div>
                        <h3
                          className={`font-semibold ${
                            isToday ? "text-[#DE9151]" : "text-[#424242]"
                          }`}
                        >
                          {plan.day}
                        </h3>
                        {isToday && (
                          <p className="text-xs text-[#8E8E93] font-medium">
                            Today
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        plan.type === "Rest"
                          ? "bg-gray-100 text-gray-600"
                          : isToday
                            ? "bg-[#DE9151] text-white"
                            : "bg-[#DE9151]/10 text-[#DE9151]"
                      }`}
                    >
                      {plan.type}
                    </div>
                  </div>

                  {plan.type !== "Rest" && (
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        {plan.duration && (
                          <div>
                            <p className="text-[#8E8E93] font-medium">
                              Duration
                            </p>
                            <p className="text-[#424242] font-semibold">
                              {plan.duration}
                            </p>
                          </div>
                        )}
                        {plan.pace && (
                          <div>
                            <p className="text-[#8E8E93] font-medium">Pace</p>
                            <p className="text-[#424242] font-semibold">
                              {plan.pace}
                            </p>
                          </div>
                        )}
                      </div>

                      {plan.targetHR && (
                        <div className="pt-2">
                          <p className="text-[#8E8E93] font-medium">
                            Target HR
                          </p>
                          <p className="text-[#424242] font-semibold">
                            {plan.targetHR}
                          </p>
                        </div>
                      )}

                      {plan.notes && (
                        <div className="pt-3 border-t border-[#F2F2F7]">
                          <p className="text-[#8E8E93] font-medium mb-1">
                            Notes
                          </p>
                          <p className="text-[#424242] bg-[#FEF9F3] rounded-lg p-3 text-xs leading-relaxed">
                            {plan.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {plan.type === "Rest" && (
                    <div className="flex items-center space-x-3 text-[#8E8E93]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Recovery Day</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Week Summary */}
        <div className="mt-8 bg-white rounded-2xl p-5 shadow-sm border border-[#F2F2F7]">
          <h3 className="font-semibold text-[#424242] mb-4">Week Summary</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-[#DE9151] mb-1">5</div>
              <div className="text-xs text-[#8E8E93] font-medium">
                Training Days
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#DE9151] mb-1">2</div>
              <div className="text-xs text-[#8E8E93] font-medium">
                Rest Days
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#DE9151] mb-1">~4.5h</div>
              <div className="text-xs text-[#8E8E93] font-medium">
                Total Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
