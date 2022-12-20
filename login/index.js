const firebaseConfig = {
  // firebase configeration

};

firebase.initializeApp(firebaseConfig);
let contactFormDB = firebase.database().ref("signinForm"); ///  check the form name
document.getElementById("signinForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
}

function register() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let uname = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("passwordConfirm").value;
  console.log("register function");
  if (ValidateEmail(email) == false) {
    console.log("uncorrect Email Address !");
    return;
  }
  if (ValidatePassword(password) == false) {
    console.log("uncorrect password Address !");
    return;
  }
  if (verifyPassword(password, passwordConfirm) == false) {
    console.log("unmatch password !");
    return;
  }
  if (verifyName(fname) == false ){
    console.log("names should contain only letters !");
    return;
  }
  saveData(fname,lname,uname,email,phone,password);
}

const saveData = (fname,lname,uname,email,phone,password)=>{
  let newContactForm = contactFormDB.push();

  newContactForm.set({
     fname :fname,
     lname : lname,
     uname : uname,
     email : email,
     phone : phone,
     password :password,
  })
}

function login() {
  console.log("log in function");
  uname = document.getElementById("uname").value;
  password = document.getElementById("password").value;

  if (ValidateEmail(email) == false) {
    console.log("uncorrect Email Address !");
  }
  if (ValidatePassword(password) == false) {
    console.log("false valid");
    console.log("uncorrect password Address !");
  }
}
// check Email validation
function ValidateEmail(email) {
  console.log("mwafakedeeb", email);
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {    
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}

// check password
function ValidatePassword(password) {
  console.log("valid pass enter", password.length);
  //minimum password length validation
  if (password.length < 8) {
    alert("Password length must be atleast 8 characters");
    return false;
  }
}
function verifyPassword(password, passwordConfirm) {
  console.log("verifing your password !!!");
  if (password != passwordConfirm) {
    alert("\nPassword did not match: Please try again...");
    return false;
  }
  return true;
}

function verifyName(fname){
  console.log("fname :",fname);
  fname=fname.trim();
  if ((/^[a-zA-Z]/.test(fname))){
    alert("names should contain only letters !");
    return false;
  }
}
