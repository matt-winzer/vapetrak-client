import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from './NumberInput'


class JuiceTable extends Component {

  render() {
    return (
      <div className="NumberInput-Table">
        <Table compact color={'green'} columns={2}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>{!this.props.error ? 'Juice Setup' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Volume to Make</Table.Cell>
              <Table.Cell><NumberInput  name={'juiceVolume'}
                                        clearError={this.props.clearError}
                                        value={this.props.juiceVolume}
                                        handleChange={this.props.handleNumberChange}
                                        label={'ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Juice: Strength</Table.Cell>
              <Table.Cell><NumberInput  name={'juiceStrength'}
                                        clearError={this.props.clearError}
                                        value={this.props.juiceStrength}
                                        handleChange={this.props.handleRatioChange}
                                        label={'mg/ml'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Juice: VG</Table.Cell>
              <Table.Cell><NumberInput  name={'juiceVg'}
                                        clearError={this.props.clearError}
                                        value={this.props.juiceVg}
                                        handleChange={this.props.handleRatioChange}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Juice: PG</Table.Cell>
              <Table.Cell><NumberInput  name={'pg'}
                                        clearError={this.props.clearError}
                                        disabled
                                        value={(100 - this.props.juiceVg)}
                                        label={'%'} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default JuiceTable