import React from "react";
import { Link } from "react-router-dom";
import "./_Breadcrumb.scss";

const Breadcrumb = (props) => {

  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to="/">Page 2 </Link>
        </li>
        <li class="breadcrumb-item">
          <Link to="/">Page 3</Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <Link to="/">Page 4</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
