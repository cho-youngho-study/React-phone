import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
  };
  render() {
    return (
      <div>
        <h1>PhoneForm</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="이름"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <button type="submit">확인</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
