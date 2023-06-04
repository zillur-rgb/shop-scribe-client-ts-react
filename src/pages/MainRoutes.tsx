import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingItem from "../components/main/ShoppingItem";

const MainRoutes = () => {
  return (
    <div className="app__main-content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoppingItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
