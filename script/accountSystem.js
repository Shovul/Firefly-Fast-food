// check acc xem co nho khong

// const a = JSON.parse(localStorage.getItem('accounts'))
// a.forEach((account) => {
//   console.log(account);
// })
let accounts = JSON.parse(localStorage.getItem('accounts'))
let remember = localStorage.getItem('rememberAcc')

if (remember != null) {
  removeSigninBtn()
}
function inputFocus(input) {
  input.previousElementSibling.previousElementSibling.style.transform = "translateY(10px)"
  input.previousElementSibling.previousElementSibling.style.opacity = 0
}
function removeInputValue() {
  Array.from(document.querySelectorAll('.input')).forEach((item) => {
    item.value = ""
  })
}
function removeWrongInput() {
  Array.from(document.querySelectorAll('.wrongText')).forEach((item) => {
    item.style.display = 'none';
  })
}
function usernamePopup() {
  Array.from(document.querySelectorAll('#username-label')).forEach((item) => {
    item.style.opacity = 1
    item.style.transform = "translateY(0)"
  })
}
function passwordPopup() {
  Array.from(document.querySelectorAll('#password-label')).forEach((item) => {
    item.style.opacity = 1
    item.style.transform = "translateY(0)"
  })
}
function removeSigninBtn() {
  document.getElementById('sign-in-btn').style.display = 'none'
  document.getElementById('profile').style.display = 'block'
  exitSignin()
  exitSignup()
}

// dang nhap
function signInAcc() {
  var check = true;
  var name = document.forms["signin"]["username"].value
  var pass = document.forms["signin"]["password"].value
  
  if (name == "" || name == null) {
    usernamePopup()
    check = false
  }
  if (pass == "" || pass == null) {
    passwordPopup()
    check = false
  }

  if (check) {
    if (accounts != null) {
      for (let i=0; i<accounts.length; i++) {
        if (name == accounts[i].name && pass === accounts[i].pass) {
          localStorage.setItem('rememberAcc', i)
          removeWrongInput()
          removeInputValue()
          removeSigninBtn()
          remember = i;
          return true
        }
      }
    }
    document.getElementById('wrong-input').style.display = 'block'
    return false
  }
}

// dang ky
function signUpAcc() {
  var check = true
  var name = document.forms["signup"]["username"].value
  var email = document.forms["signup"]["email"].value
  var pass = document.forms["signup"]["password"].value
  var repass = document.forms["signup"]["repassword"].value

  if (name == "" || name == null) {
    usernamePopup()
    check = false
  }
  if (email == "" || email == null) {
    document.getElementById("email-label").style.opacity = 1
    document.getElementById("email-label").style.transform = "translateY(0)"
    check = false
  }
  if (pass == "" || pass == null) {
    passwordPopup()
    check = false
  }
  if (repass == "" || repass == null) {
    document.getElementById("repassword-label").style.opacity = 1
    document.getElementById("repassword-label").style.transform = "translateY(0)"
    check = false
  }
  if (repass != pass) {
    document.getElementById('password-match').style.display = 'block'
    check = false
  }

  if (check) {
    const pAccount = {
      name: name,
      email: email,
      pass: pass,
      repass: repass,
      phone: null,
      gender: null,
      avatar: null,
      addresses: []
    }

    if (accounts == null || accounts == 0) {
      accounts = []
      accounts.push(pAccount)

      localStorage.setItem('accounts', JSON.stringify(accounts))
    }
    else {
      for (let i = 0; i<accounts.length; i++) {
        if(pAccount.name == accounts[i].name) {
          document.getElementById('dup-username').style.display = 'block'
          check = false
        }
        else {
          document.getElementById('dup-username').style.display = 'none'
        }
        if(pAccount.email == accounts[i].email) {
          document.getElementById('dup-email').style.display = 'block'
          check = false
        }
        else {
          document.getElementById('dup-email').style.display = 'none'
        }
        if(check == false) return false
      }
      accounts[accounts.length] = pAccount;
      localStorage.setItem('accounts', JSON.stringify(accounts))
    }
    
    const success = document.getElementById('success')
    const signup = document.getElementById('signup')
    signup.style.zIndex = '0'
    success.style.display = 'block'
    document.getElementById('success-text').innerHTML = "Thank you for signing up! " + pAccount.name + " has been created."
    
    window.setTimeout(function() {
      success.firstElementChild.classList.toggle('rotate')
      success.firstElementChild.classList.toggle('show')
    },0)

    window.setTimeout(function() {
      success.firstElementChild.classList.remove('rotate')
      success.firstElementChild.classList.remove('show')
      success.style.display = 'none'
      signup.style.zIndex = '2'
    },2500)
    
    remember = accounts.length - 1;
    localStorage.setItem('rememberAcc', remember)
    exitSignup()
    removeWrongInput()
    removeInputValue()
    removeSigninBtn()
  }
}


// tai khoan
function openAccountbar() {
  const accMenu = document.getElementById('account-menu')
  accMenu.classList.toggle('show')
}
function closeAccountbar() {
  const accMenu = document.getElementById('account-menu')
  accMenu.classList.remove('show')
}
function logOut() {
  document.getElementById('sign-in-btn').style.display = 'block'
  document.getElementById('profile').style.display = 'none'
  localStorage.removeItem('rememberAcc')
  closeAccountbar()
}

function showThongtin() {
  if(remember == null) {
    document.body.style.margin = '10px'
    document.body.innerHTML = `
    <p>Loi trang web</p>
    <a href="index.html">Nhan vao day de reset<a>`
    return false
  }
  const accInfo = document.getElementById('account-info')
  accInfo.style.display = 'grid'
  var thongtin = document.getElementsByClassName('thongtin')
  thongtin[0].innerHTML = accounts[remember].name
  thongtin[1].innerHTML = accounts[remember].email
  if (accounts[remember].phone == null) {
    const phoneBtn = document.createElement('input')
    phoneBtn.setAttribute('type', 'tel')
    phoneBtn.setAttribute('id', 'phoneBtn')
    phoneBtn.setAttribute('placeholder', 'So dien thoai')
    phoneBtn.setAttribute('autocomplete', 'off')
    phoneBtn.textContent = 'Them'
    phoneBtn.style.color = 'black'
    thongtin[2].appendChild(phoneBtn)
    const phone = document.getElementById('phoneBtn')
    phone.addEventListener('focusout', function(){
      if(Number(phone.value) != 0 && phone.value.length == 10) {
        accounts[remember].phone = phone.value
        localStorage.setItem('accounts', JSON.stringify(accounts))
        showThongtin()
      }
    })
  }
  else {
    thongtin[2].innerHTML = accounts[remember].phone
  }
  if(accounts[remember].gender != null) {
    thongtin[3].innerHTML = accounts[remember].gender
    document.getElementById('gioitinh').style.display = 'none '
  }
  if(accounts[remember].avatar != null) {
    const avatar = document.querySelector('.avatar')
    avatar.removeChild(avatar.firstElementChild)

    avatar.style.backgroundImage = `url(${accounts[remember].avatar})`
  }
}
window.onload = function(e) {
  var url = window.location.href
  const goTo = url.split("?")

  switch(goTo[1]) {
    case "tttk": 
      showThongtin()
      break
  }
}
let gender = document.getElementById('gioitinh')
let displayGender = gender.previousElementSibling

gender.addEventListener('click', function() {
  switch(gender.value) {
    case 'nam':
      gender.style.display = 'none'
      displayGender.innerHTML = 'Nam'
      accounts[remember].gender = 'Nam'
      break
    case 'nu':
      gender.style.display = 'none'
      displayGender.innerHTML = 'Nữ'
      accounts[remember].gender = 'Nữ'
      break
    case 'khac':
      gender.style.display = 'none'
      displayGender.innerHTML = 'Khác'
      accounts[remember].gender = 'Khác'
      break
  }
  localStorage.setItem('accounts', JSON.stringify(accounts))
})

var avatar = document.querySelector('.avatar')
var input = avatar.lastElementChild
var svg = document.getElementById('avatar-ico')
input.addEventListener('change', function() {
  avatar.removeChild(avatar.firstChild)
  const reader = new FileReader()
  reader.addEventListener('load', function() {
    console.log('work')
    accounts[remember].avatar = reader.result

    localStorage.setItem('accounts', JSON.stringify(accounts))

    accounts = JSON.parse(localStorage.getItem('accounts'))
    avatar.style.backgroundImage = `url(${accounts[remember].avatar})`
  })
  reader.readAsDataURL(this.files[0])
})

accounts.forEach((item) => {
  console.log(item)
})