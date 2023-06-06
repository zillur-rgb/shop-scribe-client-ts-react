import { useRef } from "react";
import useGlobalContext from "../../providers/AppProvider";
import { IFoodItem } from "../../types/types";

const AddItemForm = () => {
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const {
    setShowAddItemForm,
    state: { foodItems },
    addNewItem,
  } = useGlobalContext();
  const handleForm = () => setShowAddItemForm(false);

  const getCategories = (foodItems: IFoodItem[]) => {
    let categories = foodItems.map((item) => item.category);

    categories = categories.filter(
      (item, index) => categories.indexOf(item) === index
    );

    return categories;
  };

  const categories = getCategories(foodItems);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    }

    e.currentTarget.classList.add("was-validated");

    const name = nameRef.current?.value;
    const image = imageRef.current?.value;
    const note = noteRef.current?.value;
    const category = categoryRef.current?.value;

    if (name && category) {
      const newItem = {
        id: new Date().getTime(),
        name,
        category,
        image,
        description: note,
      };
      addNewItem(newItem);
      handleForm();
    }
  };
  return (
    <div className="main__sidebar-form">
      <h2 className="mb-4">Add a new item</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter a name"
            ref={nameRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Note &#x28;optional&#x29;
          </label>
          <textarea
            className="form-control"
            id="note"
            placeholder="Enter a note"
            ref={noteRef}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image &#x28;optional&#x29;
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            placeholder="Enter a url"
            ref={imageRef}
          />
        </div>

        <label htmlFor="category">Category</label>
        <select className="form-select mb-3" ref={categoryRef}>
          <option value="">Enter a category</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="btn-holder d-flex justify-content-center">
          <button onClick={handleForm} className="btn cancel-btn">
            cancel
          </button>
          <button type="submit" className="btn save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
