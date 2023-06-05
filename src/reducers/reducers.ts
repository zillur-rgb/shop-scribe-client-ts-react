import { ICart, IFoodHistory, IFoodItem } from "../types/types";

const reducer = (
  state: any,
  // action: {
  //   type: string;
  //   payload: {
  //     foodItems: IFoodItem[];
  //     foodHistory: IFoodHistory[];
  //     cart: ICart;
  //     id?: any;
  //     name?: string;
  //   };
  // }
  action: any
) => {
  const { type, payload } = action;

  if (type === "UPDATE_LOCAL_STORAGE") {
    localStorage.setItem("shoppingList", JSON.stringify(state));
  }

  if (type === "UPDATE_CURRENT_STATE") {
    return payload;
  }

  if (type === "EMPTY_CART") {
    let oldCart = payload.cart;

    const newState = {
      ...state,
      foodItems: [...payload.foodItems],
      foodHistory: [...payload.foodHistory],
      oldCart,
    };

    return newState;
  }

  if (type === "ADD_CART_ITEM") {
    const cartItems = state.cart.items;
    const allCardItemsId = cartItems.map((item: { id: string }) => item.id);

    if (!allCardItemsId.includes(payload?.id)) {
      const newItem = {
        name: payload.name,
        category: payload.category,
        pieces: "1",
        id: payload.id,
      };

      const newCart = { ...state.cart, items: [...cartItems, newItem] };
      return { ...state, cart: newCart };
    }
  }

  return state;
};

export default reducer;
