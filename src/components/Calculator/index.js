import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import NicotineTable from './NicotineTable'
import JuiceTable from './JuiceTable'
import ErrorMessage from './ErrorMessage'


class Calculator extends Component {
  state = {
    nicotineStrength: 50,
    nicotineVg: 50,
    error: false,
    errorMessage: 'Please enter a number',
    juiceVolume: 30,
    juiceStrength: 3,
    juiceVg: 70,
  }

  handleRatioChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    if (this.validRatioInput(value)) {
      this.clearError()
      this.setState({
        [key]: Number(value)
      })
    } else this.throwError('Please enter a number between 0 and 100.')
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
  }

  throwError = (message) => this.setState({ error: true, errorMessage: message })
  clearError = () => this.setState({ error: false })
  validRatioInput = (input) => this.isNumber(input) && this.isLessThan100(input)
  isNumber = (input) => !isNaN(input)
  isLessThan100 = (input) => input <= 100

  render() {
    return (
      <div className="Calculator">
        {this.state.error && <ErrorMessage errorMessage={this.state.errorMessage} />}
        <Grid padded columns={2}>
          <Grid.Column>

              <JuiceTable juiceVolume={this.state.juiceVolume}
                juiceStrength={this.state.juiceStrength}
                juiceVg={this.state.juiceVg}
                handleRatioChange={this.handleRatioChange}
                handleNumberChange={this.handleNumberChange}
                clearError={this.clearError} />

              <NicotineTable nicotineStrength={this.state.nicotineStrength}
                nicotineVg={this.state.nicotineVg}
                handleRatioChange={this.handleRatioChange}
                handleNumberChange={this.handleNumberChange}
                clearError={this.clearError} />
            
          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Calculator
