const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');

const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
  navItems.forEach((item, idx) => {
    item.classList.replace(
      `slide-${direction1}-${idx + 1}`,
      `slide-${direction2}-${idx + 1}`
    );
  });
}

function toggleNav() {
  // toggle menu bars (open/close)
  menuBars.classList.toggle('change');

  // hide/show menu
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // animate in
    // to replace a class the class needs to be there already when DOM is parsed
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    navAnimation('out', 'in');
  } else {
    // animate out
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    navAnimation('in', 'out');
  }
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((item) => {
  item.addEventListener('click', toggleNav);
});
