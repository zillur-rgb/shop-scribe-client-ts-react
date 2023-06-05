import { useState } from "react";
import { IFoodItem } from "../../types/types";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useGlobalContext from "../../providers/AppProvider";

type Props = {
  item: IFoodItem;
  qtys: { [key: number]: string };
};

const CartItemControl = ({ item, qtys }: Props) => {
  const { updateItemQuantity } = useGlobalContext();
  const [showQtyControl, setShowQtyControl] = useState<boolean>(false);

  const handleQtyControl = (show: boolean) => setShowQtyControl(!show);

  const qty = qtys[item.id];
  return (
    <div className="cart__item-control ms-auto">
      {showQtyControl ? (
        <div className="bg-white d-flex align-items-center justify-content-between gap-1">
          <div>
            <AiOutlineDelete className="delete-icon" />
          </div>
          <AiOutlineMinus
            onClick={(_e: any) => {
              if (Number(qty) > 1) {
                updateItemQuantity({
                  id: item.id,
                  qty: Number(qty) - 1,
                });
              }
            }}
          />

          <ControlButton {...{ qty, handleQtyControl, showQtyControl }} />
          <AiOutlinePlus
            onClick={(_e: any) => {
              updateItemQuantity({
                id: item.id,
                qty: Number(qty) + 1,
              });
            }}
          />
        </div>
      ) : (
        <ControlButton {...{ qty, handleQtyControl, showQtyControl }} />
      )}
    </div>
  );
};

const ControlButton = ({
  qty,
  handleQtyControl,
  showQtyControl,
}: {
  qty: string;
  handleQtyControl: (show: boolean) => void;
  showQtyControl: boolean;
}) => {
  return (
    <button
      onClick={(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        handleQtyControl(showQtyControl)
      }
    >
      {qty} pcs
    </button>
  );
};
export default CartItemControl;
