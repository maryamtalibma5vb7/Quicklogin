import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpX35QUlMlzOdiY1211Ul0M9pJcNCbDgc",
  authDomain: "quick-login-601cb.firebaseapp.com",
  projectId: "quick-login-601cb",
  storageBucket: "quick-login-601cb.firebasestorage.app",
  messagingSenderId: "886163017420",
  appId: "1:886163017420:web:7aa60c1130fd9e3cc37c69",
  measurementId: "G-HX48WGSLBL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getbtn = document.getElementById('btn');
if (getbtn) {
  getbtn.addEventListener('click', function () {

    let email = document.getElementById('semail');
    let password = document.getElementById('spass');

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        location.href = './signin.html'; 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
}

let getlbtn = document.getElementById('lbtn');

if (getlbtn) {
  getlbtn.addEventListener('click', () => {
    let email = document.getElementById('lemail');
    let password = document.getElementById('lpass');

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Good job!",
          text: "You logged in successfully!",
          icon: "success"
        });
        console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
}
