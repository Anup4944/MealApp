import React, { useContext, useEffect } from "react";
import { myContext } from "../Context/Context";
import "./RandomMeal.scss";

const RandomMeal = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);
  return (
    <div className="random">
      {randomMeal.map((meal) => {
        return (
          <div className="random-grid" key={meal.idMeal}>
            <div className="random-grid-controls">
              <img src={meal.strMealThumb} alt="#" />
              <button onClick={fetchRandomMeal}>Get another meal</button>
            </div>
            <div className="random-grid-instruction">
              <h4>Instructions</h4>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomMeal;
