import useGlobalContext from "../../providers/AppProvider";
import "../../styles/main.css";
import AddItemForm from "../Navbar/AddItemForm";
import CartItemDetail from "../Navbar/CartItemDetail";
function RightSidebar() {
  const { setShowItemDetail, showItemDetail } = useGlobalContext();
  return (
    <>
      {showItemDetail.show ? (
        <CartItemDetail
          item={showItemDetail?.item}
          setShowItemDetail={setShowItemDetail}
        />
      ) : (
        <AddItemForm />
      )}
    </>
  );
}

export default RightSidebar;
