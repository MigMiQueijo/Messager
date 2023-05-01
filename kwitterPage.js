
const firebaseConfig = {
    apiKey: "AIzaSyAwKBm3IdoBooFVZSQzemuVkIZODMlNLGI",
    authDomain: "class-bird.firebaseapp.com",
    databaseURL: "https://class-bird-default-rtdb.firebaseio.com",
    projectId: "class-bird",
    storageBucket: "class-bird.appspot.com",
    messagingSenderId: "910826321085",
    appId: "1:910826321085:web:cfe6eb0bfad631de67b3d4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  var userName = localStorage.getItem("userName")
  var roomName = localStorage.getItem("roomName")
  function logout() {
     localStorage.removeItem("userName")
     localStorage.removeItem("roomName")
     window.location.replace("index.html")
  }