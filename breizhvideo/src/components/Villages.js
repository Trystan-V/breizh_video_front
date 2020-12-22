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
              <td>Nantes</td>
              <td>44200</td>
              <td></td>
            </tr>
            <tr>
              <td>Carquefou</td>
              <td>44470</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
