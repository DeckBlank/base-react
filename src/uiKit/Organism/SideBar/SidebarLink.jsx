import React from "react";

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
  const { isIndexActive, isIndexCollapse,  buttonActive } =
    useMainContext();

  return (
    <div className="h-100p bg-gray">
      {Nav.map((item) =>
        
        item.route != "#" ? (
          <ListGroup
            classname="uncollapse-sidebar li-items-sidebar"           
          >
            <LinkItem
              text={item.text}
              route={item.route}
              icon={item.icon}
              classname={`uncollapse-sidebar-item bb-1-white ${
                isIndexActive == item.id ? "bg-fuchsia" : ""
              }`}
              onclick={() => buttonActive(item.id, 0)}
            />
          </ListGroup>
        ) : (
          <Collapse
            text={item.text}
            icon={item.icon}
            iconarrowdown="eva:arrow-ios-downward-outline"
            iconarrowup="eva:arrow-ios-upward-fill"
            classname={`uncollapse-sidebar-item li-items-sidebar bb-1-white`}            
            classnamecollapse={`${
              isIndexCollapse == item.id ? "block" : ""
            }`}            
            key={item.id}
          >
            <ListGroup classname="collapse-sidebar">
              {item.snav.map((itemsn) => (
                <LinkItem
                  text={itemsn.text}
                  route={itemsn.route}
                  icon={itemsn.icon}
                  classname={`collapse-sidebar-item bb-1-white ${
                    isIndexActive == itemsn.id ? "bg-fuchsia" : ""
                  }`}
                  key={itemsn.id}
                  onclick={() => buttonActive(itemsn.id, item.id)}
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
