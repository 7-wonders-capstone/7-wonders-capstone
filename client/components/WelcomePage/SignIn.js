import React from 'react'
import * as firebase from 'firebase'
import {withRouter} from 'react-router-dom'
import {Button, Form, Icon} from 'semantic-ui-react'

class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() =>
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            this.props.gotMe({email: this.state.email})
            this.props.history.push('/lobby')
          })
      )
      .catch(error => console.error(error))
  }

  render() {
    const {email, password} = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
          />
          <Form.Input
            name="password"
            value={password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <Button color="teal" type="submit">
            Sign In<Icon name="right chevron" />
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(SignIn)
