import React, { useState } from "react";

// COMPONENTS
import LinkItem from "../../Atoms/LinkItem/LinkItem";
import ListGroup from "../../Atoms/ListGroup/ListGroup";
import Collapse from "../../Molecules/Collapse/Collapse";

// JSONS
import AtomsListGroup from "../../../assets/Jsons/SidebarList/atoms-list-docs.json";
import MoleculesListGroup from "../../../assets/Jsons/SidebarList/molecules-list-docs.json";
import OrganismListGroup from "../../../assets/Jsons/SidebarList/organism-list-docs.json";

import Nav from "../../../assets/Jsons/Nav/Nav.json";

const SidebarLink = () => {

  return (
    <div>
        {Nav.map((item, index) => (
            item.route!='#'
            ?
                <ListGroup classname="uncollapse-sidebar li-items-sidebar" key={index} >
                    <LinkItem
                    text={item.text}
                    route={item.route}
                    icon={item.icon}
                    classname="uncollapse-sidebar-item bb-1-white"
                    />
                </ListGroup>
            :
                <Collapse
                    text={item.text}
                    icon={item.icon}
                    iconarrowdown="eva:arrow-ios-downward-outline"
                    iconarrowup="eva:arrow-ios-upward-fill"
                    classname="uncollapse-sidebar-item li-items-sidebar bb-1-white"
                    key={index}
                >
                    <ListGroup classname="collapse-sidebar">
                    {item.snav.map((item, index) => (
                        <LinkItem
                        text={item.text}
                        route={item.route}
                        icon={item.icon}
                        classname="collapse-sidebar-item bb-1-white"
                        key={index}
                        />
                    ))}
                    </ListGroup>
                </Collapse>    
        ))}
    </div>
  );
};

export default SidebarLink;
