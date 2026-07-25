import React from "react"
import ClaudeRecipe from "./claudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "./ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("");

    async function getRecipe(){
        const recipeMarkdown= await getRecipeFromChefClaude(ingredients )
        setRecipe(recipeMarkdown)
    }
    



    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient && newIngredient.trim() !== "") {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient.trim()]);

        }


    }

    return (
        <main>
            <form action={addIngredients} className="add-ingredient-form">
                <input
                    className="input-box"
                    type="text"
                    placeholder="eg. oregano"
                    aria-label="Add ingredients"
                    name="ingredient"
                />
                <button className="button-box">+Add ingredients</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList ingredients={ingredients}
                getRecipe={getRecipe}
                />
            }
            {recipe && (
                <ClaudeRecipe recipe={recipe}/>

            )}
        </main>
    )
}