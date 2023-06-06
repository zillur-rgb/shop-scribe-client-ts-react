import cart from "../../assets/undraw_shopping_app_flsj 1.svg";
import bottle from "../../assets/source.svg";
import SearchForm from "../search/SearchForm";
import "../../styles/cart.css";
import useGlobalContext from "../../providers/AppProvider";
import CartItmes from "./CartItmes";
import { useState } from "react";

const Cart = () => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const { state, shoppingEnded } = useGlobalContext();
  const emptyCart = state?.cart?.items?.length === 0;
  return (
    <section className="main__sidebar-cart h-100">
      <div className="cart d-flex flex-column align-items-center h-100">
        <div className="cart-header d-flex">
          <div className="cart-content order-2">
            <h2>Didn't find what you need?</h2>
            <button className="btn">Add Items</button>
          </div>
          <div className="cart-images">
            <img src={bottle} alt="bottle" />
          </div>
        </div>

        {emptyCart ? (
          <div className="empty-cart-display position-relative">
            <span>No items</span>
            <img src={cart} alt="cart" className="position-absolute" />
          </div>
        ) : (
          <CartItmes
            state={state}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        )}

        <div className="cart-footer mt-auto">
          {showEdit ? (
            <div className="btn-holder d-flex">
              <button
                className="btn"
                onClick={() => shoppingEnded("cancelled")}
              >
                Cancel
              </button>

              <button
                className="btn"
                onClick={() => shoppingEnded("completed")}
              >
                Complete
              </button>
            </div>
          ) : (
            <SearchForm empty={emptyCart} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
