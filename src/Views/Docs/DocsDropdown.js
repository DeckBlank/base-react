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
      <DropdownAvatar
        type="button"
        id="dropdownMenuButton1"
        bgcolor="transparent"
        txtcolor="black"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <br />
      <br />
      <h2>DROPDOWN SIMPLE</h2>
      <br />
      <div className="grid-responsive-docs">
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="white"
        txtcolor="black"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="turquoise"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="blue"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="yellow"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="orange"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="green"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="magenta"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="black"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="fuchsia"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="lightblue"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="silver"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      />
      <Dropdown
        type="button"
        id="dropdownMenuButton1"
        bgcolor="gray"
        txtcolor="white"
        dropdown="toggle"
        databstoggle="dropdown"
        ariaexpanded="false"
      /></div>
    </div>
  );
};

export default DocsDropdown;
