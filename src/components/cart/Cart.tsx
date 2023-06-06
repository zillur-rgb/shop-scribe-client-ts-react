import "../../styles/cart.css";
import useGlobalContext from "../../providers/AppProvider";
import { useState } from "react";
import ViewCart from "./ViewCart";

const Cart = () => {
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const { showItemDetail, setShowItemDetail } = useGlobalContext();
  return (
    <section className="main__sidebar-cart h-100">
      {showAddItemForm ? (
        <form>form</form>
      ) : showItemDetail.show ? (
        <h1>Hello</h1>
      ) : (
        <ViewCart />
      )}
    </section>
  );
};

// <CartItemDetail item={showItemDetail.item} setShowItemDetail={setShowItemDetail} />

export default Cart;
