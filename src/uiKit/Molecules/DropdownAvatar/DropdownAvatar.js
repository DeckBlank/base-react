import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../Atoms/Avatar/Avatar";
import Button from "../../Atoms/Button/Button";
import "./_DropdownAvatar.scss";
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
      className={`dropdown-group ${direction} ${classname}`}
    >
      <div className="avatar-dropdown">
      <Icon icon={iconarrow} className={classarrow} />
        <Button
          type={type}
          id={id}
          dropdown={dropdown}
          data-bs-toggle="dropdown"
          ariaexpanded="false"
          onclick={showDropdown}
          classname={`d-flex ai-center w-100p ${classbtn}`}
        >
          <Avatar />
          <p>{text}</p>
        </Button>
      </div>
      <ul
        id="dropdownAvatars"
        className={`dropdown-menu`}
        aria-labelledby={ariaLabelledby}
        style={{display: `${sdropdown ? "block" : "none"}`}}
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
