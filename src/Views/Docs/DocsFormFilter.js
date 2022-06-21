import React from "react";
import FormFilter from "../../uiKit/FormFilter/FormFilter";
import FormFilterEjm from "../../uiKit/FormFilter/FormFilterEjm";
import RadioBtn from "../../uiKit/RadioBtn/RadioBtn";
import SwitchBtn from "../../uiKit/SwitchBtn/SwitchBtn";

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
          <h2>FORM FILTERS RADIO BTN</h2>
          <br />
          <FormFilter>
            <SwitchBtn text="Switch Button" />
            <SwitchBtn text="Switch Button" />
          </FormFilter>
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
