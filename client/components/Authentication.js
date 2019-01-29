import React from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'
import SignUp from './SignUp'
import SignIn from './SignIn'

class Authentication extends React.Component {
  render() {
    if (this.props.auth.isEmpty) {
      return (
        <div>
          <SignUp />
          <SignIn />
        </div>
      )
    } else {
      return (
        <div>
          <button type="button" onClick={() => firebase.auth().signOut()}>
            Log Out
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Authentication)
