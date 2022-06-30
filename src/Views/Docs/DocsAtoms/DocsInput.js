import React from "react";
// COMPONENTS
import Input from "../../../uiKit/Atoms/Input/Input";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";

const DocsInput = () => {
  return (
    <div>
      <h1>INPUT</h1>
      <br />
      <br />
      <h2>DATE/TIME (Chrome only)</h2>
      <br />
      <div className="grid-responsive-docs">
        <div>
          <h4>TYPE: date</h4>
          <br />
          <Input labeltext="date" type="date" icon="fa-solid:calendar-alt" />
        </div>
        <div>
          <h4>TYPE: time</h4>
          <br />
          <Input labeltext="time" type="time" icon="icon-park-solid:time"/>
        </div>
        <div>
          <h4>TYPE: datetime-local</h4>
          <br />
          <Input labeltext="datetime-local " type="datetime-local" icon="fa-solid:calendar-alt" />
        </div>
        <div>
          <h4>TYPE: month</h4>
          <br />
          <Input labeltext="month" type="month" icon="fa-solid:calendar-alt" />
        </div>
        <div>
          <h4>TYPE: week</h4>
          <br />
          <Input labeltext="week" type="week" icon="fa-solid:calendar-alt" />
        </div>
      </div>
      <br />
      <h2>TEXT</h2>
      <br />
      <div className="grid-responsive-docs">
        <div>
          <h4>TYPE: search</h4>
          <br />
          <Input labeltext="search" results="5" type="search" placeholder="Placeholder"/>
        </div>
        <div>
          <h4>TYPE: text</h4>
          <br />
          <Input labeltext="text" type="text" placeholder="Placeholder"/>
        </div>
        <div>
          <h4>TYPE: url</h4>
          <br />
          <Input labeltext="url" type="url" placeholder="Placeholder"/>
        </div>
        <div>
          <h4>TYPE: email</h4>
          <br />
          <Input labeltext="email" type="email" placeholder="Placeholder"/>
        </div>
      </div>
      <br />
      <h2>NUMERIC</h2>
      <br />
      <div className="grid-responsive-docs">
        <div>
          <h4>TYPE: number</h4>
          <br />
          <Input labeltext="number" type="number" placeholder="Placeholder"/>
        </div>
        <div>
          <h4>TYPE: range</h4>
          <br />
          <Input labeltext="range" type="range" />
        </div>
        <div>
          <h4>TYPE: tel</h4>
          <br />
          <Input labeltext="tel" type="tel" placeholder="Placeholder"/>
        </div>
      </div>

      <br />
      <h2>BUTTON</h2>
      <br />
      <div className="grid-responsive-docs">
      <div>
          <h4>TYPE: RADIO BUTTONS</h4>
          <br />
          <RadioBtn text="Radio Button" />
        </div>
        <div>
          <h4>TYPE: SWITCH BUTTONS</h4>
          <br />
          <SwitchBtn text="Switch Button" />
        </div>
        <div>
          <h4>TYPE: BUTTON</h4>
          <br />
          <Input labeltext="button" type="button" />
        </div>
        <div>
          <h4>TYPE: color</h4>
          <br />
          <Input labeltext="color" type="color" />
        </div>
        <div>
          <h4>TYPE: file</h4>
          <br />
          <Input labeltext="file" type="file" />
        </div>
        <div>
          <h4>TYPE: submit</h4>
          <br />
          <Input labeltext="submit" type="submit" />
        </div>
      </div>
      <br />
      <h2>OTHER</h2>
      <br />
      <div className="grid-responsive-docs">
        <div>
          <h4>TYPE: hidden</h4>
          <br />
          <Input labeltext="hidden" type="hidden" />
        </div>
        <div>
          <h4>TYPE: image</h4>
          <br />
          <Input labeltext="image" type="image" src="" />
        </div>
        <div>
          <h4>TYPE: password</h4>
          <br />
          <Input labeltext="password" type="password" placeholder="Placeholder"/>
        </div>
        <div>
          <h4>TYPE: reset</h4>
          <br />
          <Input labeltext="reset" type="reset" />
        </div>
      </div>
    </div>
  );
};

export default DocsInput;
