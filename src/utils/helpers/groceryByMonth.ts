import { compareDesc, format, isBefore } from "date-fns";
import { IFoodHistory } from "../../types/types";

const groceryByMonth = (foodHistory: IFoodHistory[]) => {
  // takes grocery list by date and format it by month
  const foodHistoryUpdated = foodHistory.map((item) => {
    item.date = new Date(item.date);
    return item;
  });

  let sortedTimeline = foodHistoryUpdated
    .slice() // Create a shallow copy of the array
    .sort((a, b) => compareDesc(a.date, b.date))
    .map((item) => format(item.date, "LLLL yyyy"));

  sortedTimeline.filter(
    (item, index) => sortedTimeline.indexOf(item) === index
  );

  const formattedGrocery: Record<string, IFoodHistory[]> = {};

  for (let item of foodHistoryUpdated) {
    const timeFormat = format(item.date, "LLLL yyyy");

    if (formattedGrocery.hasOwnProperty(timeFormat)) {
      let put: boolean = false;
      let groceryItems = formattedGrocery[timeFormat];

      for (let ind in groceryItems) {
        if (isBefore(new Date(groceryItems[ind].date), new Date(item.date))) {
          formattedGrocery[timeFormat] = [
            ...groceryItems.slice(0, parseInt(ind)),
            item,
            ...groceryItems.slice(parseInt(ind)),
          ];
          put = true;
          break;
        }
        if (!put) {
          formattedGrocery[timeFormat].push(item);
        }
      }
    } else {
      formattedGrocery[timeFormat] = [item];
    }
  }

  return { formattedGrocery, sortedTimeline };
};

export default groceryByMonth;
