import useGlobalContext from "../../providers/AppProvider";
import "../../styles/main.css";
import AddItemForm from "../Navbar/AddItemForm";
import CartItemDetail from "../Navbar/CartItemDetail";
import Cart from "../cart/Cart";
function RightSidebar() {
  const { setShowItemDetail, showItemDetail } = useGlobalContext();
  console.log("showItemDetail", showItemDetail);

  return (
    <div className="app__main-sidebar">
      <Cart />
    </div>
  );
}

export default RightSidebar;
