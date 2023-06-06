import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getTopItemAndCategory } from "../../utils/helpers/getTopItem";
import { formatMonthlyData } from "../../utils/helpers/formatMonthylData";
import useGlobalContext from "../../providers/AppProvider";
import { useEffect } from "react";
import "../../styles/shopping-stats.css";

const ShoppingStats = () => {
  const {
    state: { foodHistory },
  } = useGlobalContext();

  const { items, categories, topItems, topCategories, totalItem } =
    getTopItemAndCategory(foodHistory);

  const getPercent = (count: number, total: number) =>
    Math.floor((count / total) * 100);

  // Top items and categories
  const itemsAndCategories = [
    {
      title: "Top Items",
      items: items,
      top3: topItems,
      customClass: "top-items",
    },
    {
      title: "Top Categories",
      items: categories,
      top3: topCategories,
      customClass: "top-cat",
    },
  ];

  const formattedGrocery = formatMonthlyData(foodHistory);

  // show progress bar according to percent
  const showProgressBar = () => {
    const progressToShow = document.querySelectorAll(".progress-show");

    for (let progress of progressToShow) {
      const percent = progress.classList[2].split("-")[1];
      (progress as HTMLElement).style.width = `${percent}%`;
    }
  };

  useEffect(() => {
    showProgressBar();
  }, []);
  return (
    <div className="main__content-stats">
      <div className="container">
        <div className="row">
          {itemsAndCategories.map((data) => {
            const { title, items, top3, customClass } = data;
            return (
              <article className={`col-sm-6 ${customClass}`} key={title}>
                <h2>{title}</h2>

                <ul>
                  {top3.map((item) => {
                    let percent = getPercent(items[item], totalItem);
                    return (
                      <li
                        key={item}
                        className="d-flex justify-content-between flex-wrap"
                      >
                        <span>{item}</span>
                        <span>{percent}%</span>
                        <div className="progress-bar w-100">
                          <span
                            className={`d-block progress-show progress-${percent}`}
                          ></span>
                        </div>
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
