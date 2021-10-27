var firebaseConfig = {

      apiKey: "AIzaSyBwgfWP5ipfBPYQ7DaYt-L3vs1wVUM281s",
    
      authDomain: "smurtz-7e135.firebaseapp.com",
    
      databaseURL: "https://smurtz-7e135-default-rtdb.firebaseio.com",
    
      projectId: "smurtz-7e135",
    
      storageBucket: "smurtz-7e135.appspot.com",
    
      messagingSenderId: "335007070695",
    
      appId: "1:335007070695:web:eb00fd3c9291efc9512542",
    
      measurementId: "G-DRHD0CHQZT"
    
    };
    
    const app = initializeApp(firebaseConfig);
    
    const analytics = getAnalytics(app);


function send()
{
  msg = document.getElementsByName("msg").value;
  firebase.database().ref(romm_name).push({
        name:user_name,
        message:msg,
        like:0
  });  

       document.getElementsById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
