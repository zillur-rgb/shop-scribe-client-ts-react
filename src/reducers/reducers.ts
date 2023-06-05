import { IFoodHistory, IFoodItem } from "../types/types";

const reducer = (
  state: any,
  action: {
    type: string;
    payload: {
      foodItems: IFoodItem[];
      foodHistory: IFoodHistory[];
      cart: any[];
    };
  }
) => {
  const { type } = action;

  if (type === "UPDATE_LOCAL_STORAGE") {
    localStorage.setItem("shoppingList", JSON.stringify(state));
  }

  return state;
};

export default reducer;
