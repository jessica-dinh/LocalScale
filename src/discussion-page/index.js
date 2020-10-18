

var db = firebase.firestore();

function addTextBox(){
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

function createPost(){
    text_box = document.getElementById("textbox").value
    checked_box = document.getElementById("checkbox").value
    alert("text box " + text_box)
    alert("check box " + checked_box)
}

