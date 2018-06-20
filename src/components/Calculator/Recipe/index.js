import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from '../NumberInput'
import RecipeRow from './RecipeRow'


class Recipe extends Component {

  calculateNicotinePercent = (juiceStrength, nicStrength, juiceVolume) => {
    return ((((juiceStrength / nicStrength) * juiceVolume) / juiceVolume) * 100).toFixed(2)
  }

  render() {
    const { juiceStrength,
            juiceVg,
            juiceVolume,
            nicotineStrength,
            nicotineVg } = this.props

    return (
      <div className="NumberInput-Table">
        <Table color={'purple'} columns={4}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Final Recipe' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Ratio' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Volume' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Weight' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <RecipeRow 
              label={'Nicotine'}
              percentage={this.calculateNicotinePercent(juiceStrength, nicotineStrength, juiceVolume) + '%'} />
            <Table.Row>
              <Table.Cell>Nicotine</Table.Cell>
              <Table.Cell>{'Ratio'}</Table.Cell>
              <Table.Cell>{'Volume'}</Table.Cell>
              <Table.Cell>{'Grams'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vegetable Glycerin</Table.Cell>
              <Table.Cell>{'Ratio'}</Table.Cell>
              <Table.Cell>{'Volume'}</Table.Cell>
              <Table.Cell>{'Grams'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Propylene Glycol</Table.Cell>
              <Table.Cell>{'Ratio'}</Table.Cell>
              <Table.Cell>{'Volume'}</Table.Cell>
              <Table.Cell>{'Grams'}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Recipe