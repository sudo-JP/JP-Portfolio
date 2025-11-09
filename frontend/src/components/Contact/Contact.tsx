import './Contact.css'
import contact from '../../images/contact'
import { IconType } from 'react-icons';
import { useState } from 'react'; 
import React from 'react'; 

interface Props {
    name: string, 
    content: string, 
    Icon: IconType,
    link: string, 

}


function Contact() {

    return (
        <div className='contact'>
            <div className='link-container'>
                {contact.map((contact: Props)=>{
                    const [ishover, setishover] = useState(false)

                    function MouseOver() {
                        setishover(true);
                    }
                    
                    function MouseOut() {
                        setishover(false); 
                    }
                    return <div className='contact-row'>

                        <div className='hover-contact' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                            <a className='contact-link' href={contact.link} target='_blank'>
                                <contact.Icon className='icon' size={45} />
                            </a> { ishover && (
                                <div className='contact-content'>{contact.content}</div>
                            )}

                        </div>
                    </div>
                })}     

            </div>
        </div>
    );
}

export default Contact;