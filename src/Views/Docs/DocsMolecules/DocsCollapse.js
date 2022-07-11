import React from "react";
// COMPONENTS
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import Collapse from "../../../uiKit/Molecules/Collapse/Collapse";
import Details from "../../../uiKit/Molecules/Details/Details";
import FormFilter from "../../../uiKit/Organism/FormFilter/FormFilter";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";
import Select from "../../../uiKit/Molecules/Select/Select";
import Option from "../../../uiKit/Molecules/Select/Option";
import SelectDropdown from "../../../uiKit/Molecules/SelectDropdown/SelectDropdown";
// JSONS
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json"
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";
import OptionsList from "../../../assets/Jsons/ItemsList/options-list.json";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsCollapse = () => {
  return (
    <section>
      <Title
        title="Docs Collapse / Details"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>COLLAPSE / DETAILS</h2>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <div className="d-flex fd-column jc-flex-start">
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
          <div className="d-flex fd-column jc-flex-start">
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
          <div className="d-flex fd-column jc-flex-start">
            <h3>(DETAILS / SUMMARY : SELECTS)</h3>
            <br />
            <Details summary="Summary" txtcolor="gray">
            <SelectDropdown
                    selectedtext="Seleccionar Alumno"
                    listOptions={OptionsListGroupBtn}
                    labeltext="Label"
                    classListGroup="collapse-selects collapse-select-absolute h-155px"
                    classSelectedItem="selected-item"
                    classOptions="collapse-selects-item bt-1-silver"
                  />
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
          <div className="d-flex fd-column jc-flex-start">
            <h3>(BUTTON / LISTGROUP)</h3>
            <br />
            <Collapse
              text="Collapse"
              icon="clarity:list-solid"
              iconarrowdown="eva:arrow-ios-downward-outline"
              iconarrowup="eva:arrow-ios-upward-fill"
              classname="uncollapse-sidebar-item li-items-sidebar border-bottom-sidebar"
            >
              <ListGroup classname="collapse-sidebar">
                {OptionsListGroupLink.map((item, index) => (
                  <LinkItem
                    text={item.display_name}
                    icon={item.icon}
                    route={item.route}
                    classname="collapse-sidebar-item bb-1-white"
                    key={index}
                  />
                ))}
              </ListGroup>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsCollapse;
