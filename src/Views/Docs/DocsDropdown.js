import React from 'react'
import Dropdown from '../../uiKit/Dropdown/Dropdown'

const DocsDropdown = () => {
  
  return (      
    <div className="views-docs">
        <h1>DROPDOWN</h1>    
        <Dropdown 
            type="button"
            id="dropdownMenuButton1"        
            bgcolor="magenta"
            txtcolor="white"
            dropdown="toggle"
            databstoggle="dropdown"
            ariaexpanded="false"             
        >           
        </Dropdown>    
    </div>
  )
}

export default DocsDropdown
