import React, {Component} from 'react'
import {Grid, Segment, Header} from 'semantic-ui-react'
import PlayedCardIcons from './PlayedCardIcons'

class PlayedCards extends Component {
  render() {
    return (
      <Segment>
        <Grid relaxed columns={7}>
          <Grid.Column style={{width: '60px', padding: '14px 15px'}}>
            <Header as="h6">
              Basic Resources
              <PlayedCardIcons iconType="basicResource" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column style={{width: '60px', padding: '14px 15px'}}>
            <Header as="h6">
              Advanced Resources
              <PlayedCardIcons iconType="advancedResource" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column style={{width: '60px', padding: '14px 15px'}}>
            <Header as="h6">
              Science
              <PlayedCardIcons iconType="science" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column style={{width: '60px', padding: '14px 15px'}}>
            <Header as="h6">
              Civilian
              <PlayedCardIcons iconType="civilian" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column style={{width: '85px', padding: '14px 15px'}}>
            <Header as="h6">
              Economic
              <PlayedCardIcons iconType="economic" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column style={{width: '60px', padding: '14px 15px'}}>
            <Header as="h6">
              Military
              <PlayedCardIcons iconType="military" {...this.props} />
            </Header>
          </Grid.Column>
          <Grid.Column style={{width: '60px', padding: '14px 15px'}}>
            <Header as="h6">
              Guild
              <PlayedCardIcons iconType="guild" {...this.props} />
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default PlayedCards
