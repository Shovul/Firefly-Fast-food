accounts = JSON.parse(localStorage.getItem('accounts'))
remember = localStorage.getItem('rememberAcc')
function showQLMenu() {
  let menu = document.querySelector(".menu")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  menu.classList.add("active")
  showMenuList();
}
function showQLOrder() {
  let order = document.querySelector(".order")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  order.classList.add("active")
  showOrderList();
}
window.addEventListener('click', (e) => {
  if(document.querySelector('.bg#blur').contains(e.target)) {
    closeOrderInfo() 
  }
})  
function showMenuList() {
  var menu_list = document.querySelector(".menu-list")

  if (menu != null) {
    menu.forEach(items => {
      const listName = document.createElement('div')
      const listPrice = document.createElement('div')
      const listPicture = document.createElement('div')
      const listType = document.createElement('div')
      const listDelete = document.createElement('div')
      const listEdit = document.createElement('div')
    
      listName.innerHTML = items.name
      listPrice.innerHTML = items.price.toLocaleString()
      listPicture.style.backgroundImage = `url(${items.image})`
      listType.innerHTML = items.type
      listDelete.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      `
      listDelete.setAttribute('class', 'menu_edit')
      listDelete.setAttribute('id', items.id)
      listDelete.setAttribute('onclick', 'deleteFood(this)')
      
      listEdit.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
      `
      listEdit.setAttribute('class', 'menu_edit')
      listEdit.setAttribute('id', items.id)
      listEdit.setAttribute('onclick', 'editMenu(this)')

      menu_list.appendChild(listName)
      menu_list.appendChild(listPrice)
      menu_list.appendChild(listType)
      menu_list.appendChild(listPicture)
      menu_list.appendChild(listDelete)
      menu_list.appendChild(listEdit)

    });
  }
}


function showAccountList() {
  var accList = document.querySelector(".account-list")

  accounts.forEach(account => {
    const listName = document.createElement('div')
    const listEmail = document.createElement('div')
    const listPass = document.createElement('div')
    const listPhone = document.createElement('div')
    const listGender = document.createElement('div')
    const listDelete = document.createElement('div')
    const listEdit = document.createElement('div')

    if(account.status == 'ban') {
      listName.style.backgroundColor = '#FF003F'
      listEmail.style.backgroundColor = '#FF003F'
      listPass.style.backgroundColor = '#FF003F'
      listPhone.style.backgroundColor = '#FF003F'
      listGender.style.backgroundColor = '#FF003F'
      listDelete.style.backgroundColor = '#FF003F'
      listEdit.style.backgroundColor = '#FF003F'
    }

    listName.innerHTML = account.name
    listEmail.innerHTML = account.email
    listPass.innerHTML = account.pass
    listPhone.innerHTML = account.phone
    listGender.innerHTML = account.gender
    listDelete.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      ` 
    listDelete.setAttribute('class', 'list_edit')
    listDelete.setAttribute('id', account.id)
    listDelete.setAttribute('onclick', 'deleteAccount(this)')
    
    listEdit.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
    `
    listEdit.setAttribute('class', 'list_edit')
    listEdit.setAttribute('id', account.id)
    listEdit.setAttribute('onclick', 'editAccount(this)')

    accList.appendChild(listName)
    accList.appendChild(listEmail)
    accList.appendChild(listPass)
    accList.appendChild(listPhone)
    accList.appendChild(listGender)
    accList.appendChild(listDelete)
    accList.appendChild(listEdit)

  });
} 

function showOrderList() {
  const container = document.querySelector('.order-list');
  container.innerHTML = `
    <div class="order_title">Mã người dùng</div>
    <div class="order_title">Tên tài khoản</div>
    <div class="order_title" style="cursor: pointer;" onclick="sortOrder(this)">Thời gian đặt</div>
    <div class="order_title">Địa chỉ</div>
    <div class="order_title" style="cursor: pointer;" onclick="sortOrder(this)">Trạng thái</div>
    <div class="order_title">Chi tiết hóa đơn</div>
  `;

  accounts.forEach((account, accountIndex) => {
    account.hoadon.forEach((order, orderIndex) => {
      const accId = document.createElement('div');
      const accName = document.createElement('div');
      const orderTime = document.createElement('div');
      const address = document.createElement('div');
      const status = document.createElement('div');
      const info = document.createElement('div');

      accId.innerHTML = `${account.id}`;
      accName.innerHTML = `${account.name}`;
      orderTime.innerHTML = `${new Date(order.orderTime).toLocaleString()}`;  // Định dạng thời gian cho dễ đọc
      address.innerHTML = `${order.info.address}`;

      // Tạo select trạng thái với giá trị mặc định
      status.innerHTML = `
          <select class="status-select" id="${order.id}" onchange="changeValue(this, ${accountIndex}, ${orderIndex})">
            <option value="a">Chưa xử lý</option>
            <option value="b">Đang làm món</option>
            <option value="c">Đang giao</option>
            <option value="d">Đã giao</option>
            <option value="e">Đã nhận hàng</option>
            <option value="f">Hủy đơn</option>
          </select>
      `;
      status.querySelector('select').value = order.status;  // Thiết lập giá trị ban đầu cho select

      info.innerHTML = `<button class="info-btn" id="${order.id}" onclick="showOrderInfo(this)">Xem thông tin</button>`;

      // Thêm các phần tử vào container
      container.appendChild(accId);
      container.appendChild(accName);
      container.appendChild(orderTime);
      container.appendChild(address);
      container.appendChild(status);
      container.appendChild(info);
    });
  });
}

function changeValue(acc) {
  switch(acc.value) {
    case "a":
      accounts[acc.classList].hoadon[acc.id].status = "a"
      break
    case "b":
      accounts[acc.classList].hoadon[acc.id].status = "b"
      break
    case "c":
      accounts[acc.classList].hoadon[acc.id].status = "c"
      break
    case "d":
      accounts[acc.classList].hoadon[acc.id].status = "d"
      break
    case "e":
      accounts[acc.classList].hoadon[acc.id].status = "e"
      break
    case "f":
      accounts[acc.classList].hoadon[acc.id].status = "f"
      break

    default:
      break
  }
  localStorage.setItem('accounts', JSON.stringify(accounts))
}
function calculateTotalTime(time) {
  getTime = time.split(':')
  return getTime[0] * 3600 + getTime[1] * 60 + getTime[2]
}
function compareTime(a, b) {
  time1 = a.split("-")
  time2 = b.split("-")
  date1 = time1[0].split("/")
  date2 = time2[0].split("/")

  if(date1[2] < date2[2]) {
    return -1
  }
  if(date1[1] < date2[1]) {
    return -1
  }
  if(date1[0] < date2[0]) {
    return -1
  }
  return calculateTotalTime(time1[1]) < calculateTotalTime(time2[1]) ? -1 : 1
}
function sortOrder(sort) {
  const sortBy = sort.textContent
  const container = document.querySelector('.order-list')
  container.innerHTML = `
    <div class="order_title">Mã người dùng</div>
    <div class="order_title">Tên tài khoản</div>
    <div class="order_title" style="cursor: pointer;" onclick="sortOrder(this)">Thời gian đặt</div>
    <div class="order_title">Địa chỉ</div>
    <div class="order_title" style="cursor: pointer;" onclick="sortOrder(this)">Trạng thái</div>
    <div class="order_title">Chi tiết hóa đơn</div>
    `
    
  if(sortBy == "Trạng thái") {
    let list = []
    accounts.forEach(account => {
      account.hoadon.forEach(order => {
        order.accountID = account.id
        list.push(order)
      });
    })
    list = list.sort((a, b) => {
      return a.status < b.status ? -1 : 1;
    })
    
    list.forEach(item => {
      const accId = document.createElement('div')
      const accName = document.createElement('div')
      const orderTime = document.createElement('div')
      const address = document.createElement('div')
      const status = document.createElement('div')
      const info = document.createElement('div')
      accId.innerHTML = `${item.id}`
      accName.innerHTML = `${accounts[item.accountID].name}`
      orderTime.innerHTML = `${item.orderTime}`
      address.innerHTML = `${item.info.address}`
      status.innerHTML = `
          <select class="${item.accountID}" id="${item.id}" onchange="changeValue(this)">
            <option value="a">Chưa xử lý</option>
            <option value="b">Đang làm món</option>
            <option value="c">Đang giao</option>
            <option value="d">Đã giao</option>
            <option value="e">Đã nhận hàng</option>
          </select>
      `
      status.firstElementChild.value = item.status
      info.innerHTML = `<button class="${item.accountID}" id="${item.id}" onclick="showOrderInfo(this)">Xem thông tin</button>`

      container.appendChild(accId)
      container.appendChild(accName)
      container.appendChild(orderTime)
      container.appendChild(address)
      container.appendChild(status)
      container.appendChild(info)
    })
  }
  else {
    let list = []
    accounts.forEach(account => {
      account.hoadon.forEach(order => {
        order.accountID = account.id
        list.push(order)
      });
    })
    list = list.sort((a, b) => {
      return compareTime(a.orderTime, b.orderTime)
    })
    list.forEach(item => {
      const accId = document.createElement('div')
      const accName = document.createElement('div')
      const orderTime = document.createElement('div')
      const address = document.createElement('div')
      const status = document.createElement('div')
      const info = document.createElement('div')
      accId.innerHTML = `${item.id}`
      accName.innerHTML = `${accounts[item.accountID].name}`
      orderTime.innerHTML = `${item.orderTime}`
      address.innerHTML = `${item.info.address}`
      status.innerHTML = `
          <select class="${item.accountID}" id="${item.id}" onchange="changeValue(this)">
            <option value="a">Chưa xử lý</option>
            <option value="b">Đang làm món</option>
            <option value="c">Đang giao</option>
            <option value="d">Đã giao</option>
            <option value="e">Đã nhận hàng</option>
          </select>
      `
      status.firstElementChild.value = item.status
      info.innerHTML = `<button class="${item.accountID}" id="${item.id}" onclick="showOrderInfo(this)">Xem thông tin</button>`

      container.appendChild(accId)
      container.appendChild(accName)
      container.appendChild(orderTime)
      container.appendChild(address)
      container.appendChild(status)
      container.appendChild(info)
    })
  }
}

const orderInfo = document.getElementById('orderInfo')
function closeOrderInfo() {
  orderInfo.style.transform = 'scale(0)'
  document.querySelector('.bg#blur').style.display = 'none'
  location.reload()
}
function createHoadonItem(items) {
  let display = document.createElement('ul')

  items.forEach(item => {
    let list = document.createElement('li')
    list.innerHTML = `
        <div class="image" style="background-image: url(${item.image});"></div>
        <div>
            <div>${item.name}</div>
            <div>${item.quantity}</div>
            <div>${item.price}</div>
        </div>
    `
    display.appendChild(list)
  })
  console.log(display)
  return display
}

function showOrderInfo(acc) {
  accID = acc.classList
  orderID = acc.id
  order = accounts[accID].hoadon[orderID]

  document.querySelector('.bg#blur').style.display = 'block'
  orderInfo.style.transform = 'scale(1)'

  orderInfo.innerHTML = `
        <h1>
          <span>Người nhận: ${order.info.name}</span>
          <span>Ngày đặt: ${order.orderTime.split("-")[0]}</span>
        </h1>
        <div>
            <div><b>Số điện thoại:</b> ${order.info.phone}</div>
            <div><b>Địa chỉ:</b> ${order.info.address}</div>
        </div>
        <div><b>Phương thức trả:</b> ${order.paymentMethod}</div>
        <div class="time">
            <span><b>Thời gian đặt:</b> ${order.orderTime.split("-")[1]}</span>
            <span><b>Thời gian dự kiến tới:</b> ${order.arriveTime}</span>
        </div>
        <div class="food_price" onclick="showOrderFood()">
            <span>Sản phẩm</span>
            <span>Tổng số tiền: ${hoadonGetTotal(order.items).toLocaleString()} VNđ</span>
        </div>
        <div class="list-food">
        </div>
        <select name="status" id="${order.id}" class="${order.accountID}" onchange="changeValue(this)">
            <option value="a">Chưa xử lý</option>
            <option value="b">Đang làm món</option>
            <option value="c">Đang giao</option>    
            <option value="d">Đã giao</option>
            <option value="e">Đã nhận hàng</option>
            <option value="f">Hủy đơn</option>
        </select>
  `
  document.querySelector("#orderInfo > select").value = order.status
  document.querySelector('.list-food').appendChild(createHoadonItem(order.items))
}
function showTaikhoan() {
  let taikhoan = document.querySelector(".tai_khoan")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  taikhoan.classList.add("active")

  showAccountList();
}
function deleteAccount(item) {
  var confirm = window.confirm("Bạn có chắc là muốn xóa tài khoản?")
  if(confirm) {
    accounts.splice(item.id, 1);
    if (remember == item.id) {
      localStorage.removeItem('rememberAcc')
    }
    for(let i=0; i<accounts.length; i++) {
      accounts[i].id = i
    }
    localStorage.setItem('accounts', JSON.stringify(accounts))
    location.reload()
  }
}
function deleteFood(items) {
  var confirm = window.confirm("Bạn có chắc là muốn xóa món?")
  if(confirm) {
    menu.splice(items.id, 1);
    for(let i=0; i<menu.length; i++) {
      menu[i].id = i
    }
    localStorage.setItem('menu', JSON.stringify(menu))
    location.reload()
  }
}

function editMenu(item) {
  const getItem = item.id
  const editMenu = document.getElementById("edit_menu")
  document.body.style.overflow = 'hidden'
  editMenu.style.transform = "scale(1)"
  const editForm = editMenu.lastElementChild
  editForm.setAttribute('onsubmit', `editItem(${getItem})`)
  editForm["name"].placeholder = menu[getItem].name
  editForm["price"].placeholder = menu[getItem].price
  editForm["description"].textContent = menu[getItem].description
  
  for(i=1; i<editForm["type"].length; i++) {
    if (editForm["type"][i].value == menu[getItem].type) {
      editForm["type"].selectedIndex = i
      return true
    }
  }
}
function exitEditMenu() {
  const editMenu = document.getElementById("edit_menu")
  editMenu.style.transform = "scale(0)"
  const editForm = editMenu.lastElementChild
  editForm["name"].value = ""
  document.body.style.overflow = 'auto'
  document.getElementById("right-edit").style.background = 'none'
  document.getElementById("right-edit").style.backgroundRepeat = 'no-repeat'
  document.getElementById("right-edit").style.backgroundSize = 'cover'
  document.getElementById("right-edit").style.backgroundPosition = 'center'
  document.getElementById("right-edit").firstElementChild.style.display = 'block'
}

let edit_form = document.getElementById('edit-sp-form')
const edit_image_holder = document.getElementById('right-edit')
const edit_food_input = edit_form["image"]
edit_food_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    food_image = reader.result;
    edit_image_holder.style.backgroundImage = `url(${food_image})`
    
    edit_image_holder.firstElementChild.style.display = 'none';
  })
  reader.readAsDataURL(this.files[0])
})
edit_form.addEventListener('submit', function(e){
  e.preventDefault()
})
function editItem(currentItem) {
  const newName = edit_form["name"]
  const newPrice = edit_form["price"]
  const newImage = food_image
  const newType = edit_form["type"]
  const newGroup = newType.querySelector('option:checked').parentElement
  const newDescription = edit_form["description"]
  if(newName.value !== '') {
    menu[currentItem].name = newName.value
  }

  if(newPrice.value !== '')
    menu[currentItem].price = newPrice.value

  if(newImage != null)
    menu[currentItem].image = newImage

  menu[currentItem].description = newDescription.value
  menu[currentItem].group = newGroup.label
  menu[currentItem].type = newType.value


  localStorage.setItem('menu', JSON.stringify(menu))
  location.reload()
}

// sua tai khoan
function changeAccountInfo(type, change, accountID) {
  alert(accounts[accountID].type)
}
function changeInputAccounts(input) {
  input.value = ""
  input.placeholder = "Đã sửa"
}
function editAccount(current) {
  const background = document.querySelector('#blur.bg')
  background.style.display = 'block'
  const editMenu = document.getElementById("edit_account")
  editMenu.style.transform = 'scale(1)'
  const button = document.querySelectorAll("#edit_account>div>button")
  const input = document.querySelectorAll("#edit_account>div>input")
  getAccount = current.id
  avatar = document.getElementById('avatar_image')
  avatar.style.backgroundImage = `url(${accounts[getAccount].avatar})`
  input[0].placeholder = accounts[getAccount].name
  input[1].placeholder = accounts[getAccount].email
  input[2].placeholder = accounts[getAccount].pass
  input[3].placeholder = accounts[getAccount].phone
  if(accounts[getAccount].status == "active") {
    button[4].innerHTML = "Khóa tài khoản"
  }
  else {
    button[4].innerHTML = "Mở khóa tài khoản"
  }
  
  avatar.addEventListener('click', () => {
    let confirm = window.confirm("Xóa ảnh của người dùng?")
    if(confirm) {
      accounts[getAccount].avatar = 'images/Icons/default.svg'
      avatar.style.backgroundImage = 'url(images/Icons/default.svg)'
      localStorage.setItem('accounts', JSON.stringify(accounts))
    }
  })
  button[0].addEventListener('click', () => {
    if(input[0].value == '') {
      alert('Xin hãy điền tên')
      return false
    }
    for(let i=0; i<accounts.length; i++) {
      if(accounts[i].name == input[0].value) {
        alert('Tên bị trùng')
        return false
      }
    }
    accounts[getAccount].name = input[0].value
    changeInputAccounts(input[0])
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
    changeInputAccounts(input[1])
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
    changeInputAccounts(input[2])
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
    changeInputAccounts(input[3])
    localStorage.setItem('accounts', JSON.stringify(accounts))
  })
  button[4].addEventListener('click', () => {
    if(accounts[getAccount].status == "active") {
      let confirm = window.confirm("Khoá tài khoản này?")
      if(confirm) {
        accounts[getAccount].status = "ban"
        alert("Tài khoản đã bị khóa")
        button[4].innerHTML = "Mở khóa tài khoản"
      }
    }
    else {
      accounts[getAccount].status = "active"
        alert("Tài khoản đã được mở khóa")
      button[4].innerHTML = "Khóa tài khoản"
    }
    localStorage.setItem('accounts', JSON.stringify(accounts))
  })
}
function exitEditAccount() {
  let editMenu = document.getElementById("edit_account")
  editMenu.style.transform = 'scale(0)'
  location.reload()
}
function openAddAccount() {
  const addAccount = document.getElementById("add_account")
  addAccount.style.transform = "scale(1)"
  document.body.style.overflow = 'hidden'
  document.querySelector('#blur.bg').style.display = "block"
}
function exitAddAccount() {
  document.getElementById("add_account").style.transform = "scale(0)"
  document.body.style.overflow = 'auto'
  document.querySelector('#blur.bg').style.display = "none"
  
}
const addAccountForm = document.querySelector("#add_account > form")
// let avatar_image
// addAccountForm["avatar"].addEventListener('change', function() {
//   const label = addAccountForm["avatar"].previousSibling
//   label.firstElementChild.style.display = 'none'
//   const reader = new FileReader()
//   reader.addEventListener('load', function() {
//     avatar_image = reader.result
//     label.style.backgroundImage = `url(${avatar_image})`
//   })
//   reader.readAsDataURL(this.files[0])
// })
addAccountForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let check = true
  newAccount = {
    id: accounts.length,
    name: addAccountForm["name"].value,
    email: addAccountForm["email"].value,
    pass: addAccountForm["password"].value,
    phone: addAccountForm["phone"].value,
    gender: null,
    avatar: "images/Icons/default.svg",
    status: "active",
    addresses: [],
    hoadon: [],
    cart: []
  }
  if (newAccount.name == "" || newAccount.name == null) {
    addAccountForm["name"].previousSibling.previousSibling.style.transform = 'translateY(0)'
    addAccountForm["name"].previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      addAccountForm["name"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      addAccountForm["name"].previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if (newAccount.email == "" || newAccount.email == null || !(newAccount.email.includes("@") && newAccount.email.includes(".com"))){
    addAccountForm["email"].previousSibling.previousSibling.style.transform = 'translateY(0)'
    addAccountForm["email"].previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      addAccountForm["email"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      addAccountForm["email"].previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if (newAccount.pass == "" || newAccount.pass == null) {
    addAccountForm["password"].previousSibling.previousSibling.style.transform = 'translateY(0)'
    addAccountForm["password"].previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      addAccountForm["password"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      addAccountForm["password"].previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if (newAccount.phone == "" || newAccount.phone == null || newAccount.phone.length != 10) {
    addAccountForm["phone"].previousSibling.previousSibling.style.transform = 'translateY(0)'
    addAccountForm["phone"].previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      addAccountForm["phone"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      addAccountForm["phone"].previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  for(let i=0; i<accounts.length; i++) {
    if(newAccount.name == accounts[i].name) {
      addAccountForm["name"].previousSibling.previousSibling.setAttribute('missing-input', 'Tên khách hàng bị trùng')
      addAccountForm["name"].previousSibling.previousSibling.style.transform = 'translateY(0)'
      addAccountForm["name"].previousSibling.previousSibling.style.opacity = 1 
      window.setTimeout(function() {
        addAccountForm["name"].previousSibling.previousSibling.setAttribute('missing-input', 'Hãy điền tên khách hàng')
        addAccountForm["name"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
        addAccountForm["name"].previousSibling.previousSibling.style.opacity = 0
      },2000)
      check = false
    }
    if(newAccount.email == accounts[i].email) {
      addAccountForm["email"].previousSibling.previousSibling.setAttribute('missing-input', 'Email bị trùng')
      addAccountForm["email"].previousSibling.previousSibling.style.transform = 'translateY(0)'
      addAccountForm["email"].previousSibling.previousSibling.style.opacity = 1 
      window.setTimeout(function() {
        addAccountForm["email"].previousSibling.previousSibling.setAttribute('missing-input', 'Hãy điền email khách hàng')
        addAccountForm["email"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
        addAccountForm["email"].previousSibling.previousSibling.style.opacity = 0
      },2000)
      check = false
    }
    if(newAccount.phone == accounts[i].phone) {
      addAccountForm["phone"].previousSibling.previousSibling.setAttribute('missing-input', 'Số điện thoại bị trùng')
      addAccountForm["phone"].previousSibling.previousSibling.style.transform = 'translateY(0)'
      addAccountForm["phone"].previousSibling.previousSibling.style.opacity = 1 
      window.setTimeout(function() {
        addAccountForm["phone"].previousSibling.previousSibling.setAttribute('missing-input', 'Hãy điền số điện thoại khách hàng')
        addAccountForm["phone"].previousSibling.previousSibling.style.transform = 'translateY(-15px)'
        addAccountForm["phone"].previousSibling.previousSibling.style.opacity = 0
      },2000)
      check = false
    }
    if(check == false) return false
  }
  if(check) {
    accounts.push(newAccount)
    localStorage.setItem('accounts', JSON.stringify(accounts))
    location.reload()
  }
})

function showOrderFood() {
  document.getElementsByClassName('list-food')[0].classList.toggle('show')
}

