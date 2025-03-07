import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [

  {
    id: 1,
    title: "Roast Beef",
    description:
      "A luxurious, tenderloin center-cut steak, grilled to perfection and served with a rich béarnaise sauce. Accompanied by roasted baby potatoes and sautéed asparagus for an exquisite dining experience.",
    image:
      "https://embed.widencdn.net/img/beef/p1zhhu6clz/exact/Classic%20Beef%20Chateaubriand%2003.tif?keep=c&u=7fueml",
    price: "$ 49.99",
  },

  {
    id: 2,
    title: "Sicilian Pizza",
    description:
      "A classic pizza with a thin crust, fresh tomato sauce, creamy mozzarella, and aromatic basil leaves, baked to perfection in a wood-fired oven.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnhaAULJZ9ldWjPfKhAoa_-nHi_0yp_MrIA&s",
    price: "$12.99",
  },
  {
    id: 3,
    title: "Tiramisu",
    description:
      "A luxurious Italian dessert made with layers of espresso-soaked ladyfingers, creamy mascarpone cheese, and a dusting of rich cocoa powder.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKWl_QSk_XZAhJbz_SxRP5CPLIl3NXWT15w&s",
    price: "$6.99",
  }

];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
