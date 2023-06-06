import { AiOutlineClose } from "react-icons/ai";

import "../../styles/modal.css";
import useGlobalContext from "../../providers/AppProvider";

const Modal = () => {
  const { setShowModal, shoppingEnded } = useGlobalContext();

  return (
    <div className="app__modal position-fixed">
      <div className="position-relative bg-white">
        <div className="position-absolute">
          <AiOutlineClose
            className="close-icon"
            onClick={() => setShowModal(false)}
          />
        </div>
        <h2 className="mb-5">
          Are you sure that you want to cancel this list?
        </h2>
        <div className="btn-holder d-flex justify-content-end">
          <button
            className="btn cancel-btn"
            onClick={() => setShowModal(false)}
          >
            cancel
          </button>
          <button
            className="btn ms-3"
            onClick={() => shoppingEnded("cancelled")}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
