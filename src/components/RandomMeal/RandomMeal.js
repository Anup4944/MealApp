import React, { useCallback, useEffect } from "react";
import { myContext } from "../Context/Context";

const RandomMeal = () => {
  const { randomMeal , fetchRandomMeal } = useCallback(myContext);
  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);
  return (
    <div className="random">
      {randomMeal.map(meal => {
        return (
          <div>
            <div></div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomMeal;
