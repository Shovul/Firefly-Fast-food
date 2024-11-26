// check acc xem co nho khong

// const a = JSON.parse(localStorage.getItem('accounts'))
// a.forEach((account) => {
//   console.log(account);
// })
let accounts = JSON.parse(localStorage.getItem('accounts'))
let remember = localStorage.getItem('rememberAcc')

if (remember != null && window.location.href.split('?')[1] != "qltk" && window.location.href.split('?')[1] != "qlmn") {
  removeSigninBtn()
  adminActive();
}

function adminActive() {
  if (accounts[remember] == accounts[0]) {
    removeSigninBtn()
    document.querySelector(".admin").style.display = 'block'
  }
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
    for (let i=0; i<accounts.length; i++) {
      if (name == accounts[i].name && pass === accounts[i].pass) {
        localStorage.setItem('rememberAcc', i)
        removeWrongInput()
        removeInputValue()
        removeSigninBtn()
        remember = i;
        adminActive()
        return true
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
  if (email == "" || email == null || !(email.includes("@") && email.includes(".com"))){
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
      id: accounts.length,
      name: name,
      email: email,
      pass: pass,
      phone: null,
      gender: null,
      avatar: null,
      status: active,
      addresses: [],
      basket: []
    }

    if (accounts === null) {
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
      pAccount.id = accounts.length;
      accounts.push(pAccount);
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
    adminActive()
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
  document.querySelector(".admin").style.display = 'none'

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
  
  document.body.style.overflow = 'hidden'
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

  if(accounts[remember].addresses.length > 0) {
    const diaChiList = document.createElement('select')
    diaChiList.setAttribute('id', 'thongtin-diachi')
    diaChiList.setAttribute('onclick', 'selectCurrentAddress(this)')
    accounts[remember].addresses.forEach(address => {
      const receiver = document.createElement('optgroup')
      receiver.setAttribute('label', address.name + ", " + address.phone)
      const newAddress = document.createElement('option')
      newAddress.setAttribute('value', address.id)
      newAddress.innerHTML = address.address
      receiver.appendChild(newAddress)
      diaChiList.appendChild(receiver)
      if(address.status == 'choose') {
        diaChiList.selectedIndex = address.id
      }
    })
    const listPosition = document.querySelector('.taikhoan > ul > div')
    listPosition.appendChild(diaChiList)
  }
}
function selectCurrentAddress(thisAddress) {
  accounts[remember].addresses.forEach(address => {
    if(address.id == thisAddress.value) {
      address.status = 'choose'
    }
    else {
      address.status = ''
    }
  })
  localStorage.setItem('accounts', JSON.stringify(accounts))
}

function getGender(genderSelect) {
  let displayGender = genderSelect.previousElementSibling
  switch(genderSelect.value) {
    case 'Nam':
      genderSelect.style.display = 'none'
      displayGender.innerHTML = 'Nam'
      accounts[remember].gender = 'Nam'
      break
    case 'Nữ':
      genderSelect.style.display = 'none'
      displayGender.innerHTML = 'Nữ'
      accounts[remember].gender = 'Nữ'
      break
    case 'Khác':
      genderSelect.style.display = 'none'
      displayGender.innerHTML = 'Khác'
      accounts[remember].gender = 'Khác'
      break
  }
  localStorage.setItem('accounts', JSON.stringify(accounts))
}

var avatar = document.querySelector('.avatar')
var input = avatar.lastElementChild
var svg = document.getElementById('avatar-ico')
input.addEventListener('change', function() {
  avatar.removeChild(avatar.firstChild)
  const reader = new FileReader()
  reader.addEventListener('load', function() {
    accounts[remember].avatar = reader.result

    localStorage.setItem('accounts', JSON.stringify(accounts))

    accounts = JSON.parse(localStorage.getItem('accounts'))
    avatar.style.backgroundImage = `url(${accounts[remember].avatar})`
    avatar.firstElementChild.style.display = 'none'
  })
  reader.readAsDataURL(this.files[0])
})

function editAccount() {
  const background = document.getElementById("blur-bg")
  background.style.display = 'block'
  const editMenu = document.getElementById("edit_account")
  editMenu.style.transform = 'scale(1)'
  const button = document.querySelectorAll("#edit_account>div>button")
  const input = document.querySelectorAll("#edit_account>div>input")
  const gender = document.querySelector('#edit_account>div>select')
  getAccount = remember
  input[0].placeholder = accounts[getAccount].name
  input[1].placeholder = accounts[getAccount].email
  input[2].placeholder = accounts[getAccount].pass
  input[3].placeholder = accounts[getAccount].phone
  gender.value = accounts[getAccount].gender

    button[0].addEventListener('click', () => {
      if(input[0].value == '') {
        alert('Xin hãy điền tên')
        input[0].value = ''
        input[0].focus()
        return false
      }
      for(let i=0; i<accounts.length; i++) {
        if(accounts[i].name == input[0].value) {
          alert('Tên bị trùng')
          input[0].value = ''
          input[0].focus()
          return false
        }
      }
      accounts[getAccount].name = input[0].value
      input[0].value = ''
      input[0].placeholder = accounts[getAccount].name
      localStorage.setItem('accounts', JSON.stringify(accounts))
    })
    button[1].addEventListener('click', () => {
      if(input[1].value == '' || !(input[1].value.includes("@") && input[1].value.includes(".com"))) {
        alert('Xin hãy điền email')
        input[1].value = ''
        input[1].focus()
        return false
      }
      for(let i=0; i<accounts.length; i++) {
        if(accounts[i].email == input[1].value) {
          alert('Email bị trùng')
          input[1].value = ''
          input[1].focus()
          return false
        }
      }
      accounts[getAccount].email = input[1].value
      input[1].value = ''
      input[1].placeholder = accounts[getAccount].email
      localStorage.setItem('accounts', JSON.stringify(accounts))
    })
    button[2].addEventListener('click', () => {
      if(input[2].value == '') {
        alert('Xin hãy điền mật khẩu')
        input[2].value = ''
        input[2].focus()
        return false
      }
      accounts[getAccount].pass = input[2].value
      input[2].value = ''
      input[2].placeholder = accounts[getAccount].pass
      localStorage.setItem('accounts', JSON.stringify(accounts))
    })
    button[3].addEventListener('click', () => {
      if(input[3].value == '') {
        alert('Xin hãy điền số điện thoại')
        input[3].focus()
        return false
      }
      if(input[3].value.length != 10) {
        alert('Hãy điền đủ 10 số')
        input[3].focus()
        return false
      }
      for(let i=0; i<accounts.length; i++) {
        if(accounts[i].phone == input[3].value) {
          alert('Số điện thoại bị trùng')
          input[3].focus()
          return false
        }
      }
      accounts[getAccount].phone = input[3].value
      input[3].value = ''
      input[3].placeholder = accounts[getAccount].phone
      localStorage.setItem('accounts', JSON.stringify(accounts))
    })
    button[4].addEventListener('click', () => {
      accounts[getAccount].gender = gender.value
      localStorage.setItem('accounts', JSON.stringify(accounts))
    })
}
function exitEditAccount() {
  let editMenu = document.getElementById("edit_account")
  editMenu.style.transform = 'scale(0)'
  location.reload()
}

const createAddressForm = document.getElementById('dia_chi_form')
function createAddress() {
  const createAddressMenu = document.getElementById('dia_chi_tk')
  createAddressMenu.classList.toggle('show')
  createAddressForm['name'].value = ''
  createAddressForm['phone'].value = ''
  createAddressForm['address'].value = ''
}
createAddressForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const receiver = createAddressForm['name']
  const phone = createAddressForm['phone']
  const address = createAddressForm['address']

  if(phone.value == '' || phone.value.length != 10 || receiver.value == '' || address.value == '') {
    alert('Xin hãy điền đúng thông tin')
    return false
  }

  accounts[remember].addresses.forEach(address => {
    address.status = ''
  })
  newAddress = {
    id: accounts[remember].addresses.length,
    name: receiver.value,
    phone: phone.value,
    address: address.value,
    status: 'choose'
  }
  accounts[remember].addresses.push(newAddress)
  localStorage.setItem('accounts', JSON.stringify(accounts))
  alert('Đã thêm địa chỉ')
  location.reload()
})