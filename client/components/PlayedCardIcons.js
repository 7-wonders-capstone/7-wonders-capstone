import React, {Component} from 'react'
import {Image} from 'semantic-ui-react'

class PlayedCardIcons extends Component {
  render() {
    const {playedCards, iconType} = this.props
    return (
      <div>
        {playedCards.length
          ? playedCards.filter(card => card.type === iconType).map(card => {
              return (
                <div key={`${card.name}${card.numPlayers}`}>
                  <Image src={card.snapshotURL} />
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

export default PlayedCardIcons
