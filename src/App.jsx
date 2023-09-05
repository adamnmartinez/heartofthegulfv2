import { useState } from "react";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import ContactPage from "./pages/Contact";
import NavBar from "./components/NavBar";
import TakeoutMenu from "./components/TakeoutMenu";

function App() {
  const [page, setPage] = useState(<HomePage />);
  const [takeoutVis, setTakeoutVis] = useState(false);
  const [takeoutOrder, setTakeoutOrder] = useState({});

  function toggleTakeout() {
    takeoutVis ? setTakeoutVis(false) : setTakeoutVis(true);
    console.log(takeoutVis);
  }

  function TitleHOTG() {
    return (
      <button className="titleBtn" onClick={() => setPage(<HomePage />)}>
        <div className="title">
          Heart of the Gulf
          <div className="titleAR">قلب الخليج</div>
        </div>
      </button>
    );
  }

  console.log("site loaded");

  return (
    <div>
      <NavBar setter={setPage} takeoutToggle={toggleTakeout} />
      <TakeoutMenu takeoutVis={takeoutVis} setTakeoutVis={setTakeoutVis} />
      <TitleHOTG />
      {page}
    </div>
  );
}

export default App;
