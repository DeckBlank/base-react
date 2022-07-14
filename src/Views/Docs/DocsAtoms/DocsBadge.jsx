import React from "react";
// COMPONENTS
import Badge from "../../../uiKit/Atoms/Badge/Badge";
import Button from "../../../uiKit/Atoms/Button/Button";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsBadge = () => {
  return (
    <section>
      <Title title="Docs Badge" classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1" />  
      <div className="ph-3">    
      <div>
        <h2>BADGE</h2>
        <br />
        <Badge bgcolor="white" txtcolor="black" text="white">
          white
        </Badge>
        <Badge bgcolor="red" txtcolor="white" text="red">
          red
        </Badge>
        <Badge bgcolor="turquoise" txtcolor="white" text="turquoise">
          turquoise
        </Badge>
        <Badge bgcolor="blue" txtcolor="white" text="blue">
          blue
        </Badge>
        <Badge bgcolor="yellow" txtcolor="white" text="yellow">
          yellow
        </Badge>
        <Badge bgcolor="orange" txtcolor="white" text="orange">
          orange
        </Badge>
        <Badge bgcolor="green" txtcolor="white" text="green">
          green
        </Badge>
        <Badge bgcolor="magenta" txtcolor="white" text="magenta">
          magenta
        </Badge>
        <Badge bgcolor="black" txtcolor="white" text="black">
          black
        </Badge>
        <Badge bgcolor="fuchsia" txtcolor="white" text="fuchsia">
          fuchsia
        </Badge>
        <Badge bgcolor="lightblue" txtcolor="black" text="lightblue">
          lightblue
        </Badge>
        <Badge bgcolor="silver" txtcolor="white" text="silver">
          silver
        </Badge>
        <Badge bgcolor="gray" txtcolor="white" text="gray">
          gray
        </Badge>
      </div>
      <br />
      <br />
      <h2>DIRECTIONS</h2>
      <br />
      <div className="d-grid g-1 ji-start ai-start ac-center gt-columns-200-1">
        <div>
          <h3>BADGE ENCIMA DERECHA</h3>
          <br />
          <Button bgcolor="silver" txtcolor="white" position="relative">
            red
            <Badge
              bgcolor="red"
              txtcolor="white"
              position="absolute"
              top="0"
              start="100"
              translate="middle"
              text="+99"
            ></Badge>
          </Button>
        </div>
        <div>
          <h3>BADGE ENCIMA IZQUIERDA</h3>
          <br />
          <Button bgcolor="silver" txtcolor="white" position="relative">
            magenta
            <Badge
              bgcolor="magenta"
              txtcolor="white"
              position="absolute"
              top="0"
              start="0"
              translate="middle"
              text="+99"
            />
          </Button>
        </div>
        <div>
          <h3>BADGE DEBAJO DERECHA</h3>
          <br />
          <Button bgcolor="silver" txtcolor="white" position="relative">
            fuchsia
            <Badge
              bgcolor="fuchsia"
              txtcolor="white"
              position="absolute"
              top="100"
              start="100"
              translate="middle"
              text="+99"
            />
          </Button>
        </div>
        <div>
          <h3>BADGE DEBAJO IZQUIERDA</h3>
          <br />
          <Button bgcolor="silver" txtcolor="white" position="relative">
            turquoise
            <Badge
              bgcolor="turquoise"
              txtcolor="white"
              position="absolute"
              top="100"
              start="0"
              translate="middle"
              text="+99"
            />
          </Button>
        </div>
      </div></div>
    </section>
  );
};

export default DocsBadge;
