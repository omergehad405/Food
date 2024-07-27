import React from "react";
import "./About.scss";
import Button from "../Button/Button";

function About() {
  return (
    <section className="about">
      <div className="container">
        <img src="../about.png" />

        <div className="info">
          <span>about us</span>
          <h1>
            We speak the good <br />
            food language
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi,
            facere incidunt magni cum et qui dolorem, dicta, fuga voluptas sit
            veniam cumque! Magnam sapiente commodi dicta nobis ducimus at.
          </p>

          <Button info="learn more" />
        </div>
      </div>
    </section>
  );
}

export default About;
