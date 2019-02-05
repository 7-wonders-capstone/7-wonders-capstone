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
    const selected = !this.state.selected
    this.setState({selected})
  }

  render() {
    const {resource} = this.props
    return (
      <List.Item
        className={this.state.selected ? 'trade-item-selected' : ''}
        onClick={this.toggleItem}
      >
        <Image avatar size="mini" src={resource.snapshotURL} />
        <List.Content>
          <List.Header>{resource.name}</List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

export default TradeItem
