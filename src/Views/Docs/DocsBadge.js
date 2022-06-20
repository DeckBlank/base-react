import React from "react";
import Badge from "../../uiKit/Badge/Badge";
import Button from "../../uiKit/Button/Button";

const DocsBadge = () => {
  return (
    <div>
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
      <div className="grid-responsive-docs">
        <div>
          <h2>BADGE ENCIMA DERECHA</h2>
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
          <h2>BADGE ENCIMA IZQUIERDA</h2>
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
          <h2>BADGE DEBAJO DERECHA</h2>
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
          <h2>BADGE DEBAJO IZQUIERDA</h2>
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
      </div>
    </div>
  );
};

export default DocsBadge;
