import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import "../../styles/main.css";
import useGlobalContext from "../../providers/AppProvider";
import Modal from "../modal/Modal";

const Main = () => {
  const { showModal } = useGlobalContext();
  return (
    <main>
      <div className="d-flex">
        {showModal && <Modal />}
        <MainContent />
        <RightSidebar />
      </div>
    </main>
  );
};

export default Main;
