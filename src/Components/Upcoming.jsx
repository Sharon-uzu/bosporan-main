import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import '../App.css';
import flyer1 from '../images/business1.jpg'

const Upcoming = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
    <div className='upcoming' id='upcoming'>
        <h1 className='up-event'>UPCOMING EVENTS</h1>
        
        <Carousel responsive={responsive}>
            <div className='up'>
                <img src={flyer1} alt="" />
                <div className='up-text'>
                    <h3>Business Meeting</h3>
                    <h4>Lamaco Hall, Port Harcourt</h4>
                    <p>13th Nov. 2023.</p>
                </div>
                  
            </div>

            <div className='up'>
                <img src={flyer1} alt="" />
                <div className='up-text'>
                    <h3>Business Meeting</h3>
                    <h4>Lamaco Hall, Port Harcourt</h4>
                    <p>13th Nov. 2023.</p>
                </div>
                  
            </div>

            <div className='up'>
                <img src={flyer1} alt="" />
                <div className='up-text'>
                    <h3>Business Meeting</h3>
                    <h4>Lamaco Hall, Port Harcourt</h4>
                    <p>13th Nov. 2023.</p>
                </div>
                  
            </div>

          
          
        </Carousel>

    </div>
  )
}

export default Upcoming