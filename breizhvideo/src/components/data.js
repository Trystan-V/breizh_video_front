import React from "react";

export default class Data extends Component {
  state = [
    {
      id: 1,
      name: "Nantes",
      postCode: "44000",
    },
    {
      id: 2,
      name: "Rennes",
      postCode: "44000",
    },
  ];

  render() {
    return (
      <div>
        <Villages /* PROPS */
          Idpr={this.state.id}
          Namepr={this.state.name}
          PostCodepr={this.state.postCode}
        />
      </div>
    );
  }
}
