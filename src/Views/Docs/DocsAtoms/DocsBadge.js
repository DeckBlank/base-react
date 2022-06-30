import React from "react";
import Badge from "../../../uiKit/Atoms/Badge/Badge";
import Button from "../../../uiKit/Atoms/Button/Button";
import { Icon } from "@iconify/react";
import Breadcrumb from "../../../uiKit/Atoms/Breadcrumb/Breadcrumb";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import SideBarListGroup from "../../../assets/Jsons/sidebar-list -docs.json";

const DocsBadge = () => {
  return (
    <div>
      <div>
        <h2>BREADCRUMB</h2>
        <br />
        {/* <Breadcrumb/> */}
        {/* <Breadcrumb textpage="Page" classnameLi="breadcrumb-item">
        {SideBarListGroup.map((item, index) => (
            <LinkItem
              text={item.display_name}
              route={item.route}
              classname="breadcrumb-item"
              key={index}
            />
          ))}
        </Breadcrumb> */}
      </div>
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
        <Icon icon="charm:menu-hamburger" className="txt-gray font-xxl"/>       
        <Icon icon="majesticons:more-menu-vertical" className="txt-gray font-xxl"/>               
        <Icon icon="ic:baseline-do-not-disturb-alt" className="txt-gray font-xxl"/>       
        <Icon icon="bxs:bell" className="txt-gray font-xxl"/>  

        <Icon icon="eva:arrow-down-fill" className="txt-gray font-xxl"/>             
        <Icon icon="eva:arrow-ios-downward-outline" className="txt-gray font-xxl"/>          
        <Icon icon="eva:arrow-ios-back-outline" className="txt-gray font-xxl"/>          
        <Icon icon="eva:arrow-ios-forward-outline" className="txt-gray font-xxl"/>          
        <Icon icon="eva:arrow-ios-upward-fill" className="txt-gray font-xxl"/>          
              
        <Icon icon="fluent:arrow-previous-24-filled" className="txt-gray font-xxl"/>          
        <Icon icon="fluent:arrow-next-24-filled" className="txt-gray font-xxl"/>          
      </div>
    </div>
  );
};

export default DocsBadge;