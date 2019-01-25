import React, {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'

class PlayedCards extends Component {
  render() {
    return (
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
    )
  }
}

export default PlayedCards
