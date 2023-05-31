import React from "react";

import Image from "react-bootstrap/Image"

const GetCloudImage = ({searchTerm}) => {
    return(
        <Image style={{height: '100%'}} src={`http://localhost:3000/${searchTerm}`} alt="Google" fluid/>
    )
}

export default GetCloudImage