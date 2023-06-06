import { format } from "date-fns";
import groceryByMonth from "./groceryByMonth";

export const formatMonthlyData = (foodHistory: any) => {
  // get foodHistory or shopping history and format data by month
  const { formattedGrocery: grocery } = groceryByMonth(foodHistory);
  const formattedMonth: { [month: string]: number } = {};

  for (let i = 0; i < 12; i++) {
    formattedMonth[format(new Date(2023, i, 1), "LLLL")] = 0;
  }

  for (let time of Object.keys(grocery)) {
    let month = time.split(" ")[0];
    let monthItems = 0;

    for (let g of grocery[time]) {
      if (g.status === "completed") {
        for (let item of g.items) {
          monthItems += item.pieces as number;
        }
      }
    }

    if (formattedMonth.hasOwnProperty(month)) {
      formattedMonth[month] += monthItems;
    } else {
      formattedMonth[month] = monthItems;
    }
  }

  return Object.keys(formattedMonth).map((item) => ({
    name: item,
    items: formattedMonth[item],
  }));
};
