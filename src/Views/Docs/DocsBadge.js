import React from 'react'
import Badge from '../../uiKit/Badge/Badge'
import Button from '../../uiKit/Button/Button'

const DocsBadge = () => {
  return (
    <div>
        <h1>BADGE</h1><br/>
        <Badge bgcolor='white' txtcolor='black'>white</Badge>
        <Badge bgcolor='red' txtcolor='white'>red</Badge>
        <Badge bgcolor='turquoise' txtcolor='white'>turquoise</Badge>
        <Badge bgcolor='blue' txtcolor='white'>blue</Badge>
        <Badge bgcolor='yellow' txtcolor='white'>yellow</Badge>
        <Badge bgcolor='orange' txtcolor='white'>orange</Badge>
        <Badge bgcolor='green' txtcolor='white'>green</Badge>
        <Badge bgcolor='magenta' txtcolor='white'>magenta</Badge>
        <Badge bgcolor='black' txtcolor='white'>black</Badge>
        <Badge bgcolor='fuchsia' txtcolor='white'>fuchsia</Badge>
        <Badge bgcolor='lightblue' txtcolor='black'>lightblue</Badge>
        <Badge bgcolor='silver' txtcolor='white'>silver</Badge>
        <Badge bgcolor='gray' txtcolor='white'>gray</Badge>

        <br/><br/><br/>
        <h1>BADGE ENCIMA DERECHA</h1><br/>
        <Button bgcolor='silver' txtcolor="white" position='relative'>
        red 
          <Badge bgcolor='red' txtcolor='white' position='absolute' top='0' start='100' translate='middle' >+99</Badge> 
        </Button>    

         <br/><br/><br/>
        <h1>BADGE ENCIMA IZQUIERDA</h1><br/>
        <Button bgcolor='silver' txtcolor="white" position='relative'>
        magenta 
          <Badge bgcolor='magenta' txtcolor='white' position='absolute' top='0' start='0' translate='middle' >+99</Badge> 
        </Button> 

        <br/><br/><br/>
        <h1>BADGE DEBAJO DERECHA</h1><br/>
        <Button bgcolor='silver' txtcolor="white" position='relative'>
        fuchsia 
          <Badge bgcolor='fuchsia' txtcolor='white' position='absolute' top='100' start='100' translate='middle' >+99</Badge> 
        </Button>    

        <br/><br/><br/>
        <h1>BADGE DEBAJO IZQUIERDA</h1><br/>
        <Button bgcolor='silver' txtcolor="white" position='relative'>
        turquoise 
          <Badge bgcolor='turquoise' txtcolor='white' position='absolute' top='100' start='0' translate='middle' >+99</Badge> 
        </Button>       

    </div>
  )
}

export default DocsBadge
