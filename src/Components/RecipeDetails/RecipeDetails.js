import React, { useState, useLayoutEffect } from "react"
import "./RecipeDetails.scss"

export default function RecipeDetails({match}){
    // console.log(match)
    const [details, setDetails] = useState([])

    useLayoutEffect(() => {
        const callApi = async () => {
            const apiKey = `1165067289152cf22ecf26a6bb0bcd41`
            const appId = `6227bd9a` 
            const recipeUrl = `https://api.edamam.com/search?q=${match.params.ingredients}&app_id=${appId}&app_key=${apiKey}&from=0&to=1`
            const res = await fetch(recipeUrl)
            const json = await res.json()
            //   console.log(json)
            setDetails(json)
            }
        callApi()
      }, [match.params.ingredients])

      console.log(details)

    return (
        <div className="ingredients-container">
            {
                details.hits ?
                details.hits.map((detail, i) => {
                    return (
                      <div key={i}>
                        <div>
                            <img src={detail.recipe.image} />
                        </div>
                        <div>
                            <h5>{detail.recipe.label}</h5>
                            <p className="calories">Calories: {Math.floor(detail.recipe.calories)}</p>
                            {
                                detail.recipe.ingredientLines.map((ingredient, i) => {
                                    return (
                                        <li key={i}>{ingredient}</li>
                                    )
                                })
                            }
                            <a href={detail.recipe.url}>Click here for instructions</a>
                        </div>
                      </div>
                    )
                }) 
                : ""
            }
        </div>
    )
}