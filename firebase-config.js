// ============================================================
//  FIREBASE CONFIGURATION
//  After creating your Firebase project, paste your config here
//  Go to: Firebase Console > Project Settings > Your Apps > SDK setup
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDlS-rtXtG0rTKeH3HiYAyhhBjX_Z6HDqk",
  authDomain: "rblxstudio-7abc8.firebaseapp.com",
  projectId: "rblxstudio-7abc8",
  storageBucket: "rblxstudio-7abc8.firebasestorage.app",
  messagingSenderId: "430844890532",
  appId: "1:430844890532:web:fc049907a303eb60da8531",
  measurementId: "G-GPBERVMQL7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
