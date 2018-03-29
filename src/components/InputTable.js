import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import Input from './Input'


class InputTable extends Component {
  state = {
    nicotineStrength: 100,
    vg: 50,
    error: false,
    errorMessage: 'Please enter a number between 1 and 100'
  }

  handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    if (this.validInput(value)) {
      this.clearError()
      this.setState({
        [key]: value
      })
    } else this.throwError()
      
      
    console.log(this.state)
  }

  throwError = () => this.setState({ error: true })

  clearError = () => this.setState({ error: false })

  validInput = (input) => this.isNumber(input) && this.isLessThan100(input)

  isNumber = (input) => !isNaN(input)
  
  isLessThan100 = (input) => input <= 100 

  render() {
    return (
      <div className="Input-Table">
        <Table color={'red'} columns={2}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{!this.state.error ? 'Setup' : <Message error header={this.state.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Nicotine Strength</Table.Cell>
              <Table.Cell><Input  name={'nicotineStrength'}
                                  value={this.state.nicotineStrength}
                                  handleChange={this.handleChange}
                                  label={'mg/ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vegetable Glycerin</Table.Cell>
              <Table.Cell><Input  name={'vg'} 
                                  value={this.state.vg} 
                                  handleChange={this.handleChange}
                                  label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Propylene Glycol</Table.Cell>
              <Table.Cell><Input  name={'pg'}
                                  disabled
                                  value={(100 - this.state.vg)}
                                  label={'%'} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default InputTable



