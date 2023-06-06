import { IFoodHistory } from "../../types/types";

export const getTopItemAndCategory = (foodItems: IFoodHistory[]) => {
  // get shopping history and return items, categories, top 3 items and categories and total items so far

  let items: { [name: string]: number } = {};
  let categories: { [category: string]: number } = {};
  let totalItem = 0;

  for (let food of foodItems) {
    if (food.status === "completed") {
      for (let item of food.items) {
        item.pieces = Number(item.pieces);
        const { category, name, pieces } = item;

        // items
        if (items.hasOwnProperty(name)) {
          items[name] += pieces;
        } else {
          items[name] = pieces || 1;
        }

        // categories
        if (categories.hasOwnProperty(category)) {
          categories[category] += pieces;
        } else {
          categories[category] = pieces || 1;
        }
        totalItem += pieces;
      }
    }
  }

  const itemFilter = Object.values(items)
    .sort((a, b) => b - a)
    .slice(0, 3);

  const categoryFIlter = Object.values(categories)
    .sort((a, b) => b - a)
    .slice(0, 3);

  let topItems: string[] = ["0", "0", "0"];
  let topCategories: string[] = ["0", "0", "0"];

  for (let item of Object.keys(items)) {
    const index = itemFilter.indexOf(items[item]);
    if (index != -1) {
      topItems[index] = item;
    }
  }

  for (let cat of Object.keys(categories)) {
    const index = categoryFIlter.indexOf(categories[cat]);

    if (index !== -1) {
      topCategories[index] = cat;
    }
  }

  return { items, categories, topItems, topCategories, totalItem };
};
