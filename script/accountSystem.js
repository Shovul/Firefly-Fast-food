localStorage.clear()
function inputFocus(input) {
  input.previousElementSibling.previousElementSibling.style.transform = "translateY(10px)"
  input.previousElementSibling.previousElementSibling.style.opacity = 0
}
function removeInputValue() {
  Array.from(document.querySelectorAll('.input')).forEach((item) => {
    item.value = ""
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
function removeWrongInput() {
  Array.from(document.querySelectorAll('.wrongText')).forEach((item) => {
    item.style.display = 'none';
  })
}

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
    let accounts = localStorage.getItem("accounts")
    let getName, getPass

    for (let i=1; i<=accounts; i++) {
      getName = "name" + i
      getPass = "pass" + i

      if (name == localStorage.getItem(getName) && pass == localStorage.getItem(getPass)) {
        alert("You are logged in! Welcome " + localStorage.getItem(getName))
        removeWrongInput()
        removeInputValue()
        return true
      }
    }
    document.getElementById('wrong-input').style.display = 'block'
    return false
  }
}

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
    let getPass, getName, getEmail
    let accounts = localStorage.getItem("accounts")
    for (let i = 1; i<=accounts; i++) {
      getName = "name"
      getName = getName + i
      getEmail = "email"
      getEmail = getEmail + i
      
      if (localStorage.getItem(getName) == name) {
        document.getElementById('dup-username').style.display = 'block'
        return false
      }
      if (localStorage.getItem(getEmail) == email) {
        document.getElementById('dup-email').style.display = 'block'
        return false
      }
    }
    
    accounts++
    localStorage.setItem("accounts", accounts)
    getPass = "pass" + accounts
    getName = "name" + accounts
    getEmail = "email" + accounts
    localStorage.setItem(getPass, pass)
    localStorage.setItem(getName, name)
    localStorage.setItem(getEmail, email) 

    const success = document.getElementById('success')
    success.style.display = 'block'
    // success.firstElementChild.classList.toggle('show')
    // success.firstElementChild.classList.toggle('rotate')
    document.getElementById('success-text').innerHTML = "Thank you for signing up! " + localStorage.getItem(getName) + " has been created."
    
    window.setTimeout(function() {
      success.firstElementChild.classList.toggle('rotate')
      success.firstElementChild.classList.toggle('show')
    },0)

    window.setTimeout(function() {
      success.style.display = 'none'
    },4000)

    // window.addEventListener('click', window.setTimeout(function(e) {
    //   if(!this.document.getElementById('success').contains(e.target)) {  
    //     success.style.display = 'none'
    //     // success.firstElementChild.classList.toggle('show')
    //     // success.firstElementChild.classList.toggle('rotate')
    //   }
    // }, 1000))
    
    removeWrongInput()
    removeInputValue()
  }
}