const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
menu.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
  nav.classList.toggle('nav-deactive')
  menu.classList.toggle('menu-open')
  menu.classList.toggle('menu-close')
})