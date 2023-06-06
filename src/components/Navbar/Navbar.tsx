import logo from "../../assets/logo.svg";
import { RiListUnordered, RiShoppingCart2Line } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.css";
import useGlobalContext from "../../providers/AppProvider";

const Navbar = () => {
  const { state } = useGlobalContext();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="app__sidebar">
      <nav className="navbar">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center">
          {/* logo goes here */}

          <div className="app__sidebar-logo">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* Nav items go here */}
          <div className="app__sidebar-nav">
            <Link to="/">
              <div className={`nav-item ${path === "/" && "active"}`}>
                <RiListUnordered />
              </div>
            </Link>
            <Link to="/history">
              <div className={`nav-item ${path === "/history" && "active"}`}>
                <GiBackwardTime />
              </div>
            </Link>
            <Link to="/stat">
              <div className={`nav-item ${path === "/stat" && "active"}`}>
                <AiOutlineBarChart />
              </div>
            </Link>
          </div>

          {/* cart items go here */}
          <div className="app__sidebar-cart">
            <p className="item-num ">{state.cart.items.length}</p>
            <RiShoppingCart2Line className="cart-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
