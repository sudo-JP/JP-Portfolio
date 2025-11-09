import './DetailedCard.css'
import { IoMdClose } from "react-icons/io";


interface Props {
    wo_style: string, 
    detailed_wo: string[]
    f: ()=>void;
    modal: boolean; 
}

// [hello, world]

function DetailedCard(workout: Props) {
    return (
        <>
            {workout.modal && (<div className='modal'>
                <div className='overlay'>
                    <div className="modal-content">
                        <h1>{workout.wo_style}</h1>
                        <ul>
                            {workout.detailed_wo.map((wo: string)=>{
                                return <li>{wo}</li>
                            })}

                        </ul>
                        <div className='close-btn' onClick={workout.f}>
                            <IoMdClose className="close" size={25}/>
                        </div>
                    </div>

                </div>
            </div>)}
        </>
    );
}

export default DetailedCard;