import React, {Component} from 'react'
import {Button, Modal, Image, Header} from 'semantic-ui-react'
import TradeItems from './TradeItems'
import {resourcesNeeded} from '../../gameLogic/tradeModalHelperFuncs'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {selectAction} from '../store/selectedAction'
import {playCard} from '../store/playCard'

class TradeModal extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      tradeMade: false,
      coins: 0,
      ownTradeCost: 0,
      rightNeighborTradeCost: 0,
      leftNeighborTradeCost: 0,
      resourcesSelected: 0
    }
  }

  setCoins() {
    this.setState({coins: this.props.me.coins})
  }

  trade = direction => {
    this.setState({
      coins: this.state.coins - 2,
      ownTradeCost: this.state.ownTradeCost + 2,
      [`${direction}NeighborTradeCost`]:
        this.state[`${direction}NeighborTradeCost`] - 2,
      resourcesSelected: this.state.resourcesSelected + 1
    })
  }

  unTrade = direction => {
    this.setState({
      coins: this.state.coins + 2,
      ownTradeCost: this.state.ownTradeCost - 2,
      [`${direction}NeighborTradeCost`]:
        this.state[`${direction}NeighborTradeCost`] + 2,
      resourcesSelected: this.state.resourcesSelected - 1
    })
  }

  toggleTradeMade = () => {
    this.setState({tradeMade: !this.state.tradeMade})
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setCoins()
    this.setState({closeOnEscape, closeOnDimmerClick, open: true})
  }

  close = () => this.setState({open: false, tradeMade: false})

  updateFirestoreTradeCost(playerAndNeighbors, gameId) {
    this.props.firestore
      .collection('games')
      .doc(gameId)
      .get()
      .then(result => {
        playerAndNeighbors.forEach(player => {
          const playerKey = player.email.slice(0, -4) + 'TradeCost'
          const updatedTradeCost = result.data()[playerKey] + player.tradeCost
          this.props.firestore.update(
            {
              collection: 'games',
              doc: `${gameId}`
            },
            {[playerKey]: updatedTradeCost}
          )
        })
      })
  }

  render() {
    const {open, closeOnEscape, closeOnDimmerClick} = this.state
    const {selectedCard, me, players, gameId} = this.props
    const arrOfNeededResources = resourcesNeeded(me, selectedCard)
    const [leftPlayer] = players.filter(p => me.leftPlayerNumber === p.number)
    const [rightPlayer] = players.filter(p => me.rightPlayerNumber === p.number)
    const playerAndNeighbors = [
      {email: me.email, tradeCost: this.state.ownTradeCost},
      {email: leftPlayer.email, tradeCost: this.state.leftNeighborTradeCost},
      {email: rightPlayer.email, tradeCost: this.state.rightNeighborTradeCost}
    ]

    return (
      <div>
        <Button
          onClick={this.closeConfigShow(false, false)}
          disabled={this.props.selectedAction !== ''}
        >
          Buy Resources
        </Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Content image>
            <Image wrapped size="medium" src={selectedCard.imageURL} />
            <Modal.Description>
              <Header size="huge">
                Needed Resources: {arrOfNeededResources.join(', ')}
              </Header>
              <TradeItems
                {...this.props}
                leftPlayer={leftPlayer}
                rightPlayer={rightPlayer}
                trade={this.trade}
                unTrade={this.unTrade}
              />
              <Header>Your Coins: {this.state.coins}</Header>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            {!this.state.tradeMade && (
              <Button onClick={this.close} negative>
                Cancel
              </Button>
            )}
            {this.state.tradeMade ? (
              <Button
                onClick={() => {
                  this.close()
                  this.props.preparePlay(this.props.me.email)
                  this.props.selectAction('play')
                  this.props.playCard(selectedCard)
                }}
                positive
              >
                Play Card
              </Button>
            ) : (
              <Button
                onClick={() => {
                  this.toggleTradeMade()
                  this.updateFirestoreTradeCost(playerAndNeighbors, gameId)
                }}
                positive
                //TODO: Only make clickable if player has chosen correct cards, instead of correct number of cards.
                disabled={
                  this.state.resourcesSelected !== arrOfNeededResources.length
                }
              >
                Make Trade
              </Button>
            )}
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedAction: state.selectedAction
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectAction: action => dispatch(selectAction(action)),
    playCard: card => dispatch(playCard(card))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect()
)(TradeModal)
