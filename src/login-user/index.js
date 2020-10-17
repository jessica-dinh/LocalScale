firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // document.getElementById("user_div").style.display = "block";
    // document.getElementById("login_div").style.display = "none";
    // window.alert("user is signed in")
    // User is signed in.
    var user = firebase.auth().currentUser;
    if (user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML =
        "Welcome user:" + email.id;
    }
  } else {
    // window.location.replace('login.html');
    // document.getElementById("user_div").style.display = "none";
    // document.getElementById("login_div").style.display = "block";
    // window.alert("user is not signed in")
    // No user is signed in.
  }
});

function signup() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  window.alert(userEmail + " " + userPass);
  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      windows.alert("error: " + errorMessage);
    });
}
function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  // window.alert(userEmail + " " + userPass);
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      windows.alert("error: " + errorMessage);
      // ...
    });
    window.location.replace("logout.html");
}

function logout() {
  firebase.auth().signOut();
  window.location.replace("login.html");
}
