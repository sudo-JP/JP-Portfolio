import './CV.css'
import cv from '../../images/cv'
import language from './language'
import courses from './relevant_course'

interface CV {
    name: string, 
    img: string 
}

function bullets(iterable: string[], header: string, className: string) {
    return (<div className="yap">
        <h1>{header}</h1>
        <br />
        <ul>
        {iterable.map((iter: string)=>{
            return (<li className={className}>
                {iter}
            </li>);
            })}
        </ul>
    </div>
    );
}

function CV() {
    return (
        <div className='cv-container'>
            <div id="resume-container">
                <img src={cv['resume'].img} className='cv'/>
            </div>
            <br />
            <div className='yap-container'>
                {bullets(language, "Coding languages I've learned", 'language')}
                {bullets(courses, "Relevant courses", 'course')}

            </div>

        </div>
    );
}

export default CV;