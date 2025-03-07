import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
          Situated in the heart of culinary excellence, our menu is crafted to delight every palate with a perfect blend of tradition and innovation. From the indulgent richness of our Roast Beef, seared to perfection and paired with elegant sides, to the rustic charm of our Sicilian Pizza, baked to crispy perfection with fresh, aromatic ingredients, every bite tells a story of passion and craftsmanship. And for a sweet finale, our Tiramisu offers a taste of Italy’s finest, layering espresso-soaked ladyfingers with velvety mascarpone and a delicate dusting of cocoa.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src="https://media.istockphoto.com/id/901318034/photo/restaurant-owner-with-chef-in-kitchen.jpg?s=612x612&w=0&k=20&c=FLa_OlTFY_L0AEXg8eCi-yVv3O__N6rGTw4d7V6t2HM=" 

          alt="Restaurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;