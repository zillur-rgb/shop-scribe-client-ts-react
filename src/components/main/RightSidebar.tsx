import "../../styles/main.css";
import Cart from "../cart/Cart";
function RightSidebar() {
  let cartItem: any[] = [];
  return (
    <div className="app__main-sidebar">
      <Cart cartItem={cartItem} />
    </div>
  );
}

export default RightSidebar;
