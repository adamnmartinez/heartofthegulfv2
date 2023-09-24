import { useState } from "react";
import {
  appMenu,
  bevMenu,
  breakfastMenu,
  dinnerMenu,
  desertMenu,
} from "./menuData";
import newIcon from "../assets/icons/new.png";

export default function MenuPage({ addOrder }) {
  const [currentMenu, setCurrentMenu] = useState(appMenu);

  function pushOrder(order, setter) {
    addOrder(order);
    setter(true);
    setTimeout(() => setter(false), 3000);
  }

  function RenderMenu() {
    const itemList = [];
    for (const [key, value] of Object.entries(currentMenu)) {
      const [displayPushMessage, setDisplayPushMessage] = useState(false);
      itemList.push(
        <li className="itemCell">
          {value.newTag ? <img className="newIcon" src={newIcon} /> : <></>}
          <img src={value.imgURL}></img>
          <p className="itemName">
            <b>{value.name}</b>
            <br />
            {value.price}
          </p>
          <button
            className="orderBtn"
            onClick={() => pushOrder(value, setDisplayPushMessage)}
          >
            {displayPushMessage ? "Added to Takeout!" : "Add to Order"}
          </button>
          <p>
            <br />
            {value.desc}
          </p>
        </li>,
      );
    }
    return <ul className="itemList">{itemList}</ul>;
  }

  function isMenuSelected(menu) {
    if (menu === currentMenu) {
      return "menuBtn selected";
    } else {
      return "menuBtn";
    }
  }

  return (
    <div className="menuPageWrapper">
      <div className="menuNav">
        <button
          className={isMenuSelected(appMenu)}
          onClick={() => setCurrentMenu(appMenu)}
        >
          APPETIZERS
        </button>
        <button
          className={isMenuSelected(bevMenu)}
          onClick={() => setCurrentMenu(bevMenu)}
        >
          DRINKS
        </button>
        <button
          className={isMenuSelected(breakfastMenu)}
          onClick={() => setCurrentMenu(breakfastMenu)}
        >
          BREAKFAST
        </button>
        <button
          className={isMenuSelected(dinnerMenu)}
          onClick={() => setCurrentMenu(dinnerMenu)}
        >
          DINNER
        </button>
        <button
          className={isMenuSelected(desertMenu)}
          onClick={() => setCurrentMenu(desertMenu)}
        >
          DESERT
        </button>
      </div>
      <RenderMenu />
    </div>
  );
}
