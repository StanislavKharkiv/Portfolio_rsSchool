const state = {
  currentPage: ':-)',
}

const mainBlock = document.getElementById('main');
const menuBlock = document.getElementById('menu');
let documentWidth = document.documentElement.clientWidth;
createTextScreen();
menuAnimation(documentWidth, bgAnimation);
  // events
window.addEventListener('resize', function() {
  documentWidth = document.documentElement.clientWidth;
  menuAnimation(documentWidth);
})
menuBlock.addEventListener('click', function(e) {
  if (e.target.closest('.menu__item')) {
    hideMenu();
    if (e.target.closest('.btn-contacts')) addSectionContacts();
    if (e.target.closest('.btn-about')) addSectionAbout();
    if (e.target.closest('.btn-works')) addSectionWorks();
  }
  if (e.target.closest('.menu__btn')) {
    const child = mainBlock.querySelector('.page')
    mainBlock.removeChild(child)
    showMenu();
  }
});

anime({
  targets: '.grid__child',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 1000 },
    { value: 1, easing: 'easeInOutQuad', duration: 500 }
  ],
  delay: anime.stagger(100, { grid: [14, 5], from: 'first' }),
});

/* functions */

function createTextScreen() {
  const gridWrapper = document.getElementById('grid-wrapper');
  const grid = document.createElement('div');
  grid.className = 'grid';
  const gridChildrenAll = 70;
  for (let i = 0; i < gridChildrenAll; i++) {
    grid.innerHTML += '<div class="grid__child"><div>'
  }
  gridWrapper.appendChild(grid);
  gridWrapper.querySelector('.grid-text').textContent = state.currentPage;
}

function hideMenu() {
  menuAnimation(0, () => {btnMenuAnimation(1);});
}

function showMenu() {
  const btnMenuPositionX = '-140%';
  anime({
    targets: '.menu__item',
    translateX: documentWidth,
    direction: 'normal',
    delay: function (el, i, l) {
      return i * 200;
    },
    duration: 1300,
  });
  btnMenuAnimation(btnMenuPositionX);
}

function addSectionToDom(node) {
  const page = document.querySelector('.page');
  if (!page) {
    mainBlock.appendChild(node);
  } else {
    mainBlock.replaceChild(node, page);
  }
}
