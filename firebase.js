// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyCVBouas1jAvQvpRMv7mlqKTjCu0HRTYRk",
    authDomain: "expensetrackermvp-fdfd1.firebaseapp.com",
    projectId: "expensetrackermvp-fdfd1"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  