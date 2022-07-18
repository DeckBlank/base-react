import React, { useState } from "react";

// COMPONENTS
import LinkItem from "../../Atoms/LinkItem/LinkItem";
import ListGroup from "../../Atoms/ListGroup/ListGroup";
import Collapse from "../../Molecules/Collapse/Collapse";
// JSONS
import Nav from "../../../assets/Jsons/Nav/Nav.json";
// CONTEXT
import { useMainContext } from "../../../context/MainContext";
const SidebarLink = () => {
    const { isActive, setIsActive } = useMainContext();
    const buttonActive = () => {
        setIsActive(current => !current)
      }

  return (
    <div className="h-100p bg-gray" >
        {Nav.map((item, index) => (
            item.route!='#'
            ?
                <ListGroup classname="uncollapse-sidebar li-items-sidebar" key={index} >
                    <LinkItem
                    text={item.text}
                    route={item.route}
                    icon={item.icon}
                    classname={`uncollapse-sidebar-item bb-1-white ${isActive ? "bg-fuchsia" : ""}`}
                    onclick={buttonActive}
                    />
                </ListGroup>
            :
                <Collapse
                    text={item.text}
                    icon={item.icon}
                    iconarrowdown="eva:arrow-ios-downward-outline"
                    iconarrowup="eva:arrow-ios-upward-fill"
                    classname={`uncollapse-sidebar-item li-items-sidebar bb-1-white`}
                    key={index}
                    onclick={buttonActive}
                >
                    <ListGroup classname="collapse-sidebar">
                    {item.snav.map((item, index) => (
                        <LinkItem
                        text={item.text}
                        route={item.route}
                        icon={item.icon}
                        classname={`collapse-sidebar-item bb-1-white ${isActive ? "bg-fuchsia" : ""}`}
                        key={index}
                        onclick={buttonActive}
                        />
                    ))}
                    </ListGroup>
                </Collapse>    
        ))}
    </div>
  );
};

export default SidebarLink;
