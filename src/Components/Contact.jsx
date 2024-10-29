import React from 'react';
import { FaMapMarker, FaPhone, FaMailBulk} from "react-icons/fa";


const Contact = () => {
  return (
    <div className='contacts' id='contact'>
        <h1>Get In Touch</h1>
        <p>If you have any questions or need help, please fill out the form below.</p>

        <div className="contact-us">
            <form>
                <input type="text" name="" id="" placeholder='Name'/>
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="text" name="" id="" placeholder='Subject'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button type="submit">Send Message</button>
            </form>
       

            <div className="location">
                <div className='c-t'>
                    <FaMapMarker className='icons'/>
                    <div>
                        <a>Lagos, Nigeria.</a><br/>
                        <a>Rosemead, CA 91770</a>
                    </div>
                </div>

                <div className='c-t'>
                    <FaPhone className='icons'/>
                    <div>
                        <a>09181726262</a><br/>
                        <a>07017165152</a>
                    </div>
                </div>

                <div className='c-t'>
                    <FaMailBulk className='icons'/>
                    <div>
                        <a>bosporan@gmail.com</a><br/>
                        <a>bosporan@gmail.com</a>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact