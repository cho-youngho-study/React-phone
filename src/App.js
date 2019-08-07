import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;

  state = {
    information: []
  };
  handleCreate = data => {
    this.setState({
      information: this.state.information.concat({
        id: this.id++,
        name: data.name,
        phone: data.phone
      })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            name: data.name,
            phone: data.phone
          };
        }
        return info;
      })
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          data={this.state.information}
        />
      </div>
    );
  }
}

export default App;
