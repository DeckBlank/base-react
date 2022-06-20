import React from "react";
import FilterCardButton from "../../uiKit/FilterCardButton/FilterCardButton";

const DocsFilterCardBtn = () => {
  return (
    <div>
      <h2>Filtros en Tarjeta</h2>
      <br />
      <div className="grid-responsive-docs-filtercard">
        <FilterCardButton
          hoverbgcolor="silver"
          hoverbordercolor="silver"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 1"
          count="12"
        />
        <FilterCardButton
          hoverbgcolor="red"
          hoverbordercolor="red"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 2"
          count="0"
        />

        <FilterCardButton
          hoverbgcolor="yellow"
          hoverbordercolor="yellow"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 3"
          count="0"
        />

        <FilterCardButton
          hoverbgcolor="blue"
          hoverbordercolor="blue"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 4"
          count="0"
        />

        <FilterCardButton
          hoverbgcolor="turquoise"
          hoverbordercolor="turquoise"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 5"
          count="0"
        />

        <FilterCardButton
          hoverbgcolor="orange"
          hoverbordercolor="orange"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 6"
          count="0"
        />

        <FilterCardButton
          hoverbgcolor="green"
          hoverbordercolor="green"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 7"
          count="0"
        />
        <FilterCardButton
          hoverbgcolor="magenta"
          hoverbordercolor="magenta"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 8"
          count="0"
        />
        <FilterCardButton
          hoverbgcolor="gray"
          hoverbordercolor="gray"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 9"
          count="0"
        />
        <FilterCardButton
          hoverbgcolor="lightblue"
          hoverbordercolor="lightblue"
          bgcolor="transparent"
          txtcolor="black"
          title="Filtro 10"
          count="0"
        />
        </div>
    </div>
  );
};

export default DocsFilterCardBtn;
