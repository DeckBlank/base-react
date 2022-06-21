import React from "react";
import PropTypes from "prop-types";
import "./_SwitchBtn.scss";

const SwitchBtn = (props) => {
  let { id, name, text, value } = props;

  return (
    <label id={id} class="switch">
      {text}
      <input
        type="checkbox"
        name={name}
        value={value}
      />
      <span class="slider round"></span>
      
    </label>
  );
};

SwitchBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default SwitchBtn;

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
