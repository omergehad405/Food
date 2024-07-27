import React from "react";
import "./Order.scss";
import Button from "../Button/Button";

function Order() {
  return (
    <section className="order">
      <div className="container">
        <h1>we make quality food <br/>
            everyday
        </h1>

        <Button info = "let's talk"/>
      </div>
    </section>
  );
}

export default Order;
