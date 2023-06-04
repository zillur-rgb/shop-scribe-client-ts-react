import logo from "../../assets/logo.svg";
import { RiListUnordered, RiShoppingCart2Line } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="app__sidebar">
      <nav className="navbar">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center">
          {/* logo goes here */}

          <div className="app__sidebar-logo">
            <a href="#" className="navbar-brand">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* Nav items go here */}
          <div className="app__sidebar-nav">
            <div className="nav-item list-items">
              <Link to="/">
                <RiListUnordered />
              </Link>
            </div>

            <div className="nav-item history-items">
              <Link to="/history">
                <GiBackwardTime />
              </Link>
            </div>

            <div className="nav-item stats-items">
              <Link to={"/stats"}>
                <AiOutlineBarChart />
              </Link>
            </div>
          </div>

          {/* cart items go here */}
          <div className="app__sidebar-cart">
            <p className="item-num ">4</p>
            <RiShoppingCart2Line className="cart-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
