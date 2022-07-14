import React from "react";
// COMPONENTS
import FormFilter from "../../../uiKit/Organism/FormFilter/FormFilter";
import FormFilterEjm from "../../../uiKit/Organism/FormFilter/FormFilterEjm";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import Select from "../../../uiKit/Molecules/Select/Select";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";
import Option from "../../../uiKit/Molecules/Select/Option";
import SelectDropdown from "../../../uiKit/Molecules/Select/SelectDropdown";
import FormFilterEjm2 from "../../../uiKit/Organism/FormFilter/FormFilterEjm2";
// JSONS
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json"
import OptionsList from "../../../assets/Jsons/ItemsList/options-list.json";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsFormFilter = () => {
  return (
    <section>
      <Title
        title="Docs Form Filter"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <div>
            <h2>FORM FILTERS RADIO BTN</h2>
            <br />
            <FormFilter>
              <RadioBtn
                text="Radio Button"
                classname="border-bottom-formfilter"
                name="name-radio-btn"
              />
              <RadioBtn
                text="Radio Button"
                type="checkbox"
                name="name-radio-btn"
              />
            </FormFilter>
          </div>
          <div>
            <h2>FORM FILTERS SWITCHES</h2>
            <br />
            <FormFilter>
              <SwitchBtn
                text="Switch Button"
                classname="border-bottom-formfilter "
              />
              <SwitchBtn text="Switch Button" />
            </FormFilter>
          </div>
          <div>
            <h2>FORM FILTERS SELECTS / OPTIONS </h2>
            <br />
            <Select
              size="1"
              selectedtext="Seleccionar Tutor"
              labeltext="Tutor:"
            >
              {OptionsList.map((item, index) => (
                <Option
                  value={item.value}
                  optiontext={item.option}
                  key={index}
                />
              ))}
            </Select>
            <br />
            <Select
              size="1"
              selectedtext="Seleccionar Alumno"
              labeltext="Alumno:"
            >
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
            <h2>FORM FILTERS SELECT / UL-LI</h2>
            <br />
            <SelectDropdown
            listOptions={OptionsListGroupBtn}
              labeltext="Tutor:"
              selectedtext="Seleccionar Tutor"
              classListGroup="collapse-selects collapse-select-absolute h-155px"
              classSelectedItem="selected-item"
              classOptions="collapse-selects-item bt-1-silver"
            />

            <br />
            <SelectDropdown
             listOptions={OptionsListGroupBtn}
              labeltext="Alumno:"
              selectedtext="Seleccionar Alumno"
              classListGroup="collapse-selects collapse-select-absolute h-155px"
              classSelectedItem="selected-item"
              classOptions="collapse-selects-item bt-1-silver"
            />
          </div>
        </div>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <div>
            <h2>FORM FILTERS FUNCTIONAL WITH HOOKS</h2>
            <br />
            <FormFilterEjm />
          </div>
          <div>
            <h2>FORM FILTERS FUNCTIONAL </h2>
            <br />
            <FormFilterEjm2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsFormFilter;
