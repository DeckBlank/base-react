import React from "react";
import Badge from "../../uiKit/Atoms/Badge/Badge";
import Button from "../../uiKit/Atoms/Button/Button";
import { Icon } from "@iconify/react";

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
      </div>
      <br />
      <br />
      <h2>ICONS</h2>
      <br />
      <div>      
        <Icon icon="clarity:list-solid" className="txt-gray font-xxl"/>
        <Icon icon="mi:filter" className="txt-gray font-xxl"/>
        <Icon icon="ant-design:home-filled" className="txt-gray font-xxl"/>
        <Icon icon="ic:baseline-shopping-bag" className="txt-gray font-xxl"/>
        <Icon icon="bi:clipboard2-data-fill" className="txt-gray font-xxl"/>
        <Icon icon="fluent:calculator-20-filled" className="txt-gray font-xxl"/>
        <Icon icon="akar-icons:face-very-happy" className="txt-gray font-xxl"/>
        <Icon icon="icon-park-outline:surprised-face-with-open-mouth" className="txt-gray font-xxl"/>
        <Icon icon="fxemoji:heavyexclaimationmarksymbol" className="txt-gray font-xxl"/>
        <Icon icon="fa6-solid:file-excel" className="txt-gray font-xxl"/>
        <Icon icon="fluent:save-28-filled" className="txt-gray font-xxl"/>
        <Icon icon="fa:search" className="txt-gray font-xxl"/>
        <Icon icon="fa-solid:calendar-alt" className="txt-gray font-xxl"/>
        <Icon icon="akar-icons:circle-fill" className="txt-gray font-xxl"/>
        <Icon icon="ep:close-bold" className="txt-gray font-xxl"/>
        <Icon icon="akar-icons:plus" className="txt-gray font-xxl"/>
        <Icon icon="akar-icons:circle-check" className="txt-gray font-xxl"/>
        <Icon icon="fluent:document-bullet-list-20-regular" className="txt-gray font-xxl"/>        
        <Icon icon="fluent:delete-dismiss-20-regular" className="txt-gray font-xxl"/>
        <Icon icon="bx:mail-send" className="txt-gray font-xxl"/>
        <Icon icon="uil:chat-bubble-user" className="txt-gray font-xxl"/>
        <Icon icon="ic:baseline-do-not-disturb-alt" className="txt-gray font-xxl"/>       
      </div>
    </div>
  );
};

export default DocsBadge;
