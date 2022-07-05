import React from "react";
import Button from "../../../uiKit/Atoms/Button/Button";


const DocsPrueba = (props) => {
  
   let{onshowfilter}=props
  
    return (
    <div>
      <Button     
      bgcolor="magenta"   
        onclick={() => onshowfilter(true)}
      >Filtro</Button> 
    </div>
  );
};

export default DocsPrueba;
