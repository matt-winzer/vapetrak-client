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

  componentDidMount() {
    console.log('NIC TABLE')
    console.log(this.props)
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
              <Table.HeaderCell colSpan={2}>{!this.props.error ? 'Nicotine Setup' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Nicotine: Strength</Table.Cell>
              <Table.Cell><NumberInput  name={'nicotineStrength'}
                                        clearError={this.props.clearError}
                                        value={this.props.nicotineStrength}
                                        handleChange={this.props.handleRatioChange}
                                        label={'mg/ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Nicotine: VG</Table.Cell>
              <Table.Cell><NumberInput  name={'nicotineVg'}
                                        clearError={this.props.clearError}
                                        value={this.props.nicotineVg} 
                                        handleChange={this.props.handleRatioChange}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Nicotine: PG</Table.Cell>
              <Table.Cell><NumberInput  name={'pg'}
                                        clearError={this.props.clearError}
                                        disabled
                                        value={(100 - this.props.nicotineVg)}
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
            //                             value={this.props.volume}
            //                             handleChange={this.handleNumberChange}
            //                             label={'ml'} /></Table.Cell>
            // </Table.Row>