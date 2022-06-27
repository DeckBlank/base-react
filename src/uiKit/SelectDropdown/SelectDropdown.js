import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import "./_SelectDropdown.scss";
import ListGroup from "../../uiKit/ListGroup/ListGroup";
import ButtonItem from "../../uiKit/ButtonItem/ButtonItem";

const SelectDropdown = (props) => {
  let { id, selectedtext, labeltext, labelfor } = props;

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };



  return (
    <div className="select-flex-column ">
      <label for={labelfor}>{labeltext}</label>
      <div className="content-select-drop">
        <div id={id} className={`form-select-drop ${
        isOpen ? "form-select-collap" : null
      } `} onClick={toggling}>
          <IoIosArrowDown className="icon-select-drop" />
          {selectedOption || <p>{selectedtext}</p> }
        </div>
        {isOpen && (
          <ListGroup classname="collapse-selects collapse-select-absolute">
            {options.map((option) => (
              <ButtonItem
                classname="collapse-selects-item border-top-formfilter"
                onclick={onOptionClicked(option)}
                key={Math.random()}
                text={option}
              />
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  );
};

SelectDropdown.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  selectedtext: PropTypes.string,
  for: PropTypes.string,
};

export default SelectDropdown;
