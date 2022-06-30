import React from "react";
import FormFilter from "../../../uiKit/Organism/FormFilter/FormFilter";
import FormFilterEjm from "../../../uiKit/Organism/FormFilter/FormFilterEjm";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import Select from "../../../uiKit/Molecules/Select/Select";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";
import Option from "../../../uiKit/Molecules/Select/Option";
import SelectDropdown from "../../../uiKit/Molecules/SelectDropdown/SelectDropdown";
import OptionsList from "../../../assets/Jsons/ItemsList/options-list.json";
import FormFilterEjm2 from "../../../uiKit/Organism/FormFilter/FormFilterEjm2";

const DocsFormFilter = () => {
  return (
    <div>
      <div className="grid-responsive-docs-filterform">
        <div>
          <h2>RADIO BUTTONS</h2>
          <br />
          <RadioBtn text="Radio Button" />
        </div>
        <div>
          <h2>SWITCH BUTTONS</h2>
          <br />
          <SwitchBtn text="Switch Button" />
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
          <h2>SELECT / UL-LI</h2>
          <SelectDropdown selectedtext="Seleccionar Item"/>
        </div>
      </div>
      <br />
      <div className="grid-responsive-docs-filterform">
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
              classname="border-bottom-formfilter"
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
              <Option value={item.value} optiontext={item.option} key={index}/>
            ))}
          </Select>
          <br />
          <Select
            size="1"
            selectedtext="Seleccionar Alumno"
            labeltext="Alumno:"
          >
            {OptionsList.map((item, index) => (
              <Option value={item.value} optiontext={item.option} key={index}/>
            ))}
          </Select>
        </div>
        <div>
          <h2>FORM FILTERS SELECT / UL-LI</h2>
          <br />
          <SelectDropdown labeltext="Tutor:" selectedtext="Seleccionar Tutor" />

          <br />
          <SelectDropdown labeltext="Alumno:" selectedtext="Seleccionar Alumno" />
        </div>
      </div>
      <br />

      <h2>FORM FILTERS FUNCTIONAL WITH HOOKS</h2>
      <br />
      <div>
        <FormFilterEjm />
      </div> 

       <h2>FORM FILTERS FUNCTIONAL </h2>
      <br />
      <div>
        <FormFilterEjm2 />
      </div>

    </div>
  );
};

export default DocsFormFilter;