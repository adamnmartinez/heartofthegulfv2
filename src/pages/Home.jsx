import React from "react";
import { useState } from "react";
import doordash from "../assets/icons/doordash.svg";
import grubhub from "../assets/icons/grubhub.svg";
import uber from "../assets/icons/uber.svg";
import brisket from "../assets/gifs/brisket.gif";
import tomato from "../assets/gifs/tomato.gif";
import stir from "../assets/gifs/stir.gif";
import soup from "../assets/gifs/soup.gif";
import MenuPage from "./Menu";

const locationDirections = "https://maps.google.com";
const banner = soup;

export default function HomePage({ setPage, menuPage }) {
  return (
    <div className="homePageWrapper">
      <div className="catch">
        <img src={banner}></img>
        <div className="catchOverlay">
          Authentic Yemeni and Emirati cuisine, right here in California.
          <br />
          <button className="orderNow" onClick={() => setPage(menuPage)}>
            ORDER NOW
          </button>
        </div>
      </div>
      <div className="places">
        Find Us!
        <hr className="shortline" />
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
          <div className="location">
            <a href={locationDirections} target="_blank">
              743 Division Street
            </a>
            <br />
            Santa Cruz, CA
            <br />
            Mon-Thurs | 8am - 10pm
            <br />
            Fri-Sat | 8am - 5pm
            <br />
            Sun | Closed
            <br />
            +1 (831) 370-7051
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
