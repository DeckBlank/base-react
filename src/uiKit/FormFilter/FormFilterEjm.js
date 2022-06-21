import React, { Component } from "react";
import Button from "../Button/Button";
import SwitchBtn from "../SwitchBtn/SwitchBtn";

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
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <section>
        <form className="formFilter__container" onSubmit={this.formSubmit}>
          <label
            class="switch"
            checked={this.state.selectedOption === "Option0"}
            onChange={this.onValueChange}
          >
            Option 0
            <input type="checkbox" value="Option0" />
            <span class="slider round"></span>
          </label>

          <label class="form-control">
            <input
              type="radio"
              value="Option1"
              checked={this.state.selectedOption === "Option1"}
              onChange={this.onValueChange}
            />
            Option 1
          </label>

          <label class="form-control">
            <input
              type="radio"
              value="Option2"
              checked={this.state.selectedOption === "Option2"}
              onChange={this.onValueChange}
            />
            Option 2
          </label>

          <label class="form-control">
            <input
              type="radio"
              value="Option3"
              checked={this.state.selectedOption === "Option3"}
              onChange={this.onValueChange}
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
