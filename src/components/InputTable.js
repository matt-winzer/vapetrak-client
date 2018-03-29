import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'


class InputTable extends Component {
  state = {
    nicotine_strength: 100,
    vg: 70,
    pg: 30
  }

  render() {
    return (
      <div className="Input-Table">
        <p>Hello World</p>
          <Table color={'red'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Setup</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Nicotine Strength</Table.Cell>
                <Table.Cell>100 mg/ml</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Vegetable Glycerin</Table.Cell>
                <Table.Cell>{this.state.vg}%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Propylene Glycol</Table.Cell>
                <Table.Cell>{this.state.pg}%</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </div>
    )
  }
}

export default InputTable



