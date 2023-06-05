import { RxMagnifyingGlass, RxPlus } from "react-icons/rx";
import itemCategory from "../../utils/helpers/itemByCategory";
import { IFoodItem } from "../../types/types";
import useGlobalContext from "../../providers/AppProvider";

const ShoppingItem = () => {
  const {
    state: { foodItems },
  } = useGlobalContext();
  let itemToShow = itemCategory({ foodItems });
  return (
    <div className="main__content-items">
      <div className="items-header d-flex">
        <h1>
          <span>Shop Scribe</span> allows you to take your shopping list
          whereever you go!
        </h1>

        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <RxMagnifyingGlass className="mag-icon" />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="search item"
              aria-label="search item"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </div>
      <div className="items-show">
        {Object.keys(itemToShow).map((item: string) => (
          <div key={item}>
            {/* food category */}
            <h2>{item}</h2>

            <div className="container">
              <div className="row">
                {itemToShow[item].map((item: IFoodItem) => (
                  <div key={item.id} className="col-lg-3 col-md-4 col-6">
                    {/* food product */}
                    <div className="card flex-row align-items-center justify-content-between">
                      <p>{item.name}</p>
                      <p>
                        <RxPlus className="plus-icon" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItem;
