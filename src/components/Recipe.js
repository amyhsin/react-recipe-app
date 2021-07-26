import React from 'react';


const Recipe = (props) => {
  return (
    <div className="recipe">
      <h1 className="title">{props.title}</h1>
      <div className="numIngre">{props.ingredients.length} Ingredients</div>
      <div className="ingredient">
        {(props.ingredients).map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </div>
      <h3 className="cal">{Math.round(props.calories)} cal for {props.servings} servings</h3>
      <div className="img-container">
        <a href={props.recipeURL}><img src={props.img} alt="" /></a>
      </div>
    </div>
  );
}


export default Recipe;