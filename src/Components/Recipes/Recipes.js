import React from "react"
import { Card } from "react-bootstrap"
import "../../styles.css"
import "./Recipes.css"

export default function Recipes(props){
    const recipeList = props.recipes.hits.map((card, i) => {
        return (
            <div key={i} style={{flex: "22%"}}>
<<<<<<< HEAD
                <Card className="recipe-search">
=======
                <Card className="recipe-search" style={{ width: "18rem"}}>
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
                    <Card.Link target="_blank" href={card.recipe.shareAs}>
                        <Card.Img variant="top" alt="Food Image" src={card.recipe.image} />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>
                                {card.recipe.label}
                        </Card.Title>
<<<<<<< HEAD
=======
                        <Card.Text>{card.recipe.mealType}</Card.Text>
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
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