const openModalBtn = document.querySelector('#open-menu');
const closeModalBtn = document.querySelector('#mobile__close-btn');
const modal = document.querySelector('#mobile__menu');
const menuLink = document.querySelectorAll('.modal-link-item');

openModalBtn.addEventListener('click', toggleMenu);
closeModalBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  modal.classList.toggle('is-open-menu');
  body.classList.toggle('no-scroll');
}
