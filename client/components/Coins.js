import React, {Component} from 'react'
import {Header, Image, Grid} from 'semantic-ui-react'

class Coins extends Component {
  render() {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4" textAlign="left">
                <Image
                  size="small"
                  src="/img/snapshot/2victory.jpg"
                  verticalAlign="middle"
                />
                {this.props.points}
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign="left">{this.props.email}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" textAlign="right">
                <Image src="/img/1coin.png" />
                {this.props.coins}
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Coins
