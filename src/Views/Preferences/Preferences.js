import React,{useRef} from 'react';
import Button from '../../uiKit/Button/Button';

export default function Preferences() {

  let color = useRef('secondary');
  const saludar = () => {
    alert('hola')
  }
  const chau = () => {
    alert('chau')
  }
  return(
    <div>
      <h2>Preferences</h2>
      <Button 
        text={"Agendar clase"}
        onClick={saludar}
      />
      <Button 
        color={color.current} 
        className={'btn-block'}
        text={"despedirse"}
        onClick={chau}
      />
      {/* <Card 
        img={color.current} 
        text={"despedirse"}
        onClick={accion}
      /> */}
    </div>
  );
}