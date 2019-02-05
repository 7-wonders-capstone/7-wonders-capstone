import React from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../store/selectedCard'
import {Button} from 'semantic-ui-react'
import playCard from '../../cardGenerator/checkCardPlay'
import TradeModal from './TradeModal'
// import {playWonderCard} from '../../cardGenerator/checkWonderCardPlay'

class Card extends React.Component {
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
            {this.props.selectedCard.costs &&
              typeof this.props.selectedCard.costs[0] !== 'number' && (
                <TradeModal {...this.props} />
              )}
            <Button
              content="Play"
              size="small"
              onClick={this.props.preparePlay}
              disabled={!playCard(this.props.me, this.props.card)}
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
