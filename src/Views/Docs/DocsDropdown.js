import React from "react";
import Avatar from "../../uiKit/Avatar/Avatar";
import Dropdown from "../../uiKit/Dropdown/Dropdown";
import DropdownAvatar from "../../uiKit/DropdownAvatar/DropdownAvatar";

const DocsDropdown = () => {
  return (
    <div>
      <h2>AVATAR</h2>
      <Avatar />
      <h2>DROPDOWN AVATAR</h2>
      <div className="grid-responsive-docs">
        
        <DropdownAvatar
          type="button"
          bgcolor="transparent"
          txtcolor="black"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropdown"
        />
        
        <DropdownAvatar
          type="button"
          bgcolor="black"
          txtcolor="white"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropup"
        />

        <DropdownAvatar
          type="button"
          bgcolor="black"
          txtcolor="white"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropend"
        />

        <DropdownAvatar
          type="button"
          bgcolor="black"
          txtcolor="white"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropstart"
        />
      </div>
      <br />
      <br />
      <h2>DROPDOWN SIMPLE</h2>
      <br />
      <div className="grid-responsive-docs">
        <Dropdown
          type="button"
          bgcolor="gray"
          txtcolor="white"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropdown"
        />

        <Dropdown
          type="button"
          bgcolor="red"
          txtcolor="white"
          dropdown="toggle"
          direction="dropup"
          id="idDropdown"
          data-bs-toggle="dropdown"
        />

        <Dropdown
          type="button"
          bgcolor="green"
          txtcolor="white"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
        />

        <Dropdown
          type="button"
          bgcolor="blue"
          txtcolor="white"
          dropdown="toggle"
          direction="dropstart"
          id="idDropdown"
          data-bs-toggle="dropdown"
        />
      </div>
    </div>
  );
};

export default DocsDropdown;
