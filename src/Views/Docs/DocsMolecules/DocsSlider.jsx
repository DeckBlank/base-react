import React from 'react'
import Title from '../../../uiKit/Atoms/Title/Title'
// COMPONENTS
import Slider from '../../../uiKit/Molecules/Slider/Slider'
// JSONS
import SliderList from "../../../assets/Jsons/SliderList/slider-list.json"

const DocsSlider = () => {
  return (
    <section>
    <Title
      title="Docs Slider"
      classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
    />
    <div className="ph-3">
      <Slider
      baner={SliderList}
      />
    </div>
    </section>
  )
}

export default DocsSlider