import React, { useContext, useState, useCallback } from "react";
import "./HomePage.scss";
import { myContext } from "../Context/Context";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Search for meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>

      <div className="home-grid">
        {meals?.length >= 0 ? (
          meals.map((meals) => {
            return (
              <div className="home-meals" key={meals.idMeal}>
                <img src={meals.strMealThumb} alt="#"></img>
                <h2> {meals.strMeal}</h2>
              </div>
            );
          })
        ) : (
          <h3>No meal found, try another word....</h3>
        )}
      </div>
    </div>
  );
};

export default HomePage;
