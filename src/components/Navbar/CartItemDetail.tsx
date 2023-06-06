import { IFoodItem } from "../../types/types";
import BackButton from "../main/BackButton";

type Props = {
  item: IFoodItem;
  setShowItemDetail: any;
};

const CartItemDetail = ({ item, setShowItemDetail }: Props) => {
  const handleItemDetail = () => {
    setShowItemDetail({
      show: false,
      item: null,
    });
  };
  return (
    <div className="main__sidebar-details">
      <BackButton function1={handleItemDetail} />
      {item?.name}
    </div>
  );
};

export default CartItemDetail;
