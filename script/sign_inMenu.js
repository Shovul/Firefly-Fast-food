function removePopup() {
  Array.from(document.getElementsByClassName('missing-input')).forEach((item) => {
    item.style.opacity = 0
  })
  Array.from(document.querySelectorAll('.wrongText')).forEach((item) => {
    item.style.display = 'none';
  })
  document.getElementById('email-label').style.opacity = 0
  document.getElementById('repassword-label').style.opacity = 0
  document.getElementById('email-label').style.transform = 'translateY(10px)'
  document.getElementById('repassword-label').style.transform = 'translateY(10px)'
}

function signInMenu() {
  let menu = document.getElementById("signin");
  let bg = document.getElementById("blur-bg");

  bg.style.display = "block";
  menu.style.display = "block";
  document.body.style.overflow = "hidden";

  removePopup()
}

function exitSignin() {
  let menu = document.getElementById("signin");
  let bg = document.getElementById("blur-bg");

  document.forms["signin"]["username"].value = "";
  document.forms["signin"]["password"].value = "";
  menu.style.display = "none";
  document.body.style.overflow = "auto";
  bg.style.display = "none";

  removePopup()
}
function exitSignup() {
  let menu = document.getElementById("signup");
  let bg = document.getElementById("blur-bg");
  
  document.forms["signup"]["username"].value = ""
  document.forms["signup"]["email"].value = ""
  document.forms["signup"]["password"].value = ""
  document.forms["signup"]["repassword"].value = ""
  menu.style.display = "none";
  document.body.style.overflow = "auto";
  bg.style.display = "none";
 
  removePopup()
}

function signUpMenu() {
  let signin = document.getElementById("signin");
  let signup = document.getElementById("signup");
  
  document.forms["signin"]["username"].value = "";
  document.forms["signin"]["password"].value = "";
  signin.style.display = "none";
  signup.style.display = "block";

  removePopup()
}