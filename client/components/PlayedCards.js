import React, {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'

class PlayedCards extends Component {
  render() {
    return (
      <Grid relaxed columns={4}>
        <Grid.column>
          <Image src="/img/stone.png" />
        </Grid.column>
      </Grid>
    )
  }
}

export default PlayedCards
