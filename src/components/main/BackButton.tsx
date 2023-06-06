import { CgArrowLongLeft } from "react-icons/cg";

type Props = {
  function1: () => void;
};

const BackButton = ({ function1 }: Props) => {
  return (
    <button onClick={function1} className="d-flex align-items-center">
      <CgArrowLongLeft className="back-icon me-1" /> back
    </button>
  );
};

export default BackButton;
