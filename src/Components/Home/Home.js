import React from "react"
import { useMediaQuery } from "react-responsive"
import { Card, Col, Row } from "react-bootstrap"
import Images from "../Images/Images"
import Footer from "../Footer/Footer"
import "../../styles.css"
import "./Home.css"

export default function Favorites(){
    const isMobile = useMediaQuery({query: "(min-device-width: 500px)"})
    return (
        <>
        {!isMobile ? " " : <Images />}
            <div className="home-container">
                <h1 className="hungry-title">Hungry?</h1>
                <hr />
                <Row>
                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                            <Card.Link target="_blank" href="https://www.edamam.com/recipe/the-pastrami-burger-bomb-recipe-2e5525c72aafe44276ec904bee2f9596/burger">
                                <Card.Img variant="top" src="https://www.edamam.com/web-img/77d/77d71d0e0deec9db51434fe1effba84d.jpg" alt="pastrami burger"/>
                            </Card.Link>
                                <Card.Body>
                                    <Card.Title>The Pastrami Burger Bomb Recipe</Card.Title>
                                    <ul>
                                        <li>20 ounces fresh ground beef, about 20% fat</li>
                                        <li>1/4 cup mayonnaise</li>
                                        <li>2 tablespoons ketchup</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/the-pastrami-burger-bomb-recipe-2e5525c72aafe44276ec904bee2f9596/burger">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="http://www.edamam.com/recipe/pizza-margherita-tomato-basil-and-mozzarella-pizza-45d4aa853235b7c40d6c82c03efb4aee/pizza+margherita+%28tomato%2C+basil%2C+and+mozzarella+pizza%29" alt="pizza">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/7cf/7cfc43d9b22c3390f374ce83adb2ea48.jpg" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Pizza Margherita (Tomato, Basil, And Mozzarella Pizza)</Card.Title>
                                    <ul>
                                        <li>1 recipe Naples-style pizza dough</li>
                                        <li>Fine semolina, for dusting</li>
                                        <li>1 recipe Naples-style pizza sauce</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="http://www.edamam.com/recipe/pizza-margherita-tomato-basil-and-mozzarella-pizza-45d4aa853235b7c40d6c82c03efb4aee/pizza+margherita+%28tomato%2C+basil%2C+and+mozzarella+pizza%29">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="https://www.edamam.com/recipe/mediterranean-potato-salad-f142ed9eac72b9379968443ba0396777/mediterranean+potato+salad" alt="potato salad">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/3f3/3f3c1559b9743c89af4d3b71e668d178.jpg" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Mediterranean Potato Salad</Card.Title>
                                    <ul>
                                        <li>1kg baby new potato, halved</li>
                                        <li>1 tbsp olive oil</li>
                                        <li>3 tbsp grated Parmesan (or vegetarian alternative)</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/mediterranean-potato-salad-f142ed9eac72b9379968443ba0396777/mediterranean+potato+salad">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>


        
                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                            <Card.Link target="_blank" href="https://www.edamam.com/recipe/steak-teriyaki-4d0335d34d2ed7ce31df104b8bcb2df1/steak+teriyaki">
                                <Card.Img variant="top" src="https://www.edamam.com/web-img/fb0/fb02d0f4a6ccbdd9c013294b42e0ea07.jpg" alt="steak teriyaki"/>
                            </Card.Link>
                                <Card.Body>
                                    <Card.Title>Steak Teriyaki</Card.Title>
                                        <ul>
                                            <li>1/3 cup mirin rice wine</li>
                                            <li>1/3 cup sake</li>
                                            <li>1/3 cup soy sauce (if cooking gluten-free, use gluten-free soy sauce)</li>
                                        </ul>
                                        <Card.Link 
                                            target="_blank" 
                                            href="https://www.edamam.com/recipe/steak-teriyaki-4d0335d34d2ed7ce31df104b8bcb2df1/steak+teriyaki">
                                            more...
                                        </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="https://www.edamam.com/recipe/grilled-shrimp-ebf300e6d128ed1b99240d1c9dd54400/grilled+shrimp">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/e14/e14f119b698baa552ce7f0e033561a83.jpg" alt="shrimp" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Grilled Shrimp</Card.Title>
                                    <ul>
                                        <li>Oil, for grates</li>
                                        <li>1 pound large shrimp</li>
                                        <li>Watercress, for serving</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/grilled-shrimp-ebf300e6d128ed1b99240d1c9dd54400/grilled+shrimp">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="https://www.edamam.com/recipe/vegetable-sushi-e570b996761c30cdfa1bebbf747a1182/sushi">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/f42/f4240b74d0fc3ce87d59d2ea84baedef.jpg" alt="sushi" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Vegetable Sushi</Card.Title>
                                    <ul>
                                        <li>1 1/4 pounds (about 2 3/4 cups) sushi rice, rinsed under cold running water</li>
                                        <li>1/4 cup mirin, plus more for nori</li>
                                        <li>6 sheets nori</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/vegetable-sushi-e570b996761c30cdfa1bebbf747a1182/sushi">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
            

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="href" href="https://www.edamam.com/recipe/vietnamese-sugar-steak-90101bbc817bd554bba0e759b8faea96/vietnamese+sugar+steak">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2.jpg" alt="sugar steak" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Vietnamese Sugar Steak</Card.Title>
                                    <ul>
                                        <li>4 tablespoons fish sauce</li>
                                        <li>2 tablespoons brown sugar</li>
                                        <li>3 tablespoons lime juice, divided</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/vietnamese-sugar-steak-90101bbc817bd554bba0e759b8faea96/vietnamese+sugar+steak">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                            <Card.Link target="_blank" href="https://www.edamam.com/recipe/pad-thai-86fb91db1dc04ebd4cd2629490d6b59f/pad+thai">
                                <Card.Img variant="top" src="https://www.edamam.com/web-img/db4/db4f9cedfec42354083279d2934f6ab3.jpg" alt="pad thai" />
                            </Card.Link>
                                <Card.Body>
                                    <Card.Title>Pad Thai</Card.Title>
                                    <ul>
                                        <li>5 ounces pad thai rice noodles</li>
                                        <li>3 tablespoons vegetable oil</li>
                                        <li>1 large egg, room temperature</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/pad-thai-86fb91db1dc04ebd4cd2629490d6b59f/pad+thai">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="https://www.edamam.com/recipe/strawberry-refrigerator-cake-980c7b85c8f97bbdb3bf5a34e4f34def/strawberry+refrigerator+cake">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/faa/faafa49ee8f0663470b6af9697bef468.jpg" alt="cake" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Strawberry Refrigerator Cake</Card.Title>
                                    <ul>
                                        <li>1 packet angel food cake mix</li>
                                        <li>4 cups whole strawberries</li>
                                        <li>1/4 cup brandy or dessert wine</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="https://www.edamam.com/recipe/strawberry-refrigerator-cake-980c7b85c8f97bbdb3bf5a34e4f34def/strawberry+refrigerator+cake">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="http://www.edamam.com/recipe/red-pozole-a624b984b86f80dde0f91aaf624e8a66/pozole">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/88d/88db30ce0bbb1665372fa3b95f3dc165.jpg" alt="pozole" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Red Pozole</Card.Title>
                                    <ul>
                                        <li>Chile puree:</li>
                                        <li>2 large dried Mexican chiles, preferably anchos or guajillos, stems and seeds removed</li>
                                        <li>1 clove garlic, peeled</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="http://www.edamam.com/recipe/red-pozole-a624b984b86f80dde0f91aaf624e8a66/pozole">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="http://www.edamam.com/recipe/strawberry-cheesecake-parfaits-02058093a13f04e97575b993dee80923/cheesecake">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/d4c/d4c3a4f1db4e8c413301ae1f324cf32a.jpg" alt="cheesecake" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Strawberry Cheesecake Parfaits</Card.Title>
                                    <ul>
                                        <li>Strawberry syrup</li>
                                        <li>150g of caster sugar</li>
                                        <li>60ml of water</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="http://www.edamam.com/recipe/strawberry-cheesecake-parfaits-02058093a13f04e97575b993dee80923/cheesecake">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card className="home-card" style={{ width: '18rem' }}>
                                <Card.Link target="_blank" href="http://www.edamam.com/recipe/oven-roasted-bbq-chicken-thighs-deb32477acd2ad8c18e6a74df29fd153/bbq">
                                    <Card.Img variant="top" src="https://www.edamam.com/web-img/803/8035a1729b7d706f2731611af2a5ec5f.jpg" alt="chicken" />
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>Oven Roasted Bbq Chicken Thighs</Card.Title>
                                    <ul>
                                        <li>3 cups Your Favorite BBQ Sauce</li>
                                        <li>1/2 cup Peach Preserves</li>
                                        <li>1 clove Garlic</li>
                                    </ul>
                                    <Card.Link 
                                        target="_blank" 
                                        href="http://www.edamam.com/recipe/oven-roasted-bbq-chicken-thighs-deb32477acd2ad8c18e6a74df29fd153/bbq">
                                        more...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    )
}