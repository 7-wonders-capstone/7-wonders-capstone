import React, {Component} from 'react'
import {Image, Modal, Header} from 'semantic-ui-react'
import SignIn from './SignIn'

export default class LogInModal extends Component {
  render() {
    return (
      <div>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="img/modalPic.png" />
          <SignIn />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </div>
    )
  }
}
