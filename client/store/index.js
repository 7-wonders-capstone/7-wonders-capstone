import {createStore, combineReducers, compose} from 'redux'
import {firebaseReducer, reactReduxFirebase} from 'react-redux-firebase'
import {firestoreReducer, reduxFirestore} from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {firebaseConfig} from '../../secrets'
import user from './user'
import selectedCard from './selectedCard'
import me from './me'

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})

const enhancers = [
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, {
    userProfile: 'users',
    useFirestoreForProfile: true
  })
]

const reduxDevToolsExtension = window.devToolsExtension
if (
  process.env.NODE_ENV === 'development' &&
  typeof reduxDevToolsExtension === 'function'
) {
  enhancers.push(reduxDevToolsExtension())
}

const composedEnhancers = compose(...enhancers)

const reducer = combineReducers({
  user,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  selectedCard,
  me
})

const store = createStore(reducer, composedEnhancers)

export default store
export * from './user'
