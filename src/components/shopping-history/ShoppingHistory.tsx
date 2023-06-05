import useGlobalContext from "../../providers/AppProvider";
import DetailHistory from "./DetailHistory";
import ListHistory from "./ListHistory";

const ShoppingHistory = () => {
  const { showGroceryDetail } = useGlobalContext();

  return (
    <div className="main__content-items">
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>

      <div className="items-body">
        {!showGroceryDetail?.show ? <ListHistory /> : <DetailHistory />}
      </div>
    </div>
  );
};

export default ShoppingHistory;
