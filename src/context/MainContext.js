import { createContext, useContext, useState } from "react";

const MainContext = createContext([]);

const useMainContext = () => {
  return useContext(MainContext);
};

const MainContextProvider = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showNotification, setShowNotification] = useState(true);
  const [isActive, setIsActive] = useState(false);

  return (
    <MainContext.Provider
      value={{
        showFilter,
        setShowFilter,
        showSidebar,
        setShowSidebar,
        showNotification,
        setShowNotification,
        isActive,
        setIsActive,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { useMainContext, MainContextProvider };
