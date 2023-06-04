import logo from "../../assets/logo.svg";
import { RiListUnordered, RiShoppingCart2Line } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="app__sidebar">
      <nav className="navbar vh-100 align-items-auto">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center h-100">
          {/* logo goes here */}

          <div className="app__sidebar-logo">
            <a href="#" className="navbar-brand">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* Nav items go here */}
          <div className="app__sidebar-nav">
            <div className="nav-item list-items">
              <RiListUnordered />
            </div>

            <div className="nav-item history-items">
              <GiBackwardTime />
            </div>

            <div className="nav-item stats-items">
              <AiOutlineBarChart />
            </div>
          </div>

          {/* cart items go here */}
          <div className="app__sidebar-cart position-relative">
            <div className="item-num position-absolute">4</div>
            <RiShoppingCart2Line className="cart-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
