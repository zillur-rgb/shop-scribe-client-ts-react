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
      <article className="details-item d-flex flex-column">
        <h3>{item?.name}</h3>
        <p className="category">{item?.category}</p>
        <p>{item?.description}</p>
        <div className="order-1">
          <img src={item?.image} alt={`${item?.name}`} />
        </div>
      </article>
    </div>
  );
};

export default CartItemDetail;
