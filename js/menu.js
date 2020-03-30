
  let hamburgerMenu  = document.querySelector('.hamburger-menu');
  let hamburgerMenuLink = document.querySelector('.hamburger-menu-link');
  let close = document.querySelector('.hamburger-menu__close');

  function toggleMenu(){
    hamburgerMenu.classList.add('hamburger-menu--active');
  }

  function menuClose(){
    hamburgerMenu.classList.remove('hamburger-menu--active');
  }

  hamburgerMenuLink.addEventListener('click' , toggleMenu);
  close.addEventListener('click', menuClose);

