import React, {Component} from 'react'
import {Image} from 'semantic-ui-react'

class Coins extends Component {
  render() {
    return (
      <div>
        <Image
          src="/img/1coin.png"
          avatar
          verticalAlign="top"
          floated="right"
        />
      </div>
    )
  }
}

export default Coins
