import useGlobalContext from "../../providers/AppProvider";
import BackButton from "../main/BackButton";

const AddItemForm = () => {
  const { setShowAddItemForm } = useGlobalContext();
  const handleForm = () => setShowAddItemForm(false);
  return (
    <div>
      <BackButton function1={handleForm} />
    </div>
  );
};

export default AddItemForm;
