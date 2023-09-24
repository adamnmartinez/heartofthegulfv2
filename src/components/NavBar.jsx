import ContactPage from "../pages/Contact";
import HomePage from "../pages/Home";
import MenuPage from "../pages/Menu";

export default function NavBar({
  setPage,
  takeoutToggle,
  homePage,
  menuPage,
  contactPage,
  order,
}) {
  return (
    <div className="nav">
      <button className="navBtn" onClick={() => setPage(homePage)}>
        HOME
      </button>
      <button className="navBtn" onClick={() => setPage(menuPage)}>
        MENU
      </button>
      <button className="navBtn" onClick={() => setPage(contactPage)}>
        CONTACT
      </button>
      <button className="takeoutBtn navBtn" onClick={takeoutToggle}>
        TAKEOUT
      </button>
    </div>
  );
}
