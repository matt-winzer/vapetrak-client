import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from './NumberInput'


class JuiceTable extends Component {
  state = {
    juiceVolume: 30,
    juiceStrength: 3,
    juiceVg: 70,
    error: false,
    errorMessage: 'Please enter a valid number',
  }

  handleRatioChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    if (this.validRatioInput(value)) {
      this.clearError()
      this.setState({
        [key]: Number(value)
      })
    } else this.throwError('Please enter a number between 0 and 100')

    console.log(this.state)
  }

  handleNumberChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    if (this.isNumber(value)) {
      this.clearError()
      this.setState({
        [key]: Number(value)
      })
    } else this.throwError('Please enter a valid number.')

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
        <Table color={'green'} columns={2}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>{!this.state.error ? 'Juice Setup' : <Message error header={this.state.errorMessage} />}</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Volume to Make</Table.Cell>
              <Table.Cell><NumberInput name={'juiceVolume'}
                value={this.state.juiceVolume}
                handleChange={this.handleNumberChange}
                label={'ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Juice: Strength</Table.Cell>
              <Table.Cell><NumberInput name={'juiceStrength'}
                value={this.state.juiceStrength}
                handleChange={this.handleRatioChange}
                label={'mg/ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Juice: VG</Table.Cell>
              <Table.Cell><NumberInput name={'juiceVg'}
                value={this.state.juiceVg}
                handleChange={this.handleRatioChange}
                label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Juice: PG</Table.Cell>
              <Table.Cell><NumberInput name={'pg'}
                disabled
                value={(100 - this.state.juiceVg)}
                label={'%'} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default JuiceTable



            // <Table.Row>
            //   <Table.Cell>Overall Volume</Table.Cell>
            //   <Table.Cell><NumberInput  name={'volume'}
            //                             value={this.state.volume}
            //                             handleChange={this.handleNumberChange}
            //                             label={'ml'} /></Table.Cell>
            // </Table.Row>