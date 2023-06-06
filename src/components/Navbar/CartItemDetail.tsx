import { IFoodItem } from "../../types/types";
import BackButton from "../main/BackButton";

type Props = {
  item: IFoodItem;
  setShowItemDetail: any;
};

const CartItemDetail = ({ item, setShowItemDetail }: Props) => {
  const { name, id, category, image, description } = item;
  const handleItemDetail = () => {
    setShowItemDetail({
      show: false,
      item: null,
    });
  };
  return (
    <div className="main__sidebar-details">
      <BackButton function1={handleItemDetail} />
      {name}
    </div>
  );
};

export default CartItemDetail;
