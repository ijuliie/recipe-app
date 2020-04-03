import React from "react"
import { Card } from "react-bootstrap"
import "../../styles.css"
import "./Recipes.css"

export default function Recipes(props){
    const recipeList = props.recipes.hits.map((card, i) => {
        return (
            <div key={i} style={{flex: "22%"}}>
                <Card className="recipe-search" style={{ width: "18rem"}}>
                    <Card.Link target="_blank" href={card.recipe.shareAs}>
                        <Card.Img variant="top" alt="Food Image" src={card.recipe.image} />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>
                                {card.recipe.label}
                        </Card.Title>
                        <Card.Text>{card.recipe.mealType}</Card.Text>
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