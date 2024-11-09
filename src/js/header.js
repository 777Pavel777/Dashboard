const openModalBtn = document.querySelector('#open-menu');
const closeModalBtn = document.querySelector('#mobile__close-btn');
const modal = document.querySelector('#mobile__menu');
const menuLink = document.querySelectorAll('.modal-link-item');

openModalBtn.addEventListener('click', toggleMenu);
closeModalBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  modal.classList.toggle('is-open-menu');
}

function toggleContent() {
  const mobileMenu = document.querySelector('.aside__mobile');
  const desctopMenu = document.querySelector('.aside__nav');
  const userInfo = document.querySelector('.user');

  if (window.innerWidth < 768) {
    mobileMenu.classList.remove('visually-hidden');
    desctopMenu.classList.add('visually-hidden');
    userInfo.classList.add('visually-hidden');
  } else {
    desctopMenu.classList.remove('visually-hidden');
    userInfo.classList.remove('visually-hidden');
    mobileMenu.classList.add('visually-hidden');
  }
}

toggleContent();

window.addEventListener('resize', toggleContent);
