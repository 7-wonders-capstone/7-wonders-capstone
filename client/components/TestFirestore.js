import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class TestFirestore extends React.Component {
  constructor() {
    super()
    this.state = {
      test: ''
    }
  }

  addTest() {
    this.props.firestore.add(
      {collection: 'test collection'},
      {
        name: this.state.test
      }
    )
    this.setState({test: ''})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.test}
          onChange={evt => this.setState({test: evt.target.value})}
        />
        <button onClick={evt => this.addTest()}>Test</button>
      </div>
    )
  }
}

export default compose(connect(), firestoreConnect())(TestFirestore)
