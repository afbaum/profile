import React from "react";
import Background from "../../images/owls3.png";

import '../../App.css';

function Header(props){
  return(
    <div className="container-fluid">
      <img src={Background} alt='logo'/>
    </div>
  )
}

export default Header
