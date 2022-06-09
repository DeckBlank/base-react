import React from 'react'
import Button from '../../uiKit/Button/Button'
import Dropdown from '../../uiKitRelease/Dropdown/Dropdown'

const DocsDropdown = () => {
  return (      
    <div>
        <h1>DROPDOWN</h1><br/>       
            
        <Dropdown dropdown="menu" arialabelledby="dropdownMenuButton1">
            <Button 
                type="button"
                id="dropdownMenuButton1"        
                bgcolor="magenta"
                txtcolor="white"
                dropdown="toggle"
                databstoggle="dropdown"
                ariaexpanded="false"        
            >  
            Karina             
            </Button>  
        </Dropdown>

        
    </div>
  )
}

export default DocsDropdown
