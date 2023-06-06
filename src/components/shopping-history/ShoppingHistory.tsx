import { useState } from "react";
import DetailHistory from "./DetailHistory";
import ListHistory from "./ListHistory";
import { IGroceryDetail } from "../../types/types";
import "../../styles/shopping-history.css";

const ShoppingHistory = () => {
  const [showGroceryDetail, setShowGroceryDetail] = useState<{
    show: boolean;
    item: IGroceryDetail | null;
  }>({
    show: false,
    item: null,
  });

  const handleGroceryDetail = ({ grocery }: { grocery: IGroceryDetail }) => {
    /**
     * show details if grocery item is given
     * @param object {grocery: <value>}
     */

    if (!grocery) {
      setShowGroceryDetail({ show: false, item: null });
    } else {
      setShowGroceryDetail({
        show: true,
        item: grocery,
      });
    }
  };

  return (
    <div className="main__content-history">
      <div>
        <h1>Shopping history</h1>
      </div>

      <div className="main__history-view">
        {!showGroceryDetail?.show ? (
          <ListHistory handleGroceryDetail={handleGroceryDetail} />
        ) : (
          <DetailHistory {...{ showGroceryDetail, handleGroceryDetail }} />
        )}
      </div>
    </div>
  );
};

export default ShoppingHistory;
