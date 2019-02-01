import React from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'
import {Link} from 'react-router-dom'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class Header extends React.Component {
  // logOut = () => {
  //   const {gameId} = this.props
  //   const email = this.props.auth.email

  //   this.props.firestore.delete({
  //     collection: 'games',
  //     doc: gameId,
  //     subcollections: [{collection: `players`, doc: email}]
  //   })

  //   this.props.firestore.update(
  //     {
  //       collection: 'users',
  //       doc: email
  //     },
  //     {inGameRoom: ''}
  //   )

  //   firebase.auth().signOut()
  // }

  render() {
    console.log('Header props: ', this.props)
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
              <a href="/" onClick={() => firebase.auth().signOut()}>
                Log Out
              </a>
              {/* <a href="/" onClick={this.logOut}>
                Log Out
              </a> */}
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
    // gameId: state.firestore.ordered.users ? state.firestore.ordered.users[0].inGameRoom : null
  }
}

// export default compose(connect(mapStateToProps), firestoreConnect())(Header)

export default connect(mapStateToProps)(Header)
