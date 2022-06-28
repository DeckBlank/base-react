

import React,{ useState } from "react";
import Button from "../../Atoms/Button/Button";
// import RadioBtn from "../../Atoms/RadioBtn/RadioBtn";
// import SwitchBtn from "../../Atoms/SwitchBtn/SwitchBtn";

const FormFilterEjm2 = (props) => {

  let {
    id    
  } = props; 


  const [ ichecknew, setiChecknew] = useState(false);
  const [ icheckact, setiCheckact] = useState(false);
  const [ icheckold, setiCheckold] = useState(false);
  const [ scheck, setsCheck ] = useState('checked');

  const _iChecked = (e) => { 
    setiCheckold(e.target.checked);        
    alert(icheckold);

    if(icheckold===undefined)
    {
      alert("hola");
    }

    
  };

  return(
      <section>
        <form className="formFilter__container" >         
          <label
            className="switch border-botton-formfilter"
            
            onClick={_iChecked}
          >
            Option 0
            <input type="radio" name="r1"  value="Option0"/>
            <span className="slider round"></span>
          </label>

          <label className="form-control border-botton-formfilter">
            <input
              type="radio"
              name="r1"
              value="Option1"      
                    
              onClick={_iChecked}
            />
            Option 1
          </label>

          <label className="form-control border-botton-formfilter">
            <input
              type="radio"
              value="Option2"
              name="r1"
              onClick={_iChecked}
            />
            Option 2
          </label>

          <label className="form-control">
            <input
              type="radio"
              value="Option3"
              name="r1"
              onClick={_iChecked}
            />
            Option 3
          </label>
        </form>
        <br />
        <div>Selected option is : </div>
        <br />
        <Button
          hovertxtcolor="yellow"
          type="submit"
          bgcolor="red"
          txtcolor="white"
        >
          Enviar
        </Button>
      </section>
    );  
};

export default FormFilterEjm2;