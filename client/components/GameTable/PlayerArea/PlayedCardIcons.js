import React, {Component} from 'react'
import {Image, Popup} from 'semantic-ui-react'

class PlayedCardIcons extends Component {
  render() {
    const {playedCards, iconType} = this.props

    return (
      <div>
        {playedCards.length
          ? playedCards.filter(card => card.type === iconType).map(card => {
              return (
                <div
                  key={`${card.name}${card.numPlayers}`}
                  className="played-card-container"
                >
                  <Popup
                    trigger={
                      <Image
                        className={`played-card-icon-${iconType}`}
                        src={card.snapshotURL}
                      />
                    }
                    content={<Image src={card.imageURL} />}
                    position="bottom left"
                    hideOnScroll="true"
                  />
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

export default PlayedCardIcons
