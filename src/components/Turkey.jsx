import React from "react";
import abouturkey from "../images/abouturkey.jpg";

function Turkey() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>RECIPE FOR TURKEY</h1>
        <p>
          <b>Ingredients</b> <br />
          1/4 pound (1 stick)
          <br />
          unsalted butter 1 lemon, zested and juiced 1<br /> teaspoon chopped
          fresh thyme leaves <br />1 fresh turkey (10 to 12 pounds)
          <br /> Kosher salt <br /> Freshly ground black pepper <br />1 large
          bunch fresh thyme
          <br /> 1 whole lemon, halved <br />1 Spanish onion, quartered <br /> 1
          head garlic, halved crosswise
          <br />
          <br />
          1. Preheat the oven to 350 degrees F.
          <br />
          2. Melt the butter in a small saucepan. Add the zest and juice of the
          lemon and 1 teaspoon of thyme leaves to the butter mixture. Set aside.
          <br />
          <br />
          3. Take the giblets out of the turkey and wash the turkey inside and out.
          Remove any excess fat and leftover pinfeathers and pat the outside
          dry. Place the turkey in a large roasting pan. Liberally salt and
          pepper the inside of the turkey cavity.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={abouturkey} alt="" />
      </div>
    </div>
  );
}

export default Turkey;
