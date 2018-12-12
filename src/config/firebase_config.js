import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCkXSU-_GRCFRX_i7O-EPn7_hKNsDw3Zn0',
  authDomain: 'employee-data-e8429.firebaseapp.com',
  databaseURL: 'https://employee-data-e8429.firebaseio.com',
  projectId: 'employee-data-e8429',
  storageBucket: 'employee-data-e8429.appspot.com',
  messagingSenderId: '1081108426673'
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase