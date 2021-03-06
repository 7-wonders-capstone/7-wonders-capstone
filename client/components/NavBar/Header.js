import React from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import QuitGame from './QuitGame'
import {Button, Modal} from 'semantic-ui-react'
import LogInModal from '../WelcomePage/LogInModal'
import SignUpModal from '../WelcomePage/SignUpModal'

class NavBar extends React.Component {
  render() {
    const {user} = this.props

    return (
      <div className="navbar">
        <h1 className="logo">7 Wonders</h1>
        <nav>
          {this.props.auth.isEmpty ? (
            <div>
              <Modal
                trigger={
                  <Button inverted color="teal">
                    Log In
                  </Button>
                }
                centered={false}
              >
                <LogInModal />
              </Modal>
              <Modal
                trigger={
                  <Button inverted color="teal">
                    Sign Up
                  </Button>
                }
              >
                <SignUpModal />
              </Modal>
            </div>
          ) : (
            <div>
              {user.usersGameStarted ? (
                <QuitGame className="exit-game-btn" {...this.props} />
              ) : (
                <div>
                  <a href="/" onClick={() => firebase.auth().signOut()}>
                    Log Out
                  </a>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.ordered.users?.[0] || {},
    gameId: state.firestore.ordered.users
      ? state.firestore.ordered.users[0].inGameRoom
      : null
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: 'users',
        doc: props.auth.email
      }
    ]
  })
)(NavBar)
