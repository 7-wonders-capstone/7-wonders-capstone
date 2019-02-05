import React from 'react'
import {List, Header} from 'semantic-ui-react'
import {
  neighborsAvailableResources,
  resourcesNeeded
} from '../../tradeModalHelperFuncs'
import TradeItem from './TradeItem'

const TradeItems = props => {
  const {me, players, card} = props
  const neededResourcesFromNeighbors = resourcesNeeded(me, card)
  const [leftPlayer] = players.filter(p => me.leftPlayerNumber === p.number)
  const [rightPlayer] = players.filter(p => me.rightPlayerNumber === p.number)
  const neededLeftPlayerResources = neighborsAvailableResources(
    leftPlayer
  ).filter(resource => {
    return neededResourcesFromNeighbors.some(elem =>
      resource.name.includes(elem)
    )
  })
  const neededRightPlayerResources = neighborsAvailableResources(
    rightPlayer
  ).filter(resource => {
    return neededResourcesFromNeighbors.some(elem =>
      resource.name.includes(elem)
    )
  })

  return (
    <div>
      {neededLeftPlayerResources.length ? (
        <List selection verticalAlign="middle">
          <Header>Left Neighbor</Header>
          {neededLeftPlayerResources.map((resource, idx) => {
            return <TradeItem key={idx} resource={resource} />
          })}
        </List>
      ) : null}

      {neededRightPlayerResources.length ? (
        <List selection verticalAlign="middle">
          <Header>Right Neighbor</Header>
          {neededRightPlayerResources.map((resource, idx) => {
            return <TradeItem key={idx} resource={resource} />
          })}
        </List>
      ) : null}
    </div>
  )
}

export default TradeItems
