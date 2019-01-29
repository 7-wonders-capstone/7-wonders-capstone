import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import GameRoom from './components/GameRoom'
import Lobby from './components/Lobby'
import Authentication from './components/Authentication'

class GameRoutes extends React.Component {
  render() {
    return (
      <Switch>
        {!this.props.auth.isEmpty && (
          <Switch>
            <Route path="/lobby" component={Lobby} />
            <Route path="/games/:gameId" component={GameRoom} />
          </Switch>
        )}
        <Route component={Authentication} />
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
