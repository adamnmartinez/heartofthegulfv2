import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const reactSwal = withReactContent(Swal);

let rawArr = [];
let total = 0;

function checkout(raw) {
  if (raw.length > 0) {
    renderConfirmation(raw);
  }
}

function renderConfirmation(raw) {
  console.log(raw);
  reactSwal
    .fire({
      title: "Place Order?",
      html: (
        <div>
          <ul className="takeoutList">{raw}</ul>
          <p>Order Total: {total}</p>
          <hr />
          <p className="confirmPrompt">
            We'll send you a text when your order is ready.
          </p>
          <input
            className="confirmPrompt"
            type="number"
            placeholder="Phone Number"
          ></input>
        </div>
      ),
      confirmButtonText: <p className="confirmPrompt">Confirm</p>,
      confirmButtonColor: "rgb(210,86,86)",
      showCancelButton: true,
      cancelButtonText: <p className="confirmPrompt">Cancel</p>,
    })
    .then((response) => {
      if (response.isConfirmed) {
        reactSwal.fire({
          title: "Order Placed!",
          html: (
            <div>
              <p>Confirmation Code: {Math.floor(Math.random() * 9999)}</p>
            </div>
          ),
          confirmButtonText: <p className="confirmPrompt">OK</p>,
          confirmButtonColor: "rgb(210,86,86)",
        });
      }
    });
}

export default function TakeoutMenu({
  takeoutVis,
  takeoutToggle,
  order,
  removeOrder,
  addOrder,
}) {
  function RenderOrder() {
    let subtotal = 0;
    let tax = 0;
    const listedItemsUnique = [];
    const orderElementArray = [];
    const taxRate = 6.75;
    const rawListItems = [];

    for (let item in order) {
      let qty = 0;
      for (let similar in order) {
        if (order[item] === order[similar]) {
          qty++;
        }
      }
      if (!listedItemsUnique.includes(order[item].name)) {
        orderElementArray.push(
          <li>
            <div>
              <button
                className="orderOperation"
                onClick={() => removeOrder(order[item])}
              >
                -
              </button>
              {order[item].name} x{qty}
              <button
                className="orderOperation"
                onClick={() => addOrder(order[item])}
              >
                +
              </button>
            </div>
          </li>,
        );
        rawListItems.push(
          <li>
            <div>
              {order[item].name} x{qty}
            </div>
          </li>,
        );
        listedItemsUnique.push(order[item].name);
      }
      subtotal += order[item].price;
      tax = subtotal * (taxRate / 100);

      total = Number.parseFloat(subtotal + tax).toFixed(2);
    }

    rawArr = rawListItems;

    return (
      <>
        <ul className="takeoutList">{orderElementArray}</ul>
        <hr />
        <p className="subtext">
          <i>Subtotal: {subtotal.toFixed(2)}</i>
        </p>
        <p className="subtext">
          <i>Tax: {tax.toFixed(2)}</i>
        </p>
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
        <p className="subtext">
          All orders placed through our website are availible for curbside
          pickup only.
        </p>
        <hr />
        <RenderOrder />
        <button className="orderBtn checkout" onClick={() => checkout(rawArr)}>
          C H E C K O U T
        </button>
        <button className="orderBtn close" onClick={() => takeoutToggle()}>
          C L O S E
        </button>
      </div>
    </>
  );
}
