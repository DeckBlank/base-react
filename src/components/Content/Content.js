import React from 'react'
import ContainerTable from '../ContainerTable/ContainerTable'

const Content = (props) => {
  return (
    <div >
        {props.children}
        <ContainerTable/>
    </div>    
  )
}

export default Content