import React from 'react'
import {Image, List} from 'semantic-ui-react'

const TradeItems = () => (
  <List selection verticalAlign="middle">
    <List.Item>
      <Image avatar size="mini" src="/img/snapshot/clay_pool.jpg" />
      <List.Content>
        <List.Header>Helen</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar size="tiny" src="/img/snapshot/clay_pool.jpg" />
      <List.Content>
        <List.Header>Christian</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar size="tiny" src="/img/snapshot/clay_pool.jpg" />
      <List.Content>
        <List.Header>Daniel</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

export default TradeItems
