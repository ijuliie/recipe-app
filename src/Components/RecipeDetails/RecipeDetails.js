import React, { useState, useEffect } from "react"

export default function RecipeDetails({match}){
    // console.log(match)
    const [details, setDetails] = useState([])

    useEffect(() => {
        const callApi = async () => {
          const apiKey = `1165067289152cf22ecf26a6bb0bcd41`
          const appId = `6227bd9a` 
          const recipeUrl = `https://api.edamam.com/search?q=${match.params.ingredients}&app_id=${appId}&app_key=${apiKey}`
          const res = await fetch(recipeUrl)
          const json = await res.json()
          console.log(json.hits)
          setDetails(json)
        }
        callApi()
      }, [])

    return (
        // <div>{recipeDetails}</div>
        <></>
    )
}