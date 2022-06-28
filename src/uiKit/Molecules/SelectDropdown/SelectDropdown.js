import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import "./_SelectDropdown.scss";
import ListGroup from "../../Atoms/ListGroup/ListGroup";
import ButtonItem from "../../Atoms/ButtonItem/ButtonItem";
import OptionsListGroupBtn from "../../../assets/Jsons/listgroup-list-icon-btn.json";

const SelectDropdown = (props) => {
  let { id, selectedtext, labeltext, htmlfor } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (values) => () => {
    setSelectedOption(values);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="select-flex-column ">
      <label htmlFor={htmlfor}>{labeltext}</label>
      <div className="content-select-drop">
        <div
          id={id}
          className={`form-select-drop ${
            isOpen ? "form-select-collap" : null
          } `}
          onClick={toggling}
        >
          <IoIosArrowDown className="icon-select-drop" />
          {selectedOption || <p>{selectedtext}</p>}
        </div>
        {isOpen && (
          <ListGroup classname="collapse-selects collapse-select-absolute">
            <ButtonItem
              classname="selected-item border-top-formfilter"
              onclick={onOptionClicked(selectedtext)}
              text={selectedtext}
            />
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                classname="collapse-selects-item border-top-formfilter"
                onclick={onOptionClicked(item.display_name)}
                text={item.display_name}
                key={index}
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
  selectedtext: PropTypes.string,
  for: PropTypes.string,
};

export default SelectDropdown;
