import React from 'react'
import * as firebase from 'firebase'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {gotMe} from '../store/me'
import {compose} from 'redux'

class SignUp extends React.Component {
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
    const {email, password} = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
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
