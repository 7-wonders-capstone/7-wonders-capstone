import React from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../store/selectedCard'
import {Button} from 'semantic-ui-react'

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
            <Button content="Play" size="small" />
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
