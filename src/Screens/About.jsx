import React, {useState} from 'react'
import Header from '../Components/Header'
import about from '../images/abt.png'
import val from '../images/Group 9.png'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';


const About = () => {

  const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);


  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

  return (
    <div>
        <Header/>

        <div className='abt1'>
            <h1>About Us</h1>
            <div>
                <img src={about} alt="" />
                <p>We provide personal consulting for tech entrepreneurs, assisting them with time management, growth strategies, and emotional support.</p>
                <p>Tech entrepreneurs seeking support and guidance can benefit from our experience. Partner with Rotatus for valuable insights today</p>
            </div>
        </div>

        <div className='values'>
            <div className='val-img'>
                <img src={val} alt="" />
            </div>

            <div className='val-txt'>
                <h3>Our Values</h3>
                <p>Gain valuable insights and advice as a tech entrepreneur by partnering with Rotatus. With experience in the industry, they offer support and guidance for your success.</p>
            </div>
        </div>

        <section className='abt2'>
            <div className="why">
                <div className='w-l'>
                    <h1>Why US</h1>
                    <p>I spent the last decade experiencing what it takes to grow businesses.</p>
                </div>

                <div className='w-r'>
                    <div className="ques">

                    <div>
                    <h4>Product & Marketing Experience</h4>

                    {  ans ? (
                        <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                        ):null
                    }
                    
                    </div>

                    <div>
                    {
                        open ? (
                        <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click}/>

                        ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev}/>

                    }
                    
                    </div>

                    </div>



                    <div className="ques">

                        <div>
                        <h4>Deep Customer Empathy</h4>

                        {  ans1 ? (
                            <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                            ):null
                        }
                        
                        </div>

                        <div>
                        {
                            open1 ? (
                            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click1}/>

                            ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev1}/>

                        }
                        
                        </div>

                    </div>



                    <div className="ques">

                        <div>
                        <h4>Prioritization & Execution</h4>

                        {  ans2 ? (
                            <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                            ):null
                        }
                        
                        </div>

                        <div>
                        {
                            open2 ? (
                            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click2}/>

                            ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev2}/>

                        }
                        
                        </div>

                    </div>




                    <div className="ques">

                        <div>
                        <h4>Industry Category Breadth</h4>

                        {  ans3 ? (
                            <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                            ):null
                        }
                        
                        </div>

                        <div>
                        {
                            open3 ? (
                            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click3}/>

                            ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev3}/>

                        }
                        
                        </div>

                    </div>
                    

                </div>
            </div>

            <div className='tst'>
                <Testimonial/>

            </div>



        </section>


        <Footer/>
    </div>
  )
}

export default About