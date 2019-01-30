import React, {Component} from 'react'
import {Grid, Image, Segment} from 'semantic-ui-react'

class PlayedCards extends Component {
  render() {
    return (
      <Segment>
        <Grid relaxed columns={7}>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/stone.png" />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default PlayedCards
