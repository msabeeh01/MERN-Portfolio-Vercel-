import React from "react"
//css import
import "./textWall.css"
//image getter
import GetCloudImage from "../getImages/getCloudImage";

const PictureWall = () =>{
    return(
        <div className="splitHalf">
            <GetCloudImage searchTerm='myImage.jpg'/>
        </div>
    )
}

const Text = () =>{
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim vel velit imperdiet dapibus. Sed auctor orci odio, eu commodo enim suscipit ac. Integer id risus ultricies, feugiat mauris non, bibendum augue. Sed ac ex sed sapien congue euismod. Vivamus consectetur, risus ac euismod pharetra, enim odio facilisis sapien, ac malesuada augue elit et magna. Nulla facilisi. Sed vulputate augue vel velit feugiat, vel tincidunt mauris dictum. Mauris tempus, felis at bibendum interdum, augue ipsum rutrum urna, a viverra enim mauris eget diam. Sed euismod mollis est, at semper mauris egestas nec. Sed nec est quis est bibendum feugiat. Vivamus sed magna ut mi placerat sollicitudin. Suspendisse potenti.'
    return(
        <div className="splitHalf">
                <div className="justify">
                    <Postion/>
                    {text}
                </div>
            </div>
    )
}

const Postion = () =>{
    return(
        <div style={{justifyContent:'center'}}>
        <h1 style={{fontWeight:'bolder', fontSize:'4rem'}}>Muhammad Sabeeh</h1>
        <div className="positionStyle">
            <h4 className="positionItem">Web<br />Developer</h4>
            <h4 className="positionItem">Game<br />Developer</h4>      
            <h4 className="positionItem">Software<br />Developer</h4>            
        </div>
        </div>
    )
}

const TextWall = () =>{
    return(
        <div className="sidebyside">
            <PictureWall />
            <Text />
            
        </div>
    )
}

export default TextWall