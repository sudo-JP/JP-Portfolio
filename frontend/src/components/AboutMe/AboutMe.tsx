import './AboutMe.css'
import jason from '../../images/permed-jason.jpg'
import yap1 from './AboutMeText'
import yap2 from './knowledges'

function AboutMe() {
    return (
       <div className="about-me">
        <div className="about-me-img-container">
            <img src={jason} className="about-me-img" /> 
        </div>

        <div className="about-me-para">
            <p>Hey there! I'm <span>Jason Phan</span>{yap1}</p>
            <br></br>
            <p>{yap2}</p>
        </div>

       </div> 
    ); 
}

export default AboutMe;