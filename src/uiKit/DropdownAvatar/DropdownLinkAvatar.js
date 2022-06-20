// import React from "react";

// function DropdownLinkAvatar({props, option: {imgUrl, tittle, path}}) {
// let {title, path, imgUrl, classname, onClick} =
// props;
//   return (
//     <li className={classname}>
//       <Link to={path} onClick={onClick}>
//         <img src={imgUrl} alt={title} />
//         {title}
//       </Link>
//     </li>
//   );
// }

// export default DropdownLinkAvatar;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const DropdownLinkAvatar = (props) => {

  let {title, path, imgUrl, classname, onclick} =
    props;

  return (
    <li className={classname}>
      <Link to={path} onClick={onclick}>
        <img src={imgUrl} alt={title} />
        {title}
      </Link>
    </li>
  );

};

DropdownLinkAvatar.propTypes = {
  title: PropTypes.string,
};

export default DropdownLinkAvatar
