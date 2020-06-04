import React from "react"
import { Carousel, Container } from "react-bootstrap"
import "./images.css"

export default function Images(){
    return (
        <>
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322284_2200-1200x628.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://smppharmacy.com/wp-content/uploads/2019/02/food-post.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}