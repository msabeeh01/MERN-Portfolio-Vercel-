import React, { useEffect } from "react";

//components improts
import GetCloudImage from "../getImages/getCloudImage";

//style import
import "./StaggeredGrid.css";

const Item = () => {
    return( 
    <div className="item">
        <GetCloudImage searchTerm='myImage.jpg'/>
    </div>
    )
}

const StaggeredGrid = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          item.style.backgroundColor = "#" + randomColor;
        });
      }, []);

    return (
        <div className="gallery">
            {Item()}
            {Item()}
            {Item()}
            {Item()}
            {Item()}
            {Item()}
            {Item()}
            {Item()}
            {Item()}
        </div>

    )
}

export default StaggeredGrid