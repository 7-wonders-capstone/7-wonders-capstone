import React from 'react'
import * as firebase from 'firebase'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {gotMe} from '../store/me'
import {compose} from 'redux'
import {Form, Button, Modal, Icon, Header} from 'semantic-ui-react'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  open = () => this.setState({open: true})
  close = () => this.setState({open: false})

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const userInDB = this.props.firestore
      .collection('users')
      .doc(`${this.state.email}`)

    userInDB.get().then(user => {
      if (!user.exists) {
        firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() =>
            firebase
              .auth()
              .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
              )
              .then(() => this.props.history.push('/lobby'))
          )

        this.props.firestore
          .collection('users')
          .doc(`${this.state.email}`)
          .set({
            email: this.state.email,
            username: '',
            inGameRoom: '',
            usersGameStarted: false,
            activeGameAbandonded: false
          })
      } else {
        alert('Email is already in use.')
      }
    })
  }

  render() {
    const {email, password, open} = this.state

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
          <Modal
            open={open}
            onOpen={this.open}
            onClose={this.close}
            size="small"
            trigger={
              <Button color="teal" type="submit">
                Sign Up <Icon name="right chevron" />
              </Button>
            }
          >
            <Modal.Header>Account created</Modal.Header>
            <Modal.Content>
              <Header>
                <p>Let's Play!</p>
              </Header>
            </Modal.Content>
          </Modal>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotMe: me => dispatch(gotMe(me))
  }
}

export default withRouter(
  compose(firestoreConnect(), connect(null, mapDispatchToProps))(SignUp)
)
