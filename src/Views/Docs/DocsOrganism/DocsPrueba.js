import React, {useContext} from "react";
import Button from "../../../uiKit/Atoms/Button/Button";
import {useMainContext} from "../../../context/MainContext";


const DocsPrueba = (props) => { 

  const {showFilter, setShowFilter} = useMainContext();
  
  
  return (
    <div>
      
      <Button     
      bgcolor="magenta"   
        onclick={() => setShowFilter(true)} visible={ showFilter===true ? "hidden" : "visible" }
      >Filtro</Button> 
    </div>
  );
};

export default DocsPrueba;
