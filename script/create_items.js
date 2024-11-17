let products;
let menu_form = document.getElementById('sp-form')
let menu = JSON.parse(localStorage.getItem('menu'))
const image_holder = document.getElementById('right')
const food_input = menu_form["image"]
let food_image;
food_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    food_image = reader.result;
    image_holder.style.backgroundImage = `url(${food_image})`
    
    image_holder.firstElementChild.style.display = 'none';
  })
  reader.readAsDataURL(this.files[0])
})

menu_form.addEventListener('submit', function(e) {
  e.preventDefault()
  const food_name = menu_form["name"]
  const food_price = menu_form["price"]
  const food_type = menu_form["type"]
  const food_group = food_type.querySelector('option:checked').parentElement
  
  var mon = {
    name: food_name.value,
    price: food_price.value,
    type: food_type.value,
    image: food_image,
    group: food_group.label
  }
  console.log(mon)
  if(menu == null) {
    menu = []
    menu.push(mon)
    localStorage.setItem('menu', JSON.stringify(menu))

  }
  else {
    menu.push(mon)
    localStorage.setItem('menu', JSON.stringify(menu))

  }
  exitAddMenu()
  location.reload();
})


function openAddMenu() {
  const addMenu = document.getElementById('add_menu')
  const bg = document.getElementById('blur-bg')

  addMenu.style.display = 'block'
  bg.style.display = 'block'
}

function exitAddMenu() {
  const addMenu = document.getElementById('add_menu')
  const bg = document.getElementById('blur-bg')
  
  addMenu.style.display = 'none'
  bg.style.display = 'none'
}