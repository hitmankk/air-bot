import React from 'react'
import './nav.css';
import Authentication from './authentication';
import AuthModes from './authModes';
interface ContainerProps { }
const Nav: React.FC<ContainerProps> = ()  => {
    
  return (
    <>
    <div className='nav'>
      <nav>
       
      <ul id="sidemenu">
          <li><a href="#header">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Drone</a></li>
          <li><a href="/register">Contact</a></li>
            <li className="nav-item">
           
             
              <div className="dropdown">
  <button className="dropbtn">Profile</button>
  <div className="dropdown-content">
   <Authentication/>
  
   
  </div>
  
</div>
</li>
            <li className="nav-item">
           
             
              <div className="dropdown">
  <button className="dropbtn">Modes</button>
  <div className="dropdown-content">
   <AuthModes/>
  
   
  </div>
  
</div>
</li>
</ul>
       
      </nav>

    </div>
    </>
  )
}

export default Nav;
