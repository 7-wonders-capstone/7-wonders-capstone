import React from 'react'
import {Image, List, Header} from 'semantic-ui-react'
import {
  neighborsAvailableResources,
  resourcesNeeded
} from '../../tradeModalHelperFuncs'

const TradeItems = props => {
  const {me, players, card} = props
  const neededResourcesFromNeighbors = resourcesNeeded(me, card)
  const [leftPlayer] = players.filter(p => me.leftPlayerNumber === p.number)
  const [rightPlayer] = players.filter(p => me.rightPlayerNumber === p.number)
  const neededLeftPlayerResources = neighborsAvailableResources(
    leftPlayer
  ).filter(resource => neededResourcesFromNeighbors.includes(resource.name))
  const neededRightPlayerResources = neighborsAvailableResources(
    rightPlayer
  ).filter(resource => neededResourcesFromNeighbors.includes(resource.name))

  return (
    <div>
      {neededLeftPlayerResources.length ? (
        <List selection verticalAlign="middle">
          <Header>Left Neighbor</Header>
          {neededLeftPlayerResources.map((resource, idx) => {
            return (
              <List.Item key={idx} onClick={() => console.log('Clicked')}>
                <Image avatar size="mini" src={resource.snapshotURL} />
                <List.Content>
                  <List.Header>{resource.name}</List.Header>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      ) : null}

      {neededRightPlayerResources.length ? (
        <List selection verticalAlign="middle">
          <Header>Right Neighbor</Header>
          {neededRightPlayerResources.map((resource, idx) => {
            return (
              <List.Item
                key={idx}
                onClick={() => console.log('Right neighbor clicked')}
              >
                <Image avatar size="mini" src={resource.snapshotURL} />
                <List.Content>
                  <List.Header>{resource.name}</List.Header>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      ) : null}
    </div>
  )
}

export default TradeItems
