import { Route, Routes } from "react-router-dom";
import ShoppingItem from "../shopping-item/ShoppingItem";
import ShoppingHistory from "../shopping-history/ShoppingHistory";
import ShoppingStats from "../shopping-stats/ShoppingStats";

function MainContent() {
  return (
    <div className="app_main-content">
      <Routes>
        <Route path="/" element={<ShoppingItem />} />
        <Route path="/history" element={<ShoppingHistory />} />
        <Route path="/stats" element={<ShoppingStats />} />
      </Routes>
    </div>
  );
}

export default MainContent;
