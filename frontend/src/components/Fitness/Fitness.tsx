import WorkoutBlock from './WorkoutBlock.tsx';
import Workouts from './Workout.ts'; 

function Fitness() {
  return (
    <section
      id="fitness"
      className="bg-[#907aa9] py-12 px-4 md:px-16 flex flex-col items-center">
      <h2 className="text-[#faf4ed] mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-12">
        Fitness 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {Workouts.map((workout, idx) =>
          workout.routine.length > 0 ? <WorkoutBlock key={idx} {...workout} /> : null
        )}
      </div>

    </section>
  );
}

export default Fitness;

