import app from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCUXKZdzpThFCc6zGGPoOgTeGJ9WTpR-oI",
    authDomain: "assignment-ed04d.firebaseapp.com",
    databaseURL: "https://assignment-ed04d.firebaseio.com",
    projectId: "assignment-ed04d",
    storageBucket: "assignment-ed04d.appspot.com",
    messagingSenderId: "810542711146",
    appId: "1:810542711146:web:4bbee988ae74b0ac626513"
  };
  // Initialize Firebase
  class Firebase {
      constructor(){
      app.initializeApp(firebaseConfig);
    
      this.auth = app.auth();
      }

    //   Auth API 

    doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email,password);
    doSignInWithEmailAndPassword = (email,password)=> this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;