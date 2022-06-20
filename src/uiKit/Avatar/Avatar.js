import React from "react";
import PropTypes from "prop-types";
import AvatarKarina from "../../assets/images/Avatar de Karina.png"
import './_Avatar.scss'

const Avatar = (props) => {
  // const {
  //   img,
  // } = props

  return (
    <span className="avatar-container">
      <img className="avatar-img" src={AvatarKarina} alt="Avatar" />
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
