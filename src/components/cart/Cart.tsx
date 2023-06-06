import "../../styles/cart.css";
import useGlobalContext from "../../providers/AppProvider";
import cart from "../../assets/undraw_shopping_app_flsj 1.svg";
import bottle from "../../assets/source.svg";
import { useEffect, useState } from "react";
import CartItmes from "./CartItmes";
import SearchForm from "../search/SearchForm";

const Cart = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const { state, shoppingEnded, setShowAddItemForm, setShowModal } =
    useGlobalContext();
  const emptyCart = state?.cart?.items?.length === 0;

  useEffect(() => {
    if (emptyCart) {
      setShowEdit(false);
    }
  }, [emptyCart]);

  return (
    <div className="main__sidebar-cart d-flex flex-column align-items-center h-100">
      <div className="cart-padding w-100 d-flex flex-column align-items-center">
        <div className="cart-header d-flex">
          <div className="cart-content order-2">
            <h2>Didn't find what you are looking for?</h2>

            <button
              className="btn bg-white"
              onClick={() => setShowAddItemForm(true)}
            >
              Add item
            </button>
          </div>

          <div className="cart-image">
            <img src={bottle} alt="bottle" />
          </div>
        </div>

        {emptyCart ? (
          <div className="empty-cart-display position-relative">
            <span>No items!!!</span>
            <img src={cart} alt="cart" className="position-absolute" />
          </div>
        ) : (
          <CartItmes
            searchTerm={searchTerm}
            state={state}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        )}
      </div>

      <div className="cart-footer mt-auto w-100">
        {showEdit ? (
          <div className="btn-holder d-flex">
            <button className="btn" onClick={() => setShowModal(true)}>
              Cancel
            </button>
            <button className="btn" onClick={() => shoppingEnded("completed")}>
              Complete
            </button>
          </div>
        ) : (
          <SearchForm {...{ searchTerm, setSearchTerm }} empty={emptyCart} />
        )}
      </div>
    </div>
  );
};

// <CartItemDetail item={showItemDetail.item} setShowItemDetail={setShowItemDetail} />

export default Cart;
