import React, { useState } from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom'; // Remove this line if not using Link component
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  // Menu functionality

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add the icons

  library.add(faCircleXmark, faBars);

  return (
    <div className='navbar'>
        <nav>
            <ul className={menuOpen ? "active" : ""}>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Achievements & Activities</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <FontAwesomeIcon icon={faCircleXmark} onClick={toggleMenu}/>
            </ul>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
        </nav>
    </div>
  );
}

export default Navbar;
