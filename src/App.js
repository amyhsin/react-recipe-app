import React, { useEffect, useState } from 'react';

import './App.css';

//import components
import Recipe from './components/Recipe';



const App = () => {
  const APP_ID = 'dcc49ea3';
  const APP_KEY = 'b9b9fb67c4aaccd3507dd73a911a4218';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // run only once when opening the browser
  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updataSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updataSearch} />
        <button className="search-button">Search</button>
      </form>
      <div className="recipe-container">
        {recipes.map(recipe => (
          <Recipe
            key={Math.random()}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            recipeURL={recipe.recipe.url}
            servings={recipe.recipe.yield}
          />
        ))};
      </div>
    </div>
  )
}
export default App;
