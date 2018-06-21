import React, { Component } from 'react'
import { Table, Message } from 'semantic-ui-react'
import NumberInput from '../NumberInput'
import RecipeRow from './RecipeRow'


class Recipe extends Component {

  calculateNicotinePercent = (juiceStrength, nicStrength, juiceVolume) => ( (((juiceStrength / nicStrength) * juiceVolume) / juiceVolume) * 100 )

  calculateVolumeFromPercent = (totalVolume, liquidPercent) => {
    return (liquidPercent / 100) * totalVolume
  }

  calculatePercentFromVolume = (totalVolume, liquidVolume) => ( (liquidVolume / totalVolume) * 100 )

  calculateVgVolume = (totalVolume, nicVolume, nicVgPercent, juiceVgPercent) => {
    const nicVgVolume = nicVolume * (nicVgPercent / 100)
    const totalVgVolumeTarget = totalVolume * (juiceVgPercent / 100)
    return totalVgVolumeTarget - nicVgVolume
  }

  calculatePgVolume = (totalVolume, nicVolume, nicPgPercent, juicePgPercent) => {
    const nicVgVolume = nicVolume * (nicPgPercent / 100)
    const totalVgVolumeTarget = totalVolume * (juicePgPercent / 100)
    return totalVgVolumeTarget - nicVgVolume
  }

  render() {
    const {
      juiceStrength,
      juiceVg,
      juiceVolume,
      nicotineStrength,
      nicotineVg } = this.props
    
    console.log(nicotineVg, 'NIC VG')

    const juicePg = 100 - juiceVg
    const nicotinePg = 100 - nicotineVg
    const nicotinePercent = this.calculateNicotinePercent(juiceStrength, nicotineStrength, juiceVolume)
    const nicotineVolume = this.calculateVolumeFromPercent(juiceVolume, nicotinePercent)

    const totalVolumeMinusNicotine = juiceVolume - nicotineVolume

    const vgVolume = this.calculateVgVolume(juiceVolume, nicotineVolume, nicotineVg, juiceVg)
    const vgPercent = this.calculatePercentFromVolume(totalVolumeMinusNicotine, vgVolume)
    const pgVolume = this.calculatePgVolume(juiceVolume, nicotineVolume, nicotinePg, juicePg)
    const pgPercent = this.calculatePercentFromVolume(totalVolumeMinusNicotine, pgVolume)



    return (
      <div className="NumberInput-Table">
        <Table color={'purple'} columns={4}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={1}>Final Recipe</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>Percentage</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>Volume (ml)</Table.HeaderCell>
              <Table.HeaderCell colSpan={1}>Weight (g)</Table.HeaderCell>
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