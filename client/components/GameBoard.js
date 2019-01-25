import React, {Component} from 'react'
import {Image, Grid} from 'semantic-ui-react'

class GameBoard extends Component {
  render() {
    return (
      <div>
        <Image src="/img/babylon-a.jpg" fluid rounded />
        <Grid relaxed textAlign="center" verticalAlign="middle" columns={3}>
          <Grid.Column color="grey">Stage 1</Grid.Column>

          <Grid.Column color="blue">Stage 2</Grid.Column>

          <Grid.Column color="green">Stage 3</Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default GameBoard
