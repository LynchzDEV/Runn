export interface RunningPlan {
  day: string;
  type: string;
  duration?: string;
  pace?: string;
  targetHR?: string;
  notes?: string;
}

export const weeklyPlan: RunningPlan[] = [
  {
    day: "Monday",
    type: "Rest",
  },
  {
    day: "Tuesday",
    type: "Base Endurance",
    duration: "50 min",
    pace: "8:45 - 9:15",
    notes: "Last 10 min, feeling moderate"
  },
  {
    day: "Wednesday",
    type: "Easy",
    duration: "30 min",
    pace: "9:15 - 9:45",
    targetHR: "120 - 130 bpm"
  },
  {
    day: "Thursday",
    type: "Base Endurance",
    duration: "45 min",
    pace: "8:45 - 9:15",
    notes: "Strides: 6 x 100m / rest 30-45 sec"
  },
  {
    day: "Friday",
    type: "Rest",
  },
  {
    day: "Saturday",
    type: "Base Endurance",
    duration: "1:10 hrs",
    pace: "8:50 - 9:20 min/km"
  },
  {
    day: "Sunday",
    type: "Easy Run",
    duration: "30 min",
    targetHR: "120 - 130 bpm"
  }
];
