import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

/////// Page Village ////////////

export default class Villages extends Component {
  render() {
    return (
      <div>
        <h1 className="display 3">Villages</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Code postale</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.Namepr}</td>
              <td>{this.props.PostCodepr}</td>
              <td></td>
            </tr>
            <tr>
              <td>Rennes</td>
              <td>35000</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
