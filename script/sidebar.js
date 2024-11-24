const sBar = document.getElementById('sidebar')

if (screen.width > 800) {
  function toggleSubmenu(button) {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate')
    if (sBar.classList.contains('close')) {
      sBar.classList.remove('close');
    }
  }

  function toggleSidebar() {
    sBar.classList.toggle('close');

    Array.from(sBar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    })
  }
}

function toMenu() {
  const active = document.getElementById("active")
  const menu = document.getElementsByClassName("dropdown-btn")

  active.id = ''
  menu[0].setAttribute('id', 'active')
}
function toMain() {
  const active = document.getElementById("active")
  const main = document.getElementsByClassName("trang-chu")

  active.id = ''
  main[0].setAttribute('id', 'active')
  window.scrollTo(0, 0)
}
function toIntroduction() {
  const active = document.getElementById("active")
  const main = document.getElementsByClassName("dropdown-btn")

  active.id = ''
  main[1].setAttribute('id', 'active')
}
function toSale() {
  const active = document.getElementById("active")
  const main = document.getElementsByClassName("khuyen-mai")

  active.id = ''
  main[0].setAttribute('id', 'active')
  window.scrollTo(0, 0)
}