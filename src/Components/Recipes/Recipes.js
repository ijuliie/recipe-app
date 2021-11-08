import React from "react"
import { Link } from "react-router-dom"
import { Card, Image, Button } from "react-bootstrap"
import "./Recipes.scss"

export default function Recipes({recipes}){
    const recipeList = recipes.map((card, i) => {
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
                        <Button variant="link">
                            <Link to={`/${card.recipe.label}`}>Ingredients</Link>
                        </Button>
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