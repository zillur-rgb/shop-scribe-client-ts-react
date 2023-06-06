import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/main/Main";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="app d-flex">
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
