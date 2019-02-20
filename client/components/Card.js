/*eslint-disable complexity */
import React from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../store/selectedCard'
import {Button} from 'semantic-ui-react'
import TradeModal from './TradeModal'
import checkTrading from '../../gameLogic/checkTrading'
import {selectAction} from '../store/selectedAction'
import {playCard} from '../store/playCard'
import checkWonderLevelOneTrading from '../../gameLogic/checkWonderLevelOneTrading'
import checkWonderLevelTwoTrading from '../../gameLogic/checkWonderLevelTwoTrading'
import checkWonderLevelThreeTrading from '../../gameLogic/checkWonderLevelThreeTrading'

class Card extends React.Component {
  render() {
    const canPlay = this.props.canPlay
    const canPlayWonder = this.props.canPlayWonder
    const selected =
      this.props.card.name === this.props.selectedCard.name &&
      this.props.card.numPlayers === this.props.selectedCard.numPlayers
    const style = selected ? 'card-selected' : 'card'
    console.log('Card props: ', this.props)

    const playWonder = () => {
      if (this.props.me.latestWonder === 0) {
        let wonderCard = JSON.parse(
          JSON.stringify(this.props.me.board.levelone)
        )
        wonderCard.sacrificeName = this.props.card.name
        wonderCard.sacrificeNumber = this.props.card.numPlayers
        this.props.playCard(wonderCard)
      } else if (this.props.me.latestWonder === 1) {
        let wonderCard = JSON.parse(
          JSON.stringify(this.props.me.board.leveltwo)
        )
        wonderCard.sacrificeName = this.props.card.name
        wonderCard.sacrificeNumber = this.props.card.numPlayers
        this.props.playCard(wonderCard)
      } else if (this.props.me.latestWonder === 2) {
        let wonderCard = JSON.parse(
          JSON.stringify(this.props.me.board.levelthree)
        )
        wonderCard.sacrificeName = this.props.card.name
        wonderCard.sacrificeNumber = this.props.card.numPlayers
        this.props.playCard(wonderCard)
      }

      this.props.preparePlay(this.props.me.email)

      this.props.selectAction('play')
    }

    return (
      <div className={style}>
        <img
          src={this.props.card.imageURL}
          className="card-image"
          onClick={() => this.props.selectCard(this.props.card)}
        />
        {selected && (
          <div className="card-buttons">
            {this.props.selectedCard.costs &&
              checkTrading(
                this.props.me,
                this.props.selectedCard,
                this.props.players
              ) &&
              typeof this.props.selectedCard.costs[0] !== 'number' &&
              !canPlay && <TradeModal {...this.props} />}
            {canPlay && (
              <Button
                content="Play"
                disabled={this.props.selectedAction !== ''}
                size="small"
                onClick={() => {
                  this.props.preparePlay(this.props.me.email)
                  this.props.selectAction('play')
                  this.props.playCard(this.props.selectedCard)
                }}
              />
            )}
            <Button
              content="Discard"
              disabled={this.props.selectedAction !== ''}
              size="small"
              onClick={() => {
                this.props.preparePlay(this.props.me.email)
                this.props.selectAction('discard')
                this.props.playCard(this.props.selectedCard)
              }}
            />
            {canPlayWonder && (
              <Button
                content="Build Wonder"
                size="small"
                disabled={this.props.selectedAction !== ''}
                onClick={playWonder}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard,
    selectedAction: state.selectedAction,
    playedCard: state.playedCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCard: card => dispatch(selectCard(card)),
    selectAction: action => dispatch(selectAction(action)),
    playCard: card => dispatch(playCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
