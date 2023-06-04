import { BsCalendarRange } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { format } from "date-fns";
import foodHistory from "../../utils/constant/foodHistory";
import groceryByMonth from "../../utils/helpers/groceryByMonth";
const ListHistory = ({ handleGroceryDetails }: any) => {
  const { formattedGrocery, sortedTimeline } = groceryByMonth(foodHistory);

  const setGrocery = (grocery: any) => {
    handleGroceryDetails({ grocery });
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
                  {format(gItem.date, "EEE d.M.yyy")}
                </span>

                <button className={`btn ${gItem.status}`}>
                  {gItem.status}
                </button>
                <FaChevronRight className="forward-icon" />
              </div>
            </article>
          ))}
        </div>
      ))}
    </>
  );
};

export default ListHistory;
