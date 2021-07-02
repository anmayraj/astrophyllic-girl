// name of the file with full path
fileName = "LNEA.pdf";
filePath = "LNEA.pdf";
// some global variables
var name;
var email;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDf8k1jHWLmfYff4pQzzhh1ExLou-KtrTM",
    authDomain: "astrophillic-girl.firebaseapp.com",
    projectId: "astrophillic-girl",
    storageBucket: "astrophillic-girl.appspot.com",
    messagingSenderId: "454323345703",
    appId: "1:454323345703:web:7d4da6e73f548871aa7102"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var storage = firebase.storage();//get a reference to storage

function addDataToFirebase() {
    entryId = db.ref("/claims").push({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    }, function (error) {
        if (error) {
            alert("An Error Occured.\n" + error.message);
            return 0;
        }
    }).key;
}

function submitForm() {
    addDataToFirebase()
    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", filePath);
    downloadLink.setAttribute("download", fileName);
    downloadLink.innerHTML = "download pdf";
    downloadLink.click();
}