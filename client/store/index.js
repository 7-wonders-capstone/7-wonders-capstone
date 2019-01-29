import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {firebaseReducer, reactReduxFirebase} from 'react-redux-firebase'
import {firestoreReducer, reduxFirestore} from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../../firebase-config'
import user from './user'

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})

const enhancers = [
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, {
    userProfile: 'users',
    useFirestoreForProfile: true
  }),
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
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
  firestore: firestoreReducer
})

const store = createStore(reducer, composedEnhancers)

export default store
export * from './user'
