import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import '../App.css';
import prof from '../images/prof-removebg-preview.png'
import { FaStar} from "react-icons/fa";
import av1 from '../images/Avatar 6.png';
import av2 from '../images/Avatar 7.png'
import av3 from '../images/Avatar 8.png'



const Testimonial = () => {


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
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (


          <div className='test'>

        
            <Carousel className='one'
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            <div className='test-main'>
              <div className='flex-main'>
                <img src={av1} alt="" />
                <div>
                  <h4>Anna Rose</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                          
          </div>

          <div className='test-main'>
              <div className='flex-main'>
                <img src={av2} alt="" />
                <div>
                  <h4>Ashley Robinson</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I recently hired a business coach and was highly impressed with their support and expertise.”</h5>
                          
          </div>

          <div className='test-main'>
              <div className='flex-main'>
                <img src={av3} alt="" />
                <div>
                  <h4>Jay Rutherford</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I highly recommend a business coach for anyone starting or growing their business. They offered invaluable guidance and support to me.”</h5>
                          
          </div>

          <div className='test-main'>
              <div className='flex-main'>
                <img src={av1} alt="" />
                <div>
                  <h4>Sarah Jackson</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I hesitated to invest in consulting services initially, but working with a business coach turned out to be one of my best decisions ever.”</h5>
                          
          </div>


          <div className='test-main'>
              <div className='flex-main'>
                <img src={av2} alt="" />
                <div>
                  <h4>Anna Rose</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                          
          </div>

          <div className='test-main'>
              <div className='flex-main'>
                <img src={av3} alt="" />
                <div>
                  <h4>Anna Rose</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                          
          </div>


          <div className='test-main'>
              <div className='flex-main'>
                <img src={av2} alt="" />
                <div>
                  <h4>Anna Rose</h4>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>
                  <FaStar className='star'/>

                </div>
              </div>

              <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                          
          </div>
              
          </Carousel>
      </div>


    
    )
}

export default Testimonial