import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

//css import
import "./Projects.css";

const Cards = (props) =>{
    return(
        <div className="cardchild">
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" href={props.link}>GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

const Title =  () =>{
    return(
        <div className="spaceTitleContainer">
            <h1 className="spaceTitle">Projects</h1>
        </div>
    )
}

const Projects = () => {
    return (
        <>
        {Title()}
        <div className="container">
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
            {Cards({title: 'Portfolio',link: 'https://github.com/nathan-daniel/portfolio-frontend'})}
        </div>
        </>
    )
}

export default Projects