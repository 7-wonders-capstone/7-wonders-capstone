import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.card.imageURL} className="card-image" />
      </div>
    )
  }
}

export default Card
