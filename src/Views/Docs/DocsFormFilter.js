import React from "react";
import FormFilter from "../../uiKit/FormFilter/FormFilter";
import FormFilterEjm from "../../uiKit/FormFilter/FormFilterEjm";
import RadioBtn from "../../uiKit/RadioBtn/RadioBtn";
import Select from "../../uiKit/Select/Select";
import SwitchBtn from "../../uiKit/SwitchBtn/SwitchBtn";
import OptionsList from "../../assets/Jsons/options-list.json";
import Option from "../../uiKit/Select/Option";

const DocsFormFilter = () => {
  return (
    <div>
      <div className="grid-responsive-docs-filtercard">
        <div>
          <h2>RADIO BUTTONS</h2>
          <br />
          <RadioBtn text="Radio Button" type="radio" />
        </div>
        <div>
          <h2>SWITCH BUTTONS</h2>
          <br />
          <SwitchBtn text="Switch Button" type="radio" />
        </div>
        <div>
          <h2>SELECT / OPTIONS</h2>
          <Select
            size="1"
            selectedtext="Options selected"
          >
            {OptionsList.map((item) => (
              <Option value={item.value} optiontext={item.option} />
            ))}
          </Select>
        </div>
        <div>
          <h2>INPUT: CALENDAR</h2>
          <br />
          <SwitchBtn text="Switch Button" type="radio" />
        </div>
      </div>
      <br />
      <div className="grid-responsive-docs-filtercard">
        <div>
          <h2>FORM FILTERS RADIO BTN</h2>
          <br />
          <FormFilter>
            <RadioBtn text="Radio Button" type="radio" />
            <RadioBtn text="Radio Button" type="radio" />
          </FormFilter>
        </div>
        <div>
          <h2>FORM FILTERS SELECTS</h2>
          <br />
          <FormFilter>
            <SwitchBtn text="Switch Button" />
            <SwitchBtn text="Switch Button" />
          </FormFilter>
        </div>
        <div>
          <h2>FORM FILTERS RADIO BTN</h2>
          <br />
          <Select
            size="1"
            selectedtext="Seleccionar Tutor"
            labeltext="Tutor:"
            labelfor="labelfor"
          >
            {OptionsList.map((item) => (
              <Option value={item.value} optiontext={item.option} />
            ))}
          </Select>
          <br />
          <Select
            size="1"
            selectedtext="Seleccionar Alumno"
            labeltext="Alumno:"
            labelfor="labelfor"
          >
            {OptionsList.map((item) => (
              <Option value={item.value} optiontext={item.option} />
            ))}
          </Select>
        </div>
        <div>
          <h2>FORM FILTERS RADIO BTN</h2>
          <br />
          <Select
            size="1"
            selectedtext="Seleccionar Tutor"
            labeltext="Tutor:"
            labelfor="labelfor"
          >
            {OptionsList.map((item) => (
              <Option value={item.value} optiontext={item.option} />
            ))}
          </Select>
          <br />
          <Select
            size="1"
            selectedtext="Seleccionar Alumno"
            labeltext="Alumno:"
            labelfor="labelfor"
          >
            {OptionsList.map((item) => (
              <Option value={item.value} optiontext={item.option} />
            ))}
          </Select>
        </div>

      </div>
      <br />

      <h2>FORM FILTERS FUNCTIONAL</h2>
      <br />
      <div>
        <FormFilterEjm />
      </div>
    </div>
  );
};

export default DocsFormFilter;
