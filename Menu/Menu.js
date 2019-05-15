const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open');

  if (menu.style.width === '350px') {
    TweenMax.to(menu, 0.5, { width: 0, ease: Power1.easeOut });
  } else {
    TweenMax.to(menu, 0.5, { width: 350, ease: Power1.easeOut });
  }
};
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
