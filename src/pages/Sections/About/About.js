import React from "react";
import "./About.css";
import Image from "../../../assets/restauranfood.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
        Situated in the heart of culinary excellence, our menu is crafted to delight every palate with a perfect blend of tradition and innovation. From the indulgent richness of our Roast Beef, seared to perfection and paired with elegant sides, to the rustic charm of our Sicilian Pizza, baked to crispy perfection with fresh, aromatic ingredients, every bite tells a story of passion and craftsmanship. And for a sweet finale, our Tiramisu offers a taste of Italy’s finest, layering espresso-soaked ladyfingers with velvety mascarpone and a delicate dusting of cocoa.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
