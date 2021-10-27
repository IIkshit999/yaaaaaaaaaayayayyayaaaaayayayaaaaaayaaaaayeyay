
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
Room_names = childKey;
function addRoom()
{
      Room_name = docment.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });


        localstorage.setItem("room_name", room_nme);

        window.location = "smurtz_page.html";
}

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
        window.location = "kwitter_page.html";
}