import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import GameRoom from './components/GameRoom'
import Lobby from './components/Lobby'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

class GameRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {!this.props.auth.isEmpty && (
          <Switch>
            <Route exact path="/" component={Lobby} />
            <Route path="/lobby" component={Lobby} />
            <Route path="/games/:gameId" component={GameRoom} />
          </Switch>
        )}
        <Route component={Welcome} />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default withRouter(connect(mapStateToProps)(GameRoutes))
