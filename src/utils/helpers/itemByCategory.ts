import { IFoodItem } from "../../types/types";

const itemCategory = ({ foodItems }: { foodItems: IFoodItem[] }) => {
  // take all food items and reorganize items by category

  let foodByCategory: any = {};
  foodItems.forEach((item: IFoodItem) => {
    if (foodByCategory.hasOwnProperty(item.category)) {
      foodByCategory[item.category].push(item);
    } else {
      foodByCategory[item.category] = [item];
    }
  });

  return foodByCategory;
};

export default itemCategory;
