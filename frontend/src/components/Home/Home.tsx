import './Home.css'
import pfp from '../../images/allmysocialmediaaccountsafteronegoodpicture.jpg'
import { TypeAnimation } from 'react-type-animation';
import Contact from '../Contact/Contact';

function PFP() {
    const word: (string | number)[] = ['I\'m a student at the University of Toronto Mississauga', 3000,
            'I\'m doing computer science', 3000,
            'I\'m interested in Robotics', 3000, 
            'I\'m interested in Low-level Programming', 3000,
            'I\'m interested in Data Science', 3000]
    return (
        <div className='home'>
            <img src={pfp} alt='Avatar'></img>
            <h1>Jason Phan</h1>
            <div className='typing'>
                <TypeAnimation sequence={word}
                    wrapper='span' speed={50} repeat={Infinity} />
            </div>
            <Contact />
        </div>
    );
}

export default PFP; 