function signInMenu() {
  let menu = document.getElementById("signin-box");
  let pauseBg = document.getElementById("blur-background");
  
  menu.style.display = "block";
  pauseBg.style.display = "block";

}

function exitScreen() {
  let menu = document.getElementById("signin-box");
  let pauseBg = document.getElementById("blur-background");
  menu.style.display = "none";
  pauseBg.style.display = "none";
}