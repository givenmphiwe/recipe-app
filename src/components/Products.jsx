import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png"
import pimage2 from "../images/s2.png"
import pizza from "../images/pizza.png"
import Turkey from "../images/Turkey.png"

function Products() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto
        vitae vel cum quisquam voluptatum itaque dolorem,
      </p>
      <div className="a-container">
        <Productbox  image={pimage1} title="Burger"/>
        <Productbox  image={pimage2} title="Steak"/>
        <Productbox  image={pizza} title="Pizza"/>
        <Productbox  image={Turkey} title="Turkey"/>
        
      </div>
    </div>
  );
}

export default Products;
