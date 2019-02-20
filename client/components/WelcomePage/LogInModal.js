import React, {Component} from 'react'
import {Image, Modal, Header, Grid} from 'semantic-ui-react'
import SignIn from './SignIn'

export default class LogInModal extends Component {
  render() {
    return (
      <div>
        <Header textAlign="center" as="h2">
          Welcome Back!
        </Header>
        <Modal.Content>
          <Grid>
            <Grid.Column width={5}>
              <Image wrapped size="large" src="img/modalPic.png" rounded />
            </Grid.Column>
            <Grid.Column width={9}>
              <SignIn />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <br />
        <br />
        <br />
      </div>
    )
  }
}
