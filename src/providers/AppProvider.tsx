import { createContext, useContext, useEffect, useReducer } from "react";
import { ICart, IFoodHistory, IFoodItem } from "../types/types";
import foodItems from "../utils/constant/foodItems";
import foodHistory from "../utils/constant/foodHistory";
import reducer from "../reducers/reducers";
import expiredDate from "../utils/helpers/expiredDate";
interface Props {
  children: React.ReactNode;
}

const currentDate = new Date();

// Default state
const initialState: {
  foodItems: IFoodItem[];
  foodHistory: IFoodHistory[];
  cart: ICart;
} = {
  foodItems,
  foodHistory,
  cart: {
    id: currentDate.getTime(),
    name: "Shopping List",
    date: currentDate,
    status: "unknown",
    items: [],
  },
};

const AppContext = createContext<any>(null);

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateLocalStorage = (state: {
    foodItems: IFoodItem[];
    foodHistory: IFoodHistory[];
    cart: ICart;
  }) => {
    // Update local storage with new values
    dispatch({
      type: "UPDATE_LOCAL_STORAGE",
      payload: state,
    });
  };

  const addItemToCart = (item: IFoodItem) => {
    // add item to cart and update local storage
    dispatch({ type: "ADD_CART_ITEM", payload: item });
  };

  const updateItemQuantity = ({ id, qty }: { id: any; qty: number }) => {
    dispatch({ type: "UPDATE_CART_QTY", payload: { id, qty } });
  };

  const removeCartItem = (id: string | number) => {
    // removes an item from the cart
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  };

  const itemStatusUpdate = (id: number, newStatus: boolean) => {
    // change item status complete to not with id
    dispatch({ type: "CART_ITEM_STATUS", payload: { id, newStatus } });
  };

  useEffect(() => {
    // add shopping to local storage at start
    if (!localStorage.getItem("shoppingList")) {
      // If there is no shopping list on local storage
      updateLocalStorage(state);
    } else {
      //if there is a shopping list
      const oldState: {
        foodItems: IFoodItem[];
        foodHistory: IFoodHistory[];
        cart: ICart;
      } = JSON.parse(localStorage.getItem("shoppingList") as string);

      // console.log("oldState", oldState.cart);

      let oldDate = new Date(oldState.cart.date);

      if (oldState && expiredDate({ oldDate, currentDate })) {
        // if cart is 24 hrs old date not tch
        // empty cart to shopping history and update local storage
        dispatch({
          type: "EMPTY_CART",
          payload: oldState,
        });
        updateLocalStorage(state);
      } else {
        // if cart is less than 24 hrs old
        dispatch({
          type: "UPDATE_CURRENT_STATE",
          payload: oldState,
        });
      }
    }
  }, []);

  useEffect(() => {
    // updtae local storage every time cart item changes
    updateLocalStorage(state);
  }, [state.cart.items]);

  console.log("cart", state.cart);

  return (
    <AppContext.Provider
      value={{
        state,
        addItemToCart,
        updateItemQuantity,
        removeCartItem,
        itemStatusUpdate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;

export { AppProvider };
