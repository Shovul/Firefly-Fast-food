function printAcc() {
  let accounts = localStorage.getItem("accounts")
  for (let i = 1; i<=accounts;i++) {
    getPass = "pass"
    getName = "name"
    getPass = getPass + i
    getName = getName + i
    console.log(localStorage.getItem(getName) + " " + localStorage.getItem(getPass) + "\n")
  }
}

function signInAcc() {
  var name = document.forms["signin"]["username"].value
  var pass = document.forms["signin"]["password"].value

  
  if (name == "" || name == null) {
    alert("Username must be fill")
    return false
  }
  if (pass == "" || pass == null) {
    alert("Password must be fill")
    return false
  }

  let accounts = localStorage.getItem("accounts")
  let getName, getPass

  for (let i=1; i<=accounts; i++) {
    getName = "name" + i
    getPass = "pass" + i

    if (name == localStorage.getItem(getName) && pass == localStorage.getItem(getPass)) {
      alert("You are logged in! Welcome " + localStorage.getItem(getName))
      return true
    }
  }
  alert("Wrong username or password")
  return false
}

function signUpAcc() {
  var name = document.forms["signup"]["username"].value
  var email = document.forms["signup"]["email"].value
  var pass = document.forms["signup"]["password"].value
  var repass = document.forms["signup"]["repassword"].value
  console.log(name + " " + email + " " + pass + " " + repass)

  if (name == "" || name == null) {
    alert("Username must be fill")
    return false
  }
  if (email == "" || email == null) {
    alert("Email must be fill")
    return false
  }
  if (pass == "" || pass == null) {
    alert("Password must be fill")
    return false
  }
  if (repass == "" || repass == null) {
    alert("Please comfirm your password")
    return false
  }
  if (repass != pass) {
    alert("Enter password correctly")
    return false
  }

  let getPass, getName, getEmail
  let accounts = localStorage.getItem("accounts")
  console.log(accounts)
  for (let i = 1; i<=accounts; i++) {
    getName = "name"
    getName = getName + i
    getEmail = "email"
    getEmail = getEmail + i
    
    if (localStorage.getItem(getName) == name) {
      alert("Username have been taken")
      return false
    }
    if (localStorage.getItem(getEmail) == email) {
      alert("Username have been taken")
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

  console.log(accounts + ": " + name + " " + email + " " + pass + " " + repass)

}