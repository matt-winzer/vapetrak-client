import React from 'react'
import { Table } from 'semantic-ui-react'

const RecipeRow = ({ label, percentage, volume, grams }) => (
  <Table.Row>
    <Table.Cell>{ label }</Table.Cell>
    <Table.Cell>{ !isNaN(percentage) ? percentage : '--' }</Table.Cell>
    <Table.Cell>{ !isNaN(volume) ? volume : '0.00'  }</Table.Cell>
    <Table.Cell>{ grams }</Table.Cell>
  </Table.Row>
)

export default RecipeRow