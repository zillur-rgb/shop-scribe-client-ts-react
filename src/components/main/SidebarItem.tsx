import useGlobalContext from "../../providers/AppProvider";
import AddItemForm from "../Navbar/AddItemForm";
import CartItemDetail from "../Navbar/CartItemDetail";

const SidebarItem = () => {
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
};

export default SidebarItem;
