// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKPVAdPjUrCvNSTYlT5feGCvS1HIavp1w",
    authDomain: "lets-chat-web-app-a5b41.firebaseapp.com",
    projectId: "lets-chat-web-app-a5b41",
    storageBucket: "lets-chat-web-app-a5b41.appspot.com",
    messagingSenderId: "539796429589",
    appId: "1:539796429589:web:b05a7fb4b873aa1e36271c",
    measurementId: "G-K7X821Y3M3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var Room_names

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}

var Room_names

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   //End code
   });});}
getData();
row = "<div class = 'room_name' id = "  + Room_names + "</div> <hr>"; 

