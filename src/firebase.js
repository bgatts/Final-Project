import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID

}

export const facebookProvider = firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const gitHubProvider = new firebase.auth.GithubAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()
export const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com')
export const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com')







const firebaseApp = firebase.initializeApp(firebaseConfig)


export const auth = firebaseApp.auth()
export  const db = firebaseApp.firestore()

export default db
