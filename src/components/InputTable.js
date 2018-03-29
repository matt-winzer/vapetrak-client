import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from './NumberInput'


class InputTable extends Component {
  state = {
    nicotineStrength: 100,
    vg: 50,
    error: false,
    errorMessage: 'Please enter a number between 1 and 100',
    volume: 30
  }

  handleRatioChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    if (this.validRatioInput(value)) {
      this.clearError()
      this.setState({
        [key]: value
      })
    } else this.throwError('first test')
      
    console.log(this.state)
  }

  handleNumberChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    if (this.isNumber(value)) {
      this.clearError()
      this.setState({
        [key]: value
      })
    } else this.throwError('test error')

    console.log(this.state)
  }

  throwError = (message) => this.setState({ error: true, errorMessage: message })
  clearError = () => this.setState({ error: false })
  validRatioInput = (input) => this.isNumber(input) && this.isLessThan100(input)
  isNumber = (input) => !isNaN(input)
  isLessThan100 = (input) => input <= 100 

  render() {
    return (
      <div className="NumberInput-Table">
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
              <Table.Cell><NumberInput  name={'nicotineStrength'}
                                        value={this.state.nicotineStrength}
                                        handleChange={this.handleRatioChange}
                                        label={'mg/ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vegetable Glycerin</Table.Cell>
              <Table.Cell><NumberInput  name={'vg'} 
                                        value={this.state.vg} 
                                        handleChange={this.handleRatioChange}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Propylene Glycol</Table.Cell>
              <Table.Cell><NumberInput  name={'pg'}
                                        disabled
                                        value={(100 - this.state.vg)}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Propylene Glycol</Table.Cell>
              <Table.Cell><NumberInput  name={'volume'}
                                        value={this.state.volume}
                                        handleChange={this.handleNumberChange}
                                        label={'ml'} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default InputTable



