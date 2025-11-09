import './Card.css'

interface Props {
    day: string, 
    wo_style: string
    f: ()=>void
}

function Card(workout: Props) {
    return (
        <button onClick={workout.f} className='card'>
            <div>
                <h1>{workout.day}</h1>

                <p>{workout.wo_style}</p>
            </div>

        </button>
    );
}

export default Card; 