import React from 'react'
import { Link } from "react-router-dom";

import classes from './MainNavbar.module.css'


function MainNavbar(props) {
  return (
    <header className={classes.header}>
      <nav>
        <div>
          <img
            src="https://www.nust.na/sites/default/files/nust_logoANDname-DARKBACKGROUND.png"
            alt="nust logo" />
        </div>
        <ul className={classes.links}>
          {/* <li><Link to='/'>Outputs</Link></li>
          <li><Link to='/manager'>Manager</Link></li>
          <li><Link to='/you'>Researcher</Link></li>
          <li><Link to='/admin'>Admin</Link></li> */}
          <li><Link to='/home'>ALL RESEARCH</Link></li>
          <li><Link to={props.path}>PROFILE</Link></li>
          {/* <li><Link to=''>Researcher</Link></li>
          <li><Link to=''>Admin</Link></li> */}
        </ul>
      </nav>
    </header>

  );
}

export default MainNavbar;
