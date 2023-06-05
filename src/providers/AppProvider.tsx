import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { IFoodHistory, IFoodItem } from "../types/types";
import foodItems from "../utils/constant/foodItems";
import foodHistory from "../utils/constant/foodHistory";
import reducer from "../reducers/reducers";

interface Props {
  children: React.ReactNode;
}

// Default state
const initialState: {
  foodItems: IFoodItem[];
  foodHistory: IFoodHistory[];
  cart: any[];
} = {
  foodItems,
  foodHistory,
  cart: [],
};

const AppContext = createContext<any>(null);

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateLocalStorage = (state: {
    foodItems: IFoodItem[];
    foodHistory: IFoodHistory[];
    cart: any[];
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
      updateLocalStorage(state);
    }
  }, []);

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

  return (
    <AppContext.Provider
      value={{
        showGroceryDetail,
        handleGroceryDetail,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;

export { AppProvider };
