import React from 'react';
import {NavLink} from "react-router-dom";



      function Navigation() {
        return (
          <div className="Navigation">
     <NavLink to='/Login'>
        Login
      </NavLink>
      <NavLink to='/Welcome'>
        Welcome
      </NavLink>
          </div>
        );
      }
      
      
      export default Navigation;