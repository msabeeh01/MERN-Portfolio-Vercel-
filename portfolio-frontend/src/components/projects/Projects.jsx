import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

//css import
import "./Projects.css";

const Cards = (props) =>{
    return(
        <div className="cardchild">
        <Card style={{ width: '18rem', backgroundColor:'#191919' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title style={{color:'white', fontWeight:'bolder'}}>{props.title}</Card.Title>
                    <Card.Text style={{color:'white'}}>
                        Quick description of the project
                    </Card.Text>
                    <div className="buttonGrid">
                        <Button style={{fontWeight:'bolder'}} target="_blank" variant="dark" href={props.link}>GitHub</Button>
                        <Button style={{fontWeight:'bolder'}} target="_blank" variant="dark" href={props.link}>More Info</Button>
                    </div>
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
    const githubLink = "https://github.com/msabeeh01"

    return (
        <>
        {Title()}
        <div className="container">
            {Cards({title: 'Project',link: githubLink})}
            {Cards({title: 'Project',link: githubLink})}
            {Cards({title: 'Project',link: githubLink})}
            {Cards({title: 'Project',link: githubLink})}
            {Cards({title: 'Project',link: githubLink})}
            {Cards({title: 'Project',link: githubLink})}
        </div>
        </>
    )
}

export default Projects