import React, {useState} from "react";
import aboutsteak from "../images/aboutsteak.jpg";

function Steak({initialCount}) {
    const [count, setCount] = useState(initialCount);


    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    
  return (
    <div id="about">
      <div className="about-text">
        <h1>RECIPE FOR STEAK</h1>
        <p data-testid="count">
          <b>Ingredients</b> <br />
          
          {count} tablespoons canola or extra-virgin olive oil <br />
          Kosher salt and freshly ground pepper
          <br />
          <br />
          1. About 20 minutes before grilling, remove the steaks from the
          refrigerator and let sit, covered, at room temperature.
          <br />
          2. Heat your grill to high. Brush the steaks on both sides with oil
          and season liberally with salt and pepper. Place the steaks on the
          grill and cook until golden brown and slightly charred, 4 to 5
          minutes. Turn the steaks over and continue to grill 3 to 5 minutes for
          medium-rare (an internal temperature of 135 degrees F), 5 to 7 minutes
          for medium (140 degrees F) or 8 to 10 minutes for medium-well (150
          degrees F).
          <br />
          3. Transfer the steaks to a cutting board or platter.
          <br />
          <br/>
          <b>Disclaimer!</b><br/>
          <b>Ingredients will change when you click cook 2 or more and reduce btn belows</b>
        </p>
        <button onClick={increment}>Cook 2 or more</button>
        <button onClick={decrement}>Reduce Ingredie</button>
      </div>
      <div className="about-image">
        <img src={aboutsteak} alt="" />
      </div>
    </div>
  );
}

export default Steak;
