import React from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Button from "../../../uiKit/Atoms/Button/Button";
import FilterCardButton from "../../../uiKit/Atoms/FilterCardButton/FilterCardButton";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsButton = () => {
  return (
    <section>
      <Title
        title="Docs Button"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>BUTTON TEXT</h2>
        <br />
        <br />
        <Button classname="btn-padding" bgcolor="silver" txtcolor="white" >
          Button Text
        </Button>
        <br />
        <br />
        <h2>BUTTON ICON</h2>
        <br />
        <br />
        <Button classname="btn-padding d-flex ai-center" bgcolor="silver" txtcolor="white">
          <Icon icon="bx:cog" />
        </Button>
        <br />
        <br />
        <h2>BUTTON TEXT + ICON</h2>
        <br />
        <br />
        <Button classname="btn-padding d-flex ai-center" bgcolor="silver" txtcolor="white">
          <Icon icon="bx:cog" />
          Button Text + Icon
        </Button>
        <br />
        <br />
        <h2>BUTTON COLORES</h2>
        <br />
        <br />
        <Button classname="btn-padding" bgcolor="white" txtcolor="black">
          white
        </Button>
        <Button classname="btn-padding" bgcolor="red" txtcolor="white">
          red
        </Button>
        <Button classname="btn-padding" bgcolor="turquoise" txtcolor="white">
          turquoise
        </Button>
        <Button classname="btn-padding" bgcolor="blue" txtcolor="white">
          blue
        </Button>
        <Button classname="btn-padding" bgcolor="yellow" txtcolor="white">
          yellow
        </Button>
        <Button classname="btn-padding" bgcolor="orange" txtcolor="white">
          orange
        </Button>
        <Button classname="btn-padding" bgcolor="green" txtcolor="white">
          green
        </Button>
        <Button classname="btn-padding" bgcolor="magenta" txtcolor="white">
          magenta
        </Button>
        <Button classname="btn-padding" bgcolor="black" txtcolor="white">
          black
        </Button>
        <Button classname="btn-padding" bgcolor="fuchsia" txtcolor="white">
          fuchsia
        </Button>
        <Button classname="btn-padding" bgcolor="lightblue" txtcolor="black">
          lightblue
        </Button>
        <Button classname="btn-padding" bgcolor="silver" txtcolor="white">
          silver
        </Button>
        <Button classname="btn-padding" bgcolor="gray" txtcolor="white">
          gray
        </Button>
        <br />
        <br />
        <br />
        <h2>HOVERS PARA BACKGROUND</h2>
        <br />
        <br />
        <Button classname="btn-padding" hoverbgcolor="white" bgcolor="silver" txtcolor="black">
          white
        </Button>
        <Button classname="btn-padding" hoverbgcolor="red" bgcolor="silver" txtcolor="white">
          red
        </Button>
        <Button classname="btn-padding" hoverbgcolor="turquoise" bgcolor="silver" txtcolor="white">
          turquoise
        </Button>
        <Button classname="btn-padding" hoverbgcolor="blue" bgcolor="silver" txtcolor="white">
          blue
        </Button>
        <Button classname="btn-padding" hoverbgcolor="yellow" bgcolor="silver" txtcolor="white">
          yellow
        </Button>
        <Button classname="btn-padding" hoverbgcolor="orange" bgcolor="silver" txtcolor="white">
          orange
        </Button>
        <Button classname="btn-padding" hoverbgcolor="green" bgcolor="silver" txtcolor="white">
          green
        </Button>
        <Button classname="btn-padding" hoverbgcolor="magenta" bgcolor="silver" txtcolor="white">
          magenta
        </Button>
        <Button classname="btn-padding" hoverbgcolor="black" bgcolor="silver" txtcolor="white">
          black
        </Button>
        <Button classname="btn-padding" hoverbgcolor="fuchsia" bgcolor="silver" txtcolor="white">
          fuchsia
        </Button>
        <Button classname="btn-padding" hoverbgcolor="lightblue" bgcolor="silver" txtcolor="white">
          lightblue
        </Button>
        <Button classname="btn-padding" hoverbgcolor="silver" bgcolor="silver" txtcolor="white">
          silver
        </Button>
        <Button classname="btn-padding" hoverbgcolor="gray" bgcolor="silver" txtcolor="white">
          gray
        </Button>
        <Button classname="btn-padding" hoverbgcolor="opacity0" bgcolor="red" txtcolor="white">
          opacity 0
        </Button>
        <Button classname="btn-padding" hoverbgcolor="opacity4" bgcolor="red" txtcolor="white">
          opacity 4
        </Button>
        <Button classname="btn-padding" hoverbgcolor="opacity8" bgcolor="red" txtcolor="white">
          opacity 8
        </Button>
        <br />
        <br />
        <br />
        <h2>HOVERS PARA TEXTO</h2>
        <br />
        <br />

        <Button classname="btn-padding" hovertxtcolor="white" bgcolor="black" txtcolor="black">
          white
        </Button>
        <Button classname="btn-padding" hovertxtcolor="red" bgcolor="black" txtcolor="white">
          red
        </Button>
        <Button classname="btn-padding" hovertxtcolor="turquoise" bgcolor="black" txtcolor="white">
          turquoise
        </Button>
        <Button classname="btn-padding" hovertxtcolor="blue" bgcolor="black" txtcolor="white">
          blue
        </Button>
        <Button classname="btn-padding" hovertxtcolor="yellow" bgcolor="black" txtcolor="white">
          yellow
        </Button>
        <Button classname="btn-padding" hovertxtcolor="orange" bgcolor="black" txtcolor="white">
          orange
        </Button>
        <Button classname="btn-padding" hovertxtcolor="green" bgcolor="black" txtcolor="white">
          green
        </Button>
        <Button classname="btn-padding" hovertxtcolor="magenta" bgcolor="black" txtcolor="white">
          magenta
        </Button>
        <Button classname="btn-padding" hovertxtcolor="black" bgcolor="black" txtcolor="white">
          black
        </Button>
        <Button classname="btn-padding" hovertxtcolor="fuchsia" bgcolor="black" txtcolor="white">
          fuchsia
        </Button>
        <Button classname="btn-padding" hovertxtcolor="lightblue" bgcolor="black" txtcolor="white">
          lightblue
        </Button>
        <Button classname="btn-padding" hovertxtcolor="silver" bgcolor="black" txtcolor="white">
          silver
        </Button>
        <Button classname="btn-padding" hovertxtcolor="gray" bgcolor="black" txtcolor="white">
          gray
        </Button>
        <br />
        <br />
        <h2>HOVERS PARA BORDE</h2>
        <br />
        <br />

        <Button classname="btn-padding" hoverbordercolor="white" bgcolor="silver" txtcolor="white">
          white
        </Button>
        <Button classname="btn-padding" hoverbordercolor="red" bgcolor="silver" txtcolor="white">
          red
        </Button>
        <Button classname="btn-padding" hoverbordercolor="turquoise" bgcolor="silver" txtcolor="white">
          turquoise
        </Button>
        <Button classname="btn-padding" hoverbordercolor="blue" bgcolor="silver" txtcolor="white">
          blue
        </Button>
        <Button classname="btn-padding" hoverbordercolor="yellow" bgcolor="silver" txtcolor="white">
          yellow
        </Button>
        <Button classname="btn-padding" hoverbordercolor="orange" bgcolor="silver" txtcolor="white">
          orange
        </Button>
        <Button classname="btn-padding" hoverbordercolor="green" bgcolor="silver" txtcolor="white">
          green
        </Button>
        <Button classname="btn-padding" hoverbordercolor="magenta" bgcolor="silver" txtcolor="white">
          magenta
        </Button>
        <Button classname="btn-padding" hoverbordercolor="silver" bgcolor="white" txtcolor="black">
          silver
        </Button>
        <Button classname="btn-padding" hoverbordercolor="fuchsia" bgcolor="silver" txtcolor="white">
          fuchsia
        </Button>
        <Button classname="btn-padding" hoverbordercolor="lightblue" bgcolor="silver" txtcolor="white">
          lightblue
        </Button>
        <Button classname="btn-padding" hoverbordercolor="black" bgcolor="white" txtcolor="black">
          black
        </Button>
        <Button classname="btn-padding" hoverbordercolor="gray" bgcolor="silver" txtcolor="white">
          gray
        </Button>
        <br />
        <br />
        <br />
        <h2>FILTROS EN TARJETA</h2>
        <br />
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center m768-gt-columns-100-1">
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

    </section>
  );
};

export default DocsButton;
