function signInMenu() {
  let menu = document.getElementById("signin");
  let bg = document.getElementById("blur-bg");

  bg.style.display = "block";
  menu.style.display = "block";
  document.body.style.overflow = "hidden";

}

function exitSignin() {
  let menu = document.getElementById("signin");
  let bg = document.getElementById("blur-bg");

  menu.style.display = "none";
  document.body.style.overflow = "auto";
  bg.style.display = "none";
}
function exitSignup() {
  let menu = document.getElementById("signup");
  let bg = document.getElementById("blur-bg");
  
  menu.style.display = "none";
  document.body.style.overflow = "auto";
  bg.style.display = "none";
}

function signUpMenu() {
  let signin = document.getElementById("signin");
  let signup = document.getElementById("signup");
  signin.style.display = "none";
  signup.style.display = "block";

}