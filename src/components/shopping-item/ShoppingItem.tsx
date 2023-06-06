import { RxMagnifyingGlass, RxPlus } from "react-icons/rx";
import itemCategory from "../../utils/helpers/itemByCategory";
import { IFoodItem } from "../../types/types";
import useGlobalContext from "../../providers/AppProvider";
import { useState } from "react";
import "../../styles/shopping-item.css";

const ShoppingItem = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    state: { foodItems },
    addItemToCart,
    setShowItemDetail,
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
            <span className="input-group-text" id="search-icon">
              <RxMagnifyingGlass className="mag-icon" />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="search item"
              aria-label="search item"
              aria-describedby="search-icon"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
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
                {itemToShow[item].map((item: IFoodItem) => {
                  if (
                    !searchTerm ||
                    item.name.toLowerCase().match(searchTerm.toLowerCase())
                  ) {
                    return (
                      <div
                        key={item.id}
                        className="ccol-lg-3 col-md-4 col-sm-6 col-12"
                      >
                        {/* food product */}
                        <div className="card flex-row align-items-center justify-content-between">
                          <p
                            onClick={() =>
                              setShowItemDetail({
                                show: true,
                                item: item,
                              })
                            }
                          >
                            {item.name}
                          </p>
                          <p>
                            <RxPlus
                              onClick={(_e: any) => addItemToCart(item)}
                              className="plus-icon"
                            />
                          </p>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItem;
