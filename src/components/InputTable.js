import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Input from './Input'


class InputTable extends Component {
  state = {
    nicotine_strength: 100,
    vg: 70
  }

  handleChange = (e) => {
    const key = e.target.name
    const value = Number(e.target.value)
    console.log(this.state)
    
    this.setState({
      [key]: value
    })
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
              <Table.Cell><Input name={'nicotine_strength'} value={this.state.nicotine_strength} handleChange={this.handleChange} /> mg/ml</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Vegetable Glycerin</Table.Cell>
                <Table.Cell>{this.state.vg}%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Propylene Glycol</Table.Cell>
                <Table.Cell>{100 - this.state.vg}%</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </div>
    )
  }
}

export default InputTable



