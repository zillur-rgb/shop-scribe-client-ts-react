const foodHistory = [
  {
    id: 1,
    name: "Grocery List",
    date: new Date(2023, 3, 20),
    status: "completed",
    items: [
      { name: "Cheese", pieces: "2", category: "Dairy", id: 28 },
      { name: "Milk", pieces: "1", category: "Dairy", id: 25 },
      { name: "Oats", pieces: "1", category: "Grains", id: 20 },
      { name: "Rice", pieces: "1", category: "Grains", id: 17 },
      { name: "Chicken 1kg", pieces: "1", category: "Meat and Fish", id: 10 },
    ],
  },
  {
    id: 2,
    name: "Eero’s farewell party",
    date: new Date(2023, 3, 7),
    status: "completed",
    items: [
      {
        name: "Chocolate Chip Cookies",
        pieces: "3",
        category: "Cookies",
        id: 29,
      },
      { name: "Doris Truffle", pieces: "1", category: "Cookies", id: 34 },
      { name: "Soft drink", pieces: "2", category: "Beverages", id: 13 },
      { name: "Beer", pieces: "8", category: "Beverages", id: 14 },
      { name: "Cider", pieces: "6", category: "Beverages", id: 15 },
    ],
  },
  {
    id: 3,
    name: "Board game week 2",
    date: new Date(2023, 1, 20),
    status: "completed",
    items: [
      {
        name: "Chocolate Chip Cookies",
        pieces: "3",
        category: "Cookies",
        id: 29,
      },
      { name: "Doris Truffle", pieces: "1", category: "Cookies", id: 34 },
      { name: "Soft drink", pieces: "5", category: "Beverages", id: 13 },
    ],
  },
  {
    id: 4,
    name: "Grocery List",
    date: new Date(2023, 1, 17),
    status: "cancelled",
    items: [
      { name: "Cheese", pieces: "2", category: "Dairy", id: 28 },
      { name: "Milk", pieces: "1", category: "Dairy", id: 25 },
      { name: "Oats", pieces: "1", category: "Grains", id: 20 },
      { name: "Rice", pieces: "1", category: "Grains", id: 17 },
      { name: "Chicken 1kg", pieces: "1", category: "Meat and Fish", id: 10 },
    ],
  },
  {
    id: 5,
    name: "New Year Party",
    date: new Date(2022, 11, 31),
    status: "completed",
    items: [
      { name: "Rice", pieces: "2", category: "Grains", id: 17 },
      { name: "Oats", pieces: "1", category: "Grains", id: 20 },
      { name: "Chicken 1kg", pieces: "5", category: "Meat and Fish", id: 10 },
      {
        name: "Chocolate Chip Cookies",
        pieces: "3",
        category: "Cookies",
        id: 29,
      },
      { name: "Doris Truffle", pieces: "1", category: "Cookies", id: 34 },
      { name: "Soft drink", pieces: "5", category: "Beverages", id: 13 },
      { name: "Beer", pieces: "8", category: "Beverages", id: 14 },
      { name: "Cider", pieces: "6", category: "Beverages", id: 15 },
      {
        name: "Pork fillets 450g",
        pieces: "8",
        category: "Meat and Fish",
        id: 11,
      },
      { name: "Ice cream", pieces: "20", category: "Dairy", id: 26 },
    ],
  },
];

export default foodHistory;
