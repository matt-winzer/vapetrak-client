import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from './NumberInput'


class NicotineTable extends Component {
  state = {
    nicotineStrength: 100,
    nicotineVg: 50,
    error: false,
    errorMessage: 'Please enter a number between 0 and 100',
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
        <Table color={'red'} columns={2}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{!this.state.error ? 'Nicotine Setup' : <Message error header={this.state.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Nicotine: Strength</Table.Cell>
              <Table.Cell><NumberInput  name={'nicotineStrength'}
                                        value={this.state.nicotineStrength}
                                        handleChange={this.handleRatioChange}
                                        label={'mg/ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Nicotine: VG</Table.Cell>
              <Table.Cell><NumberInput  name={'nicotineVg'} 
                                        value={this.state.nicotineVg} 
                                        handleChange={this.handleRatioChange}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Nicotine: PG</Table.Cell>
              <Table.Cell><NumberInput  name={'pg'}
                                        disabled
                                        value={(100 - this.state.nicotineVg)}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default NicotineTable



            // <Table.Row>
            //   <Table.Cell>Overall Volume</Table.Cell>
            //   <Table.Cell><NumberInput  name={'volume'}
            //                             value={this.state.volume}
            //                             handleChange={this.handleNumberChange}
            //                             label={'ml'} /></Table.Cell>
            // </Table.Row>