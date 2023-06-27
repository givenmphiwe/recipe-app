import React from "react";
import { Link } from 'react-scroll';


function Productbox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>

      <div className="a-b-text">
        <h2> {props.title} </h2>
        <button  className="productbox-button"><Link to="about" smooth={true} duration={2000}>Recipes</Link></button>
      </div>
    </div>
  );
}

export default Productbox;
