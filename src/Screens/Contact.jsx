import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FaAddressBook } from 'react-icons/fa'
import con from '../images/con.png'

const Contact = () => {
  return (
    <div>
        <Header/>

        <section className='contact'>
          <div className='contact-c'>
            <div className='con1'>
              <h1>Get in touch</h1>
              <p>Advising companies on long-term growth, and market positioning.</p>
              <form>
                <label htmlFor="firstName">
                  Your First Name
                  <input type="text" name="" id="" placeholder='First Name'/>
                </label>

                <label htmlFor="lastName">
                  Your Last Name
                  <input type="text" name="" id="" placeholder='Last Name'/>
                </label>

                <label htmlFor="email" className='label2'>
                  Your Email
                  <input type="text" name="" id="" placeholder='Email'/>
                </label>

                <label htmlFor="message" className='label2'>
                  Your Message
                  <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>

              <div className='con2'>

                <span>
                  <FaAddressBook className='con-icon'/>
                  <p>5007 Ocean Avenue, Charlotte</p>
                </span>

                <span>
                  <FaAddressBook className='con-icon'/>
                  <p><a href="tel:">(610) 945-7986</a></p>
                </span>


                <span>
                  <FaAddressBook className='con-icon'/>
                  <p><a href="mailto:real.danieljackson@hotmail.com">real.danieljackson@hotmail.com</a></p>
                </span>


              </div>

              <div className='con3'>

                <img src={con} alt="" />
                
              </div>


              
                
            

          </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Contact