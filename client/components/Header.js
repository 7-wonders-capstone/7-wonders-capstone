import React from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="logo">7 Wonders</h1>
        <nav>
          {this.props.auth.isEmpty ? (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          ) : (
            <div>
              <Link to="/lobby">Lobby</Link>
              <Link to="/">
                <a onClick={() => firebase.auth().signOut()}>Log Out</a>
              </Link>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Header)
