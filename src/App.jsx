import { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import ContactPage from "./pages/Contact";
import NavBar from "./components/NavBar";
import TakeoutMenu from "./components/TakeoutMenu";

function App() {
  const [page, setPage] = useState(<></>);
  const [takeoutVis, setTakeoutVis] = useState(false);
  const [order, setOrder] = useState([]);

  function addOrder(newitem) {
    setOrder((oldOrder) => [...oldOrder, newitem]);
  }

  function removeOrder(item) {
    const newArr = [...order];
    const index = newArr.indexOf(item);
    newArr.splice(index, 1);
    setOrder(newArr);
  }

  function toggleTakeout() {
    takeoutVis ? setTakeoutVis(false) : setTakeoutVis(true);
  }

  //Pass necessary states, setters, and objects to pages
  const menuPageElement = <MenuPage addOrder={addOrder} />;
  const homePageElement = (
    <HomePage setPage={setPage} menuPage={menuPageElement} />
  );
  const contactPageElement = <ContactPage />;
  const navBarElement = (
    <NavBar
      setPage={setPage}
      takeoutToggle={toggleTakeout}
      homePage={homePageElement}
      menuPage={menuPageElement}
      contactPage={contactPageElement}
      order={order}
    />
  );
  const takeoutMenuElement = (
    <TakeoutMenu
      takeoutVis={takeoutVis}
      order={order}
      removeOrder={removeOrder}
      addOrder={addOrder}
    />
  );

  function TitleHOTG() {
    return (
      <button className="titleBtn" onClick={() => setPage(homePageElement)}>
        <div className="title">
          Heart of the Gulf
          <div className="titleAR">قلب الخليج</div>
        </div>
      </button>
    );
  }

  //Inital Render
  useEffect(() => {
    setPage(homePageElement);
  }, []);

  return (
    <div>
      {navBarElement}
      {takeoutMenuElement}
      <TitleHOTG />
      {page}
    </div>
  );
}

export default App;
