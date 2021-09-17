<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBLjOF8jbMZ187U4Rl1JTZ_sXyK7bLHgNc",
    authDomain: "my-animesite.firebaseapp.com",
    projectId: "my-animesite",
    storageBucket: "my-animesite.appspot.com",
    messagingSenderId: "23840869218",
    appId: "1:23840869218:web:4537a3e35dfe836d3fba3b",
    measurementId: "G-7N7R56T6X9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var myName = prompt("Enter your Name");

  function sendMessage() {
      var message = document.getElementById("message").value;
      //save in database
      firebase.database().ref("messages").push.set({
          "sender": myName,
          "message": message
      })

      //prevent form from submitting
      return false
  }
</script>
<form onsubmit="return sendMessage();">
    <input id="message" placeholder="Enter message" autocomplete="off">
<input type="submit">



</form>