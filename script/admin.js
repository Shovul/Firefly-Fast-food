accounts = JSON.parse(localStorage.getItem('accounts'))
remember = localStorage.getItem('rememberAcc')
document.querySelector('.admin-page > #sidebar > #admin-nav > li > span').innerHTML = accounts[remember].name
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
function showTKKhachHang() {
  let customers = document.querySelector(".customers-stats")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  customers.classList.add("active")
  showListKhachHang()
}
function showTKMatHang() {
  let items = document.querySelector(".items-stats")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  items.classList.add("active")
  listThongKeSanPham()
}
window.addEventListener('click', (e) => {
  if(document.querySelector('.bg#blur').contains(e.target)) {
    closeOrderInfo() 
    closeHoaDonSP()
    closeHoaDonTK()
    exitAddAccount()
    exitAddMenu()
    exitEditAccount()
    exitEditMenu()
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

function getRole(status) {
  switch(status) {
    case 'khach':
      return "Khách hàng"
    case 'admin':
      return "Admin"
    case 'taikhoan':
      return "Quản lý tài khoản"
    case 'menu':
      return "Quản lý menu"
    case 'hoadon':
      return "Quản lý hóa đơn"
    case 'thongke':
      return "Quản lý thống kê"
    case 'ban':
      return "Đã bị khóa"
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
    const listRole = document.createElement('div')
    const listDelete = document.createElement('div')
    const listEdit = document.createElement('div')

    listName.innerHTML = account.name
    listEmail.innerHTML = account.email
    listPass.innerHTML = account.pass
    listPhone.innerHTML = account.phone
    listGender.innerHTML = account.gender
    listRole.innerHTML = getRole(account.status)
    listDelete.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      ` 
    listDelete.setAttribute('class', 'list_edit')
    listDelete.setAttribute('id', account.id)
    listDelete.setAttribute('onclick', 'deleteAccount(this)')
    
    listEdit.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
    `

    
    if(account.status == 'ban') {
      listName.innerHTML += ' (BANNED)'
      listName.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listEmail.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listPass.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listPhone.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listGender.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listRole.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listDelete.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'
      listEdit.style.background = 'linear-gradient(25deg, rgb(214, 76, 127), rgb(238, 71, 88) 50%)'

      listName.style.color = '#800000'
      listEmail.style.color = '#800000'
      listPass.style.color = '#800000'
      listPhone.style.color = '#800000'
      listGender.style.color = '#800000'
      listRole.style.color = '#800000'
      listDelete.style.color = '#800000'
      listEdit.style.color = '#800000'
    }

    listEdit.setAttribute('class', 'list_edit')
    listEdit.setAttribute('id', account.id)
    listEdit.setAttribute('onclick', 'editAccount(this)')

    accList.appendChild(listName)
    accList.appendChild(listEmail)
    accList.appendChild(listPass)
    accList.appendChild(listPhone)
    accList.appendChild(listGender)
    accList.appendChild(listRole)
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

  accounts.forEach(account => {
    account.hoadon.forEach(order => {
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
          <select class="${account.id}" id="${order.id}" onchange="changeValue(this)">
            <option value="a">Chưa xử lý</option>
            <option value="b">Đang làm món</option>
            <option value="c">Đang giao</option>
            <option value="d">Đã giao</option>
            <option value="e">Đã nhận hàng</option>
            <option value="f">Hủy đơn</option>
          </select>
      `;
      status.querySelector('select').value = order.status;  // Thiết lập giá trị ban đầu cho select

      info.innerHTML = `<button class="${account.id}" id="${order.id}" onclick="showOrderInfo(this)">Xem thông tin</button>`;

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
  if(date1[0] > date2[0]) {
    return 1
  }
  if(date1[1] > date2[1]) {
    return 1
  }
  return calculateTotalTime(time1[1]) < calculateTotalTime(time2[1]) ? -1 : 1
}
function compareDate(a, b) {
  date1 = a.split("/")
  date2 = b.split("-")

  if(date1[2] < date2[0]) {
    return -1
  }
  if(date1[1] < date2[1]) {
    return -1
  }
  if(date1[0] < date2[2]) {
    return -1
  }
  return 1
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
      return Date.parse(a) - Date.parse(b)
    })
    console.log(list)
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
  if(location.href.split('?')[1] === 'qldh') {
    orderInfo.style.transform = 'scale(0)'
    document.querySelector('.bg#blur').style.display = 'none'
    document.body.style.overflow = 'auto'
    location.reload()
  }
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
  return display
}

function showOrderInfo(acc) {
  accID = acc.classList
  orderID = acc.id
  order = accounts[accID].hoadon[orderID]

  document.querySelector('.bg#blur').style.display = 'block'
  document.body.style.overflow = 'hidden'
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
  document.querySelector('.bg#blur').style.display = 'block'
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
  document.querySelector('.bg#blur').style.display = 'none'
  document.body.style.overflow = 'auto'
  document.getElementById("right-edit").style.background = 'none'
  document.getElementById("right-edit").style.backgroundRepeat = 'no-repeat'
  document.getElementById("right-edit").style.backgroundpze = 'cover'
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
  document.body.style.overflow = 'hidden'
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
  document.body.style.overflow = 'auto'
  // location.reload()
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
    status: addAccountForm["chucvu"].value,
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

let foodStats = []
menu.forEach(food => {
  const newFood = food
  newFood.quantity = 0
  newFood.total = 0
  newFood.hoadonList = []
  foodStats.push(newFood)
})

function findBestSeller(list) {
  let mostBought = 0
  let secondBought = 0
  let thirdBought = 0

  for(let i=0; i<list.length; i++) {
    if(list[mostBought].quantity < list[i].quantity) {
      mostBought = i
    }
  }
  if(list[mostBought].quantity != 0)
    menu[list[mostBought].id].rank = 1
  list.splice(mostBought, 1)
  for(let i=0; i<list.length; i++) {
    if(list[secondBought].quantity < list[i].quantity) {
      secondBought = i
    }
  }
  if(list[secondBought].quantity != 0)
    menu[list[secondBought].id].rank = 2
  list.splice(secondBought, 1)
  for(let i=0; i<list.length; i++) {
    if(list[thirdBought].quantity < list[i].quantity) {
      thirdBought = i
    }
  }
  if(list[thirdBought].quantity != 0)
    menu[list[thirdBought].id].rank = 3

  localStorage.setItem('menu', JSON.stringify(menu))
}
function listThongKeSanPham() {
  menu.forEach(food => {
    accounts.forEach(account => {
      account.hoadon.forEach(order => {
        if(order.status === 'e') {
          order.items.forEach(item => {
            if(food.id === item.id) {
              foodStats[foodStats.findIndex(foodStat => foodStat.id == item.id)].quantity += item.quantity
              foodStats[foodStats.findIndex(foodStat => foodStat.id == item.id)].total += item.quantity*item.price
              foodStats[foodStats.findIndex(foodStat => foodStat.id == item.id)].hoadonList.push(order)
            }
          })
        }
      })
    })  
  });
  const container = document.getElementsByClassName('items-stats-list')[0]
  foodStats.forEach(stat => {
    const itemID = document.createElement('div')
    const itemName = document.createElement('div')
    const soldQuantity = document.createElement('div')
    const revenue = document.createElement('div')
    const check = document.createElement('div')
    itemID.innerHTML = `${stat.id}`
    itemName.innerHTML = `${stat.name}`
    soldQuantity.innerHTML = `${stat.quantity}`
    revenue.innerHTML = `${stat.total.toLocaleString()}` + (stat.total === 0 ? '' : "VND")
    check.innerHTML = `<button onclick="showHoaDonSP(${stat.id})">Xem</button>`

    container.appendChild(itemID)
    container.appendChild(itemName)
    container.appendChild(soldQuantity)
    container.appendChild(revenue)
    container.appendChild(check)
  })
  let mostRev = 0
  let leastRev = 0
  let mostBought = 0
  let leastBought = 0
  for(let i=1; i<foodStats.length; i++) {
    if(foodStats[mostRev].total < foodStats[i].total) {
      mostRev = i
    }
    if(foodStats[leastRev].total > foodStats[i].total) {
      leastRev = i
    }
    if(foodStats[mostBought].quantity < foodStats[i].quantity) {
      mostBought = i
    }
    if(foodStats[leastBought].quantity > foodStats[i].quantity) {
      leastBought = i
    }
  }
  const ranks = document.querySelectorAll('.items-stats > #ranking > div')
  ranks[0].innerHTML += foodStats[mostRev].name + ", " + foodStats[mostRev].total.toLocaleString() + (foodStats[mostRev].total.total === 0 ? '' : "VND")
  ranks[1].innerHTML += foodStats[leastRev].name + ", " + foodStats[leastRev].total.toLocaleString() + (foodStats[leastRev].total === 0 ? '' : "VND")
  ranks[2].innerHTML += foodStats[mostBought].name + ", " + foodStats[mostBought].quantity
  ranks[3].innerHTML += foodStats[leastBought].name + ", " + foodStats[leastBought].quantity

  menu.map(item => delete item.rank)
  const foods = foodStats.filter(foods => foods.group == 'Thức ăn')
  const drinks = foodStats.filter(foods => foods.group == 'Đồ uống')
  const desserts = foodStats.filter(foods => foods.group == 'Tráng miệng')
  
  findBestSeller(foods)
  findBestSeller(drinks)
  findBestSeller(desserts)
}
function showHoaDonSP(id) {
  document.getElementById('hoadonSP').style.transform = 'scale(1)'
  const list = document.querySelector('#hoadonSP>.container')

  document.querySelector('.bg#blur').style.display = 'block'
  document.body.style.overflow = 'hidden'

  foodStats[id].hoadonList.forEach((order, index) => {
    if(order.status === 'e') {
      const orders = document.createElement('div')
      orders.classList.add('order')
      orders.innerHTML = `
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
            <div class="food_price" onclick="showCurrentOrderFood(${id}, ${index})">
                <span>Sản phẩm</span>
                <span>Tổng số tiền: ${hoadonGetTotal(order.items).toLocaleString()} VNđ</span>
            </div>
            <div class="list-food">
            </div>
      `
      list.appendChild(orders)
    }
  })
}
function closeHoaDonSP() {
  if(location.href.split('?')[1] == 'tkmh') {
    document.getElementById('hoadonSP').style.transform = 'scale(0)'
    document.body.style.overflow = 'auto'
    document.querySelector('.bg#blur').style.display = 'none'
    document.querySelector('#hoadonSP>.container').innerHTML = ''
  }
}
function showCurrentOrderFood(itemID, orderID) {
  const order = document.querySelectorAll('#hoadonSP > .container > .order > .list-food')
  order[orderID].classList.toggle('show')
  
  const list = createHoadonItem(foodStats[itemID].hoadonList[orderID].items)
  order[orderID].innerHTML = `
    <ul>${list.innerHTML}</ul>
  `
}
function showCurrentCustomerOrder(accountID, orderID, index) {
  const order = document.querySelectorAll('#hoadonSP > .container > .order > .list-food')
  order[index].classList.toggle('show')
  
  const list = createHoadonItem(accounts[accountID].hoadon[orderID].items)
  order[index].innerHTML = `
    <ul>${list.innerHTML}</ul>
  `
}
function calculateCustomerRev(hoadon) {
  let sum = 0
  hoadon.forEach(order => {
    sum += hoadonGetTotal(order.items)
  });
  return sum
}
const date = document.querySelector('.customers-stats form')
let from = date['from']
// let to = date['to']
from.addEventListener('change', () => {
  showListKhachHang()
})
// to.addEventListener('change', () => {
//   showListKhachHang()
// })

function showListKhachHang() {
  if(from.value === '') {
    const container = document.getElementsByClassName('customers-stats-list')[0]
    container.innerHTML = ''
    accounts.forEach(account => {
      let filterHoaDon = account.hoadon.filter(order => order.status === 'e')
      
      const accountID = document.createElement('div')
      const accountName = document.createElement('div')
      const quantity = document.createElement('div')
      const revenue = document.createElement('div')
      const check = document.createElement('div')
      accountID.innerHTML = `${account.id}`
      accountName.innerHTML = `${account.name}`
      quantity.innerHTML = `${filterHoaDon.length}`
      revenue.innerHTML = `${calculateCustomerRev(filterHoaDon).toLocaleString()}` + (calculateCustomerRev(filterHoaDon)=== 0 ? '' : "VND")
      check.innerHTML = `<button onclick="showHoaDonTK(${account.id})">Xem</button>`

      container.appendChild(accountID)
      container.appendChild(accountName)
      container.appendChild(quantity)
      container.appendChild(revenue)
      container.appendChild(check)
    })
    let mostRev = 0
    let leastRev = 0
    for(let i=1; i<accounts.length; i++) {
      if(calculateCustomerRev(accounts[mostRev].hoadon) < calculateCustomerRev(accounts[i].hoadon)) {
        mostRev = i
      }
      if(calculateCustomerRev(accounts[leastRev].hoadon) > calculateCustomerRev(accounts[i].hoadon)) {
        leastRev = i
      }
    }
    const ranks = document.querySelectorAll('.customers-stats > #ranking > div')
    ranks[0].innerHTML = "Doanh thu nhiều nhất: " + accounts[mostRev].name + ", " + calculateCustomerRev(accounts[mostRev].hoadon).toLocaleString() + 'VNĐ'
    ranks[1].innerHTML = "Doanh thu ít nhất: " + accounts[leastRev].name + ", " + calculateCustomerRev(accounts[leastRev].hoadon)
  }
  else {
    const date = new Date()
    let fromDate = from.value !== '' ? from.value : (date.getDay() + '-' + (parseInt(date.getMonth())+1) + '-' + date.getFullYear())
  
    // let toDate = to.value !== '' ? to.value : (date.getDay() + '/' + (parseInt(date.getMonth())+1) + '/' + date.getFullYear())
    const container = document.getElementsByClassName('customers-stats-list')[0]
    container.innerHTML = ''
    accounts.forEach(account => {
      let filterHoaDon = []
      for(let i=0; i<account.hoadon.length; i++) {
        if(account.hoadon[i].status === 'e') {
          let date1 = Date.parse(account.hoadon[i].orderTime.split('-')[0])
          let date2 = Date.parse(fromDate)

          if(date1 > date2) {
            filterHoaDon.push(account.hoadon[i])
          }
        }
      }
      const accountID = document.createElement('div')
      const accountName = document.createElement('div')
      const quantity = document.createElement('div')
      const revenue = document.createElement('div')
      const check = document.createElement('div')
      accountID.innerHTML = `${account.id}`
      accountName.innerHTML = `${account.name}`
      quantity.innerHTML = `${filterHoaDon.length}`
      revenue.innerHTML = `${calculateCustomerRev(filterHoaDon).toLocaleString()}` + (calculateCustomerRev(filterHoaDon)=== 0 ? '' : "VND")
      check.innerHTML = `<button onclick="showHoaDonTK(${account.id})">Xem</button>`

      container.appendChild(accountID)
      container.appendChild(accountName)
      container.appendChild(quantity)
      container.appendChild(revenue)
      container.appendChild(check)
    })
    let mostRev = 0
    let leastRev = 0
    for(let i=1; i<accounts.length; i++) {
      if(calculateCustomerRev(accounts[mostRev].hoadon) < calculateCustomerRev(accounts[i].hoadon)) {
        mostRev = i
      }
      if(calculateCustomerRev(accounts[leastRev].hoadon) > calculateCustomerRev(accounts[i].hoadon)) {
        leastRev = i
      }
    }
    const ranks = document.querySelectorAll('.customers-stats > #ranking > div')
    ranks[0].innerHTML = "Doanh thu nhiều nhất: " + accounts[mostRev].name + ", " + calculateCustomerRev(accounts[mostRev].hoadon).toLocaleString() + "VNĐ"
    ranks[1].innerHTML = "Doanh thu ít nhất: " + accounts[leastRev].name + ", " + calculateCustomerRev(accounts[leastRev].hoadon).toLocaleString() + "VNĐ"
  }
}
function showHoaDonTK(id) {
  document.getElementById('hoadonSP').style.transform = 'scale(1)'
  const list = document.querySelector('#hoadonSP>.container')
  list.innerHTML = ''
  document.querySelector('.bg#blur').style.display = 'block'
  document.body.style.overflow = 'hidden'

  let i = 0
  accounts[id].hoadon.forEach((order, index) => {
    if(order.status === "e") {
      let fromDate = from.value
      let date1 = Date.parse(order.orderTime.split('-')[0])
      let date2 = fromDate !== '' ? Date.parse(fromDate) : 0

      if(date1 > date2) {
        const orders = document.createElement('div')
        orders.classList.add('order')
        orders.innerHTML = `
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
              <div class="food_price" onclick="showCurrentCustomerOrder(${id}, ${index}, ${i})">
                  <span>Sản phẩm</span>
                  <span>Tổng số tiền: ${hoadonGetTotal(order.items).toLocaleString()} VNđ</span>
              </div>
              <div class="list-food">
              </div>
        `
        list.appendChild(orders)
        i++
      }
    }
  })
}
function closeHoaDonTK() {
  if(location.href.split('?')[1] === 'tkkh') {
    document.getElementById('hoadonSP').style.transform = 'scale(0)'
    document.querySelector('.bg#blur').style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}