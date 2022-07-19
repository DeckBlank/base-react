import { createContext, useContext, useState } from "react";

const MainContext = createContext([]);

const useMainContext = () => {
  return useContext(MainContext);
};

const MainContextProvider = (props) => {
  // CONSTANTS
  const [showFilter, setShowFilter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showNotification, setShowNotification] = useState(true);
  const [isIndexActive, setIsIndexActive] = useState(0);

  // FUNCTIONS
  const buttonActive = (index) => {
    setIsIndexActive(index);
  };

  return (
    <MainContext.Provider
      value={{
        showFilter,
        setShowFilter,
        showSidebar,
        setShowSidebar,
        showNotification,
        setShowNotification,
        isIndexActive,
        setIsIndexActive,
        buttonActive
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { useMainContext, MainContextProvider };
