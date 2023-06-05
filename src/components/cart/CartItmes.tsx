import { ICart, IFoodItem } from "../../types/types";
import itemCategory from "../../utils/helpers/itemByCategory";
import { HiPencil } from "react-icons/hi";
import CartItemControl from "./CartItemControl";

interface Props {
  state: {
    cart: ICart;
    foodItems: IFoodItem[];
  };
}

const CartItmes = ({ state: { cart, foodItems } }: Props) => {
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

  const cartItemQtys = mapItemToQty();

  let cartItemsToShow = getCartItem();

  let cartItemsByCategory = itemCategory({
    foodItems: cartItemsToShow,
  });

  let allCategories = Object.keys(cartItemsByCategory);

  return (
    <section className="main__cart-items w-100">
      <div className="cart-title d-flex align-items-center">
        <h2 className="me-1">Shopping List</h2>
        <span>
          <HiPencil className="pencil-icon" />
        </span>
      </div>

      <div className="cart-items">
        {allCategories.map((category) => (
          <div key={category}>
            <p className="cart__items-category">{category}</p>
            <div className="d-flex flex-column align-items-stretch">
              {cartItemsByCategory[category].map((item: IFoodItem) => (
                <article className="d-flex align-items-center" key={item.id}>
                  <h3>{item.name}</h3>
                  <CartItemControl item={item} qtys={cartItemQtys} />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartItmes;
