import React from "react";
import PropTypes from "prop-types";
import AvatarKarina from "../../../assets/images/Avatar de Karina.png"
import './_Avatar.scss'

const Avatar = (props) => {
  const {
    alt,
  } = props

  return (
    <span className="avatar-container">
      <img className="avatar-img" src={AvatarKarina} alt={alt} />
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
