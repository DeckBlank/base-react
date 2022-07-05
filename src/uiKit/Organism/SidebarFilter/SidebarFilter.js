import React, { useState } from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Details from "../../Atoms/Details/Details";
import FormFilter from "../FormFilter/FormFilter";
import SwitchBtn from "../../Atoms/SwitchBtn/SwitchBtn";
import RadioBtn from "../../Atoms/RadioBtn/RadioBtn";
import SelectDropdown from "../../Molecules/SelectDropdown/SelectDropdown";
import Button from "../../Atoms/Button/Button";

const SidebarFilter = (props) => {   
let{onshowfilter}=props;
  return (
    <div>
        <div className="p-sticky top-0 bg-white d-flex jc-space-between ai-center pt-1 pr-1 pl-1 zi-100">
            <div className="d-flex ai-center zi-100">
            <Icon icon="mi:filter" className="txt-gray font-xxl" />
            <h3 className="txt-gray"> Filtros </h3>
            </div>
            <Button classname="flex-btn" bgcolor="white" onclick={() => onshowfilter(false)}>
            <Icon icon="ep:close-bold" className="txt-gray font-m" />
            </Button>             
        </div>
        <div className="content-filter">
            <Details summary="Lista" txtcolor="gray">
            <FormFilter>
                <SwitchBtn
                text="Lista de clases"
                name="name-switch-btn"
                classname="bb-formfilter"
                />
                <SwitchBtn
                text="Lista de talleres"
                name="name-switch-btn"
                />
            </FormFilter>
            </Details>
            <Details summary="Por" txtcolor="gray">
            <FormFilter>
                <RadioBtn
                text="Dia"
                classname="bb-formfilter"
                name="name-radio-btn"
                />
                <RadioBtn
                text="Semana"
                classname="bb-formfilter"
                name="name-radio-btn"
                />
                <RadioBtn text="Mes" type="checkbox" name="name-radio-btn" />
            </FormFilter>
            </Details>
            <Details summary="Por modalidad" txtcolor="gray">
            <FormFilter>
                <RadioBtn
                text="Todos"
                classname="bb-formfilter"
                name="name-radio-btn"
                />
                <RadioBtn
                text="MAB GO"
                classname="bb-formfilter"
                name="name-radio-btn"
                />
                <RadioBtn
                text="MAB Online"
                classname="bb-formfilter"
                name="name-radio-btn"
                />
                <RadioBtn
                text="MAB Sede"
                name="name-radio-btn"
                />
            </FormFilter>
            </Details>
            <Details summary="Por tutor" txtcolor="gray">
            <SelectDropdown selectedtext="Seleccionar tutor" />
            </Details>
            <Details summary="Por Alumno" txtcolor="gray">
            <SelectDropdown selectedtext="Seleccionar Alumno" />
            </Details>
        </div>    
    </div>      
  );
};

export default SidebarFilter;
