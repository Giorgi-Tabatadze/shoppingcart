import React from "react";
import "./home.css";
import womanReading from "./img/womanreading.jpg";
import silmarilion from "./img/silmarilion.jpg";
import buyonline from "./img/buyonline.jpg";
import delivery from "./img/delivery.jpg";
import cashback from "./img/cashback.jpg";
import HomeCfa from "./components/homeCfa";
import HorizontalCfa from "./components/horizontalCfa";
import CircleCfa from "./components/circleCfa";

function HomePage() {
  return (
    <div className="home">
      <HomeCfa
        heading="Buy your Books Here"
        text="We are the biggest online book store in the area"
        buttonText="Shop Now"
        onButtonClick=""
      />
      <div className="horizontal-cfas">
        <HorizontalCfa
          img={womanReading}
          alt="Woman Reading a Book"
          heading="20% off for womans day"
          text="The world was hers for the reading"
          imgFirst
          buttonText="Shop Now"
          onButtonClick=""
        />
        <HorizontalCfa
          img={silmarilion}
          alt="Silmarilion, Book"
          heading="Prepare for Amazon's series Rings of Power"
          text="Series are going to be set in the second age for which you can prepare by reading the silmarilion and learning what is going to happen"
          imgFirst={false}
          buttonText="Shop Now"
          onButtonClick=""
        />
      </div>
      <div className="circles-cfa">
        <CircleCfa
          img={buyonline}
          heading="Buy Titles from Home"
          text="You can order and pay for everything from our website"
          alt="Buy online illustration"
        />
        <CircleCfa
          img={delivery}
          heading="Free same day delivery"
          text="We will deliver titles to your door and you can enjoy them on the same day"
          alt="House Delivery illustration"
        />
        <CircleCfa
          img={cashback}
          heading="5% cashback on all purchase"
          text="Get portion of money back to your account balance for your favourite upcoming title"
          alt="House Delivery illustration"
        />
      </div>
    </div>
  );
}

export default HomePage;
