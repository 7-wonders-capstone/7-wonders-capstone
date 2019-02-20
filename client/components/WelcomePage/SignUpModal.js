import React, {Component} from 'react'
import {Grid, Header, Modal, Image} from 'semantic-ui-react'
import SignUp from './SignUp'

class SignUpModal extends Component {
  render() {
    return (
      <div>
        <Header textAlign="center" as="h2">
          Sign up with your email address
        </Header>
        <Modal.Content>
          <Grid>
            <Grid.Column width={5}>
              <Image wrapped size="large" src="img/modalPic.png" rounded />
            </Grid.Column>
            <Grid.Column width={9}>
              <SignUp />
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

export default SignUpModal
