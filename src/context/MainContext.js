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
    const indexActive = localStorage.getItem("indexSideBarLink");   
    const jsonIndexActive = JSON.parse(indexActive);    
    if(!jsonIndexActive) return 1;
    return jsonIndexActive.indexActive;
  };

  const getIndexCollpase = () => {    
    const indexCollapse = localStorage.getItem("indexSideBarLink");   
    const jsonIndexCollapse = JSON.parse(indexCollapse);    
    if(!jsonIndexCollapse) return 0;
    return jsonIndexCollapse.indexCollpse;
  };

  const [isIndexActive, setIsIndexActive] = useState(getIndexActive());
  const [isIndexCollapse, setIsIndexCollapse] = useState(getIndexCollpase());
  
  const buttonActive = (indexActive, indexCollpse) => {
    // const indexActiveOld=
    localStorage.setItem("indexSideBarLink", '{"indexActive": '+indexActive+',"indexCollpse":'+indexCollpse+' }');
    setIsIndexActive(indexActive);   
    setIsIndexCollapse(indexCollpse);
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
        isIndexCollapse, 
        setIsIndexCollapse,
        buttonActive,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { useMainContext, MainContextProvider };
