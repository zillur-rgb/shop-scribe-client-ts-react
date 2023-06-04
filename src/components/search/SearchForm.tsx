interface Props {
  empty: boolean;
}

const SearchForm = ({ empty }: Props) => {
  return (
    <form className={` cart-${empty} d-flex`}>
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
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
