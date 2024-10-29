import React, {useState} from 'react';
import hr from '../images/Image 25.png'
import intro from '../images/Image 22.png';
import hr2 from '../images/Image 21.png';
import str from '../images/Image 23.png'
import { IoIosArrowForward } from "react-icons/io";
import core from '../images/Group.png';
import img1 from '../images/Image 35.png'
import img2 from '../images/Image 36.png'
import img3 from '../images/Image 37.png'
import img4 from '../images/Image 38.png'
import img5 from '../images/Image 39.png';
import prof from '../images/Avatar 5.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import comm from '../images/Image 34.png'
import card2 from '../images/Image 32.png'
import faq from '../images/Image 26.png'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import card1 from '../images/Image 33.png'
import blog1 from '../images/Image 28.png'
import blog2 from '../images/Image 29.png'
import blog3 from '../images/Image 30.png'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Testimonial from './Testimonial';





const Hero = () => {

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 710 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 710, min: 0 },
      items: 1
    }
  };

  return (
    <>

        <Header/>
        <div className="hero" id='home'>
        <div className='hr-img'>
          <img src={hr} alt="" />
        </div>

        <div className='hr-text'>

          <h2>Empowering Entrepreneurs to Succeed</h2>
          <p>Advising companies on strategy, growth plans, and market positioning.</p>
          <button>Discover More</button>

        </div>
      </div>


      <div className="hero2">
        <div className='hr2-txt'>

          <h6 className='icon-text'>
            <img src={intro} alt="" />
            <span>INTRODUCTION</span>
          </h6>

          <h2>Startup workforce optimization</h2>
          <p>Leveraging technology for operational improvement and long-term growth strategies.</p>
          <button>Learn More</button>

        </div>

        <div className='hr2-img'>
          <img src={hr2} alt="" />
        </div>
      </div>


      <div className='border'>
        <div className='border-c'>

          <div>
            <h6>As featured in</h6>
            <h4>BizBeat Insights</h4>
            <h5>FinancialScope</h5>
            <h3>CommerceCurrent Pulse</h3>
          </div>
          
        </div>


        <div className='strategy'>

          <div className='str1'>

            <div className='str-c'>
              <h2>Business Strategy</h2>
              <p>Strategic management formulates and implements major goals and initiatives.</p>
              <a href=""><span>Learn More</span><IoIosArrowForward /></a>
            </div>

            <div className='str-c'>
              <h2>Planning and Analysis</h2>
              <p>Four activities for financial health: planning, budgeting, integrated financial planning, and performance management.</p>
              <a href=""><span>Learn More</span><IoIosArrowForward /></a>
            </div>

            <div className='str-c'>
              <h2>Ongoing Support</h2>
              <p>Ongoing support services provide assistance to customers for a limited period.</p>
              <a href=""><span>Learn More</span><IoIosArrowForward /></a>
            </div>

          </div>



          <div className='str2'>
            <img src={str} alt="" />
          </div>

        </div>


        <section className='commit'>

          <div className='commit-l'>

            <h6 className='icon-text'>
              <img src={core} alt="" />
              <span> OUR CORE VALUES</span>
            </h6>
            <h1>Committed to growing and improving</h1>

            <div className='commit-h'>
              <img src={prof} alt="" />
              <div>
                <h6>Eliezer Nneeh</h6>
                <p>CEO EasyWP</p>
              </div>
            </div>

          </div>




          <div className='commit-r'>

            <div className='commit-c-r'>
              <p>Integrity</p>
              <img src={img1} alt="" />
            </div>

            <div className='commit-c-r'>
              <p>Collaboration</p>
              <img src={img2} alt="" />
            </div>

            <div className='commit-c-r'>
              <p>Growth</p>
              <img src={img3} alt="" />
            </div>

            <div className='commit-c-r'>
              <p>Reliability</p>
              <img src={img4} alt="" />
            </div>


            <div className='commit-c-r'>
              <p>Commitment</p>
              <img src={img5} alt="" />
            </div>


          </div>
        
        </section>

        <div className='reviews'>

          <h2>Reviews</h2>    

          <Testimonial/>
        </div>

      <div className="community">
        <div className='top'>
          <div className='top1'>
            <h6 className='icon-text'>
              <img src={comm} alt="" />
              <span style={{color:'#3F3DE0'}}>COMMUNITY</span>
            </h6>
            <h1>Gain insights from experts.</h1>

          </div>
          <div className='top2'>
            <p>By carefully vetting and verifying each author, we ensure that our authors are experienced in their respective fields. </p>
          </div>
        </div>


        <div className='bottom'>
          <div className='card'>

            <img src={card1} alt="" />
            <h2>Ryan White</h2>
            <p>Proident incididunt aute excepteur sint elit magna sint qui aute.</p>

          </div>

          <div className='card'>

            <img src={card2} alt="" />
            <h2>Mark Taylor</h2>
            <p>Ex quis ex labore non sit culpa enim proident voluptate incididunt.</p>

          </div>

          <div className='card'>

            <img src={hr} alt="" />
            <h2>Emma Wilson</h2>
            <p>Proident enim velit laboris ea velit Lorem excepteur ipsum. </p>

          </div>

        </div>


      </div>



      <div className="faq">

        <h6 className='icon-text'>
              <img src={faq} alt="" />
              <span>FAQ</span>
            </h6>

            <h2>Have Questions? </h2>
            <h2 className='answers'>Get Answers</h2>


            <div className="ques">

              <div>
                <h4>How can a personal consultant help me manage my time?</h4>

                {  ans ? (
                  <p>How can a personal consultant help me manage my time?</p>
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
                <h4>What strategies can a personal consultant help me develop for growth and success?</h4>

                {  ans1 ? (
                  <p>How can a personal consultant help me manage my time?</p>
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
                <h4>What experience should I seek in a personal consultant?</h4>

                {  ans2 ? (
                  <p>How can a personal consultant help me manage my time?</p>
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
                <h4>How do I know if a personal consultant is the right fit for me and my business?</h4>

                {  ans3 ? (
                  <p>How can a personal consultant help me manage my time?</p>
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


      <div className="blogs">
        <h2>Recent Blog Posts & Update</h2>

        <div className='blog-cards'>

          <div>
            <img src={blog1} alt="" />
            <h3>Equity</h3>
            <p>In aliquip reprehenderit consectetur do ad in. Voluptate occaecat est est</p>

            <span>
              <span className='one'>Skills</span>
              <span className='two'>Learn More <IoIosArrowForward className='forward'/></span>
            </span>
          </div>

          <div>
            <img src={blog2} alt="" />
            <h3>Diversity</h3>
            <p>Amet eu excepteur deserunt ullamco enim ullamco Lorem in fugiat aliquip cupidatat </p>

            <span>
              <span className='one'>Skills</span>
              <span className='two'>Learn More <IoIosArrowForward className='forward'/></span>
            </span>
          </div>


          <div>
            <img src={blog3} alt="" />
            <h3>Financial</h3>
            <p>Elit ea excepteur ea laboris incididunt in pariatur sint reprehenderit magna officia</p>

            <span>
              <span className='one'>Finance</span>
              <span className='two'>Learn More <IoIosArrowForward className='forward'/></span>
            </span>
          </div>
          
        </div>





      </div>



      <Footer/>

    </div>

      </>
    
  )
}

export default Hero