import React from "react";
import { Orderbutton } from "./Button";
import { Details } from "./Details";
import { Image } from "./Image";
import "./Main.css";
import { Review } from "./Reviews";





 export const Card = () => {
  return (
    <div>
      <div className="container">
        <div>
          <Image img="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214092757042942_114x101png"/>
        </div>
        <div><Details title="Ziggy Shop" items={["Asian","South Indian","Desserts"]}  pricefortwo="400" minPrice="30"/> </div>
        <div><Review rating="4.5" votes="465" reviews="100" /></div>
      </div>
      <div className="footer">
        <Orderbutton />
      </div>
    </div>
  );
};


