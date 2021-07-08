import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";
import "./Categories.scss"

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories">
      {categories.map((categories) => {
        return (
          <div>
            <img src={categories.strCategoryThumb} alt="#" />
            <h3>{categories.strCategory}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
