import React from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";

const GetCloudImage = ({ searchTerm }) => {
    const ipAddress = "10.24.72.162"
    const imageUrl = `http://${ipAddress}:3000/${searchTerm}`

  return (
    <Image style={{ height: "100%" }} src={imageUrl} alt="Google" fluid />
  );
};

export default GetCloudImage;
