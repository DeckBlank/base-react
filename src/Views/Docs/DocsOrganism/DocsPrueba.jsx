import React, {useContext} from "react";
import Button from "../../../uiKit/Atoms/Button/Button";
import {useMainContext} from "../../../context/MainContext";
import { Icon } from "@iconify/react";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsPrueba = (props) => { 
  
  const {showFilter, setShowFilter} = useMainContext();
    
  return (
    <div>      
      <section>
      <Title
        title="Docs Prueba"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>PRUEBAS PARA EL SIDEBAR</h2>
        <br />
        <Button
          classname="btn-padding d-flex ai-center g-05 h-txt-black"
          bgcolor="fuchsia"
          txtcolor="white"
          onclick={() => setShowFilter(true)} 
          visible={ showFilter===true ? "hidden" : "visible" }
        >
          <Icon icon="mi:filter" className="f-xl" />
          Filtro
        </Button>
      </div>
    </section>
    </div>
  );
};

export default DocsPrueba;
