import { toast } from "react-hot-toast";
import toastStyles from "../utils/toastStyles";
import { ICart } from "./../types/types.d";

const { errorStyle, successStyle } = toastStyles;

const reducer = (
  state: any,
  action: {
    type: string;
    payload: any;
  }
) => {
  const { type, payload } = action;

  if (type === "UPDATE_LOCAL_STORAGE") {
    localStorage.setItem("shoppingList", JSON.stringify(payload));
  }

  if (type === "UPDATE_CURRENT_STATE") {
    return payload;
  }

  if (type === "EMPTY_CART") {
    const currentDate = new Date();
    let oldCart = state.cart;
    oldCart.status = payload;

    if (payload === "completed") {
      toast(`Shopping Completed...`, { style: successStyle });
    } else {
      toast(`Shopping Cancelled!!!`, { style: errorStyle });
    }

    const newState = {
      ...state,
      foodHistory: [...state.foodHistory, oldCart],
      cart: {
        id: currentDate.getTime(),
        name: "Shopping List",
        date: currentDate,
        status: "unknown",
        items: [],
      },
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
        done: false,
      };

      const newCart = { ...state.cart, items: [...cartItems, newItem] };

      toast(`New item added to cart, ${payload.name}`, { style: successStyle });
      return {
        ...state,
        cart: newCart,
      };
    }
  }

  if (type === "UPDATE_CART_QTY") {
    const { id, qty } = payload;

    let oldCart = state.cart;
    const itemToUpdate = oldCart.items.filter(
      (item: { id: any }) => item.id === id
    )[0];

    const restItems = oldCart.items.filter(
      (item: { id: any }) => item.id !== id
    );

    itemToUpdate.pieces = qty;

    return {
      ...state,
      cart: {
        ...oldCart,
        items: [...restItems, itemToUpdate],
      },
    };
  }

  if (type === "REMOVE_CART_ITEM") {
    let oldCart = state.cart;

    const restItems = state.cart.items.filter(
      (item: { id: number }) => item.id !== payload
    );

    toast(`Item removed from cart`, { style: errorStyle });
    return {
      ...state,
      cart: {
        ...oldCart,
        items: [...restItems],
      },
    };
  }

  if (type === "CART_ITEM_STATUS") {
    const { id, newStatus } = payload;
    let oldCart = state.cart;

    const itemToUpdate = oldCart.items.filter(
      (item: ICart) => item.id === id
    )[0];

    const restItems = oldCart.items.filter((item: ICart) => item.id !== id);

    itemToUpdate.done = newStatus;

    return {
      ...state,
      cart: {
        ...oldCart,
        items: [...restItems, itemToUpdate],
      },
    };
  }

  if (type === "CART_NAME_UPDATE") {
    const oldCart = state.cart;
    oldCart.name = payload;
    return {
      ...state,
      cart: oldCart,
    };
  }

  if (type === "ADD_NEW_ITEM") {
    let duplicateItem = state.foodItems.filter(
      (item: any) =>
        item.name === payload.name && item.category === payload.category
    );

    if (duplicateItem.length === 0) {
      toast("New Item Added", { style: successStyle });
      return {
        ...state,
        foodItems: [...state.foodItems, payload],
      };
    }
  }

  return state;
};

export default reducer;
