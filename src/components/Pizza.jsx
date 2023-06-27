import React from "react";
import aboutpizza from "../images/aboutpizza.jpg";

function Pizza() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>RECIPE FOR PIZZA</h1>
        <p>
          <b>Ingredients</b>
          <br />
          1 head cauliflower, stalk removed
          <br />
          1/2 cup shredded mozzarella
          <br />
          1/4 cup grated Parmesan
          <br />
          1/2 teaspoon dried oregano <br />
          1/2 teaspoon kosher salt
          <br />
          1/4 teaspoon garlic powder <br />
          2 eggs, lightly beaten <br />
          <br />
          <br />
          1. Preheat the oven to 400 degrees F. Line a baking sheet with
          parchment paper.
          <br />
          2. Break the cauliflower into florets and pulse in a food processor
          until fine. Steam in a steamer basket and drain well. (I like to put
          it on a towel to get all the moisture out.)Let cool.
          <br />
          3. In a bowl, combine the cauliflower with the mozzarella, Parmesan,
          oregano, salt, garlic powder and eggs. Transfer to the center of the
          baking sheet and spread into a circle, resembling a pizza crust. Bake
          for 20 minutes.
          <br />
          4. Add desired toppings and bake an additional 10 minutes.
          <br />
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutpizza} alt="" />
      </div>
    </div>
  );
}

export default Pizza;
