import React from "react";
import "./Card.scss";
import Image from "../Image/Image";
import Information from "../Information/Information";
import Buttons from "../Buttons/Buttons";
import CartButton from "../CartButton/CartButton";
import Price from "../Price/Price";
import Wishlist from "../Wishlist/Wishlist";

const Card = () => (
  <div className="wrapper">
    <Image />
    <div className="card">
      <Information />
      <Buttons />
      <Price />
      <div className="wrapper-cart">
        <CartButton />
        <Wishlist />
      </div>
    </div>
  </div>
);

export default Card;
