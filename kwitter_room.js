
const firebaseConfig = {
      apiKey: "AIzaSyCLJ7iTHHq3MgbfnvnBHOAm0jzD3AI5XpE",
      authDomain: "kwitter-5b368.firebaseapp.com",
      databaseURL: "https://kwitter-5b368-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b368",
      storageBucket: "kwitter-5b368.appspot.com",
      messagingSenderId: "379804960161",
      appId: "1:379804960161:web:87246512180de0893137e0",
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" 
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "Kwitter_page.html";
}     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}