import useGlobalContext from "../../providers/AppProvider";
import "../../styles/main.css";
import Cart from "../cart/Cart";
import SidebarItem from "./SidebarItem";
function RightSidebar() {
  const { showAddItemForm, showItemDetail } = useGlobalContext();
  console.log("showItemDetail", showItemDetail);

  return (
    <div className="app__main-sidebar">
      <section className="h-100">
        {showAddItemForm || showItemDetail?.show ? <SidebarItem /> : <Cart />}
      </section>
    </div>
  );
}

export default RightSidebar;
