import * as firebase from 'firebase'
const config = require('./secrets')

firebase.initializeApp(config)

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default db
