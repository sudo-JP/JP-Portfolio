import './GymDay.css'
import React, { useState } from "react"; 
import Card from "./Card";
import DetailedCard from './DetailedCard';

interface Props {
    day: string, 
    wo_style: string,
    detailed_wo: string[]
}


function GymDay(workout: Props) {
    const [modal, setModal] = useState(false); 

    const toggleModal = () => {
       setModal(!modal) 
    }
            //<DetailedCard wo_style={workout.wo_style} detailed_wo={workout.detailed_wo}/>
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
    <div className="gym-day">
        <Card f={toggleModal} day={workout.day} wo_style={workout.wo_style}/>
        <DetailedCard wo_style={workout.wo_style}
         detailed_wo={workout.detailed_wo}
         f={toggleModal}
         modal={modal}
         /> 
      
        
    </div>

    ); 
}

export default GymDay;