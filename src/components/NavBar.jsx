import ContactPage from "../pages/Contact";
import HomePage from "../pages/Home";
import MenuPage from "../pages/Menu";

export default function NavBar({ setter, takeoutToggle }) {
  return (
    <div>
      <ul className="navList">
        <button className="navBtn" onClick={() => setter(<HomePage />)}>
          H O M E
        </button>
        <button className="navBtn" onClick={() => setter(<MenuPage />)}>
          M E N U
        </button>
        <button className="navBtn" onClick={() => setter(<ContactPage />)}>
          C O N T A C T
        </button>
        <button className="takeoutBtn navBtn" onClick={takeoutToggle}>
          T A K E O U T
        </button>
      </ul>
    </div>
  );
}
