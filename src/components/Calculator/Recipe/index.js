import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from '../NumberInput'
import RecipeRow from './RecipeRow'


class Recipe extends Component {

  calculateNicotinePercent = (juiceStrength, nicStrength, juiceVolume) => ((((juiceStrength / nicStrength) * juiceVolume) / juiceVolume) * 100)

  calculateVolume = (totalVolume, liquidPercent) => ((liquidPercent / 100) * totalVolume)

  calculatePercent = () => {

  }

  render() {
    const {
      juiceStrength,
      juiceVg,
      juiceVolume,
      nicotineStrength,
      nicotineVg } = this.props

    const nicotinePercent = this.calculateNicotinePercent(juiceStrength, nicotineStrength, juiceVolume)
    const nicotineVolume = this.calculateVolume(juiceVolume, nicotinePercent)
    const vgVolume = this.calculateVolume(juiceVolume, juiceVg)
    const vgPercent = (vgVolume / juiceVolume) * 100
    const pgVolume = this.calculateVolume(juiceVolume, 100 - juiceVg)
    const pgPercent = (pgVolume / juiceVolume) * 100


    return (
      <div className="NumberInput-Table">
        <Table color={'purple'} columns={4}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Final Recipe' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Percentage' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Volume (ml)' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>{!this.props.error ? 'Weight (g)' : <Message error header={this.props.errorMessage} />}</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <RecipeRow 
              label={'Nicotine'}
              percentage={nicotinePercent.toFixed(2)}
              volume={nicotineVolume.toFixed(2)}
            />
            <RecipeRow
              label={'Vegetable Glycerin'}
              percentage={vgPercent.toFixed(2)}
              volume={vgVolume.toFixed(2)}
            />
            <RecipeRow
              label={'Propylene Glycol'}
              percentage={pgPercent.toFixed(2)}
              volume={pgVolume.toFixed(2)}
            />
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Recipe