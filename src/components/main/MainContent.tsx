import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingItem from "../shopping-item/ShoppingItem";

function MainContent() {
  return (
    <div className="app_main-content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoppingItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainContent;
