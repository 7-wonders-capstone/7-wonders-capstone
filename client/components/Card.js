/*eslint-disable complexity */
import React from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../store/selectedCard'
import {Button} from 'semantic-ui-react'
import TradeModal from './TradeModal'
import checkTrading from '../../cardGenerator/checkTrading'
import {selectAction} from '../store/selectedAction'
import {playCard} from '../store/playCard'

class Card extends React.Component {
  render() {
    const canPlay = this.props.canPlay
    const canPlayWonder = this.props.canPlayWonder
    const selected = this.props.card.name === this.props.selectedCard.name
    const style = selected ? 'card-selected' : 'card'

    const playWonder = () => {
      if (this.props.me.latestWonder === 0) {
        this.props.selectCard(this.props.me.board.levelone)
      } else if (this.props.me.latestWonder === 1) {
        this.props.selectCard(this.props.me.board.leveltwo)
      } else if (this.props.me.latestWonder === 2) {
        this.props.selectCard(this.props.me.board.levelthreee)
      }

      this.props.preparePlay()
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
                  this.props.preparePlay()
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
                this.props.preparePlay()
                this.props.selectAction('discard')
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
    playCard: state.playCard
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
