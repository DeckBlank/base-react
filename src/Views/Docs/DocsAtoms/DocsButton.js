import React from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Button from "../../../uiKit/Atoms/Button/Button";
import FilterCardButton from "../../../uiKit/Atoms/FilterCardButton/FilterCardButton";
import Title from "../../../uiKit/Atoms/Title/Title";
import Collapse from "../../../uiKit/Molecules/Collapse/Collapse";
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";

import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";

const DocsButton = () => {
  return (
    <section>
      <Title
        title="Docs Button"
        classname="p-sticky top-0 txt-black bb-title f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <Button classname="btn-edit" hovertxtcolor="silver" txtcolor="black">
          <Icon icon="majesticons:more-menu-vertical" />
        </Button>
        <h2>BUTTON TEXT</h2>
        <br />
        <br />
        <Button bgcolor="silver" txtcolor="white">
          Button Text
        </Button>
        <br />
        <br />
        <h2>BUTTON ICON</h2>
        <br />
        <br />
        <Button classname="flex-btn" bgcolor="silver" txtcolor="white">
          <Icon icon="bx:cog" />
        </Button>
        <br />
        <br />
        <h2>BUTTON TEXT + ICON</h2>
        <br />
        <br />
        <Button classname="d-flex ai-center" bgcolor="silver" txtcolor="white">
          <Icon icon="bx:cog" />
          Button Text + Icon
        </Button>
        <br />
        <br />
        <h2>BUTTON COLORES</h2>
        <br />
        <br />
        <Button bgcolor="white" txtcolor="black">
          white
        </Button>
        <Button bgcolor="red" txtcolor="white">
          red
        </Button>
        <Button bgcolor="turquoise" txtcolor="white">
          turquoise
        </Button>
        <Button bgcolor="blue" txtcolor="white">
          blue
        </Button>
        <Button bgcolor="yellow" txtcolor="white">
          yellow
        </Button>
        <Button bgcolor="orange" txtcolor="white">
          orange
        </Button>
        <Button bgcolor="green" txtcolor="white">
          green
        </Button>
        <Button bgcolor="magenta" txtcolor="white">
          magenta
        </Button>
        <Button bgcolor="black" txtcolor="white">
          black
        </Button>
        <Button bgcolor="fuchsia" txtcolor="white">
          fuchsia
        </Button>
        <Button bgcolor="lightblue" txtcolor="black">
          lightblue
        </Button>
        <Button bgcolor="silver" txtcolor="white">
          silver
        </Button>
        <Button bgcolor="gray" txtcolor="white">
          gray
        </Button>
        <br />
        <br />
        <br />
        <h2>HOVERS PARA BACKGROUND</h2>
        <br />
        <br />
        <Button hoverbgcolor="white" bgcolor="silver" txtcolor="black">
          white
        </Button>
        <Button hoverbgcolor="red" bgcolor="silver" txtcolor="white">
          red
        </Button>
        <Button hoverbgcolor="turquoise" bgcolor="silver" txtcolor="white">
          turquoise
        </Button>
        <Button hoverbgcolor="blue" bgcolor="silver" txtcolor="white">
          blue
        </Button>
        <Button hoverbgcolor="yellow" bgcolor="silver" txtcolor="white">
          yellow
        </Button>
        <Button hoverbgcolor="orange" bgcolor="silver" txtcolor="white">
          orange
        </Button>
        <Button hoverbgcolor="green" bgcolor="silver" txtcolor="white">
          green
        </Button>
        <Button hoverbgcolor="magenta" bgcolor="silver" txtcolor="white">
          magenta
        </Button>
        <Button hoverbgcolor="black" bgcolor="silver" txtcolor="white">
          black
        </Button>
        <Button hoverbgcolor="fuchsia" bgcolor="silver" txtcolor="white">
          fuchsia
        </Button>
        <Button hoverbgcolor="lightblue" bgcolor="silver" txtcolor="white">
          lightblue
        </Button>
        <Button hoverbgcolor="silver" bgcolor="silver" txtcolor="white">
          silver
        </Button>
        <Button hoverbgcolor="gray" bgcolor="silver" txtcolor="white">
          gray
        </Button>
        <Button hoverbgcolor="opacity0" bgcolor="red" txtcolor="white">
          opacity 0
        </Button>
        <Button hoverbgcolor="opacity4" bgcolor="red" txtcolor="white">
          opacity 4
        </Button>
        <Button hoverbgcolor="opacity8" bgcolor="red" txtcolor="white">
          opacity 8
        </Button>
        <br />
        <br />
        <br />
        <h2>HOVERS PARA TEXTO</h2>
        <br />
        <br />

        <Button hovertxtcolor="white" bgcolor="black" txtcolor="black">
          white
        </Button>
        <Button hovertxtcolor="red" bgcolor="black" txtcolor="white">
          red
        </Button>
        <Button hovertxtcolor="turquoise" bgcolor="black" txtcolor="white">
          turquoise
        </Button>
        <Button hovertxtcolor="blue" bgcolor="black" txtcolor="white">
          blue
        </Button>
        <Button hovertxtcolor="yellow" bgcolor="black" txtcolor="white">
          yellow
        </Button>
        <Button hovertxtcolor="orange" bgcolor="black" txtcolor="white">
          orange
        </Button>
        <Button hovertxtcolor="green" bgcolor="black" txtcolor="white">
          green
        </Button>
        <Button hovertxtcolor="magenta" bgcolor="black" txtcolor="white">
          magenta
        </Button>
        <Button hovertxtcolor="black" bgcolor="black" txtcolor="white">
          black
        </Button>
        <Button hovertxtcolor="fuchsia" bgcolor="black" txtcolor="white">
          fuchsia
        </Button>
        <Button hovertxtcolor="lightblue" bgcolor="black" txtcolor="white">
          lightblue
        </Button>
        <Button hovertxtcolor="silver" bgcolor="black" txtcolor="white">
          silver
        </Button>
        <Button hovertxtcolor="gray" bgcolor="black" txtcolor="white">
          gray
        </Button>
        <br />
        <br />
        <h2>HOVERS PARA BORDE</h2>
        <br />
        <br />

        <Button hoverbordercolor="white" bgcolor="silver" txtcolor="white">
          white
        </Button>
        <Button hoverbordercolor="red" bgcolor="silver" txtcolor="white">
          red
        </Button>
        <Button hoverbordercolor="turquoise" bgcolor="silver" txtcolor="white">
          turquoise
        </Button>
        <Button hoverbordercolor="blue" bgcolor="silver" txtcolor="white">
          blue
        </Button>
        <Button hoverbordercolor="yellow" bgcolor="silver" txtcolor="white">
          yellow
        </Button>
        <Button hoverbordercolor="orange" bgcolor="silver" txtcolor="white">
          orange
        </Button>
        <Button hoverbordercolor="green" bgcolor="silver" txtcolor="white">
          green
        </Button>
        <Button hoverbordercolor="magenta" bgcolor="silver" txtcolor="white">
          magenta
        </Button>
        <Button hoverbordercolor="silver" bgcolor="white" txtcolor="black">
          silver
        </Button>
        <Button hoverbordercolor="fuchsia" bgcolor="silver" txtcolor="white">
          fuchsia
        </Button>
        <Button hoverbordercolor="lightblue" bgcolor="silver" txtcolor="white">
          lightblue
        </Button>
        <Button hoverbordercolor="black" bgcolor="white" txtcolor="black">
          black
        </Button>
        <Button hoverbordercolor="gray" bgcolor="silver" txtcolor="white">
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
