import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import "../../styles/main.css";

const Main = () => {
  return (
    <main>
      <div className="d-flex">
        <MainContent />
        <RightSidebar />
      </div>
    </main>
  );
};

export default Main;
