import React, {Component} from 'react'
import {Grid, Image, Segment, Card} from 'semantic-ui-react'
import PlayedCardIcons from './PlayedCardIcons'

class PlayedCards extends Component {
  render() {
    return (
      <Segment>
        <Grid relaxed columns={7}>
          <Grid.Column>
            <div>
              Basic Resources
              <PlayedCardIcons iconType="basicResource" {...this.props} />
            </div>
          </Grid.Column>
          <Grid.Column>
            Advanced Resources
            <PlayedCardIcons iconType="advancedResource" {...this.props} />
          </Grid.Column>
          <Grid.Column>
            Science
            <PlayedCardIcons iconType="science" {...this.props} />
          </Grid.Column>
          <Grid.Column>
            Civilian
            <PlayedCardIcons iconType="civilian" {...this.props} />
          </Grid.Column>
          <Grid.Column>
            Economic
            <PlayedCardIcons iconType="economic" {...this.props} />
          </Grid.Column>
          <Grid.Column>
            Military
            <PlayedCardIcons iconType="military" {...this.props} />
          </Grid.Column>
          <Grid.Column>
            Guild
            <PlayedCardIcons iconType="guild" {...this.props} />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default PlayedCards
