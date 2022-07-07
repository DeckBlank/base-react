import { Icon } from "@iconify/react";
import React from "react";
import Button from "../../../uiKit/Atoms/Button/Button";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsPrueba = (props) => {
  
  let { onshowfilter } = props;

  return (
    <section>
      <Title
        title="Docs Prueba"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>PRUEBAS PARA EL SIDEBAR</h2>
        <br />
        <Button
          classname="d-flex ai-center g-05 h-txt-black"
          bgcolor="fuchsia"
          txtcolor="white"
          onclick={() => onshowfilter(true)}
        >
          <Icon icon="mi:filter" className="f-xl" />
          Filtro
        </Button>
      </div>
    </section>
  );
};

export default DocsPrueba;
