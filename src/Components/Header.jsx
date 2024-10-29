import React from 'react';
import {useState} from 'react';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [activeNav, setActiveNav] = useState('/')

  return (
    <div>
        <header>
        
        <nav>

          <div className="logo"><h6>Bosporan Groups</h6></div>

          <ul className={click ? 'menu active' : 'menu'}>

            <div className='list1'>
              <li><Link to = '/'>Home</Link></li>
              <li><Link to = '/about'>About</Link></li>
              <li><Link to='/service'>Services</Link></li>
              <li><Link to='/resource'>Resources</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </div>

            <div className='list2'>
              <button>Free Consultation</button>
            </div>
            
          </ul>

          <div className='bars' onClick={handleClick}>
          {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
            
        </div>

        </nav>

        {/* <div className={click ? 'cover' : 'cover active'}></div> */}
      
      </header>
    </div>
  )
}

export default Header