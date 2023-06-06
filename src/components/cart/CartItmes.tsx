import { ICart, IFoodItem } from "../../types/types";
import itemCategory from "../../utils/helpers/itemByCategory";
import { HiCheck, HiPencil } from "react-icons/hi";
import CartItemControl from "./CartItemControl";
import { RefObject, useEffect, useRef, useState } from "react";
import useGlobalContext from "../../providers/AppProvider";

interface Props {
  state: {
    cart: ICart;
    foodItems: IFoodItem[];
  };
}

const CartItmes = ({ state: { cart, foodItems } }: Props) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const headingRef = useRef<HTMLHeadingElement>();
  const { itemStatusUpdate } = useGlobalContext();

  const getCartItem = () => {
    // Filter all items to get cart items
    const allItemsId = cart?.items.map((item) => item.id);

    let cartItemToShow = foodItems.filter((item) =>
      allItemsId.includes(item.id)
    );
    return cartItemToShow;
  };

  const mapItemToQty = () => {
    // return object of items with id as key and quantity as value
    const cartItemQtys: any = {};
    for (let item of cart.items) {
      cartItemQtys[item.id] = item.pieces;
    }
    return cartItemQtys;
  };

  const mapItemToStatus = () => {
    // return object of items with id as key and status as value
    const cartItemStatus: { [key: number]: boolean } = {};
    for (let item of cart.items) {
      cartItemStatus[item.id] = item.done;
    }
    return cartItemStatus;
  };

  const cartItemStatus = mapItemToStatus();
  const cartItemQtys = mapItemToQty();

  let cartItemsToShow = getCartItem();

  let cartItemsByCategory = itemCategory({
    foodItems: cartItemsToShow,
  });

  let allCategories = Object.keys(cartItemsByCategory);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.contentEditable = showEdit.toString();
      headingRef.current.focus();
    }
  }, [showEdit]);

  return (
    <section className="main__cart-items w-100">
      <div className="cart-title d-flex align-items-center">
        <h2 className="me-1" ref={headingRef as RefObject<HTMLHeadingElement>}>
          Shopping List
        </h2>
        <span>
          <HiPencil
            className="pencil-icon"
            onClick={() => setShowEdit(!showEdit)}
          />
        </span>
      </div>

      <div className="cart-items">
        {allCategories.map((category) => (
          <div key={category}>
            <p className="cart__items-category">{category}</p>
            <div className="d-flex flex-column">
              {cartItemsByCategory[category].map((item: IFoodItem) => (
                <div className="d-flex align-items-center">
                  {showEdit && (
                    <div className="position-relative input-holder">
                      <input
                        type="checkbox"
                        id={`done-${item.id}`}
                        onChange={(_e: React.ChangeEvent<HTMLInputElement>) =>
                          itemStatusUpdate(item.id, !cartItemStatus[item.id])
                        }
                        className="visually-hidden"
                      />

                      <span className="fake-input">
                        <HiCheck className="check-icon" />
                      </span>
                    </div>
                  )}
                  <label
                    htmlFor={`done-${item.id}`}
                    className={`${
                      cartItemStatus[item.id] && "text-decoration-line-through"
                    }`}
                  >
                    {item.name}
                  </label>
                  <CartItemControl item={item} qtys={cartItemQtys} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartItmes;
