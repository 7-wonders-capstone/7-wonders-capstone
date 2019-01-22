import React from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../store/selectedCard'
import {Button} from 'semantic-ui-react'
const playerUpdater = require('../../playerUpdater')

class Card extends React.Component {
  componentDidUpdate() {
    if (this.props.readyToPlay === this.props.numPlayers) {
      console.log(this.props.me)
      //let playerCopy = Object.assign( {}, this.props.me)
      let playerCopy = JSON.parse(JSON.stringify(this.props.me))
      console.log(playerCopy)
      console.log(playerCopy === this.props.me)
      let updatedPlayer = playerUpdater(
        playerCopy,
        this.props.players,
        this.props.selectedCard
      )
      console.log(updatedPlayer)
      this.props.updatePlayerInStore(updatedPlayer)
      this.props.resetPlay()
    } else {
      console.log('NOT READY TO PLAY YET')
    }
  }

  render() {
    const selected = this.props.card.name === this.props.selectedCard.name
    const style = selected ? 'card-selected' : 'card'

    return (
      <div className={style}>
        <img
          src={this.props.card.imageURL}
          className="card-image"
          onClick={() => this.props.selectCard(this.props.card)}
        />
        {selected && (
          <div className="card-buttons">
            <Button
              content="Play"
              size="small"
              onClick={this.props.preparePlay}
            />
            <Button content="Discard" size="small" />
            <Button content="Build Wonder" size="small" />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCard: card => dispatch(selectCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
