import React from 'react'
import { Table } from 'semantic-ui-react'

const RecipeRow = ({ label, percentage, volume, grams }) => (
  <Table.Row>
    <Table.Cell>{ label }</Table.Cell>
    <Table.Cell>{ percentage }</Table.Cell>
    <Table.Cell>{ volume }</Table.Cell>
    <Table.Cell>{ grams }</Table.Cell>
  </Table.Row>
)

export default RecipeRow