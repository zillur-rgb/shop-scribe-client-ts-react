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
  const [showItemDetail, setShowItemDetail] = useState({
    show: false,
    item: null,
  });
  const [showAddItemForm, setShowAddItemForm] = useState(false);

  const [showModal, setShowModal] = useState<boolean>(false);
  console.log("showModal", showModal);

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

  // change cart name
  const changeCartName = (name: string) => {
    dispatch({
      type: "CART_NAME_UPDATE",
      payload: name,
    });
    updateLocalStorage(state);
  };
  // after shopping ended update status and empty cart
  const shoppingEnded = (result: string) => {
    dispatch({
      type: "EMPTY_CART",
      payload: result,
    });
    setShowModal(false);
  };

  // add new item to the grocery list and also to the cart
  const addNewItem = (item: IFoodItem) => {
    dispatch({ type: "ADD_NEW_ITEM", payload: item });
    addItemToCart(item);
  };

  // add shopping to local storage at start and update
  useEffect(() => {
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

      dispatch({
        type: "UPDATE_CURRENT_STATE",
        payload: oldState,
      });
    }
  }, []);

  // updtae local storage every time cart item changes
  useEffect(() => {
    updateLocalStorage(state);
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        state,
        addItemToCart,
        updateItemQuantity,
        removeCartItem,
        itemStatusUpdate,
        shoppingEnded,
        changeCartName,
        showItemDetail,
        setShowItemDetail,
        showAddItemForm,
        setShowAddItemForm,
        addNewItem,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;

export { AppProvider };
