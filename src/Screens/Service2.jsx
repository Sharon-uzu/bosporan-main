import React from 'react';
import Header from '../Components/Header';
import { IoIosArrowForward } from "react-icons/io";
import servimg from '../images/serv2.png'
import servimg1 from '../images/serv2-a.png'
import mark from '../images/N check 1.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';



const Service2 = () => {
  return (
    <div >
        <Header/>
        <div className='serv2-top'>
            <span className='start'>
                <span><Link to='/service'>Services</Link></span>
                <span className='arr'><IoIosArrowForward/></span>
                <span>Implementation</span>
            </span>
        </div>

        <div className="serv-hero">
            <div className='serv-hero1'>
                <h1>Services</h1>
                <p>Implementation</p>
                <p>Marketing Strategy</p>
                <p>Business Strategy</p>
                <p>Planning and Analysis</p>
                <p>Ongoing Support</p>
            </div>
            <div className='serv-hero2'>
                <img src={servimg} alt="" />
            </div>

            <div className='serv-hero3'>
                <h3>Implementation</h3>
                <p>Implementation services involve the practical execution of plans, strategies, or solutions to achieve specific goals. These services can encompass a wide range of areas, including technology, business processes, organizational changes, and more</p>
            </div>
        </div>

        <div className='serv2-bottom'>
            <div className='serv2-bottom-c'>
                <h2>Focused on advising companies on their long-term growth</h2>
                <p>Understand the Business: Gain a deep understanding of the company's current operations, industry landscape, competitive positioning, strengths, weaknesses, opportunities, and threats. This lays the foundation for tailored growth strategies.</p>
                <p>Define Clear Objectives: Work with the company's leadership to set specific, measurable, achievable, relevant, and time-bound (SMART) long-term growth objectives. These objectives could include revenue targets, market expansion goals, customer acquisition goals, and more.</p>
                <p>Conduct a SWOT Analysis:Perform a thorough analysis of the company's strengths, weaknesses, opportunities, and threats. This analysis provides insights into what the company can leverage and where it needs to improve to achieve sustainable growth.</p>
                
                <h2 className='thrive'>Solutions that help your business thrive</h2>

                <div className='solns'>
                    <div className='solns-text'>
                        <span className='soln1'>
                            <img src={mark} alt="" />
                            <span>Strategic Planning</span>
                        </span>
                        <span className='soln1'>
                            <img src={mark} alt="" />
                            <span>Market Research</span>
                        </span>
                        <span className='soln1'>
                            <img src={mark} alt="" />
                            <span>Innovation and Product Development</span>
                        </span>
                        <span className='soln1'>
                            <img src={mark} alt="" />
                            <span>Customer Experience Enhancement</span>
                        </span>

                    </div>
                    <div className='solns-img'>
                        <img src={servimg1} alt="" />
                    </div>
                </div>

                <h4 >Solutions that help your business thrive</h4>
                <p>Streamline your internal processes to improve efficiency and reduce operational costs. Implement automation tools, workflow management systems, and lean methodologies to eliminate bottlenecks and enhance productivity.</p>

                <div className='btns'>
                    <button>Get Free Materials</button>
                   <button className='call'> <a href="">Call Now</a></button>
                </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Service2