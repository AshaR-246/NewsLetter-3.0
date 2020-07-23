import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDcv8nUP-83yhITGPSs2Sc3Lt-vo5MRISg",
  authDomain: "newsletter-1f935.firebaseapp.com",
  databaseURL: "https://newsletter-1f935.firebaseio.com",
  projectId: "newsletter-1f935",
  storageBucket: "newsletter-1f935.appspot.com",
  messagingSenderId: "529324820202",
  appId: "1:529324820202:web:8ad4df79699e26755ff993"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
