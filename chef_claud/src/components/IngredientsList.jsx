import React from 'react'
const IngredientsList = (props) => {
     const ingredientlistitems = props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
  return (
    <section>
        <h2 className="text-3xl font-bold mt-3">Ingredients on hand :</h2>
         <ul className="mt-3 list-disc pl-5 space-y-1" >  {ingredientlistitems}</ul>
         {props.ingredients.length >3 && <div className="flex justify-between items-center mt-8 bg-amber-100 p-4 rounded-sm border border-gray-950">
            <div>
                <h3 className="text-2xl font-bold ">Ready for a Recipe?</h3>
                <p className="text-gray-700 mt-2">Generate a recipe based on your available ingredients!</p>
            </div>
            <button onClick={props.getRecipe} className="bg-[#d6450c] text-[#fafaf8] px-2 py-3 rounded-sm border border-gray-950 hover:bg-gray-300 ">
                Generate a Recipe
            </button>
         </div>}
        </section>
  )
}

export default IngredientsList