import React from "react";
// COMPONENTS
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import Collapse from "../../../uiKit/Molecules/Collapse/Collapse";
import Details from "../../../uiKit/Atoms/Details/Details";
import FormFilter from "../../../uiKit/Organism/FormFilter/FormFilter";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";
import Select from "../../../uiKit/Molecules/Select/Select";
import Option from "../../../uiKit/Molecules/Select/Option";
import SelectDropdown from "../../../uiKit/Molecules/SelectDropdown/SelectDropdown";
// JSONS
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";
import OptionsList from "../../../assets/Jsons/ItemsList/options-list.json";

const DocsCollapse = () => {
  return (
    <div>
      <h2>COLLAPSE</h2>
      <br />
      <div className="grid-responsive-docs">
        <div className="flex-responsive-docs">
          <h3>(DETAILS / SUMMARY : FILTERS RADIO BUTTON)</h3>
          <br />
          <Details summary="Summary" txtcolor="gray">
            <FormFilter>
              <RadioBtn
                text="Radio Button 1"
                classname="border-bottom-formfilter"
                name="name-radio-btn"
              />
              <RadioBtn
                text="Radio Button 2 "
                classname="border-bottom-formfilter"
                name="name-radio-btn"
              />
              <RadioBtn
                text="Radio Button 3"
                type="checkbox"
                name="name-radio-btn"
              />
            </FormFilter>
          </Details>
        </div>
        <div className="flex-responsive-docs">
          <h3>(DETAILS / SUMMARY : FILTERS SWITCH BUTTON)</h3>
          <br />
          <Details summary="Summary" txtcolor="gray">
            <FormFilter>
              <SwitchBtn
                text="Switch Button 1"
                name="name-switch-btn"
                classname="border-bottom-formfilter"
              />
              <SwitchBtn
                text="Switch Button 2"
                name="name-switch-btn"
                classname="border-bottom-formfilter"
              />
              <SwitchBtn text="Switch Button 3" name="name-switch-btn" />
            </FormFilter>
          </Details>
        </div>
        <div className="flex-responsive-docs">
          <h3>(DETAILS / SUMMARY : SELECTS)</h3>
          <br />
          <Details summary="Summary" txtcolor="gray">
            <SelectDropdown selectedtext="Seleccionar Alumno" />
            <br />
            <Select size="1" selectedtext="Seleccionar Tutor">
              {OptionsList.map((item, index) => (
                <Option
                  value={item.value}
                  optiontext={item.option}
                  key={index}
                />
              ))}
            </Select>
          </Details>
        </div>
        <div className="flex-responsive-docs">
          <h3>(BUTTON / LISTGROUP)</h3>
          <br />
          <Collapse
            text="Collapse"
            icon="clarity:list-solid"
            classname="uncollapse-sidebar-item li-items-sidebar border-bottom-sidebar"
          >
            <ListGroup classname="collapse-sidebar">
              {OptionsListGroupLink.map((item, index) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  classname="collapse-sidebar-item border-bottom-sidebar"
                  key={index}
                />
              ))}
            </ListGroup>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default DocsCollapse;
