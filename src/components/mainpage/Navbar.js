import React from 'react';
import Logo from "../../images/owlogo.png";

function MainNav(props){
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src={Logo} className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="">Home</a>
            <a className="nav-item nav-link" href="">Projects</a>
            <a className="nav-item nav-link" href="">Audiology</a>
            <a className="nav-item nav-link" href="">Veteran</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNav
