import React from "react";
import PropTypes from "prop-types";
import "./_RadioBtn.scss";

const RadioBtn = (props) => {
  let { id, name, type, text, value, _onchange } = props;

  return (
    <label id={id} class="form-control">
      <input
        type={type}
        name={name}
        value={value}
        // checked={this.state.selectedOption === { value }}
        // = () => {{this.onValueChange}}
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
