
window.onload = function(e) {
  var url = window.location.href
  const goTo = url.split("?")

  switch(goTo[1]) {
    case "tttk": 
      showThongtin()
      kiemtraTK(accounts[remember])
      break
    case "qltk":
      if(accounts[remember].status != 'admin' && accounts[remember].status != 'taikhoan') {
        alert("Tài khoản không có quyển vào")
        return false
      }
      showTaikhoan()
      break
    case "qlmn":
      if(accounts[remember].status != 'admin' && accounts[remember].status != 'menu') {
        alert("Tài khoản không có quyển vào")
        return false
      }
      showQLMenu()
      break
    case "qldh":
      if(accounts[remember].status != 'admin' && accounts[remember].status != 'hoadon') {
        alert("Tài khoản không có quyển vào")
        return false
      }
      showQLOrder()
      break
    case "tkmh":
      if(accounts[remember].status != 'admin' && accounts[remember].status != 'thongke') {
        alert("Tài khoản không có quyển vào")
        return false
      }
      showTKMatHang()
      break
    case "tkkh":
      if(accounts[remember].status != 'admin' && accounts[remember].status != 'thongke') {
        alert("Tài khoản không có quyển vào")
        return false
      }
      showTKKhachHang()
      break
    case "giohang":
      showGioHang()
      kiemtraTK(accounts[remember])
      break
    case "donhang":
      showDonHang()
      kiemtraTK(accounts[remember])
      break
    default:
      createAccount()
      createMenu()  
      if(remember != null)
      kiemtraTK(accounts[remember])
  }
}
// alert()
// window.location.href.split('/')[window.location.href.split('/').length-1]


function hoadonGetTotal(items) {
  let sum = 0
  items.forEach(item => {
    sum += item.price * item.quantity    
  })
  return sum
}

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
  let bg = document.querySelector('#blur.bg');

  bg.style.display = "block";
  menu.style.opacity = 1;
  menu.style.transform = 'translateY(0)';
  document.body.style.overflow = "hidden";

  removePopup()
}

function exitSignin() {
  let menu = document.getElementById("signin");
  let bg = document.querySelector('#blur.bg');

  document.forms["signin"]["username"].value = "";
  document.forms["signin"]["password"].value = "";
  // menu.style.display = "none";
  menu.style.opacity = 0;
  menu.style.transform = 'translateY(150%)';
  document.body.style.overflow = "auto";
  bg.style.display = "none";

  removePopup()
}
function exitSignup() {
  let menu = document.getElementById("signup");
  let bg = document.querySelector('#blur.bg');
  
  document.forms["signup"]["username"].value = ""
  document.forms["signup"]["email"].value = ""
  document.forms["signup"]["password"].value = ""
  document.forms["signup"]["repassword"].value = ""
  menu.style.opacity = 0;
  menu.style.transform = "translateY(150%)";
  document.body.style.overflow = "auto";
  bg.style.display = "none";
 
  removePopup()
}
function signUpMenu() {
  let signin = document.getElementById("signin");
  let signup = document.getElementById("signup");
  
  document.forms["signin"]["username"].value = "";
  document.forms["signin"]["password"].value = "";
  signin.style.opacity = 0;
  signup.style.opacity = 1;
  signin.style.transform = "translateY(150%)";
  signup.style.transform = "translateY(0)";

  removePopup()
}