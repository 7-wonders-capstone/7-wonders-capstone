import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class GameRoomSnapshot extends React.Component {
  render() {
    console.log('GameRoomSnapshot props: ', this.props)
    return (
      <div className="gameroom-snapshot">
        <Link to={`/games/${this.props.game.id}`}>
          <Card>
            <Card.Header>{this.props.game.id}</Card.Header>
            <Card.Content>{this.props.players.length} Players</Card.Content>
          </Card>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    players: state.firestore.ordered[`games/${props.game.id}/players`]
      ? state.firestore.ordered[`games/${props.game.id}/players`]
      : []
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: `games/${props.game.id}/players`
      }
    ]
  })
)(GameRoomSnapshot)
