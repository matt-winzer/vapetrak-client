import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from '../NumberInput'


class Recipe extends Component {

  render() {
    return (
      <div className="NumberInput-Table">
        <Table compact color={'purple'} columns={4}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Final Recipe' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Ratios' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Volume' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Weight' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Nicotine - Strength</Table.Cell>
              <Table.Cell>
                <NumberInput 
                  name={'nicotineStrength'}
                  clearError={this.props.clearError}
                  value={this.props.nicotineStrength}
                  handleChange={this.props.handleRatioChange}
                  label={'mg/ml'}/>

              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Nicotine - VG</Table.Cell>
              <Table.Cell>
                <NumberInput
                  name={'nicotineVg'}
                  clearError={this.props.clearError}
                  value={this.props.nicotineVg}
                  handleChange={this.props.handleRatioChange}
                  label={'%'} />

              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Nicotine - PG</Table.Cell>
              <Table.Cell><NumberInput name={'pg'}
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

export default Recipe