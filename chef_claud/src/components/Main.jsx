import React from 'react'

const Main = () => {
    const [ingredients,setIngredients] = React.useState([])
    const ingredientlistitems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

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
      {ingredients.length > 0 &&<section>
        <h2 className="text-3xl font-bold mt-3">Ingredients on hand :</h2>
         <ul className="mt-3 list-disc pl-5 space-y-1" >  {ingredientlistitems}</ul>
         {ingredients.length >3 && <div className="flex justify-between items-center mt-8 bg-amber-100 p-4 rounded-sm border border-gray-950">
            <div>
                <h3 className="text-2xl font-bold ">Ready for a Recipe?</h3>
                <p className="text-gray-700 mt-2">Generate a recipe based on your available ingredients!</p>
            </div>
            <button className="bg-[#d6450c] text-[#fafaf8] px-2 py-3 rounded-sm border border-gray-950 hover:bg-gray-300 ">
                Generate a Recipe
            </button>
         </div>}
        </section>}
        </div>
        
    </main>
  )
}

export default Main