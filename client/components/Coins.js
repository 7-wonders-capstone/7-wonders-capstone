import React, {Component} from 'react'
import {Header} from 'semantic-ui-react'

class Coins extends Component {
  render() {
    return (
      <div>
        <Header as="h4" textAlign="right">
          <img src="/img/1coin.png" />
          {this.props.coins}
        </Header>
      </div>
    )
  }
}

export default Coins
