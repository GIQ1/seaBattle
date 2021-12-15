import React from "react";
import { Link } from "react-router-dom";
import s from './NavBar.module.css'

const NavBar =() =>{


   return  <nav className={s.nav}>
   <div className={s.item}>
   <a>News</a>
   </div>
   <div  className={s.item}>
   <Link to="/profile" >Profile</Link>
   </div>
   <div  className={s.item}>
   <Link to="/dialogs">Dialogs</Link>
     </div>
     <div  className={s.item}>
   <a>Music</a>
     </div>
     <div  className={s.item}>
   <a>Games</a>
     </div>
     <div  className={s.item}>
   <a>Other</a>
     </div>
    </nav>

}
export default NavBar;