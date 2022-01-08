const firebaseConfig = {
  apiKey: "AIzaSyACYdQs6Q4vCDFQQUGUU9Tlbky4QgJe9D8",
  authDomain: "c-94-project-a97e9.firebaseapp.com",
  projectId: "c-94-project-a97e9",
  storageBucket: "c-94-project-a97e9.appspot.com",
  messagingSenderId: "512258789652",
  appId: "1:512258789652:web:1b899185c0ec5b464d7201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function show(){
    user_name = localStorage.getItem("user_nm");
    document.getElementById("srNm").innerHTML = user_name;
    
}

function logOut(){
    window.location = "index.html";
}
function signOut(){
    localStorage.setItem("user_nm", "user_nm");
    localStorage.setItem("user_nm", "user_nm");
    window.location = "index.html";
}

function addRoom(){

    room_name = document.getElementById("rmNmNpt").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
  }