const search = document.querySelector(".navigation-bar > .search input")

function normalize(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/ + /g," ");
  str = str.trim();
  return str.toLowerCase();
}

function searchUp() {
  removeCurrentMenu()
  countMenuItems = 0;
  if (search.value == '') {
    loadMenu(foods, drinks, desserts)
    return false
  }
  var newFoods = foods.filter((food) => normalize(food.name).includes(normalize(search.value)))
  var newDrinks = drinks.filter((food) => normalize(food.name).includes(normalize(search.value)))
  var newDesserts = desserts.filter((food) => normalize(food.name).includes(normalize(search.value)))

  loadMenu(newFoods, newDrinks, newDesserts)
  search.value = ''
}
function removeCurrentMenu() {
  menuDisplay.innerHTML = `
    <div id="thucan">Thức Ăn</div>
    <div class="items">
    </div>
    <div id="douong">Nước Uống</div>
    <div class="items">
    </div>
    <div id="trangmieng">Tráng miệng</div>
    <div class="items">
    </div>
  `
}
search.addEventListener("keyup", function(e) {
  if(e.key === "Enter") {
    searchUp()
  }
})

function openFilterList(button) {
  const filterList = document.getElementById('filter-list')
  filterList.classList.toggle('show')
  button.classList.toggle('rotate')
}