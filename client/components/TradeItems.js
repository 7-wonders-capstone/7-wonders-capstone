import React from 'react'
import {List, Header} from 'semantic-ui-react'
import {
  neighborsAvailableResources,
  resourcesNeeded
} from '../../gameLogic/tradeModalHelperFuncs'
import TradeItem from './TradeItem'

const TradeItems = props => {
  const {me, card, leftPlayer, rightPlayer} = props
  const neededResourcesFromNeighbors = resourcesNeeded(me, card)
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
            return (
              <TradeItem
                key={idx}
                resource={resource}
                direction="left"
                leftPlayer={leftPlayer}
                trade={props.trade}
                unTrade={props.unTrade}
              />
            )
          })}
        </List>
      ) : null}

      {neededRightPlayerResources.length ? (
        <List selection verticalAlign="middle">
          <Header>Right Neighbor</Header>
          {neededRightPlayerResources.map((resource, idx) => {
            return (
              <TradeItem
                key={idx}
                resource={resource}
                direction="right"
                rightPlayer={rightPlayer}
                trade={props.trade}
                unTrade={props.unTrade}
              />
            )
          })}
        </List>
      ) : null}
    </div>
  )
}

export default TradeItems
