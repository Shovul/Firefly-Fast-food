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