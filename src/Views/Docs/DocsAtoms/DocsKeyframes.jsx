import React from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Button from "../../../uiKit/Atoms/Button/Button";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsKeyframes = () => {
  return (
    <section>
      <Title
        title="Docs Button"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>KEYFRAMES EXAMPLES</h2>
        <br />
        <br />

        <br />
        <br />
        <div className="gt-columns-180-1 d-grid rg-2 cg-2">
          <Button classname="sombra-movil p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            sombra-movil
          </Button>
          <Button classname="flecha p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            flecha
          </Button>
          <Button classname="h-flash p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            flash
          </Button>
          <Button classname="h-click p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            click
          </Button>
          <Button classname="h-chicle p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            chicle
          </Button>
          <Button classname="h-vibracion p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            vibracion
          </Button>
          <Button classname="h-cartel p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            cartel
          </Button>
          <Button classname="h-balanceo p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            balanceo
          </Button>
          <Button classname="h-vaiven p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            vaiven
          </Button>
          <Button classname="h-rebote-out p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            rebote out
          </Button>
          <Button classname="h-rebote p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            rebote
          </Button>
          <Button classname="h-rebote-in-2 p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            rebote-in-2
          </Button>
          <Button classname="h-fade-in p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            fade-in
          </Button>

          <Button classname="h-giro p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            giro
          </Button>

          <Button classname="o-hidden cortinilla p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            <div className="tapa"></div>
            cortinilla
          </Button>
        </div>
        <br />
        <br />
        <div className="gt-columns-180-1 d-grid rg-2 cg-2">
          <Button classname="h-out_rotativo p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            out_rotativo
          </Button>
          <Button classname="h-in_rotativo p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            in_rotativo
          </Button>
          <Button classname="h-veloz-in p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            veloz-in
          </Button>
          <Button classname="h-veloz-out p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            veloz-out
          </Button>
          <Button classname="h-descolgado p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            descolgado
          </Button>
          <Button classname="h-translate-3d p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            translate-3d
          </Button>
          <Button classname="h-rebote-in p-1 p-relative d-i-block bg-gray txt-white fw-bold">
            rebote-in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocsKeyframes;
