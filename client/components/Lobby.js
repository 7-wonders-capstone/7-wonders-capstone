import React from 'react'
import {Button} from 'semantic-ui-react'
import {firestoreConnect} from 'react-redux-firebase'

class Lobby extends React.Component {
  render() {
    return (
      <div>
        <Button
          content="Create Game"
          onClick={() => this.props.firestore.add({collection: 'Games'}, {})}
        />
      </div>
    )
  }
}

export default firestoreConnect()(Lobby)
