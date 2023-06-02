import React from "react";

//styles import
import "./MoreAboutMe.css";

const MoreAboutMe = () => {
    return (
        <div className="grid">
            <Languages />
            <HardSkills />

            <Frameworks />
            <SoftSkills />
        </div>
    )
}

const Languages = () => {
    return (
        <div className="contentGrid">
            <div className="titleDiv">
                <h1>Languages</h1>
            </div>

            <div className="listDiv">
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '0' }}>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MongoDB Atlas</li>
                    <li>Postman</li>
                    <li>Heroku</li>
                    <li>Git</li>
                    <li>GitHub</li>

                </ul>
            </div>
        </div>
    )
}
const HardSkills = () => {
    return (
        <div className="contentGrid">
            <div className="titleDiv">
                <h1>Hard Skills</h1>
            </div>

            <div className="listDiv">
                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MongoDB Atlas</li>
                    <li>Postman</li>
                    <li>Heroku</li>
                    <li>Git</li>
                    <li>GitHub</li>

                </ul>
            </div>
        </div>
    )
}
const Frameworks = () => {
    return (
        <div className="contentGrid">
            <div className="titleDiv">
                <h1>Frameworks</h1>
            </div>

            <div className="listDiv">
                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MongoDB Atlas</li>
                    <li>Postman</li>
                    <li>Heroku</li>
                    <li>Git</li>
                    <li>GitHub</li>

                </ul>
            </div>
        </div>
    )
}
const SoftSkills = () => {
    return (
        <div className="contentGrid">
            <div className="titleDiv">
                <h1>Soft Skills</h1>
            </div>

            <div className="listDiv">
                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MongoDB Atlas</li>
                    <li>Postman</li>
                    <li>Heroku</li>
                    <li>Git</li>
                    <li>GitHub</li>

                </ul>
            </div>
        </div>
    )
}

export default MoreAboutMe