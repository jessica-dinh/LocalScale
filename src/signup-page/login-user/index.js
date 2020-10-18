// Initialize Cloud Firestore through Firebase
var db  = firebase.firestore();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    if (user != null) {
      document.getElementById("user_para").innerHTML =
        "Welcome user:" + email.id;
    }
  } else {

  }
});

function storeDatabase(){
  db.collection("users").doc("andy").add({
    userName: "Andy",
    userBusiness: "Business"
  }
  )
}

function signup() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

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
  var user_Name = document.getElementById("name_field").value;
  var user_Business = document.getElementById("business_field").value;
  window.alert("username is " + user_Name)
  window.alert("userBusiness is" + user_Business)
  db.collection("users").doc("Andy").set({
    userName: "Andy",
    userBusiness:"business stuff"
  }).then(function(){
    console.log("added in name and business name")
  }).catch(function(error){
    console.log("got an error", error)
  })

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
