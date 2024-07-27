import React from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Menu from "./component/Menu/Menu";
import Services from "./component/Services/Services";
import Footer from "./component/Footer/Footer";
import Order from "./component/Order/Order";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Menu />
      <Services />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
