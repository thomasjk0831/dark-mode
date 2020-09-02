import React, { useState } from 'react';
// import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = (props) => {
  const { darkMode, toggleMode } = props
  // const  [darkMode, setDarkMode, toggleMode] = useDarkMode('dark', false)

  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };

  return (
       <nav className="navbar">
      <h1>Crypto Tracker</h1>
  <h2>{darkMode?<div>true</div>:<div>false</div>}</h2>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    
  );
};

export default Navbar;
