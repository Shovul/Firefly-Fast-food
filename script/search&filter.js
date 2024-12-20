const search = document.querySelector(".navigation-bar > .search input")
let newFoods
let newDrinks
let newDesserts

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
  beingFilter = true
  currentPage = {
    food: 1,
    drink: 1,
    dessert: 1,
  };
  removeCurrentMenu()
  // countMenuItems = 0;
  if (search.value == '') {
    beingFilter = false
    loadMenuByPage("food", foods);
    loadMenuByPage("drink", drinks);
    loadMenuByPage("dessert", desserts);
    // loadMenu(foods, drinks, desserts)
    return false
  }
  newFoods = foods.filter((food) => normalize(food.name).includes(normalize(search.value)))
  newDrinks = drinks.filter((food) => normalize(food.name).includes(normalize(search.value)))
  newDesserts = desserts.filter((food) => normalize(food.name).includes(normalize(search.value)))


  loadMenuByPage("food", newFoods);
  loadMenuByPage("drink", newDrinks);
  loadMenuByPage("dessert", newDesserts);
  // loadMenu(newFoods, newDrinks, newDesserts)
  search.value = ''
}
function removeCurrentMenu() {
  menuDisplay.innerHTML = `
        <div id="thucan">Thức Ăn</div>
        <div class="items" id="food-items"></div>
        <div class="pagination" id="food-pagination">
          <button onclick="changePage('food', 'prev')">Trang trước</button>
          <span id="food-page-numbers"></span>
          <button onclick="changePage('food', 'next')">Trang sau</button>
        </div>
      
        <div id="douong">Nước Uống</div>
        <div class="items" id="drink-items"></div>
        <div class="pagination" id="drink-pagination">
          <button onclick="changePage('drink', 'prev')">Trang trước</button>
          <span id="drink-page-numbers"></span>
          <button onclick="changePage('drink', 'next')">Trang sau</button>
        </div>
      
        <div id="trangmieng">Tráng Miệng</div>
        <div class="items" id="dessert-items"></div>
        <div class="pagination" id="dessert-pagination">
          <button onclick="changePage('dessert', 'prev')">Trang trước</button>
          <span id="dessert-page-numbers"></span>
          <button onclick="changePage('dessert', 'next')">Trang sau</button>
        </div>
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

const filterList = document.querySelectorAll('#filter-list > div > li > button')
let keyWord = []

for(let i=3; i<filterList.length-1; i++) {
  filterList[i].addEventListener('click', function() {
    beingFilter = true
    filterList[i].classList.toggle('show')
    const ranges = document.querySelectorAll('#filter-list > div > li > #price-range')
    ranges[0].nextElementSibling.value = ''
    ranges[1].nextElementSibling.value = ''

    if(keyWord.includes(filterList[i].textContent)) {
      keyWord.splice(keyWord.indexOf(filterList[i].textContent),1)
      if(keyWord.length === 0) {
        initializeMenu()
        return false
      }
    }
    else keyWord.push(filterList[i].textContent)

    newFoods = foods.filter((food) => {
      for(let i=0; i<keyWord.length; i++) {
        if(food.type.includes(keyWord[i])) {
          return true
        }
      }
    })
    newDrinks = drinks.filter((drink) => {
      for(let i=0; i<keyWord.length; i++) {
        if(drink.type.includes(keyWord[i])) {
          return true
        }      
      }
    })
    newDesserts = desserts.filter((dessert) => {
      for(let i=0; i<keyWord.length; i++) {
        if(dessert.type.includes(keyWord[i])) {
          return true
        }      
      }
    })

    currentPage = {
      food: 1,
      drink: 1,
      dessert: 1,
    };
    removeCurrentMenu()

    // const paging = document.querySelectorAll('.content > .pagination > button')
    // paging[0].setAttribute('onclick', "changePage('newFood', 'prev')")
    // paging[1]
    // paging[2]
    // paging[3]
    // paging[4]
    // paging[5]
    
    loadMenuByPage("food", newFoods);
    loadMenuByPage("drink", newDrinks);
    loadMenuByPage("dessert", newDesserts);
  })
}
filterList[0].addEventListener('click', function() {
  getMenu()
  filterList.forEach(button => button.classList.remove('show'))
  beingFilter = false
  keyWord = [];
  const ranges = document.querySelectorAll('#filter-list > div > li > #price-range')
  ranges[0].nextElementSibling.value = ''
  ranges[1].nextElementSibling.value = ''
  initializeMenu();
})
filterList[1].addEventListener('click', function() {
    if(beingFilter) {
      var sortFood = newFoods.sort((a, b) => {return a.price - b.price})
      var sortDrink = newDrinks.sort((a, b) => {return a.price - b.price})
      var sortDessert = newDesserts.sort((a, b) => {return a.price - b.price})
      
      loadMenuByPage("food", sortFood);
      loadMenuByPage("drink", sortDrink);
      loadMenuByPage("dessert", sortDessert);
    }
    else {
      var sortFood = foods.sort((a, b) => {return a.price - b.price})
      var sortDrink = drinks.sort((a, b) => {return a.price - b.price})
      var sortDessert = desserts.sort((a, b) => {return a.price - b.price})
      
      loadMenuByPage("food", sortFood);
      loadMenuByPage("drink", sortDrink);
      loadMenuByPage("dessert", sortDessert);
    }
    // beingFilter = !beingFilter
})
filterList[2].addEventListener('click', function() {
  if(beingFilter) {
    var sortFood = (newFoods.sort((a, b) => {return a.price - b.price})).reverse()
    var sortDrink = (newDrinks.sort((a, b) => {return a.price - b.price})).reverse()
    var sortDessert = (newDesserts.sort((a, b) => {return a.price - b.price})).reverse()
    
    loadMenuByPage("food", sortFood);
    loadMenuByPage("drink", sortDrink);
    loadMenuByPage("dessert", sortDessert);
  }
  else {
    var sortFood = (foods.sort((a, b) => {return a.price - b.price})).reverse()
    var sortDrink = (drinks.sort((a, b) => {return a.price - b.price})).reverse()
    var sortDessert = (desserts.sort((a, b) => {return a.price - b.price})).reverse()
    
    loadMenuByPage("food", sortFood);
    loadMenuByPage("drink", sortDrink);
    loadMenuByPage("dessert", sortDessert);
  }
  // beingFilter = !beingFilter
})
filterList[filterList.length-1].addEventListener('click', function() {
  beingFilter = true
  const ranges = document.querySelectorAll('#filter-list > div > li > #price-range')
  let from = parseInt(ranges[0].nextElementSibling.value)
  let to = parseInt(ranges[1].nextElementSibling.value)
  from = isNaN(from) ? 0 : from
  to = isNaN(to) ? Number.MAX_SAFE_INTEGER : to

  if(keyWord.length > 0) {
    newFoods = foods.filter((food) => {
      for(let i=0; i<keyWord.length; i++) {
        if(food.type.includes(keyWord[i]) && (food.price >= from && food.price <= to)) {
          return true
        }
      }
    })
    currentPage = {
      food: 1,
      drink: 1,
      dessert: 1,
    };
    newDrinks = drinks.filter((drink) => {
      for(let i=0; i<keyWord.length; i++) {
        if(drink.type.includes(keyWord[i]) && drink.price >= from && drink.price <= to) {
          return true
        }      
      }
    })
    newDesserts = desserts.filter((dessert) => {
      for(let i=0; i<keyWord.length; i++) {
        if(dessert.type.includes(keyWord[i]) && dessert.price >= from && dessert.price <= to) {
          return true
        }      
      }
    })
  }
  else {
    newFoods = foods.filter((food) => food.price >= from && food.price <= to)
    newDrinks = drinks.filter((drink) => drink.price >= from && drink.price <= to)
    newDesserts = desserts.filter((dessert) => dessert.price >= from && dessert.price <= to)
  }

  

  removeCurrentMenu()
  
  loadMenuByPage("food", newFoods);
  loadMenuByPage("drink", newDrinks);
  loadMenuByPage("dessert", newDesserts);
})

window.addEventListener('click', (e) => {
  if(document.querySelector('.bg#blur').contains(e.target)) {
    closeAccountbar() 
    exitSignin()
    exitSignup()
    closeSP()
  }
})  
