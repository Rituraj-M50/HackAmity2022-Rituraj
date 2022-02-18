const firebaseConfig = {
    apiKey: "AIzaSyCe-6N4QzlmU8ngdx41fWJEuVJaXfjfvlE",
    authDomain: "virtual-math-3bae0.firebaseapp.com",
    databaseURL: "https://virtual-math-3bae0-default-rtdb.firebaseio.com",
    projectId: "virtual-math-3bae0",
    storageBucket: "virtual-math-3bae0.appspot.com",
    messagingSenderId: "810288068762",
    appId: "1:810288068762:web:5435ebd1058e8e16154723"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("contactForm");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}