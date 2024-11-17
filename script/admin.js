function showQLMenu() {
  let menu = document.querySelector(".menu")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  menu.classList.add("active")
  showMenuList();
}
function showMenuList() {
  var menu_list = document.querySelector(".menu-list")
  let i = 0;
  if (menu != null) {
    menu.forEach(items => {
      const listName = document.createElement('div')
      const listPrice = document.createElement('div')
      const listPicture = document.createElement('div')
      const listType = document.createElement('div')
      const listDelete = document.createElement('div')
      const listEdit = document.createElement('div')

      listName.innerHTML = items.name
      listPrice.innerHTML = items.price
      listPicture.style.backgroundImage = `url(${items.image})`
      listType.innerHTML = items.type
      listDelete.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      `
      listDelete.setAttribute('class', 'menu_edit')
      listDelete.setAttribute('id', i)
      listDelete.setAttribute('onclick', 'deleteFood(this)')
      
      listEdit.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
      `
      listEdit.setAttribute('class', 'menu_edit')
      listEdit.setAttribute('id', i)
      listEdit.setAttribute('onclick', 'editFood(this)')

      menu_list.appendChild(listName)
      menu_list.appendChild(listPrice)
      menu_list.appendChild(listType)
      menu_list.appendChild(listPicture)
      menu_list.appendChild(listDelete)
      menu_list.appendChild(listEdit)
      i++;
    });
  }
}


function showAccountList() {
  var accList = document.querySelector(".account-list")
  let i = 0;
  accounts.forEach(account => {
    const listName = document.createElement('div')
    const listEmail = document.createElement('div')
    const listPass = document.createElement('div')
    const listPhone = document.createElement('div')
    const listGender = document.createElement('div')
    const listDelete = document.createElement('div')
    const listEdit = document.createElement('div')

    listName.innerHTML = account.name
    listEmail.innerHTML = account.email
    listPass.innerHTML = account.pass
    listPhone.innerHTML = account.phone
    listGender.innerHTML = account.gender
    listDelete.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      ` 
    listDelete.setAttribute('class', 'list_edit')
    listDelete.setAttribute('id', i)
    listDelete.setAttribute('onclick', 'deleteAccount(this)')
    
    listEdit.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
    `
    listEdit.setAttribute('class', 'list_edit')
    listEdit.setAttribute('id', i)
    listEdit.setAttribute('onclick', 'editAccount(this)')

    accList.appendChild(listName)
    accList.appendChild(listEmail)
    accList.appendChild(listPass)
    accList.appendChild(listPhone)
    accList.appendChild(listGender)
    accList.appendChild(listDelete)
    accList.appendChild(listEdit)
    i++;
  });
} 
function showTaikhoan() {
  let taikhoan = document.querySelector(".tai_khoan")
  let active = document.querySelector(".active")

  active.classList.remove("active")
  taikhoan.classList.add("active")

  showAccountList();
}
function deleteAccount(items) {
  accounts.splice(items.id, 1);
  localStorage.setItem('accounts', JSON.stringify(accounts))
  if (remember == items.id) {
    localStorage.removeItem('rememberAcc')
  }
  location.reload()
}
function deleteFood(items) {
  menu.splice(items.id, 1);
  localStorage.setItem('menu', JSON.stringify(menu))
  if (remember == items.id) {
    localStorage.removeItem('rememberAcc')
  }
  location.reload()
}