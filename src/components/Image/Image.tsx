import React from "react";
import getApiProduct from "../../apiProduct/product";
import "./Image.scss";

const Image = () => {
  const { image } = getApiProduct();
  return (
    <div className="image">
      <img src={image} alt="Pizza" className="image-pizza" />
    </div>
  );
};

export default Image;
