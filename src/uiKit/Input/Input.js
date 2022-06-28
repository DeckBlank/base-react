import React from "react";
import "./_Input.scss";
import { Icon } from "@iconify/react";

const Input = (props) => {
  let { id, icon, type, value, step, name, placeholder, labeltext, title, htmlfor, autocomplete, classname, min, max, size, pattern, maxlength, width, height, results } =
    props;
  return (
    <div className="input-flex-column">
      <label htmlFor={htmlfor}>{labeltext}</label>
      <div className="content-input">
        <input
          id={id}
          type={type}
          value={value}
          min={min}
          max={max}
          name={name}
          className={classname}
          size={size}
          pattern={pattern}
          maxlength={maxlength}
          title={title}
          placeholder={placeholder}
          step={step}
          autocomplete={autocomplete}
          width={width} 
          height={height}
          results={results}
        />

        <Icon icon={icon} className="icon-input" />
      </div>
    </div>
  );
};

export default Input;
