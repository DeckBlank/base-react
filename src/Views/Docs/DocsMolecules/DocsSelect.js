import React from "react";
// COMPONENTS
import Select from "../../../uiKit/Molecules/Select/Select";
import SelectDropdown from "../../../uiKit/Molecules/SelectDropdown/SelectDropdown";
import Option from "../../../uiKit/Molecules/Select/Option";
import Title from "../../../uiKit/Atoms/Title/Title";
// JSONS
import OptionsList from "../../../assets/Jsons/ItemsList/options-list.json";
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json";

const DocsSelect = () => {
  return (
    <section>
      <Title
        title="Docs Select"
        classname="p-sticky top-0 txt-black bb-title f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>SELECT</h2>
        <br />
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <div>
            <h2>SELECT / UL-LI</h2>
            <SelectDropdown
              listOptions={OptionsListGroupBtn}
              labeltext="Label"
              selectedtext="Seleccionar Item"
              classListGroup="collapse-selects collapse-select-absolute"
              classSelectedItem="selected-item"
              classOptions="collapse-selects-item bt-formfilter"
            />
          </div>
          <div>
            <h2>SELECT / UL-LI</h2>
            <SelectDropdown
              listOptions={OptionsListGroupBtn}
              labeltext="Label"
              selectedtext="Seleccionar Item"
              classListGroup="collapse-selects collapse-select-absolute"
              classSelectedItem="selected-item bt-formfilter"
              classOptions="collapse-selects-item bt-formfilter"
            />
          </div>
          <div>
            <h2>SELECT / OPTIONS</h2>
            <Select size="1" selectedtext="Options selected">
              {OptionsList.map((item, index) => (
                <Option
                  value={item.value}
                  optiontext={item.option}
                  key={index}
                />
              ))}
            </Select>
          </div>
          <div>
            <h2>SELECT / OPTIONS</h2>
            <Select size="1" selectedtext="Options selected">
              {OptionsList.map((item, index) => (
                <Option
                  value={item.value}
                  optiontext={item.option}
                  key={index}
                />
              ))}
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsSelect;
