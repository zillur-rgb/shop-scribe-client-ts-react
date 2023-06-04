import useGlobalContext from "../../providers/AppProvider";
import DetailHistory from "./DetailHistory";
import ListHistory from "./ListHistory";

const ShoppingHistory = () => {
  const { showGroceryDetail, handleGroceryDetail } = useGlobalContext();

  return (
    <div className="main__content-items">
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>

      <div className="items-body">
        {!showGroceryDetail?.show ? (
          <ListHistory handleGroceryDetail={handleGroceryDetail} />
        ) : (
          <DetailHistory
            handleGroceryDetail={handleGroceryDetail}
            showGroceryDetail={showGroceryDetail}
          />
        )}
      </div>
    </div>
  );
};

export default ShoppingHistory;
