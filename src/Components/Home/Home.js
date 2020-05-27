import React from "react"
import { useMediaQuery } from "react-responsive"
import Recipes from "../Recipes/Recipes"
import Images from "../Images/Images"
import Footer from "../Footer/Footer"
import "../../styles.css"
import "./Home.css"

export default function Favorites({recipes}){
    const isMobile = useMediaQuery({query: "(min-device-width: 500px)"})
    return (
        <>
            {!isMobile ? " " : <Images />}
            <h1 className="hungry-title">Hungry?</h1>
            <hr />
            {recipes.hits ? (<Recipes recipes={recipes} />) : " " }
            <Footer />
        </>
    )
}