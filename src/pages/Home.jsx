import React from "react";
import doordash from "../assets/icons/doordash.svg";
import grubhub from "../assets/icons/grubhub.svg";
import uber from "../assets/icons/uber.svg";
import brisket from "../assets/gifs/brisket.gif";
import tomato from "../assets/gifs/tomato.gif";
import stir from "../assets/gifs/stir.gif";
import soup from "../assets/gifs/soup.gif";
import salad from "../assets/gifs/salad.gif";

const locationDirections = "https://maps.google.com";

function TitleHOTG() {
  return (
    <div className="title">
      Heart of the Gulf
      <div className="titleAR">قلب الخليج</div>
    </div>
  );
}

export default function HomePage() {
  console.log("HomePage Loaded");
  return (
    <div className="homePageWrapper">
      <TitleHOTG />
      <div className="catch">
        <img src={soup}></img>
        <div className="catchOverlay">
          Authentic Yemeni and Emirati cuisine, right here in California.
          <br />
          <button className="orderNow">ORDER NOW</button>
        </div>
      </div>
      <div className="places">
        Find Us!
        <div>
          <div className="location">
            <a href={locationDirections} target="_blank">
              1102 Overland Avenue
            </a>
            <br />
            Culver City, CA <br />
            Mon-Thurs | 9am - 10pm
            <br />
            Fri-Sat | 9am - 8pm
            <br />
            Sun | Closed
            <br />
            +1 (310) 800-9967
          </div>
          <div className="location">
            <a href={locationDirections} target="_blank">
              1201 S. La Brea Avenue
            </a>
            <br />
            Los Angeles, CA
            <br />
            Mon-Thurs | 8am - 10pm
            <br />
            Fri-Sat | 8am - 5pm
            <br />
            Sun | Closed
            <br />
            +1 (323) 222-8918
          </div>
        </div>
      </div>
      <div className="delivery">
        We Deliver!
        <div className="icons">
          <a className="icon" href="https://www.doordash.com/">
            <img src={doordash}></img>
          </a>
          <a className="icon" href="https://www.grubhub.com/">
            <img src={grubhub}></img>
          </a>
          <a className="icon" href="https://www.ubereats.com/">
            <img src={uber}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
