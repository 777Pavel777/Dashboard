function toggleContent() {
  const mobileMenu = document.querySelector('.header__mobile');
  const desctopMenu = document.querySelector('.header__nav');
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
