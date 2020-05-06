import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyCJVU7dlipOEdVyORL7RWREfyN--ON1I1g',
    authDomain: 'vue-post-project.firebaseapp.com',
    databaseURL: 'https://vue-post-project.firebaseio.com',
    projectId: 'vue-post-project',
    storageBucket: 'vue-post-project.appspot.com',
    messagingSenderId: '277553889920',
    appId: '1:277553889920:web:877a37af62b851a10bdc65'
  })
  .firestore()

export const postRef = db.collection('posts')
