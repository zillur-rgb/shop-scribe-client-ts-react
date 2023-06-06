import "../../styles/cart.css";
import useGlobalContext from "../../providers/AppProvider";
import ViewCart from "./ViewCart";
import SidebarItem from "../main/SidebarItem";

const Cart = () => {
  const { showItemDetail, showAddItemForm } = useGlobalContext();
  return (
    <section className="h-100">
      {showAddItemForm || showItemDetail.show ? <SidebarItem /> : <ViewCart />}
    </section>
  );
};

// <CartItemDetail item={showItemDetail.item} setShowItemDetail={setShowItemDetail} />

export default Cart;
