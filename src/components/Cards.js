import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep"
              lebel="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep"
              lebel="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set sail in the Atlantic"
              lebel="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experiance football on top"
              lebel="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride trhought the sahara"
              lebel="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
