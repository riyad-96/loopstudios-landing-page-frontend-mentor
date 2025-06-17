const navMenu = document.querySelector('.nav-menu');

document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-menu-show-btn')) {
    navMenu.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  if (e.target.closest('.nav-menu-hide-btn')) {
    navMenu.classList.remove('show');
    document.body.style.overflow = '';
  }
});
