import React from "react";

///////// à default de relier le back au front (ou le front au back) je simule des datas

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
        <Villages /* tentative de PROPS */
          Idpr={this.state.id}
          Namepr={this.state.name}
          PostCodepr={this.state.postCode}
        />
      </div>
    );
  }
}
