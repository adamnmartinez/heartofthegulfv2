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
    <div>
      <ul className="navList">
        <button className="navBtn" onClick={() => setPage(homePage)}>
          H O M E
        </button>
        <button className="navBtn" onClick={() => setPage(menuPage)}>
          M E N U
        </button>
        <button className="navBtn" onClick={() => setPage(contactPage)}>
          C O N T A C T
        </button>
        <button className="takeoutBtn navBtn" onClick={takeoutToggle}>
          T A K E O U T<span className="orderCount">{order.length}</span>
        </button>
      </ul>
    </div>
  );
}
