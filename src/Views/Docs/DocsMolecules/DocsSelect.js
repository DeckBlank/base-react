import React from "react";
// COMPONENTS
import Select from "../../../uiKit/Molecules/Select/Select";
import SelectDropdown from "../../../uiKit/Molecules/SelectDropdown/SelectDropdown";
import Option from "../../../uiKit/Molecules/Select/Option";
// JSONS
import OptionsList from "../../../assets/Jsons/ItemsList/options-list.json";
const DocsSelect = () => {
  return (
    <div>
      <h2>SELECT</h2>
      <br />
      <br />
      <div className="grid-responsive-docs">
        <div>
          <h2>SELECT / UL-LI</h2>
          <SelectDropdown selectedtext="Seleccionar Item" />
        </div>
        <div>
          <h2>SELECT / UL-LI</h2>
          <SelectDropdown selectedtext="Seleccionar Item" />
        </div>
        <div>
          <h2>SELECT / OPTIONS</h2>
          <Select size="1" selectedtext="Options selected">
            {OptionsList.map((item, index) => (
              <Option value={item.value} optiontext={item.option} key={index} />
            ))}
          </Select>
        </div>
        <div>
          <h2>SELECT / OPTIONS</h2>
          <Select size="1" selectedtext="Options selected">
            {OptionsList.map((item, index) => (
              <Option value={item.value} optiontext={item.option} key={index} />
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default DocsSelect;
