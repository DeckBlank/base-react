import React, { Component } from "react";
import Button from "../Button/Button";

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
          <label class="form-control">
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Option 1
          </label>

          <label class="form-control">
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Option 2
          </label>

          <label class="form-control">
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
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
