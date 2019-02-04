import React, {Component} from 'react'
import {Message, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'

class QuitMessage extends Component {
  handleClick = () => {
    this.props.firestore.update(
      {
        collection: 'users',
        doc: this.props.user.email
      },
      {
        activeGameAbandonded: false
      }
    )

    this.props.history.push('/lobby')
  }

  render() {
    return (
      <div>
        <div>
          <Message>
            <Message.Header style={{marginBottom: '25px'}}>
              We appologize, but a user has quit the game. Please click here to
              return to the lobby.
            </Message.Header>
            <Button onClick={this.handleClick}>LOBBY</Button>
          </Message>
        </div>
      </div>
    )
  }
}

export default withRouter(firestoreConnect()(QuitMessage))
