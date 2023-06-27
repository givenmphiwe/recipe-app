import React from "react";
import aboutimage from "../images/about.png";

function Burger() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>RECIPE FOR BURGER</h1>
        <p>
          <b>Ingredients</b>
          <br />
          1/2 pounds ground chuck
          <br />
          2 to 3 dashes Worcestershire sauce
          <br />
          Kosher salt <br />
          Freshly ground black pepper <br />
          8 Portobello mushrooms, stemmed and cleaned <br />
          1 tablespoon olive oil <br />
          1/2 cup freshly grated Swiss cheese <br />
          Drizzles of Dijon mustard <br />
          4 butter lettuce leaves <br />
          8 tomato slices <br />
          1/2 cup crispy jalapeños (such as French's) <br />
          <br />
          1. Preheat a grill or grill pan over medium heat.
          <br />
          2. With your hands, mix the ground chuck, Worcestershire, 1 teaspoon
          kosher salt, and 1/2 teaspoon black pepper thoroughly in a bowl. Form
          the meat into 4 patties. Make an indention with your thumb in the
          center of each patty to keep them from plumping too much when they
          cook. Refrigerate.
         
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default Burger;
