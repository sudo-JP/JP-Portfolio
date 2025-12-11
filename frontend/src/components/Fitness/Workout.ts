import type { WorkoutDay } from './WorkoutBlock.tsx';

const Workouts: WorkoutDay[] = [
  { dayName: 'Sunday | Rest', routine: [] },
  {
    dayName: 'Monday | Push',
    routine: [
      { name: 'Weighted Dips', sets: 3, reps: '6-10' },
      { name: 'Incline Bench', sets: 3, reps: '5-8' },
      { name: 'Seated Machine Shoulder Press', sets: 3, reps: '6-10' },
      { name: 'Triceps Pushdown', sets: 3, reps: '10-15' },
      { name: 'Tricep Overhead Extension', sets: 2, reps: '10-15' },
      { name: 'Lateral Raise', sets: 2, reps: '12-20' },
    ],
  },
  {
    dayName: 'Tuesday | Pull',
    routine: [
      { name: 'Weighted Pull Ups', sets: 3, reps: '5-8' },
      { name: 'Lat Pulldown', sets: 3, reps: '7-10' },
      { name: 'Wide Grip Row', sets: 3, reps: '7-10' },
      { name: 'Omni Face Pull', sets: 3, reps: '10-15' },
      { name: 'Preacher Curl', sets: 3, reps: '10-15' },
      { name: 'Bayien Curl', sets: 2, reps: '10-15' },
    ],
  },
  { dayName: 'Wednesday | Rest', routine: [] },
  {
    dayName: 'Thursday | Legs',
    routine: [
      { name: 'Squat', sets: 3, reps: '5-8' },
      { name: 'Hack Squat', sets: 2, reps: '8-12' },
      { name: 'Quad Extension', sets: 3, reps: '10-12' },
      { name: 'Hamstring Curl', sets: 3, reps: '10-12' },
      { name: 'Hip Abduction', sets: 2, reps: '12-15' },
      { name: 'Calf Raises', sets: 3, reps: '10-15' },
    ],
  },
  {
    dayName: 'Friday | Upper Hypertrophy',
    routine: [
      // Pull
      { name: 'Lat Pulldown', sets: 3, reps: '8-12' },
      { name: 'Seated Cable Row', sets: 3, reps: '8-12' },
      { name: 'Omni Face Pull', sets: 3, reps: '12-15' },
      // Push
      { name: 'Flat Dumbbell Bench', sets: 3, reps: '8-12' },
      { name: 'Machine Shoulder Press', sets: 2, reps: '10-12' },
      { name: 'Bodyweight Dips', sets: 2, reps: '10-15' },
      // Arms & Delts
      { name: 'Preacher Curl', sets: 2, reps: '10-15' },
      { name: 'Tricep Pushdown', sets: 2, reps: '10-15' },
      { name: 'Lateral Raise', sets: 2, reps: '15-20' },
    ],
  },
  { dayName: 'Saturday | Rest', routine: [] },
];

export default Workouts;
