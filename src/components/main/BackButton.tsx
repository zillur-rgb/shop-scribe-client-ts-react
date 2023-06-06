import { CgArrowLongLeft } from "react-icons/cg";
import "../../styles/back-btn.css";

type Props = {
  function1: () => void;
};

const BackButton = ({ function1 }: Props) => {
  return (
    <button
      onClick={function1}
      className="d-flex align-items-center btn back-btn"
    >
      <CgArrowLongLeft className="back-icon me-2" /> back
    </button>
  );
};

export default BackButton;
