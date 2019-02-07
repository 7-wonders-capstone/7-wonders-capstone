import React, {Component} from 'react'
import {Image, List} from 'semantic-ui-react'

class TradeItem extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  toggleItem = () => {
    this.setState({selected: !this.state.selected})
  }

  render() {
    const {resource, trade, unTrade, direction} = this.props

    return (
      <List.Item
        className={this.state.selected ? 'trade-item-selected' : ''}
        onClick={() => {
          this.toggleItem()
          if (this.state.selected) unTrade(direction)
          else trade(direction)
        }}
      >
        <Image
          avatar
          size={resource.name.includes('/') ? 'tiny' : 'mini'}
          src={resource.snapshotURL}
        />
        <List.Content>
          <List.Header>{resource.name}</List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

export default TradeItem
