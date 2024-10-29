import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';



const Footer = () => {
  return (
    <footer>
        <div className="foot">

            <div className='foot1'>
                <h1> Latest News from </h1>
                <form className='comb'>
                    <input type="email" name="" id="" placeholder='Email Address'/>
                    <button>Subscribe</button>
                </form>
            </div>

            <div className="foot2">

                <h4>Company</h4>

                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Services</a></li>
                </ul>

            </div>

            <div className="foot3">

                <h4>Resources</h4>

                <ul>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Podcasts</a></li>
                    <li><a href="">Books</a></li>
                </ul>


            </div>

            <div className="foot4">
                <h4>Contact</h4>

                <li>
                5007 Ocean Avenue, Charlotte, NC
                </li>
                <li>Bakersfield</li>
                <li><a href="tel:">(610) 945-7986</a></li>
                <li><a href="mailto">real.danieljackson@hotmail.com</a></li>

            </div>
               

        </div>

        <div className='foot5'>
            <div className="foot-icons">
                <FaLinkedin/>
                <FaTwitter/>
                <FaFacebook/>
                <FaInstagram/>
            </div>

            <div className='btn'>
                <button>Free Consultation</button>
            </div>
            
        </div>

    </footer>
  )
}

export default Footer