let products;
let menu_form = document.getElementById('add-sp-form')
let menu = JSON.parse(localStorage.getItem('menu'))
const image_holder = document.getElementById('right-add')
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
  const food_text = menu_form["description"]
  let check = true
  var mon = {
    id: menu.length,
    name: food_name.value,
    price: food_price.value,
    type: food_type.value,
    image: food_image,
    group: food_group.label,
    description: food_text.value
  }
  if(mon.name === "") {
    food_name.previousSibling.previousSibling.style.transform = 'translateY(0)'
    food_name.previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      food_name.previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      food_name.previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if(mon.price === "") {
    food_price.previousSibling.previousSibling.style.transform = 'translateY(0)'
    food_price.previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      food_price.previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      food_price.previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if(mon.type === "") {
    food_type.previousSibling.previousSibling.style.transform = 'translateY(0)'
    food_type.previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      food_type.previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      food_type.previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if(mon.image == null) {
    food_input.previousSibling.previousSibling.style.transform = 'translateY(0)'
    food_input.previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      food_input.previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      food_input.previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
  }
  if(mon.description === "") {
    food_text.previousSibling.previousSibling.style.transform = 'translateY(0)'
    food_text.previousSibling.previousSibling.style.opacity = 1 
    window.setTimeout(function() {
      food_text.previousSibling.previousSibling.style.transform = 'translateY(-15px)'
      food_text.previousSibling.previousSibling.style.opacity = 0
    },2000)
    check = false
    check = false
  }
  for(let i=0; i<menu.length; i++) {
    if(mon.name == menu[i].name) {
      food_name.previousSibling.previousSibling.setAttribute('missing-input', 'Tên món bị trùng')
      food_name.previousSibling.previousSibling.style.transform = 'translateY(0)'
      food_name.previousSibling.previousSibling.style.opacity = 1 
      window.setTimeout(function() {
        food_name.previousSibling.previousSibling.setAttribute('missing-input', 'Hãy điền tên món')
        food_name.previousSibling.previousSibling.style.transform = 'translateY(-15px)'
        food_name.previousSibling.previousSibling.style.opacity = 0
      },2000)
      check = false
    }
  }

  if(check) {
    if(menu === null) {
      menu = []
      menu.push(mon)
      localStorage.setItem('menu', JSON.stringify(menu))
    }
    else {
      mon.id = menu.length
      menu.push(mon)
      localStorage.setItem('menu', JSON.stringify(menu))
    }
    exitAddMenu()
    location.reload();
  }
})


function openAddMenu() {
  const addMenu = document.getElementById('add_menu')
  const bg = document.getElementById('blur-bg')
  document.body.style.overflow = 'hidden'
  addMenu.style.transform = 'scale(1)'
  bg.style.display = 'block'
}

function exitAddMenu() {
  const addMenu = document.getElementById('add_menu')
  const bg = document.getElementById('blur-bg')
  document.body.style.overflow = 'auto'
  const input = menu_form.querySelectorAll('input:not([type="submit"])')
  input.forEach(inputElement => {
    inputElement.value = ""
  });
  menu_form['description'].value = ''
  menu_form['type'].value = ''
  image_holder.style.backgroundImage = ''
  image_holder.firstElementChild.style.display = "block"
  
  addMenu.style.transform = 'scale(0)'
  bg.style.display = 'none'
}