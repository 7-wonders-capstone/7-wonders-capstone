import React, {Component} from 'react'
import {Button, Modal, Image, Header} from 'semantic-ui-react'
import TradeItems from './TradeItems'

class TradeModal extends Component {
  state = {open: false}

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({closeOnEscape, closeOnDimmerClick, open: true})
  }

  close = () => this.setState({open: false})

  render() {
    const {open, closeOnEscape, closeOnDimmerClick} = this.state
    const {selectedCard} = this.props

    return (
      <div>
        <Button onClick={this.closeConfigShow(true, true)}>
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
              <Header>Neigbors' Resources Available</Header>
              <TradeItems {...this.props} />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default TradeModal
