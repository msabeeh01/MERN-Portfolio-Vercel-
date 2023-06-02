import React from "react";
import Image from "react-bootstrap/Image";

const GetCloudImage = ({ searchTerm }) => {
    const ipAddress = "127.0.0.1"
    const imageUrl = `http://${ipAddress}:3001/${searchTerm}`

  return (
    <Image style={{ height: "100%" }} src={imageUrl} alt="Google" fluid />
  );
};

export default GetCloudImage;
