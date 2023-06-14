import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const [cartTours, setCartTours] = useState(0);

  let count = useRef(0); //this line is read just in initial render
  console.log(count);

  count.current = count.current + 1;
  console.log('new count : ', count.current); //on every re render this gonna change

  let countVariable = 0;
  console.log(countVariable);

  countVariable = countVariable + 1;
  console.log('new count variable : ', countVariable); //in every re render this not change and is still 1

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} alt='logo' /> */}
          <h2>E-commerce</h2>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* {showLinks && ( */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {/* {links.map((link) => {
              const { id, url, text } = link;
              return ( */}
            {/* <a href={url}>{text}</a> */}
            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/Products'>Products</Link>
            {/* );
            })} */}
          </ul>
        </div>
        {/* )} */}
        <ul className='social-icons'>
          {/* {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })} */}
          <Link to='/Cart' className='myLink' title='shopping-cart'>
            <p className='text'>Cart</p>
            <FaShoppingCart className='mySvg' />
            <span className='numberOfTour'>{cartTours}</span>
          </Link>

          <Link to='/Login' className='myLink' title='Login'>
            <p className='text'>Login</p>
            <AiOutlineLogin className='mySvg' />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
