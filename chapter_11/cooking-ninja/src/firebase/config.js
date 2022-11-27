import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBVx3QQkWxxGWPlXGOPcBXOBOtVCoAjtgA',
  authDomain: 'cookingninjasite-e9359.firebaseapp.com',
  projectId: 'cookingninjasite-e9359',
  storageBucket: 'cookingninjasite-e9359.appspot.com',
  messagingSenderId: '574537279881',
  appId: '1:574537279881:web:7e03c61d50b59842691958',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
