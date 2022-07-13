import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../Atoms/Avatar/Avatar";
import Button from "../../Atoms/Button/Button";
import "./_Dropdown.scss";
import { Icon } from "@iconify/react";

const DropdownAvatar = (props) => {
  let {
    id,
    type,
    direction,
    dropdown,
    ariaLabelledby,
    text,
    classname,
    iconarrow,
    classarrow,
    classbtn
  } = props;

  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
    setsDropdown(!sdropdown);
  };

  return (
    <div
    className={`dropdown-group zi-10 ${direction} ${classname}`}
    >
      <div className="avatar-dropdown">
      <Icon icon={iconarrow} className={`${classarrow} icon-arrow-drop zi-20`} />
        <Button
          type={type}
          id={id}
          dropdown={dropdown}
          data-bs-toggle="dropdown"
          ariaexpanded="false"
          onclick={showDropdown}
          classname={`d-flex ai-center w-100p zi-30 ${classbtn}`}
        >
          <Avatar />
          <p>{text}</p>
        </Button>
      </div>
      <ul
        id="dropdownAvatars"
        aria-labelledby={ariaLabelledby}
        className={`dropdown-menu w-100p p-absolute zi-40 ${sdropdown ? "block" : "none"}`} 
      >
        {props.children}
      </ul>
    </div>
  );
};

DropdownAvatar.propTypes = {
  text: PropTypes.string,
};

export default DropdownAvatar;
