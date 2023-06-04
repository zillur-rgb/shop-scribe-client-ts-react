import { IFoodHistory } from "../../types/types";

const foodHistory: IFoodHistory[] = [
  {
    id: 1,
    name: "Grocery List",
    date: new Date(2023, 3, 20),
    status: "completed",
    items: [
      { name: "Cheese", pieces: "2", category: "Dairy" },
      { name: "Milk", pieces: "1", category: "Dairy" },
      { name: "Oats", pieces: "1", category: "Grains" },
      { name: "Rice", pieces: "1", category: "Grains" },
      { name: "Chicken 1kg", pieces: "1", category: "Meat and Fish" },
    ],
  },
  {
    id: 2,
    name: "Eero’s farewell party",
    date: new Date(2023, 3, 7),
    status: "completed",
    items: [
      { name: "Chocolate Chip Cookies", pieces: "3", category: "Cookies" },
      { name: "Doris Truffle", pieces: "1", category: "Cookies" },
      { name: "2 x soft drink 1.5 l", pieces: "2", category: "Beverages" },
      { name: "Beer", pieces: "8", category: "Beverages" },
      { name: "Cider", pieces: "6", category: "Beverages" },
    ],
  },
  {
    id: 3,
    name: "Board game week 2",
    date: new Date(2023, 1, 20),
    status: "completed",
    items: [
      { name: "Chocolate Chip Cookies", pieces: "3", category: "Cookies" },
      { name: "Doris Truffle", pieces: "1", category: "Cookies" },
      { name: "2 x soft drink 1.5 l", pieces: "5", category: "Beverages" },
    ],
  },
  {
    id: 4,
    name: "Grocery List",
    date: new Date(2023, 1, 17),
    status: "cancelled",
    items: [
      { name: "Cheese", pieces: "2", category: "Dairy" },
      { name: "Milk", pieces: "1", category: "Dairy" },
      { name: "Oats", pieces: "1", category: "Grains" },
      { name: "Rice", pieces: "1", category: "Grains" },
      { name: "Chicken 1kg", pieces: "1", category: "Meat and Fish" },
    ],
  },
  {
    id: 5,
    name: "New Year Party",
    date: new Date(2022, 11, 31),
    status: "completed",
    items: [
      { name: "Rice", pieces: "2", category: "Grains" },
      { name: "Oats", pieces: "1", category: "Grains" },
      { name: "Chicken 1kg", pieces: "5", category: "Meat and Fish" },
      { name: "Chocolate Chip Cookies", pieces: "3", category: "Cookies" },
      { name: "Doris Truffle", pieces: "1", category: "Cookies" },
      { name: "2 x soft drink 1.5 l", pieces: "5", category: "Beverages" },
      { name: "Beer", pieces: "8", category: "Beverages" },
      { name: "Cider", pieces: "6", category: "Beverages" },
      { name: "Pork fillets 450g", pieces: "8", category: "Meat and Fish" },
      { name: "Ice cream", pieces: "20", category: "Dairy" },
    ],
  },
];

export default foodHistory;
