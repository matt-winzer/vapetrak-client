import React from 'react'
import { Input } from 'semantic-ui-react'

const SetupInput = (props) => (
  <Input value={props.value} name={props.name} onChange={props.handleChange}/>
)

export default SetupInput