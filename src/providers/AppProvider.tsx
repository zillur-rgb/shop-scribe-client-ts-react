import { createContext, useContext, useState } from "react";
import { IFoodItem } from "../types/types";

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<any>(null);

const AppProvider = ({ children }: Props) => {
  const [showGroceryDetail, setShowGroceryDetail] = useState({
    show: false,
    item: null,
  });

  const handleGroceryDetail = ({ grocery }: { grocery: IFoodItem | any }) => {
    if (!grocery) {
      setShowGroceryDetail({
        show: false,
        item: null,
      });
    } else {
      setShowGroceryDetail({ show: true, item: grocery });
    }
  };

  return (
    <AppContext.Provider
      value={{
        showGroceryDetail,
        handleGroceryDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;

export { AppProvider };
