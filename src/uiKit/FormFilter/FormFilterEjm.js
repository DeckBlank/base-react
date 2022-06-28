import React, { Component } from "react";
import Button from "../Button/Button";
// import RadioBtn from "../RadioBtn/RadioBtn";
// import SwitchBtn from "../SwitchBtn/SwitchBtn";

class FormFilterEjm extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,      
    }    
    );
    console.log(event.target);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <section>
        <form className="formFilter__container" onSubmit={this.formSubmit}>
          {/* <RadioBtn 
          text="Radio Button" 
          type="radio" 
          _onChange={(parametro) => (this.onValueChange(parametro))}
          /> */}
          <label
            className="switch border-bottom-formfilter"
            checked={this.state.selectedOption === "Option0"}
            onChange={this.onValueChange}
            htmlFor="formfilter"
          >
            Option 0
            <input type="checkbox" value="Option0" />
            <span className="slider round"></span>
          </label>

          <label className="form-control border-bottom-formfilter">
            <input
              type="radio"
              value="Option1"
              checked={this.state.selectedOption === "Option1"}
              onChange={this.onValueChange}
              htmlFor="formfilter"
            />
            Option 1
          </label>

          <label className="form-control border-bottom-formfilter">
            <input
              type="radio"
              value="Option2"
              checked={this.state.selectedOption === "Option2"}
              onChange={this.onValueChange}
              htmlFor="formfilter"
            />
            Option 2
          </label>

          <label className="form-control">
            <input
              type="radio"
              value="Option3"
              checked={this.state.selectedOption === "Option3"}
              onChange={this.onValueChange}
              htmlFor="formfilter"
            />
            Option 3
          </label>
        </form>
        <br />
        <div>Selected option is : {this.state.selectedOption}</div>
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
  }
}

export default FormFilterEjm;
