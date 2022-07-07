import React, { useState } from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Details from "../../Atoms/Details/Details";
import FormFilter from "../FormFilter/FormFilter";
import SwitchBtn from "../../Atoms/SwitchBtn/SwitchBtn";
import RadioBtn from "../../Atoms/RadioBtn/RadioBtn";
import SelectDropdown from "../../Molecules/SelectDropdown/SelectDropdown";
import Button from "../../Atoms/Button/Button";
// JSONS
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json";

const SidebarFilter = (props) => {
  let { onshowfilter } = props;
  return (
    <aside>
      <div className="p-sticky top-0 bg-white d-flex jc-space-between ai-center pt-1 pr-1 pl-1 zi-100">
        <div className="d-flex ai-center zi-100 g-05">
          <Icon icon="mi:filter" className="txt-gray f-xxl" />
          <h3 className="txt-gray"> Filtros </h3>
        </div>
        <Button
          classname="d-flex ai-center h-bg-gray bg-white h-txt-white txt-gray"
          onclick={() => onshowfilter(false)}
        >
          <Icon icon="ep:close-bold" className="font-m" />
        </Button>
      </div>
      <div className="content-filter">
        <Details summary="Lista" txtcolor="gray">
          <FormFilter>
            <SwitchBtn
              text="Lista de clases"
              name="name-switch-btn"
              classname="bb-2-silver"
            />
            <SwitchBtn text="Lista de talleres" name="name-switch-btn" />
          </FormFilter>
        </Details>
        <Details summary="Por" txtcolor="gray">
          <FormFilter>
            <RadioBtn
              text="Dia"
              classname="bb-2-silver"
              name="name-radio-btn"
            />
            <RadioBtn
              text="Semana"
              classname="bb-2-silver"
              name="name-radio-btn"
            />
            <RadioBtn text="Mes" type="checkbox" name="name-radio-btn" />
          </FormFilter>
        </Details>
        <Details summary="Por modalidad" txtcolor="gray">
          <FormFilter>
            <RadioBtn
              text="Todos"
              classname="bb-2-silver"
              name="name-radio-btn"
            />
            <RadioBtn
              text="MAB GO"
              classname="bb-2-silver"
              name="name-radio-btn"
            />
            <RadioBtn
              text="MAB Online"
              classname="bb-2-silver"
              name="name-radio-btn"
            />
            <RadioBtn text="MAB Sede" name="name-radio-btn" />
          </FormFilter>
        </Details>
        <Details summary="Por tutor" txtcolor="gray">
          <SelectDropdown
            selectedtext="Seleccionar tutor"
            listOptions={OptionsListGroupBtn}
            labeltext="Label"
            classListGroup="collapse-selects collapse-select-absolute h-155px"
            classSelectedItem="selected-item"
            classOptions="collapse-selects-item bt-1-silver"
          />
        </Details>
        <Details summary="Por Alumno" txtcolor="gray">
          <SelectDropdown
            selectedtext="Seleccionar Alumno"
            listOptions={OptionsListGroupBtn}
            labeltext="Label"
            classListGroup="collapse-selects collapse-select-absolute h-155px"
            classSelectedItem="selected-item"
            classOptions="collapse-selects-item bt-1-silver"
          />
        </Details>
      </div>
    </aside>
  );
};

export default SidebarFilter;
