import './Projects.css'
import projects from '../../images/projects'
import more from '../../images/morev2.png'

interface Props {
    n: number, 
    name: string, 
    img: string, 
    link: string
}


function Projects() {
    return (
        <div className='container'>
            <div className='projects'>
                {projects.map((work: Props, index)=>{
                    return <a href={work.link}><img className='img' key={index} src={work.img} alt="" /></a>
                })}
            </div>
            <a href="https://github.com/JaseCodez" className='anchor' target='_blank'>
                <div className="showmore">
                    <p>Check Out My Github</p>
                    <img src={more} className='more' />

                </div>
            </a>
           
        </div>
    );
}

export default Projects;