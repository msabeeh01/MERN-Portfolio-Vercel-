import React from "react"
//css import
import "./textWall.css"
//image getter
import GetCloudImage from "../getImages/getCloudImage";

const PictureWall = () =>{
    return(
        <div>
            <GetCloudImage searchTerm='myImage.jpg'/>
        </div>
    )
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim vel velit imperdiet dapibus. Sed auctor orci odio, eu commodo enim suscipit ac. Integer id risus ultricies, feugiat mauris non, bibendum augue. Sed ac ex sed sapien congue euismod. Vivamus consectetur, risus ac euismod pharetra, enim odio facilisis sapien, ac malesuada augue elit et magna. Nulla facilisi. Sed vulputate augue vel velit feugiat, vel tincidunt mauris dictum. Mauris tempus, felis at bibendum interdum, augue ipsum rutrum urna, a viverra enim mauris eget diam. Sed euismod mollis est, at semper mauris egestas nec. Sed nec est quis est bibendum feugiat. Vivamus sed magna ut mi placerat sollicitudin. Suspendisse potenti.'

const TextWall = () =>{
    return(
        <div className="sidebyside">
            <div className="splitHalf">
                <PictureWall />
            </div>

            <div className="splitHalf">
                <div className="justify">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default TextWall