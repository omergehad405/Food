import React from "react";
import "./Services.scss";

function Services() {
  const services = [
    {
      serviceImg: "../s1.png",
      serviceTitle: "order",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae ipsam veritatis incidunt at culpa itaque, aliquid inventore repellendus sapiente fugit provident quia quis obcaecati! Et veniam qui veritatis at.",
    },
    {
      serviceImg: "../s2.png",
      serviceTitle: "shiping",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae ipsam veritatis incidunt at culpa itaque, aliquid inventore repellendus sapiente fugit provident quia quis obcaecati! Et veniam qui veritatis at.",
    },
    {
      serviceImg: "../s1.png",
      serviceTitle: "deliverd",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae ipsam veritatis incidunt at culpa itaque, aliquid inventore repellendus sapiente fugit provident quia quis obcaecati! Et veniam qui veritatis at.",
    },
  ];

  const service = services.map((el, idx) => (
    <div className="card" key={idx}>
      <img src={el.serviceImg} />
      <p>{el.serviceTitle}</p>
      <span>{el.serviceInfo}</span>
    </div>
  ));
  return (
    <section className="services">
      <p className="title">services</p>
      <h1>we provide best quality food</h1>

      <div className="container">{service}</div>
    </section>
  );
}

export default Services;
