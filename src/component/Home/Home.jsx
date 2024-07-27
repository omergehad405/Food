import React from "react";
import "./Home.scss";
import Button from "../Button/Button";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="info">
          <h1>full website</h1>

          <p>
            foods the <br /> most precious things{" "}
          </p>

          <Button info="today's menu" />
        </div>

        <img src="../home.jpg" alt="img" />
      </div>
    </section>
  );
}

export default Home;
