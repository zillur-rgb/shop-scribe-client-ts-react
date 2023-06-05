import { BsCalendarRange } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { format } from "date-fns";
import groceryByMonth from "../../utils/helpers/groceryByMonth";
import useGlobalContext from "../../providers/AppProvider";
import { IFoodHistory } from "../../types/types";

interface Props {
  handleGroceryDetail: any;
}

const ListHistory = ({ handleGroceryDetail }: Props) => {
  const {
    state: { foodHistory },
  } = useGlobalContext();

  const { formattedGrocery, sortedTimeline } = groceryByMonth(foodHistory);

  const setGrocery = (grocery: IFoodHistory) => {
    // calls handleGroceryDetail function and pass the grocery item
    handleGroceryDetail({ grocery });
  };
  return (
    <>
      {sortedTimeline.map((item, index) => (
        <div key={index} className="items-month">
          <p>{item}</p>

          {formattedGrocery[item].map((gItem) => (
            <article
              className="card flex-row justify-content-between"
              key={gItem.id}
            >
              <h2 onClick={(_e) => setGrocery(gItem)}>{gItem.name}</h2>

              <div className="d-flex align-items-center">
                <BsCalendarRange className="calendar-icon" />

                <span className="item-date">
                  {format(new Date(gItem.date), "EEE d.M.yyy")}
                </span>

                <button className={`btn ${gItem.status}`}>
                  {gItem.status}
                </button>
                <FaChevronRight
                  onClick={(_e: any) => setGrocery(gItem)}
                  className="forward-icon"
                />
              </div>
            </article>
          ))}
        </div>
      ))}
    </>
  );
};

export default ListHistory;
