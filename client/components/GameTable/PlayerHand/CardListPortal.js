import React, {Component} from 'react'
import {Button, Grid, Header, Segment, Portal, Image} from 'semantic-ui-react'

class CardListPortal extends Component {
  state = {open: false}

  handleClick = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    const {open} = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Button
            content="Card Lists"
            negative={open}
            positive={!open}
            onClick={this.handleClick}
          />

          <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: '15%',
                position: 'fixed',
                top: '5%',
                zIndex: 1000
              }}
            >
              <Header as="h2" textAlign="center">
                Card Lists and Chains
              </Header>
              <Image src="/img/cardlists.png" size="massive" />
            </Segment>
          </Portal>
        </Grid.Column>
      </Grid>
    )
  }
}
export default CardListPortal
