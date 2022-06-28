import React from "react";
import PropTypes from "prop-types";
import "./_FormFilter.scss";

const FormFilter = (props) => {
  let {action} = props;
  return (
    <form className="formFilter__container" action={action}>
      {props.children}
    </form>
  );
};

FormFilter.propTypes = {
  action: PropTypes.string,
};

export default FormFilter;
