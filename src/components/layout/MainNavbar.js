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
          <li><Link to='/'>Outputs</Link></li>
          <li><Link to='/all-researchers'>Researchers</Link></li>
          <li><Link to='/you'>You</Link></li>
        </ul>
      </nav>
    </header>

  );
}

export default MainNavbar;
