import React from 'react';
import Header from '../Components/Header';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import arr from '../images/resource.png'
import r1 from '../images/r1.png';
import pod from '../images/pod.png'
import r2 from '../images/r2.png';
import r3 from '../images/r3.png'
import read from '../images/read.png'
import rr1 from '../images/rr1.png'
import rr2 from '../images/rr2.png'
import rr3 from '../images/rr3.png'
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';




const Resource = () => {
  return (
    <div>
      <Header/>


        <section className='resource1'>

          <div className='res'>

            <div className='res-l'>
              <div className='serv2-top res-top'>
                <span className='start'>
                  <span><Link to ='/'>Home</Link></span>
                  <span className='arr'><IoIosArrowForward/></span>
                  <span>Resources</span>
                </span>
              </div>
              <h6 className='icon-text' style={{backgroundColor:'#FFF9EB'}}>
                  <img src={arr} alt=""/>
                  <span style={{color:'#EBAD03'}}>UNLOCK YOUR POTENTIAL</span>
              </h6>

              <h2>Download and Subscribe</h2>
              <p>Focused on advising companies on long-term strategy, growth plans, and market positioning.</p>

              <div className='res-form'>
                <form className='comb' style={{border:'2px solid #BDC1CA'}}>
                  <input type="email" name="" id="" placeholder='Email Address'/>
                  <button>Subscribe</button>
                </form>
              </div>
              

            </div>
            
            <div className='res-r'> 
              <img src={r1} alt="" />
            </div>

          </div>

        </section>

        <section className='podcast'>

          <div className='pod-l'>

            <h6 className='icon-text'>
              <img src={pod} alt=""/>
              <span>PODCAST</span>
            </h6>
            <h1>A Series of Podcast</h1>
            <img src={r2} alt="" />

          </div>

          <div className='pod-r'>
            <h5>Recent Podcast episodes</h5>
            <div className='recent-pod'>
              <div className='pod-flex'>
                <div>
                  <button>EPISODE 123</button>
                  <button>MAY 8, 2023</button>
                </div>
                <p>36 min</p>
              </div>

              <h1>123 - Discussing the importance of creating a business strategy</h1>
              <p>A business strategy provides a clear sense of direction. It helps stakeholders understand where the company is headed and what it aims to achieve. This clarity ensures that everyone is aligned and working...</p>

            </div>

            <div className='recent-pod'>
              <div className='pod-flex'>
                <div>
                  <button>EPISODE. 124</button>
                  <button>MAY 8, 2023</button>
                </div>
                <p>36 min</p>
              </div>

              <h1>124 - Inspiring stories of businesses transformed by strategic planning</h1>
              <p>The company hired a business consultant to develop a strategic plan. After thorough analysis, the consultant recommended focusing on building a strong online presence while enhancing the in-store...</p>

            </div>

            <div className='recent-pod'>
              <div className='pod-flex'>
                <div>
                  <button>EPISODE. 125</button>
                  <button>MAY 8, 2023</button>
                </div>
                <p>36 min</p>
              </div>

              <h1>125 - Actionable tips for entrepreneurs to analyze their target audience</h1>
              <p>Remember, the goal is to develop a deep understanding of your target audience's needs, preferences, and behaviors. By continuously analyzing and adapting your approach, you can refine your business strategies...</p>

            </div>


            <span className='see'>
              <span>See all episodes</span>
              <IoIosArrowForward/>
            </span>

          </div>

        </section>


        <div className='border-c'>

          <div>
            <h6>As featured in</h6>
            <h4>BizBeat Insights</h4>
            <h5>FinancialScope</h5>
            <h3>CommerceCurrent Pulse</h3>
          </div>
          
        </div>


        <div className="empower">

          <div className='emp-l'>
            <img src={r3} alt="" />
            <h3>Strategizing</h3>
            <div className='learn'>
              <button>Skills</button>
              <span className='see'>
              <span>Learn more</span>
              <IoIosArrowForward/>
            </span>
            </div>

          </div>

          <div className='emp-r'>
            <h6 className='icon-text'>
              <img src={read} alt=""/>
              <span>READ</span>
            </h6>
            <h3>Empowering content for success.</h3>
            <p>One of the key strengths of this book is its focus on actionable advice and real-world examples. The authors draw from their extensive experience working with tech entrepreneurs to provide insights and strategies that are both practical and relevant.</p>
          </div>

        </div>


        <section className='books'>

          <div className='book'>
            <img src={rr1} alt="" />
            <h2>Watch Out</h2>
            <p>In order to stand out in the tech industry, every entrepreneur should learn first and foremost...</p>

            <div>
              <button>Skills</button>
              <span>
                <span>Learn More</span>
                <IoIosArrowForward/>
              </span>
            </div>

          </div>

          <div className='book'>
            <img src={rr2} alt="" />
            <h2>The 80/20 rule</h2>
            <p>A principle of the 80-20 rule is to identify an entity's best assets and use them efficiently...</p>

            <div>
              <button>Principle</button>
              <span>
                <span>Learn More</span>
                <IoIosArrowForward/>
              </span>
            </div>

          </div>


          <div className='book'>
            <img src={rr3} alt="" />
            <h2>Hooked</h2>
            <p>Knowing your customers’ preferences and behaviour is the foundation for a relationship...</p>

            <div>
              <button>Principle</button>
              <span>
                <span>Learn More</span>
                <IoIosArrowForward/>
              </span>
            </div>

          </div>

        </section>

        <div className="res-test">
          <h2>Reviews</h2>
          <Testimonial/>
          
        </div>

        <Footer/>


    </div>
  )
}

export default Resource