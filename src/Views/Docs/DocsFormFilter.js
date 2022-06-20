import React from 'react'
import FormFilter from '../../uiKit/FormFilter/FormFilter'
import FormFilterEjm from '../../uiKit/FormFilter/FormFilterEjm'
import RadioBtn from '../../uiKit/RadioBtn/RadioBtn'

const DocsFormFilter = () => {
  return (
    <div>
      <div>
        <h2>RADIO BUTTONS</h2>
        <br />
        <RadioBtn text="Radio Button" type="radio"/>
      </div>
      <h2>FORM FILTERS</h2>
      <br />      
      <div>
        <FormFilter>
          <RadioBtn text="Radio Button" type="radio" checked/>
          <RadioBtn text="Radio Button" type="radio"/>
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