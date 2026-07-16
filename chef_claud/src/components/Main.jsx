import React from 'react'
import { getRecipeFromChefClaude } from "../ai"
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
const Main = () => {
    const [ingredients,setIngredients] = React.useState([])
    const [recipe,setRecipe] = React.useState("")
    async function GetRecipe() {

        const recipe   = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipe)
    }   
    function addingredient(form){
    const newingredient =form.get("ingredient")
    
    setIngredients(previngredients => [...previngredients,newingredient])
   }
  return (
 <main >
    <div className="max-w-2xl  mx-auto mt-8">
    <form action={addingredient} className='flex justify-center items-center gap-2 mt-8'>
        <input type="text" className='border border-gray-950 rounded-sm flex-1 px-0.5 py-0.5'
        placeholder="e.g. Chicken Alfredo"
        aria-label="add ingredient" name="ingredient"/>
        <button className="bg-[#141413] text-[#fafaf8] px-3 py-0.5 rounded-sm border border-gray-950 hover:bg-gray-300 before:content-['+'] before:mr-2">
        Add Ingredient
        </button>
    </form>
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={GetRecipe} />}
        {recipe && <ClaudeRecipe recipe={recipe} />}
        </div>
        
    </main>
  )
}

export default Main