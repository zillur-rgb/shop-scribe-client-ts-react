import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import foodHistory from "../../utils/constant/foodHistory";
import { getTopItemAndCategory } from "../../utils/helpers/getTopItem";

const ShoppingStats = () => {
  const { items, categories, topItems, topCategories, totalItem } =
    getTopItemAndCategory(foodHistory);

  console.log(topItems, topCategories, totalItem);

  const getPercent = (count: number, total: number) =>
    Math.floor((count / total) * 100);

  // Top items and categories
  const itemsAndCategories = [
    {
      title: "Top Items",
      items: items,
      top: topItems,
      customClass: "top-items",
    },
    {
      title: "Top Categories",
      items: categories,
      top: topCategories,
      customClass: "top-cat",
    },
  ];
  return (
    <div className="main__content-stats">
      <div className="container">
        <div className="row">
          {itemsAndCategories.map((data) => {
            const { title, items, top, customClass } = data;
            return (
              <article className={`col-sm-6 ${customClass}`} key={title}>
                <h2>{title}</h2>

                <ul>
                  {top.map((item) => (
                    <li key={item} className="d-flex justify-content-between">
                      <span>{item}</span>
                      <span>{getPercent(items[item], totalItem)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <section>
        <h2>Monthly Summary</h2>

        <div>
          <LineChart width={600} height={400}>
            <Line type={"monotone"} dataKey={"uv"} stroke="#8884d8" />

            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={"name"} />
            <YAxis />
          </LineChart>
        </div>
      </section>
    </div>
  );
};

export default ShoppingStats;
