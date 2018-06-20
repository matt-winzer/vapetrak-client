import React from 'react'
import { Container, Message } from 'semantic-ui-react'
import './Error.css'


const ErrorMessage = ({errorMessage}) => (
  <Container>
    <Message className="error-message" error header={errorMessage} />
  </Container>
)

export default ErrorMessage