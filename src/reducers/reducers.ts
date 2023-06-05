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
      cart: { ...oldCart, items: [...restItems, itemToUpdate] },
    };
  }

  return state;
};

export default reducer;
