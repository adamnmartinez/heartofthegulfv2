import { useState } from "react";
import { addOrder, order, removeOrder } from "../pages/Menu";
import { allMenu } from "../pages/menuData";

export default function TakeoutMenu({ takeoutVis, setTakeoutVis }) {
  function RenderOrder() {
    let subtotal = 0;
    let tax = 0;
    const orderObj = {};
    const [orderItems, setOrderItems] = useState([]);
    const taxRate = 6.75;
    for (let item in order) {
      let qty = 0;
      for (let similar in order) {
        if (order[item] === order[similar]) {
          qty++;
        }
      }
      if (!orderObj[order[item].name]) {
        orderObj[order[item].name] = qty;
      }
      subtotal += order[item].price;
      tax = subtotal * (taxRate / 100);
    }
    for (const [name, quantity] of Object.entries(orderObj)) {
      orderItems.push(
        <div>
          <li>
            {name} x{quantity}
          </li>
          <button onClick={() => addOrder()}>+</button>
          <button onClick={() => removeOrder()}>-</button>
        </div>,
      );
    }
    return (
      <>
        <ul>{orderItems}</ul>
        <p>Subtotal: {subtotal.toFixed(2)}</p>
        <p>Tax: {tax.toFixed(2)}</p>
        <hr />
        <p>Total: {Number.parseFloat(subtotal + tax).toFixed(2)}</p>
      </>
    );
  }

  return (
    <>
      <div
        className="takeoutSideMenu"
        style={takeoutVis ? { display: "block" } : { display: "none" }}
      >
        <header className="orderHeader">My Order</header>
        <hr />
        <RenderOrder />
      </div>
    </>
  );
}
