import React from "react";
import PropTypes from "prop-types";
import "./_RadioBtn.scss";

const RadioBtn = (props) => {
  let { id, name, text, value, _onchange, classname } = props;

  return (
    <label id={id} className={`form-control ${classname}`}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={_onchange}
      />
      {text}
    </label>
  );
};

RadioBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default RadioBtn;

// value="Male"
// checked={this.state.selectedOption === "Male"}
// onChange={this.onValueChange}

// import React from "react";
// import './_RadioBtn.scss'

// const RadioBtn = () => {
//   return (
//     <form className="radiobtn__form" action="">
//       <label class="form-control">
//         <input type="radio" name="radio" />
//         Radio
//       </label>

//       <label class="form-control">
//         <input type="radio" name="radio" checked />
//         Radio - checked
//       </label>
//     </form>
//   );
// };

// export default RadioBtn;
