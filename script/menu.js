let menu = JSON.parse(localStorage.getItem('menu'))

var foods = menu.filter((food) => food.group == "Thức ăn")
var drinks = menu.filter((food) => food.group == "Đồ uống")
var desserts = menu.filter((food) => food.group == "Tráng miệng")
const menuDisplay = document.querySelector(".content")

loadMenu(foods, drinks, desserts)
// var content = document.createElement('div')
// content.classList = 'items'
// menuDisplay.appendChild(content)
// let count = 0;   
function loadMenu(foodList, drinkList, dessertList) {
  const category = menuDisplay.getElementsByClassName("items")
  function addItems(item) {
    return `
          <div><img class="hinhanh" src ="${item.image}"></div> 
          <div class="container">
          <div class="container-items"> <h3>${item.name}</h3></div>
      </div>
      <div class="container">
          <div class="container-items"> <b>${item.price}</b> </div>
          <div class="container-items"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></div>
          <div class="container-items" onclick="mochitiet()"><b>Chi tiết</b></div>
    `
  }
  foodList.forEach(food => {
    // count++;

    var item = document.createElement('div')
    item.classList = 'items-content'
    item.innerHTML = addItems(food)
    category[0].appendChild(item);
  });

  // while(count%3 != 0) {
  //   menuDisplay.firstElementChild.appendChild(document.createElement('div'))
  //   count++
  // }
  // count = 0;
  // menuDisplay.appendChild(content)
  drinkList.forEach(drink => {
    // count++
    var item = document.createElement('div')
    item.classList = 'items-content'
    item.innerHTML = addItems(drink)
    category[1].appendChild(item);
  });
  // while(count%3 != 0) {
  //   menuDisplay.firstElementChild.appendChild(document.createElement('div'))
  //   count++
  // }
  dessertList.forEach(dessert => {
    var item = document.createElement('div')
    item.classList = 'items-content'
    item.innerHTML = addItems(dessert)
    category[2].appendChild(item);
  });
}