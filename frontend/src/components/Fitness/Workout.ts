import type { WorkoutDay } from './WorkoutBlock.tsx';

const Workouts: WorkoutDay[] = [
  { dayName: 'Sunday | Rest', routine: [] },
  {
    dayName: 'Monday | Push',
    routine: [
      { name: 'Weighted Dips', sets: 3, reps: '8-12' },
      { name: 'Incline Bench', sets: 3, reps: '6-8' },
      { name: 'Seated Machine Shoulder Press', sets: 3, reps: '8-12' },
      { name: 'Triceps Push Down', sets: 3, reps: '10-15' },
      { name: 'Tricep Overhead Extension', sets: 3, reps: '10-15' },
      { name: 'Lateral Raise', sets: 3, reps: '10-15' },
    ],
  },
  {
    dayName: 'Tuesday | Pull',
    routine: [
      { name: 'Weighted Pull Ups', sets: 3, reps: '5-8' },
      { name: 'Lat Pull Down', sets: 3, reps: '7-10' },
      { name: 'Wide Grip Row', sets: 2, reps: '7-10' },
      { name: 'Close Grip Row', sets: 2, reps: '7-10' },
      { name: 'Omnidirectional Face Pull', sets: 3, reps: '8-12' },
      { name: 'Seated Preacher Curl', sets: 3, reps: '10-15' },
      { name: 'Bayien Curl', sets: 3, reps: '10-15' },
    ],
  },
  { dayName: 'Wednesday | Rest', routine: [] },
  {
    dayName: 'Thursday | Leg',
    routine: [
      { name: 'Squat', sets: 3, reps: '5-10' },
      { name: 'Quad Extension', sets: 3, reps: '10-12' },
      { name: 'Hamstring Curl', sets: 3, reps: '10-12' },
      { name: 'Hip Abduction', sets: 3, reps: '8-10' },
      { name: 'Calf Raises', sets: 3, reps: '10-12' },
    ],
  },
  {
    dayName: 'Friday | Upper',
    routine: [
      { name: 'Weighted Pull Ups', sets: 2, reps: '5-8' },
      { name: 'Weighted Dips', sets: 2, reps: '8-10' },
      { name: 'Lat Pull Down', sets: 2, reps: '8-10' },
      { name: 'Incline Bench', sets: 2, reps: '5-8' },
      { name: 'Rows', sets: 2, reps: '8-10' },
      { name: 'Shoulder Press', sets: 2, reps: '8-10' },
      { name: 'Omni Face Pull', sets: 3, reps: '8-12' },
      { name: 'Tricep Push Down', sets: 2, reps: '10-15' },
      { name: 'Tricep Overhead', sets: 2, reps: '10-15' },
      { name: 'Bicep Preacher', sets: 3, reps: '10-15' },
      { name: 'Lateral Raise', sets: 3, reps: '10-15' },
    ],
  },
  { dayName: 'Saturday | Rest', routine: [] },
];

export default Workouts;
