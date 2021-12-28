(() => {
  const refs = {
    openMenuBtn: document.querySelector('.navigation-button'),
    closeMenuBtn: document.querySelector('.mob-menu_button'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();