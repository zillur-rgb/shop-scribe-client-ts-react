import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import foodHistory from "../../utils/constant/foodHistory";
import { getTopItemAndCategory } from "../../utils/helpers/getTopItem";
import { formatMonthlyData } from "../../utils/helpers/formatMonthylData";

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

  const formattedGrocery = formatMonthlyData(foodHistory);
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
                  {top.map((item) => {
                    let percent = getPercent(items[item], totalItem);
                    return (
                      <li key={item} className="d-flex justify-content-between">
                        <span>{item}</span>
                        <span>{percent}%</span>
                        <span
                          className={`w-100 d-block progress-bar progress-${percent}`}
                        ></span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <section>
        <h2>Monthly Summary</h2>

        <div>
          <LineChart
            width={600}
            height={400}
            data={formattedGrocery}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <Line type={"monotone"} dataKey={"items"} stroke="#F9A109" />

            <CartesianGrid stroke="#E0E0E0" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
      </section>
    </div>
  );
};

export default ShoppingStats;
