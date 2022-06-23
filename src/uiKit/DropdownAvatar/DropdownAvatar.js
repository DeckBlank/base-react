import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { images, data } from "../../assets/constants";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./_DropdownAvatar.scss";
// import DropdownLinkAvatar from "./DropdownLinkAvatar";

const DropdownAvatar = (props) => {
  let {
    id,
    type,
    direction,
    bgcolor,
    txtcolor,
    dropdown,
    ariaLabelledby,
    text,
    hoverbgcolor,
    hovertxtcolor,
    // onclick
    // title,
    // path,
    // imgUrl,
    // classname,
    // options,
    // option
  } = props;

  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
    setsDropdown(!sdropdown);
  };

  // function DropdownLinkAvatarB({ dropdownAvatar: { imgUrl, title, path } }) {
  //   return (
  //     <li className="flex-dropdown-link">
  //       <Link to={path} onClick={onclick}>
  //         <img src={imgUrl} alt={title} />
  //         {title}
  //       </Link>
  //     </li>
  //   );
  // }

  return (
    <div
      className={`dropdown-group ${direction} hover-bg-${hoverbgcolor} hover-txt-${hovertxtcolor}`}
    >
      <div className="avatar-dropdown">
        <Button
          type={type}
          id={id}
          bgcolor={bgcolor}
          txtcolor={txtcolor}
          dropdown={dropdown}
          data-bs-toggle="dropdown"
          ariaexpanded="false"
          onclick={showDropdown}
        >
          <Avatar />
          <p>{text}</p>
        </Button>
      </div>
      <ul
        id="dropdownAvatars"
        className="dropdown-menu"
        aria-labelledby={ariaLabelledby}
        Style={`display: ${sdropdown ? "block" : "none"};`}
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
