import React, { Component } from 'react';

// import images
import Web from "../../images/code.png";
import Hear from "../../images/hear.png";
import Missiles from "../../images/warren.png";

function MainCards(props){

  return(
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={Web} alt=""/>
          <div className="card-body text-center">
            <h5 className="card-title">Projects</h5>
            <p className="card-text">A list of current Web Development Projects</p>
            <a href="#" className="btn btn-primary">More</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={Hear} alt=""/>
          <div className="card-body text-center">
            <h5 className="card-title">Audiology</h5>
            <p className="card-text">Information about Audiology</p>
            <a href="#" className="btn btn-primary">More</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={Missiles} alt=""/>
          <div className="card-body text-center">
            <h5 className="card-title">Veteran</h5>
            <p className="card-text">Information about Air Force Missilers</p>
            <a href="#" className="btn btn-primary">More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainCards
