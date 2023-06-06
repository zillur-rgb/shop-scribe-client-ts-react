import useGlobalContext from "../../providers/AppProvider";

interface Props {
  empty: boolean;
  searchTerm: string;
  setSearchTerm: any;
}

const SearchForm = ({ empty, searchTerm, setSearchTerm }: Props) => {
  const {
    addItemToCart,
    state: { foodItems },
  } = useGlobalContext();

  const handleSubmitFind = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    for (let food of foodItems) {
      if (food.name.toLowerCase() === searchTerm.toLocaleLowerCase()) {
        addItemToCart(food);
        break;
      }
    }
  };

  return (
    <form className={` cart-${empty} d-flex`} onSubmit={handleSubmitFind}>
      <div>
        <label htmlFor="name" className="form-label visually-hidden">
          Password
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter a name"
          className="form-control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
