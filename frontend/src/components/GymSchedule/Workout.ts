interface Workout {
  day: string, 
  wo_style: string 
  detailed_wo: string[]
}

const workouts: Workout[] = [];

let sun: Workout = {
    day: "Sunday", 
    wo_style: "Rest", 
    detailed_wo: ['Resting...']
}

let mon: Workout = {
    day: "Monday", 
    wo_style: "Push", 
    detailed_wo: [
        '3x8-12 Dips', 
        '3x8-12 Shoulder Press Machine',
        '3x8-12 Pike Push Ups', 
        '3x8 Incline Bench', 
        '3x12-15 Over-head Extensions',
        '3x12-15 Triceps Push Down', 
        '3x12-15 Lateral Raise'
    ] 
}

let tue: Workout = {
    day: "Tuesday", 
    wo_style: "Pull", 
    detailed_wo: [
        '3x5-10 Pull Ups', 
        '3x8-12 Lat Pull Down', 
        '2x8-12 Wide Grip Row', 
        '2x8-12 Close Grip Row', 
        '3x8-12 Face Pulls Omnidirectional', 
        '3x8-12 Lower Back Extension', 
        '6x12-15 Biceps Mix & Match'
    ] // write
}

let wed: Workout = {
    day: "Wednesday", 
    wo_style: "Rest", 
    detailed_wo: ['Resting...']
}

let thu: Workout = {
    day: "Thursday",
    wo_style: "Lower", 
    detailed_wo: [
        '3x8 Squat', 
        '3x8-12 Leg Extension', 
        '3x8-12 Hamstring Curl', 
        '3x8-10 Leg Abductor', 
        '3x15 Calf Raises'
    ]
}

let fri: Workout = {
    day: "Friday", 
    wo_style: "Upper", 
    detailed_wo: [
        '1x5-10 Pull Ups', 
        '1x6-10 Dips', 
        '2x8-10 Lat Pull Down', 
        '2x6-8 Pike Push Ups', 
        '2x8-10 Wide Grip Rows',
        '2x8-10 Incline Bench', 
        '3x10-12 Face Pulls', 
        '4x15 Triceps Mix & Match', 
        '3x12-15 Biceps', 
        '3x12-15 Lateral Raise'
    ]
}

let sat: Workout = {
    day: "Saturday", 
    wo_style: "Rest", 
    detailed_wo: ['Resting...']
}

workouts.push(sun)
workouts.push(mon)
workouts.push(tue)
workouts.push(wed)
workouts.push(thu)
workouts.push(fri)
workouts.push(sat)

export default workouts;