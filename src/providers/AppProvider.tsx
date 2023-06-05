import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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

  const addItemToCart = (item: any) => {
    // add item id to cart and update local storage
    dispatch({
      type: "ADD_CART_ITEM",
      payload: item,
    });

    console.log("payload", payload);
  };

  const [showGroceryDetail, setShowGroceryDetail] = useState({
    show: false,
    item: null,
  });

  const handleGroceryDetail = ({ grocery }: { grocery: IFoodItem | any }) => {
    /**
     * show details if grocery item is given
     * @param obj {grocery: <value>}
     */
    if (!grocery) {
      setShowGroceryDetail({
        show: false,
        item: null,
      });
    } else {
      setShowGroceryDetail({ show: true, item: grocery });
    }
  };

  useEffect(() => {
    // updtae local storage every time cart item changes
    updateLocalStorage(state);
  }, [state.cart.items]);

  return (
    <AppContext.Provider
      value={{
        showGroceryDetail,
        handleGroceryDetail,
        state,
        addItemToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;

export { AppProvider };
