import React, { useState, useContext } from "react"
import { RecipeContext } from "../App"
import { createUserRecipe } from "../Services/api-helper"
import { Form } from "react-bootstrap"

export default function CreateRecipe(props){
    const recipeContext = useContext(RecipeContext)
    const [newRecipe, setNewRecipe] = useState({
        meal_of_the_day: "",
        ingredients: "",
        instructions: "",
        is_public: "True",
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createUserRecipe(newRecipe, recipeContext.user.token)
        .then(response => {
            if(response.status === 201){
                recipeContext.newRecipes.push(newRecipe)
                console.log(recipeContext.newRecipes)
                alert("recipe created")
            } else {
                alert("failed")
            }
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewRecipe({...newRecipe, [e.target.name]: value})
    }

    return (
        <>
            <Form onSubmit={ handleSubmit }>
                <Form.Control 
                    name="meal_of_the_day"
                    value={newRecipe.meal_of_the_day}
                    onChange={handleChange}
                    placeholder="meal of the day"
                />

                <textarea
                    name="ingredients"
                    value={newRecipe.ingredients}
                    onChange={handleChange}
                    placeholder="ingredients"
                />

                <textarea 
                    name="instructions"
                    value={newRecipe.instructions}
                    onChange={handleChange}
                    placeholder="instructions"
                />

                <Form.Control type="submit" />
            </Form>
        </>
    )
}