import React, { useContext } from "react"
import { RecipeContext } from "../../App"
import { Card } from "react-bootstrap"
import "../../styles.css"
import "./Recipes.css"

export default function Recipes({recipes}){
    const recipeContext = useContext(RecipeContext)
    console.log(recipeContext)

    const handleClick = index => {
        const faveRecipe = [...recipes.hits]
        // console.log("FAVERECIPE", faveRecipe)
        const recipeIndex = faveRecipe.splice(index, 1)
        // console.log("INDEX", recipeIndex)
        recipeContext.favorites.push(recipeIndex)
        console.log("FAVORITES", recipeContext.favorites)
    }

    const recipeList = recipes.hits.map((card, i) => {
        return (
            <div key={i} style={{flex: "22%"}}>
                <Card className="recipe-search">
                    <Card.Link target="_blank" href={card.recipe.shareAs}>
                        <Card.Img variant="top" alt="Food Image" src={card.recipe.image} />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>
                                {card.recipe.label}
                        </Card.Title>
                        <ul>
                            <li>{card.recipe.ingredientLines[0]}</li>
                            <li>{card.recipe.ingredientLines[1]}</li>
                            {
                                card.recipe.ingredientLines[2] ? 
                                card.recipe.ingredientLines[2].length < 20 ? (<li>{card.recipe.ingredientLines[2]}</li> ) : " "
                                : 
                                " "
                            }
                        </ul>
                        <Card.Link target="_blank" href={card.recipe.shareAs}>
                            more...
                        </Card.Link>
                        <Card.Text onClick={handleClick}>-</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return (
        <>
            <div className="recipe-list">
                {recipeList}
            </div>
        </>
    )
}