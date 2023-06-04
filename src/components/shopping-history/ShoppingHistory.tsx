import useGlobalContext from "../../providers/AppProvider";
import ListHistory from "./ListHistory";

const ShoppingHistory = () => {
  const { showGroceryDetail, handleGroceryDetails } = useGlobalContext();

  return (
    <div className="main__content-items">
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>

      <div className="items-body">
        {!showGroceryDetail?.show ? (
          <ListHistory handleGroceryDetails={handleGroceryDetails} />
        ) : (
          <h1>Hello</h1>
        )}
      </div>
    </div>
  );
};

export default ShoppingHistory;
