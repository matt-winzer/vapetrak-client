import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
// import NumberInput from '../NumberInput'
import RecipeRow from './RecipeRow'


class Recipe extends Component {

  calculateNicotinePercent = (juiceStrength, nicStrength, juiceVolume) => ( (((juiceStrength / nicStrength) * juiceVolume) / juiceVolume) * 100 )
  
  calculateNicotineWeight = (nicVolume, nicVgPercent, nicPgPercent) => {
    const nicVgVolume = (nicVgPercent / 100) * nicVolume
    const nicPgVolume = (nicPgPercent / 100) * nicVolume
    const nicVgWeight = nicVgVolume * 1.26
    const nicPgWeight = nicPgVolume * 1.01
    return nicVgWeight + nicPgWeight
  }

  calculatePgWeight = (pgVolume) => ( pgVolume * 1.01 )
  calculateVgWeight = (vgVolume) => ( vgVolume * 1.26 )
  calculateVolumeFromPercent = (totalVolume, liquidPercent) => ( (liquidPercent / 100) * totalVolume )
  calculatePercentFromVolume = (totalVolume, liquidVolume) => ( (liquidVolume / totalVolume) * 100 )

  calculatePgVgVolume = (totalVolume, nicVolume, nicPgVgPercent, juicePgVgPercent) => {
    const nicPgVgVolume = nicVolume * (nicPgVgPercent / 100)
    const totalPgVgVolumeTarget = totalVolume * (juicePgVgPercent / 100)
    return totalPgVgVolumeTarget - nicPgVgVolume
  }

  render() {
    const {
      juiceStrength,
      juiceVg,
      juiceVolume,
      nicotineStrength,
      nicotineVg } = this.props
    
    const juicePg = 100 - juiceVg
    const nicotinePg = 100 - nicotineVg

    const nicotinePercent = this.calculateNicotinePercent(juiceStrength, nicotineStrength, juiceVolume)
    const nicotineVolume = this.calculateVolumeFromPercent(juiceVolume, nicotinePercent)
    const nicotineWeight = this.calculateNicotineWeight(nicotineVolume, nicotineVg, nicotinePg)

    const vgVolume = this.calculatePgVgVolume(juiceVolume, nicotineVolume, nicotineVg, juiceVg)
    const vgPercent = this.calculatePercentFromVolume(juiceVolume, vgVolume)
    const vgWeight = this.calculateVgWeight(vgVolume)

    const pgVolume = this.calculatePgVgVolume(juiceVolume, nicotineVolume, nicotinePg, juicePg)
    const pgPercent = this.calculatePercentFromVolume(juiceVolume, pgVolume)
    const pgWeight = this.calculatePgWeight(pgVolume)

    return (
      <div className="NumberInput-Table">
        <Table color={'purple'} columns={4}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={1}>Final Recipe</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>Percentage (%)</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>Volume (ml)</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>Weight (g)</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <RecipeRow 
              label={'Nicotine'}
              percentage={nicotinePercent.toFixed(2)}
              volume={nicotineVolume.toFixed(2)}
              grams={nicotineWeight.toFixed(2)}
            />
            <RecipeRow
              label={'Vegetable Glycerin'}
              percentage={vgPercent.toFixed(2)}
              volume={vgVolume.toFixed(2)}
              grams={vgWeight.toFixed(2)}
            />
            <RecipeRow
              label={'Propylene Glycol'}
              percentage={pgPercent.toFixed(2)}
              volume={pgVolume.toFixed(2)}
              grams={pgWeight.toFixed(2)}
            />
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Recipe