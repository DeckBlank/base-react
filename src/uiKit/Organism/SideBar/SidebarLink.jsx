import React, { useState } from "react";

// COMPONENTS
import LinkItem from "../../Atoms/LinkItem/LinkItem";
import ListGroup from "../../Atoms/ListGroup/ListGroup";
import Collapse from "../../Molecules/Collapse/Collapse";
// JSONS
import Nav from "../../../assets/Jsons/Nav/Nav.json";
// CONTEXT
import { useMainContext } from "../../../context/MainContext";
// FUNCTIONS
const SidebarLink = () => {
  const { isIndexActive, setIsIndexActive } =
    useMainContext();

  const buttonActive = (index) => {
    const indexActual = isIndexActive;
    setIsIndexActive(index);
    alert(indexActual);
    alert(index);
  };

  return (
    <div className="h-100p bg-gray">
      {Nav.map((item, indexn) =>
        item.route != "#" ? (
          <ListGroup
            classname="uncollapse-sidebar li-items-sidebar"
            key={indexn}
          >
            <LinkItem
              text={item.text}
              route={item.route}
              icon={item.icon}
              classname={`uncollapse-sidebar-item bb-1-white ${
                isIndexActive === indexn ? "bg-fuchsia" : ""
              }`}
              onclick={() => buttonActive(indexn)}
            />
          </ListGroup>
        ) : (
          <Collapse
            text={item.text}
            icon={item.icon}
            iconarrowdown="eva:arrow-ios-downward-outline"
            iconarrowup="eva:arrow-ios-upward-fill"
            classname={`uncollapse-sidebar-item li-items-sidebar bb-1-white`}
            key={indexn}
          >
            <ListGroup classname="collapse-sidebar">
              {item.snav.map((item, index) => (
                <LinkItem
                  text={item.text}
                  route={item.route}
                  icon={item.icon}
                  classname={`collapse-sidebar-item bb-1-white ${
                    isIndexActive === index + '' + indexn ? "bg-fuchsia" : ""
                  }`}
                  key={index + '' + indexn}
                  onclick={() => buttonActive(index + '' + indexn)}
                />
              ))}
            </ListGroup>
          </Collapse>
        )
      )}
    </div>
  );
};

export default SidebarLink;
