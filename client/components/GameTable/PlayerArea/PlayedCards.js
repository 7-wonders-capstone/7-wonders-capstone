import React, {Component} from 'react'
import {Grid, Segment, Header} from 'semantic-ui-react'
import PlayedCardIcons from './PlayedCardIcons'

class PlayedCards extends Component {
  render() {
    return (
      <Segment>
        <Grid relaxed centered columns={7}>
          <Grid.Column
            style={{
              textAlign: 'center',
              width: '64px',
              padding: '14px 0px 0px 0px'
            }}
          >
            <Header as="h6">
              Basic<br />Resources
              <PlayedCardIcons iconType="basicResource" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column
            style={{textAlign: 'center', width: '55px', padding: '14px 0px'}}
          >
            <Header as="h6">
              Advanced Resources
              <PlayedCardIcons iconType="advancedResource" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column
            style={{textAlign: 'center', width: '52px', padding: '14px 0px'}}
          >
            <Header as="h6">
              Science<br />
              <br />
              <PlayedCardIcons iconType="science" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column
            style={{textAlign: 'center', width: '52px', padding: '14px 0px'}}
          >
            <Header as="h6">
              Civilian<br />
              <br />
              <PlayedCardIcons iconType="civilian" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column
            style={{textAlign: 'center', width: '80px', padding: '14px 0px'}}
          >
            <Header as="h6">
              Economic<br />
              <br />
              <PlayedCardIcons iconType="economic" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column
            style={{textAlign: 'center', width: '70px', padding: '14px 0px'}}
          >
            <Header as="h6">
              Military<br />
              <br />
              <PlayedCardIcons iconType="military" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column
            style={{
              textAlign: 'center',
              width: '70px',
              padding: '14px 0px 0px 0px'
            }}
          >
            <Header as="h6">
              Guild<br />
              <br />
              <PlayedCardIcons iconType="guild" {...this.props} />
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default PlayedCards
