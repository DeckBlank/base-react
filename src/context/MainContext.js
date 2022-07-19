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

  const getIndexActive = () => {
    const indexActive = localStorage.getItem("indexActive"); 
    alert(indexActive);
    const jsonIndexActive = JSON.parse(indexActive);
    if(!jsonIndexActive) return 0;
    return jsonIndexActive.indexActive;
  };

  const [isIndexActive, setIsIndexActive] = useState(getIndexActive());

  alert(isIndexActive);
  
  const buttonActive = (index) => {
    // const indexActiveOld=
    localStorage.setItem("indexActive", JSON.stringify(index));
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
        buttonActive,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { useMainContext, MainContextProvider };
