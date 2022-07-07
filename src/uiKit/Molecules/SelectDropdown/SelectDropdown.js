import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./_SelectDropdown.scss";
import ListGroup from "../../Atoms/ListGroup/ListGroup";
import ButtonItem from "../../Atoms/ButtonItem/ButtonItem";
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json";

const SelectDropdown = (props) => {
  let { id, selectedtext, labeltext, htmlfor, listOptions, classListGroup, classSelectedItem, classOptions } = props;

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
          <Icon icon="eva:arrow-ios-downward-outline" className="icon-select-drop"/>
          {selectedOption || <p>{selectedtext}</p>}
        </div>
        {isOpen && (
          <ListGroup classname={`${classListGroup}`}>
            <ButtonItem
              classname={`${classSelectedItem}`}
              onclick={onOptionClicked(selectedtext)}
              text={selectedtext}
            />
            {listOptions.map((item, index) => (
              <ButtonItem
                classname={`${classOptions} bt-formfilter`}
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
