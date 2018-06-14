import React from 'react'
import { Container, Message } from 'semantic-ui-react'
import './Error.css'


const ErrorMessage = (props) => (
  <Container>
    <Message className="error-message" error header={props.errorMessage} />
  </Container>
)

export default ErrorMessage