import useGlobalContext from "../../providers/AppProvider";
import { IFoodItem } from "../../types/types";
import BackButton from "../main/BackButton";

type Props = {
  item: IFoodItem;
  setShowItemDetail: any;
};

const CartItemDetail = ({ item, setShowItemDetail }: Props) => {
  const { addItemToCart } = useGlobalContext();
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
        <div className="order-2">
          <div className="details__item-title">name</div>
          <h3>{item?.name}</h3>
          <div className="details__item-title">category</div>
          <p className="category">{item?.category}</p>
          <div className="details__item-title">note</div>
          <p>{item?.description}</p>
        </div>
        <div className="order-1">
          <img src={item?.image} alt={`${name}`} />
        </div>
      </article>
      <button
        className="btn mt-3 add-btn"
        onClick={(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          addItemToCart(item);
          handleItemDetail();
        }}
      >
        Add to list
      </button>
    </div>
  );
};

export default CartItemDetail;
