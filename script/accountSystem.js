// check acc xem co nho khong

// const a = JSON.parse(localStorage.getItem('accounts'))
// a.forEach((account) => {
//   console.log(account);
// })
let accounts = JSON.parse(localStorage.getItem('accounts'))
let remember = localStorage.getItem('rememberAcc')


if (remember != null && window.location.href.split('?')[1] != "qltk" && window.location.href.split('?')[1] != "qlmn") {
  document.querySelector('#account-menu > ul > li:first-child > span').innerHTML = accounts[remember].name
  removeSigninBtn()
  adminActive();
}

function adminActive() {
  if (accounts[remember].status === 'admin') {
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
      if ((name === accounts[i].email || name === accounts[i].phone) && pass === accounts[i].pass) {
        localStorage.setItem('rememberAcc', i)
        kiemtraTK(accounts[i])
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
      status: 'khach',
      addresses: [],
      hoadon: [],
      cart: []
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
  document.querySelector(".bg#blur").style.display = 'block'
}
function closeAccountbar() {
  const accMenu = document.getElementById('account-menu')
  accMenu.classList.remove('show')
  document.querySelector(".bg#blur").style.display = 'none'
}
function logOut() {
  document.getElementById('sign-in-btn').style.display = 'block'
  document.getElementById('profile').style.display = 'none'
  localStorage.removeItem('rememberAcc')
  document.querySelector(".admin").style.display = 'none'
  window.location.href = "index.html";

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
      for(let i=0; i<accounts.length; i++) {
        if(accounts[i].phone == phone.value) {
          return false
        }
      }
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
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'deleteAddress')
    deleteButton.setAttribute('onclick', 'deleteAddress()')
    deleteButton.innerHTML = 'Xóa địa chỉ đang chọn'
    listPosition.appendChild(diaChiList)
    listPosition.appendChild(deleteButton)
  }
}
function deleteAddress() {
  const addressSelect = document.getElementById('thongtin-diachi')
  const addressSelected = document.querySelector('#thongtin-diachi option:checked')
  const confirm = window.confirm("Xóa địa chỉ " + addressSelected.innerHTML + "?")
  if(confirm) {
    accounts[remember].addresses.splice(addressSelected.value, 1)
    for(let i=0; i<accounts[remember].addresses.length; i++) {
      accounts[remember].addresses[i].id = i;
    }
    console.log(accounts[remember].addresses)
    if(accounts[remember].addresses.length>0) {
      accounts[remember].addresses[0].status = 'choose'
    }
    localStorage.setItem('accounts', JSON.stringify(accounts))
    addressSelect.removeChild(addressSelected.parentElement)
  }
  if(addressSelect.innerHTML === "") {
    addressSelect.parentElement.innerHTML = ''
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
  const background = document.querySelector(".bg#blur")
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

function getStatus(a) {
  switch(a) {
    case "a":
      return "Chưa xử lý"
      break
    case "b":
      return "Đang làm món"
      break
    case "c":
      return "Đang giao"
      break
    case "d":
      return "Đã giao"
      break
    default:
      break
  }
}
function huyDon(button) {
  const confirm = window.confirm('Hủy đơn hàng này?')
  if(confirm) {
    accounts[remember].hoadon[button.id].status = 'f'
    localStorage.setItem('accounts', JSON.stringify(accounts))
    alert('Đã hủy đơn hàng')
    location.reload()
  }
}
function nhanDon(button) {
  const confirm = window.confirm('Nhận đơn hàng?')
  if(confirm) {
    accounts[remember].hoadon[button.id].status = 'e'
    localStorage.setItem('accounts', JSON.stringify(accounts))
    alert('Đã nhận đơn hàng')
    location.reload()
  }
}
function xongQuatrinh(status) {
  if(status === 'd') {
    return true
  }
  return false
}
function processBar(status) {
  if(status === 'a') {
    return `
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
        <span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg>
        <span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-200q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-680v134L580-320H400q0 50-35 85t-85 35Zm40-200Zm-40 120q17 0 28.5-11.5T320-320h-80q0 17 11.5 28.5T280-280Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280ZM160-400h160v-120h-80q-33 0-56.5 23.5T160-440v40Z"/></svg>
        <span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
      </li>
    `
  }
  if(status === 'b') {
    return `
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
        <span class="active"></span>
      </li>
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg>
        <span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-200q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-680v134L580-320H400q0 50-35 85t-85 35Zm40-200Zm-40 120q17 0 28.5-11.5T320-320h-80q0 17 11.5 28.5T280-280Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280ZM160-400h160v-120h-80q-33 0-56.5 23.5T160-440v40Z"/></svg>
        <span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
      </li>
    `
  }
  if(status === 'c') {
    return `
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
        <span class="active"></span>
      </li>
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg>
        <span class="active"></span>
      </li>
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-200q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-680v134L580-320H400q0 50-35 85t-85 35Zm40-200Zm-40 120q17 0 28.5-11.5T320-320h-80q0 17 11.5 28.5T280-280Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280ZM160-400h160v-120h-80q-33 0-56.5 23.5T160-440v40Z"/></svg>
        <span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
      </li>
    `
  }
  if(status === 'd') {
    return `
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
        <span class="active"></span>
      </li>
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg>
        <span class="active"></span>
      </li>
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-200q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-680v134L580-320H400q0 50-35 85t-85 35Zm40-200Zm-40 120q17 0 28.5-11.5T320-320h-80q0 17 11.5 28.5T280-280Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280ZM160-400h160v-120h-80q-33 0-56.5 23.5T160-440v40Z"/></svg>
        <span class="active"></span>
      </li>
      <li>
        <svg class="active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
      </li>
    `
  }
}
function showListDonHang(hoadon) {
  const display = document.querySelector(".body-donhang")
  
  hoadon.forEach(hoaDon => {
    if(hoaDon.status == "e" || hoaDon.status == "f") {
      return false
    }
    let list = document.createElement('div')
    list.innerHTML  = `
      <div class="madon-ngaydat">
          <div><b>Mã đơn hàng: </b>#${hoaDon.id}</div>
          <div><b>Ngày đặt đơn: </b>${hoaDon.orderTime.split('-')[0]}</div>
      </div>
      <div class="thongtindon"><b>Tên khách hàng: </b>${hoaDon.info.name}</div>
      <div class="thongtindon"><b>Thời gian đặt hàng: </b>${hoaDon.orderTime.split('-')[1]}</div>
      <div class="thongtindon"><b>Thời gian dự kiến hoàn thành: </b>${hoaDon.arriveTime}</div>
      <div class="thongtindon"><b>Tình trạng đơn hàng: </b>${getStatus(hoaDon.status)}</div>
      <div class="thongtindon"><b>Tổng tiền </b>(${hoaDon.items.length} món) ${hoadonGetTotal(hoaDon.items).toLocaleString()}VNđ</div>
      <div class="process-display">
        <ul>
          ${processBar(hoaDon.status)}
        </ul>
      </div>
      <div class="thongtindon">
          <button id="${hoaDon.id}" onclick="hienChiTiet(this)">Chi tiết đơn hàng</button>
          <button id="${hoaDon.id}" style="${xongQuatrinh(hoaDon.status) ? 'display: none;' : 'display: inline;'}" onclick="huyDon(this)">Hủy đơn</button>
          <button id="${hoaDon.id}" class="nhandon" onclick="nhanDon(this)" style="${xongQuatrinh(hoaDon.status) ? 'display: inline;' : 'display: none;'}">Đã nhận được đơn</button>
      </div>
    ` 
    display.appendChild(list)
  })
  
}
function showDonHang() {
  const donhang = document.getElementById('donhang_khachhang');
  document.body.style.overflow = 'hidden'
  donhang.style.display = 'block';

  showListDonHang(accounts[remember].hoadon)
  capNhatThongKe();
}

function dongDonHang(){
  const donhang = document.getElementById('donhang_khachhang');
  document.body.style.overflow = 'auto'
  if (donhang) {
      donhang.style.display = 'none';
  }
  window.location.href = "index.html"
}

// chi tiết đơn hàng
function hienChiTiet(current) {
  const hoadonID = current.id
  const currentHoaDon = accounts[remember].hoadon[hoadonID]
  const chitiet = document.getElementById('chitietdon')
  const list = document.querySelector('#chitietdon>div>#container')
  list.innerHTML = ''

  if (chitiet) {
      chitiet.style.display = 'block';
      currentHoaDon.items.forEach(item => {
        let newItem = document.createElement('div')
        newItem.setAttribute('class', 'hienSP')
        newItem.innerHTML = `
            <div class="imgSP" style="background-image: url(${item.image})"></div>
            <div class="ten-SL">
                <h4 style="margin-bottom: 10px">${item.name}</h4>
                <span><b>Số lượng: </b>${item.quantity}</span>
            </div>
            <div class="gia">${item.price} VNđ</div>
        `
        list.appendChild(newItem)
      })
      list.nextElementSibling.innerHTML = `
          <div style="margin-bottom: 15px; margin-left: 10px; margin-top: 20px;"><b>Phương thức thanh toán: </b>${currentHoaDon.paymentMethod}</div>
          <div style="margin-bottom: 15px; margin-left: 10px;"><b>Tổng tiền: </b>${hoadonGetTotal(currentHoaDon.items).toLocaleString()}VNđ</div>
      `
  }
}

function dongChiTiet() {
  const chitiet = document.getElementById('chitietdon');
  if (chitiet) {
      chitiet.style.display = 'none';
  }
}
// Hàm cập nhật thống kê mua hàng
function capNhatThongKe() {
  const accounts = JSON.parse(localStorage.getItem('accounts')); // Lấy dữ liệu từ localStorage

  if (!accounts || accounts.length === 0) {
      console.log("Không có dữ liệu người dùng.");
      return;
  }

  let tongTien = 0;
  let tongSoLuong = 0;
  let thongKeTheoNgay = {};
  let thongKeTheoThang = {};

  console.log("Dữ liệu tài khoản:", accounts);

  accounts.forEach(account => {
      account.hoadon.forEach(hoaDon => {
          console.log("Xử lý hóa đơn:", hoaDon);

          if (hoaDon.status !== 'e' && hoaDon.status !== 'f') { // Chỉ tính các đơn hàng chưa xử lý
              hoaDon.items.forEach(item => {
                  tongTien += item.price * item.quantity;
                  tongSoLuong += item.quantity;
              });

              const ngay = new Date();
              const ngayString = `${ngay.getDate()}/${ngay.getMonth() + 1}/${ngay.getFullYear()}`;
              thongKeTheoNgay[ngayString] = (thongKeTheoNgay[ngayString] || 0) + 1;

              const thangString = `${ngay.getMonth() + 1}/${ngay.getFullYear()}`;
              thongKeTheoThang[thangString] = (thongKeTheoThang[thangString] || 0) + 1;
          }
      });
  });

  console.log("Thống kê theo ngày:", thongKeTheoNgay);
  console.log("Thống kê theo tháng:", thongKeTheoThang);

  // Hiển thị thống kê
  document.getElementById("tongtien").innerText = `Tổng tiền: ${tongTien.toLocaleString()} VND`;
  document.getElementById("tongsoluong").innerText = `Tổng số sản phẩm: ${tongSoLuong}`;

  let thongKeNgayText = '';
  for (let ngay in thongKeTheoNgay) {
      thongKeNgayText += `${ngay}: ${thongKeTheoNgay[ngay]} đơn hàng<br>`;
  }
  document.getElementById("thongke-theo-ngay").innerHTML = `Thống kê theo ngày:<br>${thongKeNgayText}`;

  let thongKeThangText = '';
  for (let thang in thongKeTheoThang) {
      thongKeThangText += `${thang}: ${thongKeTheoThang[thang]} đơn hàng<br>`;
  }
  document.getElementById("thongke-theo-thang").innerHTML = `Thống kê theo tháng:<br>${thongKeThangText}`;
}


function kiemtraTK(account) {
  if (account.status === "ban") { 
    // Thông báo tài khoản bị khóa
    alert("Tài khoản đã bị khóa. Bạn không thể sử dụng tài khoản này.");
    
    // Hiển thị hộp thoại hỏi người dùng có muốn đăng xuất không
    const confirmLogout = confirm("Bạn có muốn đăng xuất không?");
    
    if (confirmLogout) {
      // Thực hiện đăng xuất tài khoản
      logoutAccount();

      // Thông báo
      alert("Bạn đã được đăng xuất.");
    } else {
      // Nếu không đăng xuất, vô hiệu hóa giao diện
      disableInterface();
      alert("Tài khoản bị khóa. Bạn không thể tiếp tục thao tác.");
    }
    
    return false;
  }
  return true;
}

// Hàm đăng xuất
function logoutAccount() {
  console.log("Đăng xuất tài khoản");
  localStorage.removeItem("rememberAcc");
  window.location.href = "index.html";
}
// Hàm vô hiệu hóa giao diện
function disableInterface() {

  document.body.style.pointerEvents = "none";
  document.body.style.opacity = "0.5";
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

// Hàm vô hiệu hóa giao diện
function disableInterface() {
  document.body.style.pointerEvents = "none";
  document.body.style.opacity = "0.5";
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}