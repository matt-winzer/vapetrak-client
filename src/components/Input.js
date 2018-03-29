import React from 'react'
import { Input } from 'semantic-ui-react'

const SetupInput = (props) => (
  !props.disabled ? <Input value={props.value} name={props.name} onChange={props.handleChange} label={props.label} labelPosition={'right'} /> : <Input disabled value={props.value} name={props.name} label={props.label} labelPosition={'right'} />
)

export default SetupInput