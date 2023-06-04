import { compareDesc, format } from "date-fns";
import { IFoodHistory } from "../../types/types";

const groceryByMonth = (foodHistory: IFoodHistory[]) => {
  // takes grocery list by date and format it by month
  let sortedTimeline = foodHistory
    .slice() // Create a shallow copy of the array
    .sort((a, b) => compareDesc(a.date, b.date))
    .map((item) => format(item.date, "LLLL yyyy"));

  sortedTimeline.filter(
    (item, index) => sortedTimeline.indexOf(item) === index
  );

  const formattedGrocery: Record<string, IFoodHistory[]> = {};

  foodHistory.forEach((item) => {
    const timeline = format(item.date, "LLLL yyyy");

    if (formattedGrocery.hasOwnProperty(timeline)) {
      formattedGrocery[timeline].push(item);
    } else {
      formattedGrocery[timeline] = [item];
    }
  });

  return { formattedGrocery, sortedTimeline };
};

export default groceryByMonth;
