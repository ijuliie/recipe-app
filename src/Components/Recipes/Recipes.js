import React from "react"
import { Link } from "react-router-dom"
import { Card, Image } from "react-bootstrap"
import RecipeDetails from "../RecipeDetails/RecipeDetails"
import "../../styles.css"
import "./Recipes.scss"

export default function Recipes({recipes}){
    const recipeList = recipes.hits.map((card, i) => {
        return (
            <div key={i} style={{flex: "50%"}}>
                <Card className="recipe-search">
                    <Card.Link target="_blank" href={card.recipe.shareAs}>
                        <Image variant="top" alt="Food Image" src={card.recipe.image} roundedCircle />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>
                                {card.recipe.label}
                        </Card.Title>
                        <Link to={`/recipe/${card.recipe.label}`}>ingredients</Link>
                        {/* <ul>
                            <li>{card.recipe.ingredientLines[0]}</li>
                            <li>{card.recipe.ingredientLines[1]}</li>
                            {
                                card.recipe.ingredientLines[2] ? 
                                card.recipe.ingredientLines[2].length < 20 ? (<li>{card.recipe.ingredientLines[2]}</li> ) : " "
                                : 
                                " "
                            }
                        </ul> */}
                        {/* <Card.Link target="_blank" href={card.recipe.shareAs}>
                            more...
                        </Card.Link> */}
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