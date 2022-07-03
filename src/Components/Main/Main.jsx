import React from "react";
import { Orderbutton } from "./Button";
import { Details } from "./Details";
import { Image } from "./Image";
import "./Main.css";
import { Review } from "./Reviews";





 export const Card = ({img,title,items,cost,minprice,rating,votes,reviews,time}) => {
  return (
    <div>
      <div className="container">
        <div>
          <Image img={img}/>
        </div>
        <div><Details title={title} items={items}  pricefortwo={cost} time={time} minPrice={minprice} /> </div>
        <div><Review rating={rating} votes={votes} reviews={reviews} /></div>
      </div>
      <div className="footer">
        <Orderbutton />
      </div>
    </div>
  );
};


