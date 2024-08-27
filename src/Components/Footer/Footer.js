import React from "react"
import "./Footer.scss"

export default function Footer(){
    return (
        <>
            <footer>
                <hr />
                © {new Date().getFullYear()}
            </footer>
        </>
    )
}