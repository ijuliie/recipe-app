import React, { useContext, useEffect } from "react"
import { getUserRecipes } from "../../Services/api-helper"
import { RecipeContext } from "../../App"

export default function UserRecipes(){
    const recipeContext = useContext(RecipeContext)
    
    useEffect(() => {
        const getRecipes = async () => {
            const res = await getUserRecipes(recipeContext.user.token)
            recipeContext.setUserRecipes(res.data)
        }
        getRecipes()
    }, [recipeContext.user.token])

    return (
        <div>
            {
                recipeContext.userRecipes ?
                ( recipeContext.userRecipes.map((recipe, i) => {
                    return (
                        <div key={i}>
                            <h3>{recipe.meal_of_the_day}</h3>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.instructions}</p>
                        </div>
                    )
                })) : ''
            }
    </div>
    )
}