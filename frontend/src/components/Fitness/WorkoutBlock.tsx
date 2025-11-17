// WorkoutBlock.tsx
export interface Exercise {
  name: string;
  sets: number | string; 
  reps: string;         
}

export interface WorkoutDay {
  dayName: string;
  routine: Exercise[];
}

interface WorkoutBlockProps {
  dayName: string;
  routine: Exercise[];
}


export default function WorkoutBlock({ dayName, routine }: WorkoutBlockProps) {
  return (
    <div className="bg-[#fff0e6] p-6 rounded-xl w-full max-w-md mx-auto font-bold text-[#575279] font-sans min-h-[6rem] flex flex-col">
      <div className="text-2xl font-bold text-[#eb6f92] mb-4 tracking-wide">
        {dayName}
      </div>

      {routine.length === 0 ? (
        <span className="opacity-50 text-center italic mt-auto">Rest day</span>
      ) : (
        routine.map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_auto] gap-2 my-1 text-md"
          >
            <span className="opacity-90">{ex.name}</span>
            <span className="opacity-70 font-mono text-right">{ex.sets} sets</span>
            <span className="opacity-70 font-mono text-left">| {ex.reps} reps</span>
          </div>
        ))
      )}
    </div>
  );
}
