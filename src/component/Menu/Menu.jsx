import React from "react";
import "./Menu.scss";

function Menu() {
  const foodMenu = [
    {
      foodImage: "../images/food1.png",
      foodTitle: "chicken burger",
      foodInfo: "tasty food",
      foodPrice: "$11.00",
    },
    {
      foodImage: "../images/food2.png",
      foodTitle: "special beef burger",
      foodInfo: "tasty food",
      foodPrice: "$11.00",
    },
    {
      foodImage: "../images/food3.png",
      foodTitle: "chicken fry pack",
      foodInfo: "tasty food",
      foodPrice: "$11.00",
    },
  ];

  const foods = foodMenu.map((food, idx) => (
    <div className="menuCard" key={idx}>
      <span className="shopCart">
        <i className="fa-solid fa-cart-shopping"></i>
      </span>

      <img src={food.foodImage} />

      <h1>{food.foodTitle}</h1>

      <p>{food.foodInfo}</p>

      <span>{food.foodPrice}</span>
    </div>
  ));
  return (
    <section className="menu">
      <p className="title">food menu</p>
      <div className="container">{foods}</div>
    </section>
  );
}

export default Menu;
