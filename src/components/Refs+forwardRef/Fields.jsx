import React, { Component } from "react";
import { InputCommp } from "./InputComp";
import Input from "./withForwardRef";

class Fields extends Component {
  constructor(props) {
    super(props);
    this.refBoy = React.createRef();
  }

  onSubmit = () => {
    alert(`yey submited! ${this.firstName.value}, ${this.lastName.value} `);
  };
  check = () => {
    const node = this.refBoy.current;
    console.log(node);
  };
  componentDidMount() {
    this.check();
  }

  handleKey = (inputType, e) => {
    if (e.keyCode === 13) {
      // eslint-disable-next-line default-case
      switch (inputType) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.password.focus();
          break;
        case "password":
          this.city.focus();
          console.log(this.city);
          break;
        case "city":
          this.button.focus();
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span>First Name : </span>
          <input
            type="text"
            ref={input => (this.firstName = input)}
            onKeyUp={this.handleKey.bind(this, "firstName")}
          />
          <br />
          <span>last name : </span>
          <input
            type="text"
            ref={input => (this.lastName = input)}
            onKeyUp={this.handleKey.bind(this, "lastName")}
          />{" "}
          <br />
          <span>Password : </span>
          <input
            type="password"
            ref={input => (this.password = input)}
            onKeyUp={this.handleKey.bind(this, "password")}
          />{" "}
          <br />
          <InputCommp />
          <br />
          <input
            ref={input => (this.button = input)}
            value="submit"
            onClick={this.onSubmit}
            type="submit"
          />
          <br />
          <br />
          <br />
          <span>Using forward ref </span>
          {/* this is the nested element(or component) so we can access its properties by using ref (first ofcrse pass the ref prop to it) */}
          {/* now we are accesing the full component by using ref */}
          <Input
            ref={input => (this.city = input)}
            onKeyUp={this.handleKey.bind(this, "city")}
          />
          <br />
          <br />
          <br />
          <div ref={this.refBoy}>
            <input type="text" name="name" />
            <input type="text" name="email" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Fields;
