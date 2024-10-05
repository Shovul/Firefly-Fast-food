const sBar = document.getElementById('sidebar')

function toggleSubmenu(button) {
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate')
  if (sBar.classList.contains('close')) {
    sBar.classList.toggle('close');
  }
}

function toggleSidebar() {
  sBar.classList.toggle('close');

  Array.from(sBar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.toggle('show');
    ul.previousElementSibling.classList.toggle('rotate');
  })
}