import React from 'react'
import Dropdown from '../../uiKitRelease/Dropdown/Dropdown'

const DocsDropdown = () => {
  
  return (      
    <div>
        <h1>DROPDOWN</h1><br/>     
        <Dropdown 
            type="button"
            id="dropdownMenuButton1"        
            bgcolor="magenta"
            txtcolor="white"
            dropdown="toggle"
            databstoggle="dropdown"
            ariaexpanded="false"              >            
        </Dropdown>    
    </div>
  )
}

export default DocsDropdown
