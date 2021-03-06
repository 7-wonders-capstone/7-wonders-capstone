import React, {Component} from 'react'
import {Header, Image, Grid} from 'semantic-ui-react'

class BoardHeader extends Component {
  render() {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column style={{width: '160px'}}>
              <Header as="h4" textAlign="left">
                <Image
                  size="small"
                  src="/img/snapshot/victory_blank.png"
                  verticalAlign="middle"
                  style={{margin: '0px 5px 0px 0px', height: '35px'}}
                />
                {this.props.points}
                <Image
                  size="small"
                  src="/img/snapshot/military_blank.png"
                  verticalAlign="middle"
                  style={{margin: '0px 10px 0px 10px', height: '35px'}}
                />
                {this.props.militaryResults.reduce(
                  (sum, elem) => sum + elem,
                  0
                )}
              </Header>
            </Grid.Column>
            <Grid.Column style={{width: '215px'}}>
              <Header textAlign="center">
                {this.props.email.split('@')[0]}
              </Header>
            </Grid.Column>
            <Grid.Column style={{width: '100px'}}>
              <Header as="h4" textAlign="right">
                <Image
                  src="/img/1coin.png"
                  size="small"
                  verticalAlign="middle"
                  style={{margin: '0px 10px 0px 20px', height: '35px'}}
                />
                {this.props.coins}
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default BoardHeader
