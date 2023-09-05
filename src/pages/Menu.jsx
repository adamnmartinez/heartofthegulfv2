import { useState } from "react";
import {
  appMenu,
  bevMenu,
  breakfastMenu,
  dinnerMenu,
  desertMenu,
} from "./menuData";
import newIcon from "../assets/icons/new.png";

const order = [];

function addOrder(item) {
  order.push(item);
  console.log(order);
}

function removeOrder(item) {
  const index = order.indexOf(item);
  order.splice(index, 1);
}

export default function MenuPage() {
  const [currentMenu, setCurrentMenu] = useState(appMenu);

  function RenderMenu() {
    const itemList = [];
    for (const [key, value] of Object.entries(currentMenu)) {
      itemList.push(
        <li className="itemCell">
          {value.newTag ? <img className="newIcon" src={newIcon} /> : <></>}
          <img src={value.imgURL}></img>
          <p className="itemName">
            <b>{value.name}</b>
            <br />
            {value.price}
          </p>
          <button className="orderBtn" onClick={() => addOrder(value)}>
            {" "}
            Add to Order
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
    <div>
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

export { order, addOrder, removeOrder };
