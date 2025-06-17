const navMenu = document.querySelector('.nav-menu');
const devNote = document.querySelector('.devNote');

document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-menu-show-btn')) {
    navMenu.classList.add('show');
    document.body.style.overflow = 'hidden';
    return;
  }
  if (e.target.closest('.nav-menu-hide-btn')) {
    navMenu.classList.remove('show');
    document.body.style.overflow = '';
    return;
  }

  if (e.target.closest('.devNote-btn')) {
    devNote.classList.add('show');
    document.body.style.overflow = 'hidden';
    return;
  }

  if(!e.target.closest('.devNote-content') && devNote.classList.contains('show')) {
    devNote.classList.remove('show');
    document.body.style.overflow = '';
  }
});
