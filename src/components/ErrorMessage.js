/* eslint-disable max-len */

import React from 'react'
import { Container, Message } from 'semantic-ui-react'

const ErrorMessage = (props) => (
  <Container>
    <Message error header={props.errorMessage} />
  </Container>
)

export default ErrorMessage