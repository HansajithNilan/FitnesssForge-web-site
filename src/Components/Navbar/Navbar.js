import React from 'react'

import "./Navbar.css";

function Navbar() {
  return (
    <div className='navwrapper'>
        <div className='nav clearfix'>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Ourclass</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">Events</a></li>
                
                <form>
                    <input type="text" name ="text"next="search-box"/>
                </form>
                
            </ul>
          
            </div>
         
            
    </div>
  )
}

export default Navbar
