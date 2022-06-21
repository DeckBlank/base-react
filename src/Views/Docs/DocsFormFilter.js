import React from 'react'
import FormFilter from '../../uiKit/FormFilter/FormFilter'
import FormFilterEjm from '../../uiKit/FormFilter/FormFilterEjm'
import RadioBtn from '../../uiKit/RadioBtn/RadioBtn'
import SwitchBtn from '../../uiKit/SwitchBtn/SwitchBtn'

const DocsFormFilter = () => {
  return (
    <div>
      <div>
        <h2>RADIO BUTTONS</h2>
        <br />
        <RadioBtn text="Radio Button" type="radio"/>
        <br />

        <h2>SWITCH BUTTONS</h2>
        <br />
        <SwitchBtn text="Switch Button" type="radio"/>
        <br />
        <br />
        
      </div>
      <h3>FORM FILTERS RADIO BTN</h3>
      <br />      
      <div>
        <FormFilter>
          <RadioBtn text="Radio Button" type="radio"/>
          <RadioBtn text="Radio Button" type="radio"/>
        </FormFilter>        
      </div>
      <br />

      <h3>FORM FILTERS RADIO BTN</h3>
      <br />      
      <div>
        <FormFilter>
          <SwitchBtn text="Switch Button"/>
          <SwitchBtn text="Switch Button"/>
        </FormFilter>        
      </div>
      <br />

      <h3>FORM FILTERS FUNCTIONAL</h3>
      <br />
      <div>
        <FormFilterEjm/>
      </div>
    </div>
  )
}

export default DocsFormFilter